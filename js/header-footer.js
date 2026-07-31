/* SecureHub Shared Header and Footer Injector & Logic */
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initHeaderInteractions();
});

function renderHeader() {
  const headerContainer = document.getElementById('app-header');
  if (!headerContainer) return;

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
          <span class="sh-topbar-badge">🔥 New Practical Batch Starts Monday</span>
          <a href="#inquiry-form" class="sh-topbar-link">Request Callback &rsaquo;</a>
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
              <a href="#courses-section" class="sh-nav-link">
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
                    <li><button class="sh-domain-btn active" data-target="cybersecurity">Cybersecurity & Hacking <span>&rsaquo;</span></button></li>
                    <li><button class="sh-domain-btn" data-target="cloud-devops">Cloud & DevOps <span>&rsaquo;</span></button></li>
                    <li><button class="sh-domain-btn" data-target="fullstack">Full Stack Development <span>&rsaquo;</span></button></li>
                    <li><button class="sh-domain-btn" data-target="datascience">Data Science & AI <span>&rsaquo;</span></button></li>
                    <li><button class="sh-domain-btn" data-target="networking">Network & Linux <span>&rsaquo;</span></button></li>
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
                      <a href="#courses-section" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>CEH v12 Master Program</h5>
                          <p>Certified Ethical Hacker - Live Lab Scenarios</p>
                        </div>
                      </a>
                      <a href="#courses-section" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>SOC Analyst (L1/L2)</h5>
                          <p>SIEM Tools, Splunk & Incident Response</p>
                        </div>
                      </a>
                      <a href="#courses-section" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>Web Application VPT</h5>
                          <p>OWASP Top 10 & Bug Bounty Pentesting</p>
                        </div>
                      </a>
                      <a href="#courses-section" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>CompTIA Security+</h5>
                          <p>Global baseline security certification</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <!-- Cloud & DevOps Pane -->
                  <div class="sh-megamenu-content" id="pane-cloud-devops">
                    <div class="sh-megamenu-header">
                      <div>
                        <h4>Cloud Computing & DevOps Engineering</h4>
                        <p>Master AWS, Azure, Docker, Kubernetes & CI/CD Pipelines</p>
                      </div>
                    </div>
                    <div class="sh-mega-courses-grid">
                      <a href="#courses-section" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>AWS Solutions Architect</h5>
                          <p>Amazon Web Services Infrastructure</p>
                        </div>
                      </a>
                      <a href="#courses-section" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>DevOps Master (Docker & K8s)</h5>
                          <p>Automation, CI/CD, Terraform & Ansible</p>
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
                      <a href="#courses-section" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>MERN Stack Developer</h5>
                          <p>MongoDB, Express, React & Node.js</p>
                        </div>
                      </a>
                      <a href="#courses-section" class="sh-mega-course-card">
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
                      <a href="#courses-section" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>Data Analytics & BI</h5>
                          <p>Python, SQL, PowerBI & Tableau</p>
                        </div>
                      </a>
                      <a href="#courses-section" class="sh-mega-course-card">
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
                      <a href="#courses-section" class="sh-mega-course-card">
                        <div class="sh-mega-course-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div>
                        <div class="sh-mega-course-info">
                          <h5>RHCSA & RHCE RedHat Linux</h5>
                          <p>Enterprise RedHat Admin Certification</p>
                        </div>
                      </a>
                      <a href="#courses-section" class="sh-mega-course-card">
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

            <li class="sh-nav-item"><a href="#certifications-section" class="sh-nav-link">Certifications</a></li>
            <li class="sh-nav-item"><a href="#placements-section" class="sh-nav-link">Placements</a></li>
            <li class="sh-nav-item"><a href="#about-section" class="sh-nav-link">About Us</a></li>
            <li class="sh-nav-item"><a href="#faq-section" class="sh-nav-link">FAQs</a></li>
          </ul>

          <!-- Nav Right Action Buttons (Search Bar removed as requested) -->
          <div class="sh-nav-right">
            <a href="#inquiry-form" class="sh-btn-outline">Enquire Now</a>
            <a href="#inquiry-form" class="sh-btn-primary">Book Free Demo</a>

            <button class="sh-mobile-toggle" id="sh-mobile-toggle" aria-label="Toggle Navigation">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const footerContainer = document.getElementById('app-footer');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="sh-footer">
      <div class="sh-container">
        <div class="sh-footer-grid">
          <!-- Brand Column -->
          <div class="sh-footer-brand">
            <a href="index.html" class="sh-logo" style="color:#ffffff;">
              <div class="sh-logo-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div class="sh-logo-text" style="color:#ffffff;">Secure<span style="color:var(--sh-primary);">Hub</span></div>
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
              <li><a href="#about-section">&rsaquo; About SecureHub</a></li>
              <li><a href="#courses-section">&rsaquo; All Courses</a></li>
              <li><a href="#certifications-section">&rsaquo; Certifications</a></li>
              <li><a href="#placements-section">&rsaquo; Placements</a></li>
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

            <p style="font-size:13px; color:#94a3b8; margin-top:20px;">Subscribe for course batch alerts:</p>
            <div class="sh-newsletter-box">
              <input type="email" class="sh-newsletter-input" placeholder="Enter your email">
              <button class="sh-newsletter-btn" onclick="alert('Thank you for subscribing to SecureHub updates!')">Subscribe</button>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="sh-footer-bottom">
          <p>&copy; 2026 SecureHub IT & Cybersecurity Training Institute. All rights reserved.</p>
          <div style="display:flex; gap:20px;">
            <a href="#" style="color:#64748b;">Privacy Policy</a>
            <a href="#" style="color:#64748b;">Terms of Service</a>
            <a href="#" style="color:#64748b;">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function initHeaderInteractions() {
  // Mobile Nav Toggle
  const toggleBtn = document.getElementById('sh-mobile-toggle');
  const navMenu = document.getElementById('sh-nav-menu');
  
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // MegaMenu domain switching
  const domainBtns = document.querySelectorAll('.sh-domain-btn');
  const contentPanes = document.querySelectorAll('.sh-megamenu-content');

  domainBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      const targetId = btn.getAttribute('data-target');
      
      domainBtns.forEach(b => b.classList.remove('active'));
      contentPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(`pane-${targetId}`);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}
