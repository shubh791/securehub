/* SecureHub Shared Header and Footer Injector & Logic */
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  addExpandedCourseDomains();
  renderFooter();
  initHeaderInteractions();
  initThemePreview();
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
  const sectionLinks = isCoursePage
    ? { certifications: '#', about: '#course-about', faqs: '#course-faqs' }
    : { certifications: '#', about: '#', faqs: '#' };
  const coursesLink = isCoursePage ? '#course-page' : '#';
  const enquiryLink = isCoursePage ? '#course-enquiry' : '#';

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
              <a href="${coursesLink}" class="sh-nav-link">
                <span class="sh-courses-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                  Explore All Courses
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </a>

              <!-- MegaMenu Dropdown -->
              <div class="sh-megamenu">
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

            <li class="sh-nav-item"><a href="${sectionLinks.certifications}" class="sh-nav-link">Certifications</a></li>
            <li class="sh-nav-item"><a href="${sectionLinks.about}" class="sh-nav-link" data-course-section="about">About Us</a></li>
            <li class="sh-nav-item"><a href="${sectionLinks.faqs}" class="sh-nav-link" data-course-section="faqs">FAQs</a></li>
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

  const domains = [
    { id: 'cloud-computing', label: 'Cloud Computing', heading: 'Cloud Computing', copy: 'Build, secure and manage reliable infrastructure across leading cloud platforms.', courses: [['Microsoft Azure Administrator', 'Azure compute, identity, networking and storage', 'courses/cloud/microsoft-azure-administrator.html'], ['Azure Infrastructure Solutions', 'Architecture, governance and resilient Azure workloads', 'courses/cloud/azure-infrastructure-solutions.html'], ['Terraform Associate', 'Infrastructure as code and reusable cloud automation', 'courses/cloud/terraform-associate.html']] },
    { id: 'docker-kubernetes', label: 'Docker & Kubernetes', heading: 'Docker & Kubernetes', copy: 'Containerise applications and run dependable production clusters.', courses: [['Docker Containers Training', 'Images, registries, compose and container workflows', 'courses/docker-kubernetes/docker-containers-training.html'], ['Kubernetes Administration', 'Clusters, deployments, services and observability', 'courses/docker-kubernetes/kubernetes-administration.html']] },
    { id: 'programming', label: 'Programming Languages', heading: 'Programming Languages', copy: 'Build durable coding fundamentals through applied programming practice.', courses: [['Python Programming Certificate', 'Core Python, data structures and application practice', 'courses/programming/python-programming-certificate.html'], ['Java Programming', 'Object-oriented programming and backend foundations', 'courses/programming/java-programming.html']] },
    { id: 'graphic-design', label: 'Graphic Designing', heading: 'Graphic Designing', copy: 'Create clear visual communication for digital brands and campaigns.', courses: [['Graphic Design Essentials', 'Layout, visual hierarchy and Adobe workflow basics', 'courses/catalog/course.html?course=graphic'], ['Multimedia & Motion Graphics', 'Motion principles, editing and campaign assets', 'courses/catalog/course.html?course=motion']] },
    { id: 'uiux', label: 'UI/UX Design', heading: 'UI/UX Design & Product Thinking', copy: 'Research, prototype and validate better digital experiences.', courses: [['UI/UX Design & Figma', 'User journeys, wireframes and high-fidelity prototypes', 'courses/catalog/course.html?course=uiux'], ['Frontend Design Systems', 'Responsive interfaces and reusable component patterns', 'courses/catalog/course.html?course=designsystems']] },
    { id: 'dsa', label: 'Data Structures & Algorithms', heading: 'Data Structures & Algorithms', copy: 'Strengthen problem solving for technical interviews and software roles.', courses: [['DSA Bootcamp', 'Arrays, trees, graphs and algorithmic patterns', 'courses/catalog/course.html?course=dsa'], ['Interview Problem Solving', 'Timed coding practice and technical interview preparation', 'courses/catalog/course.html?course=interviews']] },
    { id: 'salesforce', label: 'Salesforce', heading: 'Salesforce Career Paths', copy: 'Build CRM administration and development capabilities.', courses: [['Salesforce Administrator', 'Data models, security and workflow automation', 'courses/catalog/course.html?course=salesforceadmin'], ['Salesforce Development', 'Apex, Lightning components and integrations', 'courses/catalog/course.html?course=salesforcedev']] },
    { id: 'aws-solutions', label: 'AWS Solutions Architect', heading: 'AWS Solutions Architect Pathway', copy: 'Architect secure, cost-aware and highly available AWS workloads.', courses: [['AWS Solutions Architect Associate', 'Architecture patterns and guided exam preparation', 'courses/catalog/course.html?course=awsarchitect'], ['AWS DevOps Engineering', 'Automated delivery pipelines and cloud operations', 'courses/devops/aws-devops-engineering.html']] },
    { id: 'data-analytics', label: 'Data Analytics & Visualisation', heading: 'Data Analytics & Visualisation', copy: 'Turn business data into trustworthy dashboards and decisions.', courses: [['Data Analytics & Power BI', 'SQL, Excel, Power BI and reporting workflows', 'courses/catalog/course.html?course=powerbi'], ['Tableau Data Visualisation', 'Dashboards, storytelling and stakeholder-ready reporting', 'courses/catalog/course.html?course=tableau']] },
    { id: 'soft-skills', label: 'Soft Skills', heading: 'Soft Skills & Career Readiness', copy: 'Communicate with confidence in interviews, teams and client conversations.', courses: [['Communication for Technology Teams', 'Professional writing, speaking and collaboration', 'courses/catalog/course.html?course=communication'], ['Interview & Workplace Readiness', 'Structured interviews, presentations and career practice', 'courses/catalog/course.html?course=workplace']] },
    { id: 'digital-marketing', label: 'Digital Marketing', heading: 'Digital Marketing', copy: 'Plan, measure and improve practical digital growth campaigns.', courses: [['Digital Marketing Professional Program', 'SEO, paid media, social and campaign measurement', 'courses/catalog/course.html?course=marketing'], ['Performance Marketing Foundations', 'Audience targeting, analytics and optimisation', 'courses/catalog/course.html?course=performance']] }
  ];

  domains.forEach(domain => {
    domainList.insertAdjacentHTML('beforeend', `<li><button class="sh-domain-btn" data-target="${domain.id}">${domain.label} <span>&rsaquo;</span></button></li>`);
    const icon = `<div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19V5h16v14H4Z"/><path d="M8 9h8M8 13h5M16.5 17.5l1.5 1.5 3-3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`;
    const cards = domain.courses.map(([title, copy, href]) => `<a href="${href || courseFallback}" class="sh-mega-course-card">${icon}<div class="sh-mega-course-info"><h5>${title}</h5><p>${copy}</p></div></a>`).join('');
    panes.insertAdjacentHTML('beforeend', `<div class="sh-megamenu-content" id="pane-${domain.id}"><div class="sh-megamenu-header"><div><h4>${domain.heading}</h4><p>${domain.copy}</p></div></div><div class="sh-mega-courses-grid">${cards}</div></div>`);
  });
}

