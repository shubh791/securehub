/* SecureHub Shared Header and Footer Injector & Logic */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('service-page')) {
    const serviceMotion = document.createElement('link');
    serviceMotion.rel = 'stylesheet';
    serviceMotion.href = 'css/services-motion.css';
    document.head.appendChild(serviceMotion);
    const serviceEnhancements = document.createElement('link');
    serviceEnhancements.rel = 'stylesheet';
    serviceEnhancements.href = 'css/services-enhancements.css';
    document.head.appendChild(serviceEnhancements);
    setTimeout(() => {
      const serviceShell = document.querySelector('.service-section .service-shell');
      if (!serviceShell || serviceShell.querySelector('.service-contact-card')) return;
      serviceShell.insertAdjacentHTML('beforeend', '<form class="service-contact-card"><span>Talk to SecureHub</span><h3>Shape the right learning plan.</h3><p>Share your details and our team will respond with the next suitable option.</p><label>Name<input required name="name" placeholder="Your name"></label><label>Work email<input required name="email" type="email" placeholder="you@company.com"></label><label>Phone<input required name="phone" type="tel" placeholder="Your phone number"></label><button type="submit">Request a conversation</button><small aria-live="polite"></small></form>');
      const form = serviceShell.querySelector('.service-contact-card');
      form.addEventListener('submit', event => { event.preventDefault(); form.querySelector('small').textContent = 'Thanks. Our team will contact you shortly.'; form.reset(); });
    }, 0);
  }
  document.documentElement.removeAttribute('data-theme-preview');
  try {
    localStorage.removeItem('securehub-theme-preview');
  } catch (error) {
    // The fixed Sky theme does not depend on browser storage.
  }
  renderHeader();
  addExpandedCourseDomains();
  hydrateMegaMenuVisuals();
  renderFooter();
  initFooterNewsletter();
  initHeaderInteractions();
});

