/* SecureHub Main Page Interactive JavaScript Logic */
document.addEventListener('DOMContentLoaded', () => {
  initExpandedCourseCatalog();
  initCoursesSidebarFilter();
  initFaqAccordion();
  initCounterAnimation();
  initInquiryForm();
  initTopChoiceCarousel();
});

/* Additional catalogue paths for the expanded course directory */
function initExpandedCourseCatalog() {
  const grid = document.querySelector('.courses-grid');
  if (!grid) return;

  const courses = [
    ['cybersecurity', 'Advanced Penetration Testing', '6 Months', 'VAPT Lab', 'Security', 'Web, network and cloud penetration testing with guided practice.'],
    ['devops', 'Certified DevOps Engineer', '5 Months', 'CI/CD Lab', 'DevOps', 'Build delivery pipelines with Git, Jenkins, Ansible and Terraform.'],
    ['cloud', 'Microsoft Azure Administrator', '3 Months', 'Azure Lab', 'Cloud', 'Manage Azure compute, identity, networking and storage.'],
    ['cloud', 'Terraform Infrastructure as Code', '8 Weeks', 'IaC Lab', 'Cloud', 'Provision consistent cloud infrastructure with Terraform.'],
    ['docker', 'Kubernetes Administration', '10 Weeks', 'Cluster Lab', 'K8s', 'Deploy, scale and observe containerised workloads in Kubernetes.'],
    ['web', 'Frontend Development with React', '4 Months', 'Project Studio', 'Web', 'Create fast, accessible interfaces and production-ready applications.'],
    ['programming', 'Python Programming Certificate', '10 Weeks', 'Coding Lab', 'Python', 'Build strong Python fundamentals through guided applications.'],
    ['graphic', 'Graphic Design Essentials', '4 Months', 'Creative Studio', 'Design', 'Learn visual hierarchy, layout and practical Adobe workflows.'],
    ['design', 'UI/UX Design and Figma', '4 Months', 'Design Studio', 'UI/UX', 'Research, prototype and test thoughtful digital products.'],
    ['datascience', 'Data Science and GenAI', '6 Months', 'ML Lab', 'AI', 'Use Python, machine learning and GenAI workflows on real data.'],
    ['dsa', 'Data Structures and Algorithms', '12 Weeks', 'Problem Lab', 'DSA', 'Practice problem solving for technical interviews and software roles.'],
    ['salesforce', 'Salesforce Administrator', '3 Months', 'Salesforce Lab', 'CRM', 'Configure data, security and automation in Salesforce.'],
    ['redhat', 'Linux System Administration', '12 Weeks', 'Linux Lab', 'Linux', 'Build hands-on administration skills for enterprise Linux environments.'],
    ['aws', 'AWS DevOps Engineering', '5 Months', 'AWS Lab', 'AWS', 'Automate resilient AWS delivery pipelines and cloud operations.'],
    ['analytics', 'Data Analytics and Power BI', '3 Months', 'Analytics Lab', 'Data', 'Turn business data into dashboards and clear decisions.'],
    ['softskills', 'Communication for Technology Teams', '6 Weeks', 'Live Practice', 'Career', 'Build confident communication for interviews, teams and client work.'],
    ['marketing', 'Digital Marketing Professional Program', '4 Months', 'Campaign Lab', 'Growth', 'Plan, run and measure SEO, social and paid digital campaigns.']
  ];

  courses.forEach(([category, title, duration, lab, label, description]) => {
    const card = document.createElement('article');
    card.className = 'course-card course-card-expanded';
    card.dataset.category = category;
    card.dataset.title = title;
    card.innerHTML = `<div class="course-banner"><span class="course-tag-badge">${label}</span><div class="course-banner-icon course-banner-code">${label.slice(0, 2)}</div><h3 class="course-banner-title">${title}</h3></div><div class="course-body"><div class="course-meta"><span class="course-meta-item">${duration}</span><span class="course-meta-item">${lab}</span></div><p class="course-card-summary">${description}</p><a href="#inquiry-form" class="course-details-link">View program details <span>&rsaquo;</span></a></div>`;
    grid.appendChild(card);
  });
}

/* Sidebar Search & Domain Category Filter for Industry-Driven Courses */
function initCoursesSidebarFilter() {
  const searchInput = document.getElementById('course-search-input');
  const sidebarCategoryBtns = document.querySelectorAll('.sidebar-domain-btn');
  const courseCards = document.querySelectorAll('.courses-grid .course-card');

  let activeCategory = 'all';
  let searchQuery = '';

  function filterCards() {
    courseCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardTitle = card.getAttribute('data-title') ? card.getAttribute('data-title').toLowerCase() : card.innerText.toLowerCase();

      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesSearch = searchQuery === '' || cardTitle.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });
  }

  // Sidebar Category Buttons Click Event
  sidebarCategoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-filter');

      sidebarCategoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      filterCards();
    });
  });

  // Search Bar Real-Time Typing Event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterCards();
    });
  }
}

/* Top Choice Programs Manual Carousel Slider */
function initTopChoiceCarousel() {
  const track = document.getElementById('topchoice-track');
  const slides = document.querySelectorAll('.topchoice-slide');
  const prevBtn = document.getElementById('topchoice-prev');
  const nextBtn = document.getElementById('topchoice-next');
  const dots = document.querySelectorAll('.carousel-dots .dot');

  if (!track || slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateCarousel(index) {
    currentSlide = (index + totalSlides) % totalSlides;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateCarousel(currentSlide + 1));
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateCarousel(currentSlide - 1));
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'));
      updateCarousel(slideIndex);
    });
  });
}

/* Native Accordion FAQ (Click to Toggle Answer Directly Inline) */
function initFaqAccordion() {
  const accordionHeaders = document.querySelectorAll('.faq-accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parentItem = header.closest('.faq-accordion-item');
      if (!parentItem) return;

      const isAlreadyActive = parentItem.classList.contains('active');

      // Close all accordion items for clean accordion UX
      document.querySelectorAll('.faq-accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      // If it wasn't active before, open it now
      if (!isAlreadyActive) {
        parentItem.classList.add('active');
      }
    });
  });
}

/* Animated Number Counters */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-count');
        const suffix = counter.getAttribute('data-suffix') || '';
        let count = 0;
        const speed = target / 50;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            counter.innerText = Math.ceil(count).toLocaleString() + suffix;
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target.toLocaleString() + suffix;
          }
        };

        updateCount();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/* Lead Inquiry Form Submission */
function initInquiryForm() {
  const form = document.getElementById('sh-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const course = document.getElementById('form-course').value;

    if (!name || !phone || !course) {
      alert('Please fill out all required fields.');
      return;
    }

    alert(`🎉 Thank you, ${name}! Your inquiry for "${course}" has been submitted successfully. Our senior career counselor will call you back at ${phone} shortly.`);
    form.reset();
  });
}
