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

  const courseIcons = {
    cybersecurity: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    devops: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 19V5h12v14H6Z"/><path d="m9 9 2 2-2 2m4 0h2"/><path d="M3 7h3M18 17h3"/></svg>',
    cloud: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10Z"/></svg>',
    docker: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="9" y="14" width="6" height="6" rx="1"/><path d="M12 10v4M10 17h4"/></svg>',
    web: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="8 9 4 12 8 15"/><polyline points="16 9 20 12 16 15"/><line x1="14" y1="5" x2="10" y2="19"/></svg>',
    programming: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 9 4 12l4 3M16 9l4 3-4 3M14 5l-4 14"/></svg>',
    datascience: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 19V5h16v14H4Z"/><path d="M8 15v-3M12 15V8M16 15v-5"/></svg>',
    networking: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="6" rx="2"/><rect x="3" y="15" width="18" height="6" rx="2"/><path d="M7 6h.01M7 18h.01M11 6h6M11 18h6"/></svg>'
  };

  const courses = [
    ['cybersecurity', 'CEH v12 Master Program', '6 months', 'Live lab', 'Cyber', 'Ethical hacking practice with guided lab scenarios.', 'courses/cybersecurity/ceh-v12-master-program.html'],
    ['cybersecurity', 'SOC Analyst (L1/L2)', '4 months', 'SIEM lab', 'Cyber', 'Incident response, Splunk and threat-hunting practice.', 'courses/cybersecurity/soc-analyst-l1-l2.html'],
    ['cybersecurity', 'Web Application VPT', '3 months', 'OWASP lab', 'Cyber', 'Practical web security assessment and testing workflows.', 'courses/cybersecurity/web-application-vpt.html'],
    ['cybersecurity', 'CompTIA Security+', '3 months', 'Security lab', 'Cyber', 'Foundational enterprise security, controls and risk skills.', 'courses/cybersecurity/comptia-security-plus.html'],
    ['devops', 'AWS DevOps Engineering', '5 months', 'AWS lab', 'DevOps', 'Cloud delivery pipelines, automation and operations.', 'courses/devops/aws-devops-engineering.html'],
    ['devops', 'Certified DevOps Engineer', '5 months', 'CI/CD lab', 'DevOps', 'Delivery automation, containers and infrastructure practice.', 'courses/devops/certified-devops-engineer.html'],
    ['devops', 'Master Azure DevOps', '4 months', 'Azure lab', 'DevOps', 'Azure Repos, Pipelines and release workflows.', 'courses/devops/master-azure-devops.html'],
    ['cloud', 'Microsoft Azure Administrator', '3 months', 'Azure lab', 'Cloud', 'Azure compute, identity, networking and storage.', 'courses/cloud/microsoft-azure-administrator.html'],
    ['cloud', 'Azure Infrastructure Solutions', '4 months', 'Cloud lab', 'Cloud', 'Architecture, governance and dependable Azure workloads.', 'courses/cloud/azure-infrastructure-solutions.html'],
    ['cloud', 'Terraform Associate', '8 weeks', 'IaC lab', 'Cloud', 'Infrastructure as code and reusable cloud automation.', 'courses/cloud/terraform-associate.html'],
    ['docker', 'Docker Containers Training', '8 weeks', 'Container lab', 'Docker', 'Images, registries, Compose and container workflows.', 'courses/docker-kubernetes/docker-containers-training.html'],
    ['docker', 'Kubernetes Administration', '10 weeks', 'Cluster lab', 'K8s', 'Clusters, deployments, services and observability.', 'courses/docker-kubernetes/kubernetes-administration.html'],
    ['web', 'MERN Stack Developer', '5 months', 'Project studio', 'Web', 'MongoDB, Express, React and Node.js development.', 'courses/web-development/mern-stack-developer.html'],
    ['web', 'Python Django Web Dev', '4 months', 'Project studio', 'Web', 'Backend engineering, APIs and Django applications.', 'courses/web-development/django-full-stack.html'],
    ['programming', 'Python Programming Certificate', '10 weeks', 'Coding lab', 'Code', 'Applied Python fundamentals and programming practice.', 'courses/programming/python-programming-certificate.html'],
    ['programming', 'Java Programming', '10 weeks', 'Coding lab', 'Code', 'Object-oriented programming and backend foundations.', 'courses/programming/java-programming.html'],
    ['datascience', 'Data Analytics & BI', '3 months', 'Analytics lab', 'Data', 'Python, SQL, Power BI and Tableau workflows.', 'courses/data-science/data-analytics-bi.html'],
    ['datascience', 'Machine Learning & AI Master', '6 months', 'ML lab', 'AI', 'Machine learning and deep-learning practice on data.', 'courses/data-science/machine-learning-ai-master.html'],
    ['networking', 'RHCSA & RHCE RedHat Linux', '3 months', 'Linux lab', 'Linux', 'Enterprise Linux administration and certification prep.', 'courses/networking/rhcsa-rhce-redhat-linux.html'],
    ['networking', 'Cisco CCNA (200-301)', '3 months', 'Network lab', 'Network', 'Routing, switching and enterprise networking practice.', 'courses/networking/cisco-ccna-200-301.html']
  ];

  grid.innerHTML = '';
  courses.forEach(([category, title, duration, lab, label, description, href]) => {
    const card = document.createElement('article');
    card.className = 'course-card course-card-expanded';
    card.dataset.category = category;
    card.dataset.title = title;
    card.innerHTML = `<div class="course-banner"><span class="course-tag-badge">${label}</span><div class="course-banner-icon">${courseIcons[category]}</div><h3 class="course-banner-title">${title}</h3></div><div class="course-body"><div class="course-meta"><span class="course-meta-item">${duration}</span><span class="course-meta-item">${lab}</span></div><p class="course-card-summary">${description}</p><a href="${href}" class="course-details-link">View program details <span>&rsaquo;</span></a></div>`;
    grid.appendChild(card);
  });
}

/* Sidebar Search & Domain Category Filter for Industry-Driven Courses */
function initCoursesSidebarFilter() {
  const searchInput = document.getElementById('course-search-input');
  const domainSelect = document.getElementById('course-domain-select');
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
      if (domainSelect) domainSelect.value = activeCategory;

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

  if (domainSelect) {
    domainSelect.addEventListener('change', event => {
      activeCategory = event.target.value;
      sidebarCategoryBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-filter') === activeCategory));
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