document.addEventListener('securehub:course-sections-ready', syncCoursePageSectionLinks);
document.addEventListener('click', event => {
  const link = event.target.closest('a[data-course-section]');
  if (!link || !document.getElementById('course-page')) return;
  const targetId = link.dataset.courseSection === 'about' ? 'course-about' : link.dataset.courseSection === 'faqs' ? 'course-faqs' : '';
  const target = targetId && document.getElementById(targetId);
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${targetId}`);
});

function renderHeader() {
  const headerContainer = document.getElementById('app-header');
  if (!headerContainer) return;
  const isCoursePage = Boolean(document.getElementById('course-page'));
  const isHomePage = /(?:^|\/)index\.html$/i.test(window.location.pathname) || window.location.pathname.endsWith('/');
  const sectionLinks = isCoursePage
    ? { certifications: '#', about: '#course-about', faqs: '#course-faqs' }
    : { certifications: '#', about: 'about.html', faqs: '#' };
  const coursesLink = isCoursePage ? '#course-page' : (isHomePage ? '#courses-section' : 'index.html#courses-section');
  const enquiryLink = isCoursePage ? '#course-enquiry' : 'enquiryform.html';

  headerContainer.innerHTML = `
    <!-- Top Contact & Announcement Bar -->
    <div class="sh-topbar">
      <div class="sh-container">
        <div class="sh-topbar-left">
          <div class="sh-topbar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>Inquiry Helpline: <strong>+91 98765 43210</strong></span>
          </div>
          <div class="sh-topbar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>admissions@securehub.in</span>
          </div>
        </div>
        <div class="sh-topbar-right">
          <span class="sh-topbar-badge">New practical batch starts Monday</span>
          <a href="${enquiryLink}" class="sh-topbar-link">Request Callback &rsaquo;</a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="sh-header">
      <div class="sh-container">
        <nav class="sh-navbar">
          <!-- Logo (Navigates to Home) -->
          <a href="index.html" class="sh-logo" title="SecureHub Home">
            <div class="sh-logo-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div class="sh-logo-text">Secure<span>Hub</span></div>
          </a>

          <!-- Nav Menu Links (Home link removed as Logo serves as Home) -->
          <ul class="sh-nav-menu" id="sh-nav-menu">
            <!-- Courses Dropdown with MegaMenu -->
            <li class="sh-nav-item has-megamenu">
              <a href="${coursesLink}" class="sh-nav-link sh-courses-toggle" aria-expanded="false" aria-controls="sh-courses-megamenu">
                <span class="sh-courses-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                  Explore All Courses
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </a>

              <!-- MegaMenu Dropdown -->
              <div class="sh-megamenu" id="sh-courses-megamenu">
                <label class="sh-mobile-domain-select" for="sh-mobile-domain-select">
                  <span>Select domain</span>
                  <select id="sh-mobile-domain-select" aria-label="Select course domain"></select>
                </label>
                <div class="sh-megamenu-sidebar">
                  <div class="sh-megamenu-title">Training Domains</div>
                  <ul class="sh-domain-list">
                    <li><button class="sh-domain-btn active" data-target="cybersecurity">Cyber Security <span>&rsaquo;</span></button></li>
                    <li><button class="sh-domain-btn" data-target="cloud-devops">DevOps <span>&rsaquo;</span></button></li>
                    <li><button class="sh-domain-btn" data-target="fullstack">Web Development <span>&rsaquo;</span></button></li>
                    <li><button class="sh-domain-btn" data-target="datascience">Data Science &amp; Machine Learning <span>&rsaquo;</span></button></li>
                    <li><button class="sh-domain-btn" data-target="networking">Red Hat &amp; Linux <span>&rsaquo;</span></button></li>
                  </ul>
                </div>

                <div class="sh-megamenu-panes">
                  <!-- Cybersecurity Pane -->
                  <div class="sh-megamenu-content active" id="pane-cybersecurity">
                    <div class="sh-megamenu-header">
                      <div>
                        <h4>Cybersecurity & Ethical Hacking</h4>
                        <p>Defensive and offensive cyber defense programs with practical lab vouchers</p>
                      </div>
                    </div>
                    <div class="sh-mega-courses-grid">
                      <a href="courses/cybersecurity/ceh-v12-master-program.html" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>CEH v12 Master Program</h5>
                          <p>Certified Ethical Hacker - Live Lab Scenarios</p>
                        </div>
                      </a>
                      <a href="courses/cybersecurity/soc-analyst-l1-l2.html" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>SOC Analyst (L1/L2)</h5>
                          <p>SIEM Tools, Splunk & Incident Response</p>
                        </div>
                      </a>
                      <a href="courses/cybersecurity/web-application-vpt.html" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>Web Application VPT</h5>
                          <p>OWASP Top 10 & Bug Bounty Pentesting</p>
                        </div>
                      </a>
                      <a href="courses/cybersecurity/comptia-security-plus.html" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>CompTIA Security+</h5>
                          <p>Global baseline security certification</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <!-- DevOps Pane -->
                  <div class="sh-megamenu-content" id="pane-cloud-devops">
                    <div class="sh-megamenu-header">
                      <div>
                        <h4>DevOps Engineering</h4>
                        <p>Build, automate and operate dependable cloud delivery workflows.</p>
                      </div>
                    </div>
                    <div class="sh-mega-courses-grid">
                      <a href="courses/devops/aws-devops-engineering.html" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>AWS DevOps Engineering</h5>
                          <p>AWS pipelines, automation and cloud operations</p>
                        </div>
                      </a>
                      <a href="courses/devops/certified-devops-engineer.html" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>Certified DevOps Engineer</h5>
                          <p>CI/CD, automation, containers and infrastructure</p>
                        </div>
                      </a>
                      <a href="courses/devops/master-azure-devops.html" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 2 19h20L12 2z"/><path d="m8 13 2 2 4-5"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>Master Azure DevOps</h5>
                          <p>Azure Repos, Pipelines and release workflows</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <!-- Full Stack Pane -->
                  <div class="sh-megamenu-content" id="pane-fullstack">
                    <div class="sh-megamenu-header">
                      <div>
                        <h4>Full Stack Web Development</h4>
                        <p>Build scalable enterprise applications</p>
                      </div>
                    </div>
                    <div class="sh-mega-courses-grid">
                      <a href="courses/web-development/mern-stack-developer.html" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>MERN Stack Developer</h5>
                          <p>MongoDB, Express, React & Node.js</p>
                        </div>
                      </a>
                      <a href="courses/web-development/django-full-stack.html" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>Python Django Web Dev</h5>
                          <p>Backend engineering & microservices</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <!-- Data Science Pane -->
                  <div class="sh-megamenu-content" id="pane-datascience">
                    <div class="sh-megamenu-header">
                      <div>
                        <h4>Data Science, Machine Learning & AI</h4>
                        <p>Data analytics, predictive models & AI</p>
                      </div>
                    </div>
                    <div class="sh-mega-courses-grid">
                      <a href="courses/data-science/data-analytics-bi.html" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>Data Analytics & BI</h5>
                          <p>Python, SQL, PowerBI & Tableau</p>
                        </div>
                      </a>
                      <a href="courses/data-science/machine-learning-ai-master.html" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>Machine Learning & AI Master</h5>
                          <p>Scikit-learn, TensorFlow & Deep Learning</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <!-- Networking Pane -->
                  <div class="sh-megamenu-content" id="pane-networking">
                    <div class="sh-megamenu-header">
                      <div>
                        <h4>Network Administration & Linux Engineering</h4>
                        <p>RedHat Enterprise Linux & Cisco CCNA Routing</p>
                      </div>
                    </div>
                    <div class="sh-mega-courses-grid">
                      <a href="courses/networking/rhcsa-rhce-redhat-linux.html" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>RHCSA & RHCE RedHat Linux</h5>
                          <p>Enterprise RedHat Admin Certification</p>
                        </div>
                      </a>
                      <a href="courses/networking/cisco-ccna-200-301.html" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>Cisco CCNA (200-301)</h5>
                          <p>Enterprise Network Routing & Switching</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="sh-nav-item sh-services-menu">
              <button type="button" class="sh-nav-link sh-services-toggle" aria-expanded="false" aria-controls="sh-services-dropdown">Services <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>
              <div class="sh-services-dropdown" id="sh-services-dropdown">
                <p>Career services</p>
                <a href="services/service.html?type=corporate"><span>Corporate Training</span><small>Skill programs for teams</small></a>
                <a href="services/service.html?type=programs"><span>Training Programs</span><small>Structured learning pathways</small></a>
                <a href="services/service.html?type=internships"><span>Internships</span><small>Practice-led career exposure</small></a>
                <a href="services/service.html?type=masterclasses"><span>Masterclasses</span><small>Focused expert sessions</small></a>
              </div>
            </li>
            <li class="sh-nav-item"><a href="placementsupport.html" class="sh-nav-link">Placement Support</a></li>
            <li class="sh-nav-item"><a href="${sectionLinks.about}" class="sh-nav-link" data-course-section="about">About Us</a></li>
          </ul>

          <!-- Nav Right Action Buttons (Search Bar removed as requested) -->
          <div class="sh-nav-right">
            <a href="${enquiryLink}" class="sh-btn-outline">Enquire Now</a>
            <a href="${enquiryLink}" class="sh-btn-primary">Talk to Counselor</a>

            <button class="sh-mobile-toggle" id="sh-mobile-toggle" aria-label="Open navigation" aria-controls="sh-nav-menu" aria-expanded="false">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  `;

  normaliseNestedPageLinks(headerContainer);
}

function addExpandedCourseDomains() {
  const domainList = document.querySelector('.sh-domain-list');
  const panes = document.querySelector('.sh-megamenu-panes');
  if (!domainList || !panes) return;
  const courseFallback = document.getElementById('course-page') ? '#course-page' : '#';
  domainList.innerHTML = '';
  panes.innerHTML = '';

  const courseCardImages = {
    'Advanced MERN Stack Development Program': 'assets/images/courses/web-development/advanced-mern-stack-development-program.webp',
    'Java Training and Certification': 'assets/images/courses/web-development/java-training-and-certification.webp',
    'Frontend Development with React.js': 'assets/images/courses/web-development/frontend-development-with-react.jpg',
    'Full Stack Web Development using Python & Django': 'assets/images/courses/web-development/full-stack-python-django.jpg',
    'Certified AWS DevOps Course': 'assets/images/courses/devops/certified-aws-devops-course.jpg',
    'Certified DevOps Engineer Course': 'assets/images/courses/devops/certified-devops-engineer-course.jpg',
    'Master Azure DevOps': 'assets/images/courses/devops/master-azure-devops.jpg',
    'AZ-204: Azure Developer Associate': 'assets/images/courses/cloud/az-204-azure-developer-associate.png',
    'AZ-305: Azure Infrastructure Solutions': 'assets/images/courses/cloud/az-305-azure-infrastructure-solutions.jpg',
    'Certified Terraform Associate Course': 'assets/images/courses/official-logos/terraform-official.svg',
    'AZ-104: Microsoft Azure Administrator Associate': 'assets/images/courses/cloud/az-104-azure-administrator-associate.jpg',
    'Docker Containers Training Course': 'assets/images/courses/official-logos/docker-official.svg',
    'Certified Kubernetes Security Specialist (CKS)': 'assets/images/courses/official-logos/docker-official.svg',
    'Certified Kubernetes Administrator (CKA)': 'assets/images/courses/official-logos/docker-official.svg',
    'Ethical Hacking & Cyber Security': 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg',
    'Advanced Penetration Testing': 'assets/images/courses/cybersecurity/advanced-penetration-testing.jpg',
    'Python Programming Certificate': 'assets/images/courses/official-logos/python-official.svg',
    'Multimedia & Motion Graphics': 'assets/images/courses/graphic-design/multimedia-motion-graphics.jpg',
    'Graphic Design Essentials': 'assets/images/courses/graphic-design/graphic-design-essentials.jpg',
    'Graphic Design Mastery Program': 'assets/images/courses/graphic-design/graphic-design-mastery-program.jpg',
    'UI/UX Design & Front-End Integration Mastery': 'assets/images/courses/uiux/ui-ux-design-front-end-integration-mastery.png',
    'Data Science & Machine Learning with GenAI': 'assets/images/courses/data-science/data-science-machine-learning-genai.webp',
    'Data Structures & Algorithms Bootcamp': 'assets/images/courses/dsa/data-structures-algorithms-bootcamp.png',
    'Salesforce Admin': 'assets/images/courses/salesforce/salesforce-admin.jpg',
    'Salesforce Development': 'assets/images/courses/salesforce/salesforce-development.jpg',
    'Salesforce Admin & Development': 'assets/images/courses/salesforce/salesforce-admin-development.jpg',
    'AI-Powered Data Analytics & Automation Master Program': 'assets/images/courses/data-analytics/ai-powered-data-analytics-automation.jpg',
    'Soft Skill and Communication Training': 'assets/images/courses/soft-skills/soft-skill-communication-training.jpg',
    '360° Digital Marketing Professional Program': 'assets/images/courses/digital-marketing/digital-marketing-professional-program.jpg'
  };

  const domains = [
    { id: 'web', label: 'Web Development', heading: 'Web Development', copy: 'Build practical, modern web applications.', courses: [['Advanced MERN Stack Development Program', 'Full-stack JavaScript development', 'courses/web-development/advanced-mern-stack.html'], ['Java Training and Certification', 'Java and backend foundations', 'courses/web-development/java-training.html'], ['Frontend Development with React.js', 'Modern front-end development', 'courses/web-development/react-development.html'], ['Full Stack Web Development using Python & Django', 'Python web applications', 'courses/web-development/python-django.html']] },
    { id: 'devops', label: 'DevOps', heading: 'DevOps', copy: 'Automate, operate, and deliver reliable software.', courses: [['Certified AWS DevOps Course', 'AWS delivery and automation', 'courses/devops/certified-aws-devops.html'], ['Certified DevOps Engineer Course', 'CI/CD and infrastructure practice', 'courses/devops/certified-devops-engineer.html'], ['Master Azure DevOps', 'Azure release workflows', 'courses/devops/master-azure-devops.html']] },
    { id: 'cloud-computing', label: 'Cloud Computing', heading: 'Cloud Computing', copy: 'Build, secure, and manage modern cloud infrastructure.', courses: [['AZ-204: Azure Developer Associate', 'Azure application development', 'courses/cloud/az-204-azure-developer-associate.html'], ['AZ-305: Azure Infrastructure Solutions', 'Azure solution architecture', 'courses/cloud/az-305-azure-infrastructure-solutions.html'], ['Certified Terraform Associate Course', 'Infrastructure as code', 'courses/cloud/certified-terraform-associate.html'], ['AZ-104: Microsoft Azure Administrator Associate', 'Azure administration', 'courses/cloud/az-104-azure-administrator.html']] },
    { id: 'docker-kubernetes', label: 'Docker & Kubernetes', heading: 'Docker & Kubernetes', copy: 'Containerise applications and operate production clusters.', courses: [['Docker Containers Training Course', 'Docker workflows and registries', 'courses/docker-kubernetes/docker-containers-training.html'], ['Certified Kubernetes Security Specialist (CKS)', 'Kubernetes security practice', 'courses/docker-kubernetes/certified-kubernetes-security-specialist.html'], ['Certified Kubernetes Administrator (CKA)', 'Cluster administration', 'courses/docker-kubernetes/certified-kubernetes-administrator.html']] },
    { id: 'cybersecurity', label: 'Cyber Security', heading: 'Cyber Security', copy: 'Develop ethical hacking and cyber defence capabilities.', courses: [['Ethical Hacking & Cyber Security', 'Hacking and cyber defence', 'courses/cybersecurity/ethical-hacking-cyber-security.html'], ['Advanced Penetration Testing', 'Advanced security testing', 'courses/cybersecurity/advanced-penetration-testing.html']] },
    { id: 'programming', label: 'Programming Languages', heading: 'Programming Languages', copy: 'Build practical coding foundations.', courses: [['Python Programming Certificate', 'Applied Python development', 'courses/programming/python-programming-certificate.html']] },
    { id: 'graphic-design', label: 'Graphic Designing', heading: 'Graphic Designing', copy: 'Create compelling visual communication.', courses: [['Multimedia & Motion Graphics', 'Motion and multimedia design', 'courses/graphic-designing/multimedia-motion-graphics.html'], ['Graphic Design Essentials', 'Core visual design skills', 'courses/graphic-designing/graphic-design-essentials.html'], ['Graphic Design Mastery Program', 'Portfolio-ready design practice', 'courses/graphic-designing/graphic-design-mastery.html']] },
    { id: 'uiux', label: 'UI/UX Design', heading: 'UI/UX Design', copy: 'Design thoughtful, usable digital products.', courses: [['UI/UX Design & Front-End Integration Mastery', 'Product and interface design', 'courses/uiux/ui-ux-front-end-integration.html']] },
    { id: 'datascience', label: 'Data Science & ML', heading: 'Data Science & Machine Learning', copy: 'Use data and AI to solve real problems.', courses: [['Data Science & Machine Learning with GenAI', 'Machine learning and generative AI', 'courses/data-science/data-science-machine-learning-genai.html']] },
    { id: 'dsa', label: 'DSA', heading: 'Data Structures & Algorithms', copy: 'Build interview-ready problem-solving skills.', courses: [['Data Structures & Algorithms Bootcamp', 'Algorithms and coding practice', 'courses/dsa/data-structures-algorithms-bootcamp.html']] },
    { id: 'salesforce', label: 'Salesforce', heading: 'Salesforce', copy: 'Build CRM administration and development skills.', courses: [['Salesforce Admin', 'Administration and configuration', 'courses/salesforce/salesforce-admin.html'], ['Salesforce Development', 'Apex and Lightning development', 'courses/salesforce/salesforce-development.html'], ['Salesforce Admin & Development', 'End-to-end Salesforce skills', 'courses/salesforce/salesforce-admin-development.html']] },
    { id: 'data-analytics', label: 'Data Analytics', heading: 'Data Analytics & Automation', copy: 'Turn data into useful business decisions.', courses: [['AI-Powered Data Analytics & Automation Master Program', 'Analytics and automation', 'courses/data-analytics/ai-powered-data-analytics.html']] },
    { id: 'soft-skills', label: 'Soft Skill', heading: 'Soft Skill & Communication', copy: 'Communicate with confidence at work.', courses: [['Soft Skill and Communication Training', 'Professional communication', 'courses/soft-skills/communication-training.html']] },
    { id: 'digital-marketing', label: 'Digital Marketing', heading: 'Digital Marketing', copy: 'Plan and measure digital growth campaigns.', courses: [['360° Digital Marketing Professional Program', 'Complete digital marketing practice', 'courses/digital-marketing/digital-marketing-professional.html']] }
  ];

  domains.forEach((domain, idx) => {
    const activeClass = idx === 0 ? ' active' : '';
    domainList.insertAdjacentHTML('beforeend', `<li><button class="sh-domain-btn${activeClass}" data-target="${domain.id}">${domain.label} <span>&rsaquo;</span></button></li>`);
    const cards = domain.courses.map(([title, copy, href]) => {
      const cardImg = courseCardImages[title] || 'assets/images/courses/web-development/advanced-mern-stack-development-program.webp';
      return `<a href="${href || courseFallback}" class="sh-mega-course-card">
        <div class="sh-mega-course-icon">
          <img src="${cardImg}" alt="${title}" class="sh-mega-course-img" />
        </div>
        <div class="sh-mega-course-info">
          <span class="sh-mega-course-category">${domain.label}</span>
          <h5 class="sh-mega-course-title">${title}</h5>
        </div>
      </a>`;
    }).join('');
    panes.insertAdjacentHTML('beforeend', `<div class="sh-megamenu-content${activeClass}" id="pane-${domain.id}"><div class="sh-megamenu-header"><div><h4>${domain.heading}</h4><p>${domain.copy}</p></div></div><div class="sh-mega-courses-grid">${cards}</div></div>`);
  });

  // Re-bind domain switching event listeners to newly generated buttons and panes
  const newDomainBtns = domainList.querySelectorAll('.sh-domain-btn');
  const newContentPanes = panes.querySelectorAll('.sh-megamenu-content');

  newDomainBtns.forEach(btn => {
    const showDomain = () => {
      const targetId = btn.getAttribute('data-target');
      newDomainBtns.forEach(b => b.classList.remove('active'));
      newContentPanes.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const targetPane = document.getElementById(`pane-${targetId}`);
      if (targetPane) targetPane.classList.add('active');
    };
    btn.addEventListener('mouseenter', showDomain);
    btn.addEventListener('focus', showDomain);
    btn.addEventListener('click', showDomain);
  });
}

function hydrateMegaMenuVisuals() {
  const courseCardImages = {
    'Advanced MERN Stack Development Program': 'assets/images/courses/web-development/advanced-mern-stack-development-program.webp',
    'Java Training and Certification': 'assets/images/courses/web-development/java-training-and-certification.webp',
    'Frontend Development with React.js': 'assets/images/courses/web-development/frontend-development-with-react.jpg',
    'Full Stack Web Development using Python & Django': 'assets/images/courses/web-development/full-stack-python-django.jpg',
    'Certified AWS DevOps Course': 'assets/images/courses/devops/certified-aws-devops-course.jpg',
    'Certified DevOps Engineer Course': 'assets/images/courses/devops/certified-devops-engineer-course.jpg',
    'Master Azure DevOps': 'assets/images/courses/devops/master-azure-devops.jpg',
    'AZ-204: Azure Developer Associate': 'assets/images/courses/cloud/az-204-azure-developer-associate.png',
    'AZ-305: Azure Infrastructure Solutions': 'assets/images/courses/cloud/az-305-azure-infrastructure-solutions.jpg',
    'Certified Terraform Associate Course': 'assets/images/courses/official-logos/terraform-official.svg',
    'AZ-104: Microsoft Azure Administrator Associate': 'assets/images/courses/cloud/az-104-azure-administrator-associate.jpg',
    'Docker Containers Training Course': 'assets/images/courses/official-logos/docker-official.svg',
    'Certified Kubernetes Security Specialist (CKS)': 'assets/images/courses/official-logos/docker-official.svg',
    'Certified Kubernetes Administrator (CKA)': 'assets/images/courses/official-logos/docker-official.svg',
    'Ethical Hacking & Cyber Security': 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg',
    'Advanced Penetration Testing': 'assets/images/courses/cybersecurity/advanced-penetration-testing.jpg',
    'Python Programming Certificate': 'assets/images/courses/official-logos/python-official.svg',
    'Multimedia & Motion Graphics': 'assets/images/courses/graphic-design/multimedia-motion-graphics.jpg',
    'Graphic Design Essentials': 'assets/images/courses/graphic-design/graphic-design-essentials.jpg',
    'Graphic Design Mastery Program': 'assets/images/courses/graphic-design/graphic-design-mastery-program.jpg',
    'UI/UX Design & Front-End Integration Mastery': 'assets/images/courses/uiux/ui-ux-design-front-end-integration-mastery.png',
    'Data Science & Machine Learning with GenAI': 'assets/images/courses/data-science/data-science-machine-learning-genai.webp',
    'Data Structures & Algorithms Bootcamp': 'assets/images/courses/dsa/data-structures-algorithms-bootcamp.png',
    'Salesforce Admin': 'assets/images/courses/salesforce/salesforce-admin.jpg',
    'Salesforce Development': 'assets/images/courses/salesforce/salesforce-development.jpg',
    'Salesforce Admin & Development': 'assets/images/courses/salesforce/salesforce-admin-development.jpg',
    'AI-Powered Data Analytics & Automation Master Program': 'assets/images/courses/data-analytics/ai-powered-data-analytics-automation.jpg',
    'Soft Skill and Communication Training': 'assets/images/courses/soft-skills/soft-skill-communication-training.jpg',
    '360° Digital Marketing Professional Program': 'assets/images/courses/digital-marketing/digital-marketing-professional-program.jpg',
    'CEH v12 Master Program': 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg',
    'SOC Analyst (L1/L2)': 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg',
    'Web Application VPT': 'assets/images/courses/cybersecurity/advanced-penetration-testing.jpg',
    'CompTIA Security+': 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg',
    'AWS DevOps Engineering': 'assets/images/courses/devops/certified-aws-devops-course.jpg',
    'Certified DevOps Engineer': 'assets/images/courses/devops/certified-devops-engineer-course.jpg',
    'Master Azure DevOps': 'assets/images/courses/devops/master-azure-devops.jpg'
  };

  document.querySelectorAll('.sh-mega-course-card').forEach(card => {
    const titleEl = card.querySelector('h5, .sh-mega-course-title');
    if (!titleEl) return;
    const title = titleEl.textContent.trim();
    const imagePath = courseCardImages[title];
    const icon = card.querySelector('.sh-mega-course-icon');
    if (imagePath && icon) {
      icon.innerHTML = `<img src="${imagePath}" alt="${title}" class="sh-mega-course-img" loading="lazy" decoding="async">`;
    }
  });
}

function renderFooter() {
  const footerContainer = document.getElementById('app-footer');
  if (!footerContainer) return;
  const isCoursePage = Boolean(document.getElementById('course-page'));
  const isHomePage = /(?:^|\/)index\.html$/i.test(window.location.pathname) || window.location.pathname.endsWith('/');
  const sectionLinks = isCoursePage
    ? { certifications: '#course-certifications', about: '#course-about', courses: '#course-page' }
    : { certifications: isHomePage ? '#certifications-section' : 'index.html#certifications-section', about: 'about.html', courses: isHomePage ? '#courses-section' : 'index.html#courses-section' };
  const enquiryLink = isCoursePage ? '#course-enquiry' : 'enquiryform.html';

  footerContainer.innerHTML = `
    <footer class="sh-footer">
      <div class="sh-container">
        <div class="sh-footer-grid">
          <!-- Brand Column -->
          <div class="sh-footer-brand">
            <a href="index.html" class="sh-logo sh-footer-logo" title="SecureHub Home">
              <div class="sh-logo-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div class="sh-logo-text">Secure<span>Hub</span></div>
            </a>
            <p>SecureHub helps learners build practical confidence in IT, cloud, cybersecurity, development and data roles. Our live instruction, guided labs and career-focused support help learners turn clear goals into work they can confidently show.</p>
            <div class="sh-footer-brand-points" aria-label="SecureHub learning benefits"><span>Live expert sessions</span><span>Guided lab practice</span><span>Career-focused support</span></div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="sh-footer-title">Navigation</h4>
            <ul class="sh-footer-links">
              <li><a href="index.html">&rsaquo; SecureHub Home</a></li>
              <li><a href="${sectionLinks.about}" data-course-section="about">&rsaquo; About SecureHub</a></li>
              <li><a href="${sectionLinks.courses}">&rsaquo; All Courses</a></li>
              <li><a href="${sectionLinks.certifications}">&rsaquo; Certifications</a></li>
              <li><a href="${enquiryLink}">&rsaquo; Contact & Admissions</a></li>
            </ul>
          </div>

          <!-- Top Domains -->
          <div>
            <h4 class="sh-footer-title">Training Domains</h4>
            <ul class="sh-footer-links">
              <li><a href="courses/cybersecurity/ceh-v12-master-program.html">&rsaquo; CEH v12 Ethical Hacking</a></li>
              <li><a href="courses/cybersecurity/soc-analyst-l1-l2.html">&rsaquo; SOC Analyst (L1/L2)</a></li>
              <li><a href="courses/devops/aws-devops-engineering.html">&rsaquo; AWS DevOps Engineering</a></li>
              <li><a href="courses/networking/rhcsa-rhce-redhat-linux.html">&rsaquo; RedHat Linux (RHCSA)</a></li>
              <li><a href="courses/web-development/mern-stack-developer.html">&rsaquo; Full Stack MERN Dev</a></li>
            </ul>
          </div>

          <!-- Contact & Newsletter -->
          <div>
            <h4 class="sh-footer-title">Contact & Updates</h4>
            <div class="sh-footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Corporate Center: Tech Avenue, Cyber Park, Sector 18, Jaipur - 302015</span>
            </div>
            <div class="sh-footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 1 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Helpline: +91 98765 43210</span>
            </div>

            <form class="sh-footer-subscribe" data-footer-subscribe novalidate>
              <span class="sh-footer-subscribe-kicker">Stay informed</span>
              <p class="sh-footer-newsletter-label">Get practical batch alerts and course updates.</p>
              <label class="sr-only" for="footer-subscribe-email">Email address</label>
              <div class="sh-newsletter-box"><input id="footer-subscribe-email" type="email" class="sh-newsletter-input" placeholder="Enter your email" autocomplete="email" required><button class="sh-newsletter-btn" type="submit">Subscribe</button></div>
              <p class="sh-footer-subscribe-status" aria-live="polite"></p>
            </form>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="sh-footer-bottom">
          <p>&copy; 2026 SecureHub IT & Cybersecurity Training Institute. All rights reserved.</p>
          <div class="sh-footer-legal-links">
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms-of-service.html">Terms of Service</a>
            <a href="refund-policy.html">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  normaliseNestedPageLinks(footerContainer);
}

function initFooterNewsletter() {
  const form = document.querySelector('[data-footer-subscribe]');
  if (!form) return;
  const input = form.querySelector('input[type="email"]');
  const status = form.querySelector('.sh-footer-subscribe-status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!input.value.trim() || !input.validity.valid) {
      status.textContent = 'Enter a valid email address to subscribe.';
      input.focus();
      return;
    }
    status.textContent = 'Thanks — you are on the SecureHub update list.';
    form.reset();
  });
}

