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
    graphic: 'assets/images/courses/graphic-design-menu.png',
    uiux: 'assets/images/courses/uiux-menu.png',
    dsa: 'assets/images/courses/dsa-menu.png',
    salesforce: 'assets/images/courses/salesforce-menu.png',
    analytics: 'assets/images/courses/datascience-learning-card.png',
    softskills: 'assets/images/courses/career-readiness-menu.png',
    marketing: 'assets/images/courses/digital-marketing-menu.png'
  };

  const courses = [
    ['web', 'Advanced MERN Stack Development Program', '5 months', 'Project studio', 'Web', 'Build complete full-stack web applications with practical project experience.', 'courses/web-development/advanced-mern-stack.html', 'assets/images/courses/web-development/advanced-mern-stack-development-program.webp'],
    ['web', 'Java Training and Certification', '4 months', 'Coding lab', 'Web', 'Learn Java, databases, and modern backend development foundations.', 'courses/web-development/java-training.html', 'assets/images/courses/web-development/java-training-and-certification.webp'],
    ['web', 'Frontend Development with React.js', '3 months', 'Project studio', 'Web', 'Build responsive interfaces and reusable front-end experiences with React.', 'courses/web-development/react-development.html', 'assets/images/courses/web-development/frontend-development-with-react.jpg'],
    ['web', 'Full Stack Web Development using Python & Django', '4 months', 'Project studio', 'Web', 'Create robust web applications with Python, Django, APIs, and databases.', 'courses/web-development/python-django.html', 'assets/images/courses/web-development/full-stack-python-django.jpg'],
    ['devops', 'Certified AWS DevOps Course', '5 months', 'AWS lab', 'DevOps', 'Automate cloud delivery using AWS, containers, and infrastructure as code.', 'courses/devops/certified-aws-devops.html', 'assets/images/courses/devops/certified-aws-devops-course.jpg'],
    ['devops', 'Certified DevOps Engineer Course', '5 months', 'CI/CD lab', 'DevOps', 'Practice automation, continuous delivery, monitoring, and orchestration.', 'courses/devops/certified-devops-engineer.html', 'assets/images/courses/devops/certified-devops-engineer-course.jpg'],
    ['devops', 'Master Azure DevOps', '4 months', 'Azure lab', 'DevOps', 'Build release workflows with Azure Repos, Pipelines, and Kubernetes.', 'courses/devops/master-azure-devops.html', 'assets/images/courses/devops/master-azure-devops.jpg'],
    ['cloud', 'AZ-204: Azure Developer Associate', '3 months', 'Azure lab', 'Cloud', 'Develop cloud applications and services on Microsoft Azure.', 'courses/cloud/az-204-azure-developer-associate.html', 'assets/images/courses/cloud/az-204-azure-developer-associate.png'],
    ['cloud', 'AZ-305: Azure Infrastructure Solutions', '4 months', 'Cloud lab', 'Cloud', 'Design dependable Azure infrastructure, governance, and workloads.', 'courses/cloud/az-305-azure-infrastructure-solutions.html', 'assets/images/courses/cloud/az-305-azure-infrastructure-solutions.jpg'],
    ['cloud', 'Certified Terraform Associate Course', '8 weeks', 'IaC lab', 'Cloud', 'Create reusable cloud infrastructure with Terraform and automation.', 'courses/cloud/certified-terraform-associate.html', 'assets/images/courses/official-logos/terraform-official.svg'],
    ['cloud', 'AZ-104: Microsoft Azure Administrator Associate', '3 months', 'Azure lab', 'Cloud', 'Manage Azure compute, identity, networking, and storage services.', 'courses/cloud/az-104-azure-administrator.html', 'assets/images/courses/cloud/az-104-azure-administrator-associate.jpg'],
    ['docker', 'Docker Containers Training Course', '8 weeks', 'Container lab', 'Docker', 'Build, ship, and run containers with Docker workflows and registries.', 'courses/docker-kubernetes/docker-containers-training.html', 'assets/images/courses/official-logos/docker-official.svg'],
    ['docker', 'Certified Kubernetes Security Specialist (CKS)', '10 weeks', 'Security lab', 'K8s', 'Secure Kubernetes workloads, policies, clusters, and runtime environments.', 'courses/docker-kubernetes/certified-kubernetes-security-specialist.html', 'assets/images/courses/docker-kubernetes/certified-kubernetes-security-specialist.png'],
    ['docker', 'Certified Kubernetes Administrator (CKA)', '10 weeks', 'Cluster lab', 'K8s', 'Administer clusters, deployments, services, and cloud-native operations.', 'courses/docker-kubernetes/certified-kubernetes-administrator.html', 'assets/images/courses/docker-kubernetes/certified-kubernetes-administrator.png'],
    ['cybersecurity', 'Ethical Hacking & Cyber Security', '6 months', 'Live lab', 'Cyber', 'Learn ethical hacking, penetration testing, and cyber defence strategies.', 'courses/cybersecurity/ethical-hacking-cyber-security.html', 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg'],
    ['cybersecurity', 'Advanced Penetration Testing', '4 months', 'Security lab', 'Cyber', 'Advance practical testing skills for networks, systems, and web applications.', 'courses/cybersecurity/advanced-penetration-testing.html', 'assets/images/courses/cybersecurity/advanced-penetration-testing.jpg'],
    ['programming', 'Python Programming Certificate', '10 weeks', 'Coding lab', 'Code', 'Build practical Python programming skills for real-world applications.', 'courses/programming/python-programming-certificate.html', 'assets/images/courses/official-logos/python-official.svg'],
    ['graphic', 'Multimedia & Motion Graphics', '4 months', 'Design studio', 'Design', 'Create engaging visual stories with multimedia and motion design tools.', 'courses/graphic-designing/multimedia-motion-graphics.html', 'assets/images/courses/graphic-design/multimedia-motion-graphics.jpg'],
    ['graphic', 'Graphic Design Essentials', '3 months', 'Design studio', 'Design', 'Build core visual design skills for modern creative work.', 'courses/graphic-designing/graphic-design-essentials.html', 'assets/images/courses/graphic-design/graphic-design-essentials.jpg'],
    ['graphic', 'Graphic Design Mastery Program', '5 months', 'Design studio', 'Design', 'Develop an advanced, portfolio-ready graphic design practice.', 'courses/graphic-designing/graphic-design-mastery.html', 'assets/images/courses/graphic-design/graphic-design-mastery-program.jpg'],
    ['uiux', 'UI/UX Design & Front-End Integration Mastery', '5 months', 'Design studio', 'UX', 'Design usable digital products and translate concepts into front-end experiences.', 'courses/uiux/ui-ux-front-end-integration.html', 'assets/images/courses/uiux/ui-ux-design-front-end-integration-mastery.png'],
    ['datascience', 'Data Science & Machine Learning with GenAI', '6 months', 'ML lab', 'AI', 'Analyse data and build machine-learning workflows with generative AI tools.', 'courses/data-science/data-science-machine-learning-genai.html', 'assets/images/courses/data-science/data-science-machine-learning-genai.webp'],
    ['dsa', 'Data Structures & Algorithms Bootcamp', '3 months', 'Coding lab', 'DSA', 'Strengthen problem solving, data structures, and interview-ready algorithms.', 'courses/dsa/data-structures-algorithms-bootcamp.html', 'assets/images/courses/dsa/data-structures-algorithms-bootcamp.png'],
    ['salesforce', 'Salesforce Admin', '3 months', 'Salesforce lab', 'CRM', 'Learn Salesforce administration, data modelling, and platform configuration.', 'courses/salesforce/salesforce-admin.html', 'assets/images/courses/salesforce/salesforce-admin.jpg'],
    ['salesforce', 'Salesforce Development', '4 months', 'Salesforce lab', 'CRM', 'Build Salesforce solutions with Apex, Lightning, and automation.', 'courses/salesforce/salesforce-development.html', 'assets/images/courses/salesforce/salesforce-development.jpg'],
    ['salesforce', 'Salesforce Admin & Development', '5 months', 'Salesforce lab', 'CRM', 'Combine administration and development skills for end-to-end Salesforce work.', 'courses/salesforce/salesforce-admin-development.html', 'assets/images/courses/salesforce/salesforce-admin-development.jpg'],
    ['analytics', 'AI-Powered Data Analytics & Automation Master Program', '4 months', 'Analytics lab', 'Data', 'Turn business data into decisions with analytics, dashboards, and automation.', 'courses/data-analytics/ai-powered-data-analytics.html', 'assets/images/courses/data-analytics/ai-powered-data-analytics-automation.jpg'],
    ['softskills', 'Soft Skill and Communication Training', '8 weeks', 'Live workshop', 'Skills', 'Strengthen workplace communication, presentation, and professional confidence.', 'courses/soft-skills/communication-training.html', 'assets/images/courses/soft-skills/soft-skill-communication-training.jpg'],
    ['marketing', '360° Digital Marketing Professional Program', '4 months', 'Marketing lab', 'Marketing', 'Plan campaigns across search, content, social, email, and analytics.', 'courses/digital-marketing/digital-marketing-professional.html', 'assets/images/courses/digital-marketing/digital-marketing-professional-program.jpg']
  ];

  grid.innerHTML = '';
  courses.forEach(([category, title, duration, lab, label, description, href, coverImage]) => {
    const card = document.createElement('article');
    card.className = `course-card course-card-expanded${coverImage ? ' course-card--cover-layout' : ''}`;
    card.dataset.category = category;
    card.dataset.title = title;
    const mediaSource = coverImage || courseImages[category] || courseImages.programming;
    const mediaAlt = `${title} course logo`;
    const banner = `<header class="course-banner course-card__banner"><img class="course-card__logo" src="${mediaSource}" alt="${mediaAlt}" loading="lazy" decoding="async"><div class="course-card__heading"><span class="course-card__category">${label}</span><h3 class="course-banner-title course-card__title">${title}</h3></div></header>`;
    card.innerHTML = `${banner}<div class="course-body"><div class="course-meta"><span class="course-meta-item"><span class="course-meta-label">Duration</span><strong>${duration}</strong></span><span class="course-meta-item"><span class="course-meta-label">Learning format</span><strong>${lab}</strong></span></div><p class="course-card-summary">${description}</p><a href="${href}" class="course-details-link">View program details <span>&rsaquo;</span></a></div>`;
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
