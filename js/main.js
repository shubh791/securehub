/* SecureHub Main Page Interactive JavaScript Logic */
document.addEventListener('DOMContentLoaded', () => {
  initExpandedCourseCatalog();
  initCoursesSidebarFilter();
  initFaqAccordion();
  initCounterAnimation();
  initInquiryForm();
  initTopChoiceCourseImages();
  initTopChoiceCarousel();
});

/* Additional catalogue paths for the expanded course directory */
function initExpandedCourseCatalog() {
  const grid = document.querySelector('.courses-grid');
  if (!grid) return;

  const courseImages = {
    cybersecurity: 'assets/images/courses/cybersecurity-learning-card.png',
    devops: 'assets/images/courses/devops-learning-card.png',
    cloud: 'assets/images/courses/cloud-learning-card.png',
    docker: 'assets/images/courses/docker-learning-card.png',
    web: 'assets/images/courses/web-learning-card.png',
    programming: 'assets/images/courses/programming-learning-card.png',
    datascience: 'assets/images/courses/datascience-learning-card.png',
    networking: 'assets/images/courses/networking-learning-card.png'
  };

  const courses = [
    ['cybersecurity', 'CEH v12 Master Program', '6 months', 'Live lab', 'Cyber', 'Ethical hacking practice with guided lab scenarios.', 'courses/cybersecurity/ceh-v12-master-program.html', 'assets/images/courses/cybersecurity/cehv12.png'],
    ['cybersecurity', 'SOC Analyst (L1/L2)', '4 months', 'SIEM lab', 'Cyber', 'Incident response, Splunk and threat-hunting practice.', 'courses/cybersecurity/soc-analyst-l1-l2.html', 'assets/images/courses/cybersecurity/socanalyst.png'],
    ['cybersecurity', 'Web Application VPT', '3 months', 'OWASP lab', 'Cyber', 'Practical web security assessment and testing workflows.', 'courses/cybersecurity/web-application-vpt.html', 'assets/images/courses/cybersecurity/webapplicationvpt.png'],
    ['cybersecurity', 'CompTIA Security+', '3 months', 'Security lab', 'Cyber', 'Foundational enterprise security, controls and risk skills.', 'courses/cybersecurity/comptia-security-plus.html', 'assets/images/courses/cybersecurity/compatia.png'],
    ['devops', 'AWS DevOps Engineering', '5 months', 'AWS lab', 'DevOps', 'Cloud delivery pipelines, automation and operations.', 'courses/devops/aws-devops-engineering.html', 'assets/images/courses/devops/awsdevops.png'],
    ['devops', 'Certified DevOps Engineer', '5 months', 'CI/CD lab', 'DevOps', 'Delivery automation, containers and infrastructure practice.', 'courses/devops/certified-devops-engineer.html', 'assets/images/courses/devops/certified%20devops.png'],
    ['devops', 'Master Azure DevOps', '4 months', 'Azure lab', 'DevOps', 'Azure Repos, Pipelines and release workflows.', 'courses/devops/master-azure-devops.html', 'assets/images/courses/devops/masterdevops.png'],
    ['cloud', 'Microsoft Azure Administrator', '3 months', 'Azure lab', 'Cloud', 'Azure compute, identity, networking and storage.', 'courses/cloud/microsoft-azure-administrator.html', 'assets/images/courses/cloud/azureadministration.png'],
    ['cloud', 'Azure Infrastructure Solutions', '4 months', 'Cloud lab', 'Cloud', 'Architecture, governance and dependable Azure workloads.', 'courses/cloud/azure-infrastructure-solutions.html', 'assets/images/courses/cloud/azureinfrastructure.png'],
    ['cloud', 'Terraform Associate', '8 weeks', 'IaC lab', 'Cloud', 'Infrastructure as code and reusable cloud automation.', 'courses/cloud/terraform-associate.html', 'assets/images/courses/cloud/terraformassociate.png'],
    ['docker', 'Docker Containers Training', '8 weeks', 'Container lab', 'Docker', 'Images, registries, Compose and container workflows.', 'courses/docker-kubernetes/docker-containers-training.html', 'assets/images/courses/docker-kubernetes/dockercontainer.png'],
    ['docker', 'Kubernetes Administration', '10 weeks', 'Cluster lab', 'K8s', 'Clusters, deployments, services and observability.', 'courses/docker-kubernetes/kubernetes-administration.html', 'assets/images/courses/docker-kubernetes/kubernetes.png'],
    ['web', 'MERN Stack Developer', '5 months', 'Project studio', 'Web', 'MongoDB, Express, React and Node.js development.', 'courses/web-development/mern-stack-developer.html', 'assets/images/courses/web-development/mernstack%20developer.png'],
    ['web', 'Python Django Web Dev', '4 months', 'Project studio', 'Web', 'Backend engineering, APIs and Django applications.', 'courses/web-development/django-full-stack.html', 'assets/images/courses/web-development/pythondjango.png'],
    ['programming', 'Python Programming Certificate', '10 weeks', 'Coding lab', 'Code', 'Applied Python fundamentals and programming practice.', 'courses/programming/python-programming-certificate.html', 'assets/images/courses/programming/python%20programming.png'],
    ['programming', 'Java Programming', '10 weeks', 'Coding lab', 'Code', 'Object-oriented programming and backend foundations.', 'courses/programming/java-programming.html', 'assets/images/courses/programming/javaprogramming.png'],
    ['datascience', 'Data Analytics & BI', '3 months', 'Analytics lab', 'Data', 'Python, SQL, Power BI and Tableau workflows.', 'courses/data-science/data-analytics-bi.html', 'assets/images/courses/data-science/dataanalyticsandbi.png'],
    ['datascience', 'Machine Learning & AI Master', '6 months', 'ML lab', 'AI', 'Machine learning and deep-learning practice on data.', 'courses/data-science/machine-learning-ai-master.html', 'assets/images/courses/data-science/machine%20learning%20and%20ia.png'],
    ['networking', 'RHCSA & RHCE RedHat Linux', '3 months', 'Linux lab', 'Linux', 'Enterprise Linux administration and certification prep.', 'courses/networking/rhcsa-rhce-redhat-linux.html', 'assets/images/courses/networking/redhatlinux.png'],
    ['networking', 'Cisco CCNA (200-301)', '3 months', 'Network lab', 'Network', 'Routing, switching and enterprise networking practice.', 'courses/networking/cisco-ccna-200-301.html', 'assets/images/courses/networking/cisco.png']
  ];

  grid.innerHTML = '';
  courses.forEach(([category, title, duration, lab, _label, description, href, coverImage]) => {
    const card = document.createElement('article');
    card.className = `course-card course-card-expanded${coverImage ? ' course-card--cover-layout' : ''}`;
    card.dataset.category = category;
    card.dataset.title = title;
    const banner = coverImage
      ? `<div class="course-banner"><div class="course-banner-media"><img src="${coverImage}" alt="Cybersecurity training lab illustration" loading="lazy" decoding="async"></div></div>`
      : `<div class="course-banner"><div class="course-banner-media"><img src="${courseImages[category]}" alt="" loading="lazy" decoding="async"></div></div>`;
    const contentTitle = `<h3 class="course-card-content-title">${title}</h3>`;
    card.innerHTML = `${banner}<div class="course-body">${contentTitle}<div class="course-meta"><span class="course-meta-item"><span class="course-meta-label">Duration</span><strong>${duration}</strong></span><span class="course-meta-item"><span class="course-meta-label">Learning format</span><strong>${lab}</strong></span></div><p class="course-card-summary">${description}</p><a href="${href}" class="course-details-link">View program details <span>&rsaquo;</span></a></div>`;
    grid.appendChild(card);
  });
}