function normaliseNestedPageLinks(container) {
  const isCoursePage = Boolean(document.getElementById('course-page'));
  const courseTargets = {
    '#courses-section': '#course-page',
    '#inquiry-form': '#course-enquiry',
    '#certifications-section': '#course-certifications',
    '#about-section': '#course-about',
    '#faq-section': '#course-faqs'
  };
  const currentPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const depth = Math.max(0, currentPath.split('/').length - 1);
  const prefix = '../'.repeat(depth);

  container.querySelectorAll('a[href]').forEach((link) => {
    let target = link.getAttribute('href');
    if (!target || /^(?:https?:|mailto:|tel:|#|\/)/.test(target)) {
      if (isCoursePage && target && target.startsWith('#') && !target.startsWith('#course-')) link.setAttribute('href', courseTargets[target] || `index.html${target}`);
      return;
    }
    if (depth && !target.startsWith('../')) link.setAttribute('href', `${prefix}${target}`);
  });
}

function syncCoursePageSectionLinks() {
  if (!document.getElementById('course-page')) return;
  const targets = {
    about: 'course-about',
    faqs: 'course-faqs'
  };
  document.querySelectorAll('[data-course-section]').forEach(link => {
    const targetId = targets[link.dataset.courseSection];
    if (targetId && document.getElementById(targetId)) {
      link.setAttribute('href', `#${targetId}`);
    }
  });
}

function initHeaderInteractions() {
  // Mobile Nav Toggle
  const toggleBtn = document.getElementById('sh-mobile-toggle');
  const navMenu = document.getElementById('sh-nav-menu');
  const setMobileNavState = (isOpen) => {
    if (!navMenu || !toggleBtn) return;
    navMenu.classList.toggle('active', isOpen);
    navMenu.style.left = isOpen ? '0px' : '';
    navMenu.style.visibility = isOpen ? 'visible' : '';
    navMenu.style.pointerEvents = isOpen ? 'auto' : '';
    document.body.classList.toggle('sh-nav-open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  };
  
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = !navMenu.classList.contains('active');
      setMobileNavState(isOpen);
      if (!isOpen) closeMobilePanels();
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (link.classList.contains('sh-courses-toggle') && window.matchMedia('(max-width: 1100px)').matches) return;
        setMobileNavState(false);
      });
    });

  }

  const closeMobilePanels = (except) => {
    document.querySelectorAll('.has-megamenu.is-open, .sh-services-menu.is-open').forEach(panel => {
      if (panel !== except) panel.classList.remove('is-open');
    });
    document.querySelectorAll('.sh-courses-toggle, .sh-services-toggle').forEach(trigger => {
      const expanded = trigger.closest('.is-open') !== null;
      trigger.setAttribute('aria-expanded', String(expanded));
    });
  };

  const coursesMenu = document.querySelector('.has-megamenu');
  const coursesToggle = document.querySelector('.sh-courses-toggle');
  if (coursesMenu && coursesToggle) {
    coursesToggle.addEventListener('click', event => {
      if (!window.matchMedia('(max-width: 1100px)').matches) return;
      event.preventDefault();
      const willOpen = !coursesMenu.classList.contains('is-open');
      closeMobilePanels(coursesMenu);
      coursesMenu.classList.toggle('is-open', willOpen);
      coursesToggle.setAttribute('aria-expanded', String(willOpen));
    });
  }

  const servicesMenu = document.querySelector('.sh-services-menu');
  const servicesToggle = document.querySelector('.sh-services-toggle');
  if (servicesMenu && servicesToggle) {
    servicesToggle.addEventListener('click', event => {
      if (!window.matchMedia('(max-width: 1100px)').matches) return;
      event.preventDefault();
      const willOpen = !servicesMenu.classList.contains('is-open');
      closeMobilePanels(servicesMenu);
      servicesMenu.classList.toggle('is-open', willOpen);
      servicesToggle.setAttribute('aria-expanded', String(willOpen));
    });
  }

  window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width: 1100px)').matches) return;
    setMobileNavState(false);
    closeMobilePanels();
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !navMenu?.classList.contains('active')) return;
    setMobileNavState(false);
    closeMobilePanels();
    toggleBtn?.focus();
  });

  // MegaMenu domain switching
  const domainBtns = document.querySelectorAll('.sh-domain-btn');
  const contentPanes = document.querySelectorAll('.sh-megamenu-content');

  domainBtns.forEach(btn => {
    const showDomain = () => {
      const targetId = btn.getAttribute('data-target');
      
      domainBtns.forEach(b => b.classList.remove('active'));
      contentPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(`pane-${targetId}`);
      if (targetPane) targetPane.classList.add('active');
    };

    btn.addEventListener('mouseenter', showDomain);
    btn.addEventListener('focus', showDomain);
    btn.addEventListener('click', showDomain);
  });

  const mobileDomainSelect = document.getElementById('sh-mobile-domain-select');
  if (mobileDomainSelect) {
    domainBtns.forEach(btn => {
      const option = document.createElement('option');
      option.value = btn.getAttribute('data-target');
      option.textContent = btn.childNodes[0].textContent.trim();
      option.selected = btn.classList.contains('active');
      mobileDomainSelect.appendChild(option);
    });
    mobileDomainSelect.addEventListener('change', () => {
      const selectedButton = document.querySelector(`.sh-domain-btn[data-target="${mobileDomainSelect.value}"]`);
      selectedButton?.click();
    });
    domainBtns.forEach(btn => btn.addEventListener('click', () => {
      mobileDomainSelect.value = btn.getAttribute('data-target');
    }));
  }
}