function renderFooter() {
  const footerContainer = document.getElementById('app-footer');
  if (!footerContainer) return;
  const sectionLinks = document.getElementById('course-page')
    ? { certifications: '#course-certifications', about: '#course-about' }
    : { certifications: '#certifications-section', about: '#about-section' };

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
            <p>SecureHub is India's leading IT, Cloud & Cybersecurity skill development institute. Empowering students with hands-on lab training and 100% placement assistance.</p>
            <div class="sh-social-links">
              <a href="#" class="sh-social-icon" aria-label="Facebook"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" class="sh-social-icon" aria-label="Twitter"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
              <a href="#" class="sh-social-icon" aria-label="LinkedIn"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="#" class="sh-social-icon" aria-label="YouTube"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="sh-footer-title">Navigation</h4>
            <ul class="sh-footer-links">
              <li><a href="index.html">&rsaquo; SecureHub Home</a></li>
              <li><a href="${sectionLinks.about}" data-course-section="about">&rsaquo; About SecureHub</a></li>
              <li><a href="#courses-section">&rsaquo; All Courses</a></li>
              <li><a href="${sectionLinks.certifications}">&rsaquo; Certifications</a></li>
              <li><a href="#inquiry-form">&rsaquo; Contact & Admissions</a></li>
            </ul>
          </div>

          <!-- Top Domains -->
          <div>
            <h4 class="sh-footer-title">Training Domains</h4>
            <ul class="sh-footer-links">
              <li><a href="#courses-section">&rsaquo; CEH v12 Ethical Hacking</a></li>
              <li><a href="#courses-section">&rsaquo; SOC Analyst (L1/L2)</a></li>
              <li><a href="#courses-section">&rsaquo; AWS Solutions Architect</a></li>
              <li><a href="#courses-section">&rsaquo; DevOps Engineering</a></li>
              <li><a href="#courses-section">&rsaquo; RedHat Linux (RHCSA)</a></li>
              <li><a href="#courses-section">&rsaquo; Full Stack MERN Dev</a></li>
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

            <p class="sh-footer-newsletter-label">Subscribe for course batch alerts:</p>
            <div class="sh-newsletter-box">
              <input type="email" class="sh-newsletter-input" placeholder="Enter your email">
              <button class="sh-newsletter-btn" onclick="alert('Thank you for subscribing to SecureHub updates!')">Subscribe</button>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="sh-footer-bottom">
          <p>&copy; 2026 SecureHub IT & Cybersecurity Training Institute. All rights reserved.</p>
          <div class="sh-footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  normaliseNestedPageLinks(footerContainer);
}

function normaliseNestedPageLinks(container) {
  if (!document.getElementById('course-page')) return;
  container.querySelectorAll('a[href^="#"]').forEach(link => {
    const target = link.getAttribute('href');
    if (target.startsWith('#course-')) return;
    const courseTargets = {
      '#courses-section': '#course-page',
      '#inquiry-form': '#course-enquiry',
      '#certifications-section': '#course-certifications',
      '#about-section': '#course-about',
      '#faq-section': '#course-faqs'
    };
    link.setAttribute('href', courseTargets[target] || `index.html${target}`);
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
  
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
      toggleBtn.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

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