function initTopChoiceCourseImages() {
  document.querySelectorAll('.topchoice-illustration-box[data-course-image]').forEach(box => {
    const source = box.dataset.courseImage;
    const illustration = box.querySelector('.topchoice-vector-graphic');
    if (!source || !illustration) return;

    const image = document.createElement('img');
    image.className = 'topchoice-course-image';
    image.src = source;
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    illustration.replaceWith(image);
    const caption = box.querySelector('div');
    if (caption) caption.remove();
  });
}

/* Sidebar Search & Domain Category Filter for Industry-Driven Courses */
function initCoursesSidebarFilter() {
  const searchInput = document.getElementById('course-search-input');
  const domainSelect = document.getElementById('course-domain-select');
  const sidebarCategoryBtns = document.querySelectorAll('.sidebar-domain-btn');
  const courseCards = document.querySelectorAll('.courses-grid .course-card');
  const coursesResults = document.querySelector('.courses-results');

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

  function showCatalogueResults() {
    if (!coursesResults) return;

    const header = document.querySelector('.sh-header');
    const headerOffset = header ? header.getBoundingClientRect().height + 24 : 24;
    const targetTop = Math.max(0, coursesResults.getBoundingClientRect().top + window.scrollY - headerOffset);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: targetTop, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  // Sidebar Category Buttons Click Event
  sidebarCategoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-filter');

      sidebarCategoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (domainSelect) domainSelect.value = activeCategory;

      filterCards();
      showCatalogueResults();
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
      showCatalogueResults();
    });
  }
}

/* Top Choice Programs Manual Carousel Slider */
function initTopChoiceCarousel() {
  const track = document.getElementById('topchoice-track');
  const carousel = track?.closest('.topchoice-section');
  const slides = document.querySelectorAll('.topchoice-slide');
  const prevBtn = document.getElementById('topchoice-prev');
  const nextBtn = document.getElementById('topchoice-next');
  const dots = document.querySelectorAll('.carousel-dots .dot');

  if (!track || !carousel || slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let autoplayId = null;
  let isVisible = false;

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
      const isActive = i === currentSlide;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-current', String(isActive));
    });
  }

  function stopAutoplay() {
    if (!autoplayId) return;
    window.clearInterval(autoplayId);
    autoplayId = null;
  }

  function startAutoplay() {
    stopAutoplay();
    if (prefersReducedMotion || !isVisible || document.hidden) return;
    autoplayId = window.setInterval(() => updateCarousel(currentSlide + 1), 4000);
  }

  function moveCarousel(index) {
    updateCarousel(index);
    startAutoplay();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => moveCarousel(currentSlide + 1));
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => moveCarousel(currentSlide - 1));
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'));
      moveCarousel(slideIndex);
    });
  });

  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
  carousel.addEventListener('focusin', stopAutoplay);
  carousel.addEventListener('focusout', () => {
    window.setTimeout(() => {
      if (!carousel.contains(document.activeElement)) startAutoplay();
    }, 0);
  });
  document.addEventListener('visibilitychange', () => document.hidden ? stopAutoplay() : startAutoplay());

  const observer = new IntersectionObserver(entries => {
    isVisible = entries[0]?.isIntersecting ?? false;
    if (isVisible) startAutoplay();
    else stopAutoplay();
  }, { threshold: 0.25 });

  observer.observe(carousel);
  updateCarousel(0);
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