/* Temporary palette preview. It changes colours only and keeps the original theme available. */
function initThemePreview() {
  if (document.getElementById('course-page')) return;
  const preview = document.createElement('aside');
  preview.className = 'sh-theme-preview';
  preview.setAttribute('aria-label', 'Colour theme preview');
  preview.innerHTML = `
    <span class="sh-theme-preview-label">Theme preview</span>
    <button type="button" class="sh-theme-launch" aria-haspopup="dialog" aria-controls="sh-theme-dialog">Choose colours</button>
  `;
  document.body.appendChild(preview);

  const dialog = document.createElement('dialog');
  dialog.className = 'sh-theme-dialog';
  dialog.id = 'sh-theme-dialog';
  dialog.setAttribute('aria-labelledby', 'sh-theme-dialog-title');
  dialog.innerHTML = `
    <form method="dialog" class="sh-theme-window">
      <div class="sh-theme-window-header">
        <div>
          <p class="sh-theme-window-kicker">Homepage colour preview</p>
          <h2 id="sh-theme-dialog-title">Choose a light palette</h2>
        </div>
        <button class="sh-theme-close" type="submit" value="cancel" aria-label="Close colour themes">&times;</button>
      </div>
      <p class="sh-theme-window-copy">Pick a palette, then apply it to the homepage. You can reopen this window and change it at any time.</p>
      <div class="sh-theme-grid" role="radiogroup" aria-label="Available colour palettes">
        <button type="button" class="sh-theme-card" data-theme-choice="original" role="radio" aria-checked="false">
          <span class="sh-theme-swatches"><i style="background:#1677ff"></i><i style="background:#0f9bb3"></i><i style="background:#f6f8fb"></i><i style="background:#ffffff"></i></span>
          <strong>Original sky</strong><small>Current blue and cool-grey palette</small>
        </button>
        <button type="button" class="sh-theme-card" data-theme-choice="teal" role="radio" aria-checked="false">
          <span class="sh-theme-swatches"><i style="background:#148c87"></i><i style="background:#5b9bb2"></i><i style="background:#eaf8f6"></i><i style="background:#fffefd"></i></span>
          <strong>Teal light</strong><small>Teal, sky, mint and warm white</small>
        </button>
        <button type="button" class="sh-theme-card" data-theme-choice="ocean" role="radio" aria-checked="false">
          <span class="sh-theme-swatches"><i style="background:#287ea1"></i><i style="background:#65aeba"></i><i style="background:#eaf6f8"></i><i style="background:#fbfdfd"></i></span>
          <strong>Ocean calm</strong><small>Muted ocean blue with airy blue-greys</small>
        </button>
        <button type="button" class="sh-theme-card" data-theme-choice="sage" role="radio" aria-checked="false">
          <span class="sh-theme-swatches"><i style="background:#4e9278"></i><i style="background:#82ad98"></i><i style="background:#eff8f2"></i><i style="background:#fffefd"></i></span>
          <strong>Sage growth</strong><small>Soft green with a calm learning focus</small>
        </button>
      </div>
      <div class="sh-theme-window-actions">
        <button type="submit" class="sh-theme-cancel" value="cancel">Cancel</button>
        <button type="button" class="sh-theme-apply">Apply palette</button>
      </div>
    </form>
  `;
  document.body.appendChild(dialog);

  const launchButton = preview.querySelector('.sh-theme-launch');
  const cards = dialog.querySelectorAll('.sh-theme-card');
  const applyButton = dialog.querySelector('.sh-theme-apply');
  let selectedTheme = 'original';
  let savedTheme = 'original';
  try {
    savedTheme = localStorage.getItem('securehub-theme-preview') || 'original';
  } catch (error) {
    savedTheme = 'original';
  }

  const applyTheme = (theme) => {
    document.documentElement.dataset.themePreview = theme;
    try {
      localStorage.setItem('securehub-theme-preview', theme);
    } catch (error) {
      // The preview remains usable when browser storage is unavailable.
    }
  };

  applyTheme(savedTheme);
  selectedTheme = savedTheme;

  const setSelection = (theme) => {
    selectedTheme = theme;
    cards.forEach(card => {
      const selected = card.dataset.themeChoice === theme;
      card.classList.toggle('selected', selected);
      card.setAttribute('aria-checked', String(selected));
    });
  };

  launchButton.addEventListener('click', () => {
    setSelection(document.documentElement.dataset.themePreview || 'original');
    dialog.showModal();
  });
  cards.forEach(card => card.addEventListener('click', () => setSelection(card.dataset.themeChoice)));
  applyButton.addEventListener('click', () => {
    applyTheme(selectedTheme);
    dialog.close('applied');
  });
}
