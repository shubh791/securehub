/**
 * SecureHub Master Course Page Renderer
 * Shared across all 46 course pages.
 * Enlarged Left Hero Copy (matching form height), No Buttons in Hero, No Address, No Testimonials, No Hiring Partners.
 */

function getCourseLogo(key) {
  const logoMap = {
    'advanced-mern-stack': 'assets/images/courses/web-development/advanced-mern-stack-development-program.webp',
    'advanced-penetration-testing': 'assets/images/courses/official-logos/advanced-pentest-square.svg',
    'ai-data-analytics': 'assets/images/courses/data-analytics/ai-powered-data-analytics-automation.jpg',
    'ai-powered-data-analytics': 'assets/images/courses/data-analytics/ai-powered-data-analytics-automation.jpg',
    'analytics': 'assets/images/courses/data-analytics/ai-powered-data-analytics-automation.jpg',
    'aws-devops': 'assets/images/courses/official-logos/aws-devops-square.svg',
    'az-104-azure-administrator': 'assets/images/courses/cloud/az-104-azure-administrator-associate.jpg',
    'az-204-azure-developer-associate': 'assets/images/courses/cloud/az-204-azure-developer-associate.png',
    'az-305-azure-infrastructure-solutions': 'assets/images/courses/cloud/az-305-azure-infrastructure-solutions.jpg',
    'azure-admin': 'assets/images/courses/cloud/az-104-azure-administrator-associate.jpg',
    'azure-infrastructure': 'assets/images/courses/cloud/az-305-azure-infrastructure-solutions.jpg',
    'ccna': 'assets/images/courses/official-logos/devops-official.svg',
    'ceh': 'assets/images/courses/ceh-v12.jpg',
    'ceh-v12-master-program': 'assets/images/courses/ceh-v12.jpg',
    'certified-aws-devops': 'assets/images/courses/official-logos/aws-devops-square.svg',
    'certified-devops-engineer': 'assets/images/courses/official-logos/devops-official.svg',
    'certified-kubernetes-administrator': 'assets/images/courses/official-logos/kubernetes-official.svg',
    'certified-kubernetes-security-specialist': 'assets/images/courses/official-logos/kubernetes-official.svg',
    'certified-terraform-associate': 'assets/images/courses/official-logos/terraform-official.svg',
    'communication-training': 'assets/images/courses/official-logos/softskills-official.svg',
    'comptia-security-plus': 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg',
    'data-science-genai': 'assets/images/courses/data-science/data-science-machine-learning-genai.webp',
    'data-science-machine-learning-genai': 'assets/images/courses/data-science/data-science-machine-learning-genai.webp',
    'data-structures-algorithms-bootcamp': 'assets/images/courses/official-logos/dsa-official.svg',
    'digital-marketing-mastery': 'assets/images/courses/official-logos/digital-marketing-official.svg',
    'digital-marketing-professional': 'assets/images/courses/official-logos/digital-marketing-official.svg',
    'django': 'assets/images/courses/web-development/full-stack-python-django.jpg',
    'docker-containers': 'assets/images/courses/official-logos/docker-official.svg',
    'docker-containers-training': 'assets/images/courses/official-logos/docker-official.svg',
    'dsa-bootcamp': 'assets/images/courses/official-logos/dsa-official.svg',
    'ethical-hacking-cyber-security': 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg',
    'ethical-hacking-mastery': 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg',
    'graphic-design-essentials': 'assets/images/courses/graphic-design/graphic-design-essentials.jpg',
    'graphic-design-mastery': 'assets/images/courses/graphic-design/graphic-design-mastery-program.jpg',
    'java-programming': 'assets/images/courses/web-development/java-training-and-certification.webp',
    'java-training': 'assets/images/courses/web-development/java-training-and-certification.webp',
    'kubernetes-administration': 'assets/images/courses/official-logos/kubernetes-official.svg',
    'kubernetes-cka': 'assets/images/courses/official-logos/kubernetes-official.svg',
    'kubernetes-cks': 'assets/images/courses/official-logos/kubernetes-official.svg',
    'machine-learning': 'assets/images/courses/data-science/data-science-machine-learning-genai.webp',
    'master-azure-devops': 'assets/images/courses/devops/master-azure-devops.jpg',
    'mern': 'assets/images/courses/web-development/advanced-mern-stack-development-program.webp',
    'motion-graphics': 'assets/images/courses/graphic-design/multimedia-motion-graphics.jpg',
    'python-django': 'assets/images/courses/web-development/full-stack-python-django.jpg',
    'python-programming-certificate': 'assets/images/courses/official-logos/python-official.svg',
    'react-development': 'assets/images/courses/web-development/frontend-development-with-react.jpg',
    'redhat': 'assets/images/courses/official-logos/devops-official.svg',
    'salesforce-admin': 'assets/images/courses/salesforce/salesforce-admin.jpg',
    'salesforce-admin-dev': 'assets/images/courses/salesforce/salesforce-admin-development.jpg',
    'salesforce-admin-development': 'assets/images/courses/salesforce/salesforce-admin-development.jpg',
    'salesforce-development': 'assets/images/courses/salesforce/salesforce-development.jpg',
    'security-plus': 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg',
    'soc': 'assets/images/courses/ceh-v12.jpg',
    'soc-analyst-l1-l2': 'assets/images/courses/ceh-v12.jpg',
    'soft-skills-mastery': 'assets/images/courses/official-logos/softskills-official.svg',
    'terraform': 'assets/images/courses/official-logos/terraform-official.svg',
    'ui-ux-front-end-integration': 'assets/images/courses/uiux/ui-ux-design-front-end-integration-mastery.png',
    'uiux-design-mastery': 'assets/images/courses/uiux/ui-ux-design-front-end-integration-mastery.png',
    'vpt': 'assets/images/courses/official-logos/advanced-pentest-square.svg',
    'web-application-vpt': 'assets/images/courses/official-logos/advanced-pentest-square.svg'
  };
  return logoMap[key] || 'assets/images/courses/official-logos/devops-official.svg';
}

const courseData = {
  'advanced-mern-stack': {
    title: 'Advanced MERN Stack & Next.js 15 Web Engineering Program',
    shortTitle: 'MERN & Next.js Master',
    label: 'Full Stack Engineering',
    duration: '4.5 Months',
    level: 'Beginner to Advanced',
    lab: 'Live Web Development Studio',
    practicalWork: '6 Production SaaS Apps',
    salaryRange: '₹7.0 LPA - ₹15.5 LPA',
    subtitle: 'Master full stack web development with MongoDB, Express.js, React 19, Node.js, Next.js 15 App Router, TypeScript, and cloud deployment.',
    overview: 'An intensive, industry-aligned engineering track designed for developers who want to architect scalable, high-performance web applications. Learn modern frontend rendering, resilient REST & GraphQL APIs, database optimization, authentication security, and CI/CD cloud deployments.',
    tools: ['React 19', 'Next.js 15', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Prisma ORM', 'Redux Toolkit', 'Tailwind CSS', 'Docker', 'Vercel'],
    audience: ['Aspiring Full Stack Web Developers', 'Frontend Engineers adding Node.js & Backend skills', 'Computer Science Students & Tech Career Changers'],
    careers: [
      { role: 'Full Stack MERN Developer', pkg: '₹7.5 LPA - ₹15.5 LPA' },
      { role: 'Frontend React / Next.js Engineer', pkg: '₹6.5 LPA - ₹13.0 LPA' },
      { role: 'Backend Node.js & API Developer', pkg: '₹7.0 LPA - ₹14.0 LPA' },
      { role: 'SaaS Application Architect', pkg: '₹9.0 LPA - ₹18.0 LPA' }
    ],
    outcomes: [
      'Architect full stack web applications with React 19, Next.js 15 Server Components & Node.js microservices',
      'Build secure RESTful & GraphQL APIs with JWT authentication, rate limiting, and role-based access control (RBAC)',
      'Design optimized MongoDB schemas using Mongoose ORM, indexing, and aggregation pipelines',
      'Deploy production SaaS applications to Vercel, AWS, and Docker containers with automated CI/CD pipelines'
    ],
    modules: [
      ['Module 01: Modern Web Foundations & TypeScript', 'Master HTML5 semantic layout, CSS grid/flexbox, JavaScript ES6+ async/await, DOM manipulation, and strict TypeScript interfaces.'],
      ['Module 02: Frontend Architecture with React 19', 'Build dynamic user interfaces using Functional Components, Custom Hooks, Context API, Redux Toolkit state management, and Tailwind CSS.'],
      ['Module 03: Full Stack Frameworks with Next.js 15', 'Master Next.js App Router, Server Actions, Server Components, SSR/SSG rendering strategies, and SEO performance optimization.'],
      ['Module 04: Backend API Development with Node & Express', 'Architect modular Express servers, custom middleware pipelines, error handling, input validation, JWT auth, and WebSocket real-time feeds.'],
      ['Module 05: Database Engineering with MongoDB & Prisma', 'Design relational and NoSQL database models, complex Mongoose queries, indexing performance, and Prisma ORM migrations.'],
      ['Module 06: Capstone Project & Cloud Deployment', 'Build and deploy an enterprise Full Stack E-Commerce / SaaS platform to Vercel & AWS with Docker containers and automated CI/CD.']
    ],
    faqs: [
      ['Do I need prior programming experience to join?', 'Basic computer familiarity is expected. The course begins with JavaScript ES6+ and web fundamentals before progressing to advanced React and Node.'],
      ['What real-world projects will I build?', 'You will build 6 production-grade projects including an AI SaaS Dashboard, E-Commerce Platform, Real-Time Chat App, and a Full Stack Social Platform.'],
      ['Is placement support provided?', 'Yes! You receive 1-on-1 placement support, resume optimization, GitHub portfolio reviews, and mock technical interviews with senior engineers.']
    ]
  },

  'ceh': {
    title: 'Certified Ethical Hacker (CEH v12) & SOC Defense Master',
    shortTitle: 'CEH v12 & SOC Defense',
    label: 'Cyber Security',
    duration: '6 Months',
    level: 'Intermediate',
    lab: 'Live Cyber Warfare Lab',
    practicalWork: '8 Guided Cyber Labs',
    salaryRange: '₹7.5 LPA - ₹16.0 LPA',
    subtitle: 'Master offensive penetration testing, network exploitation, SIEM log forensics, and enterprise SOC incident response.',
    overview: 'An end-to-end cyber warfare program combining offensive penetration testing, vulnerability assessment, and real-world SOC Incident Response with SIEM threat hunting.',
    tools: ['Nmap', 'Wireshark', 'Burp Suite', 'Metasploit', 'Splunk SIEM', 'OWASP Top 10', 'Kali Linux', 'Hydra', 'Snort IDS'],
    audience: ['Students building a cybersecurity career', 'IT & System Administrators moving into Security', 'Support Engineers entering SOC Operations'],
    careers: [
      { role: 'Ethical Hacker / Pentester', pkg: '₹8.0 LPA - ₹16.5 LPA' },
      { role: 'SOC Security Analyst (L1/L2)', pkg: '₹6.5 LPA - ₹13.5 LPA' },
      { role: 'Web Application Security Tester', pkg: '₹7.5 LPA - ₹15.0 LPA' },
      { role: 'Cyber Threat Intelligence Engineer', pkg: '₹9.5 LPA - ₹19.0 LPA' }
    ],
    outcomes: [
      'Perform structured network scanning, asset enumeration, and vulnerability assessment with Nmap & Nessus',
      'Execute offensive penetration testing against web applications and enterprise networks in legal lab setups',
      'Analyze security logs using Splunk SIEM to detect malware outbreaks, lateral movement, and data exfiltration',
      'Author executive-ready vulnerability assessment and incident response triage reports'
    ],
    modules: [
      ['Module 01: Cybersecurity Fundamentals & Linux CLI', 'Ethical hacking ethics, networking protocols (TCP/IP, DNS, HTTP), Kali Linux CLI mastery, and security architecture.'],
      ['Module 02: Reconnaissance, Enumeration & Scanning', 'Information gathering, active/passive scanning, port enumeration, banner grabbing, and network surface mapping.'],
      ['Module 03: Vulnerability Assessment & Exploitation', 'Identifying system misconfigurations, buffer overflows, Metasploit payload execution, and privilege escalation.'],
      ['Module 04: Web Application Security & OWASP Top 10', 'Testing SQL Injection, XSS, CSRF, Broken Auth, Request Forgery, and API security weaknesses with Burp Suite.'],
      ['Module 05: SOC Operations & SIEM Threat Hunting', 'Splunk log analysis, alert triage, incident detection rules, MITRE ATT&CK framework mapping, and memory forensics.'],
      ['Module 06: Practical CEH Lab Prep & Capstone Assessment', 'Simulated red-team vs blue-team cyber warfare exercise and comprehensive security assessment reporting.']
    ],
    faqs: [
      ['Is practical lab access included?', 'Yes! Every student gets dedicated access to a guided cloud cyber lab environment pre-configured with security tools.'],
      ['What career roles does this course prepare me for?', 'Prepares you for roles such as Ethical Hacker, Junior Penetration Tester, SOC Analyst (L1/L2), and Cyber Security Associate.'],
      ['Will I work on real security tools?', 'Yes, you will gain hands-on experience with Kali Linux, Nmap, Wireshark, Burp Suite Pro, Metasploit, Splunk, and Snort.']
    ]
  }
};

function getCourse(key) {
  if (courseData[key]) return courseData[key];
  const title = key.replace(/[-_]/g, ' ').replace(/ \w/g, c => c.toUpperCase());
  return {
    title: `${title} Professional Program`,
    shortTitle: title,
    label: 'Professional Certification',
    duration: '3 to 5 Months',
    level: 'Beginner to Advanced',
    lab: 'Enterprise Live Sandbox',
    practicalWork: '4 Industry Projects',
    salaryRange: '₹6.5 LPA - ₹16.0 LPA',
    subtitle: `Master ${title} with practical hands-on workflows, enterprise lab environments, and expert guidance.`,
    overview: `A career-focused engineering program designed to give you deep technical competency in ${title}. Learn production methodologies, real-world troubleshooting, and industry best practices.`,
    tools: [title, 'Git', 'Docker', 'Linux', 'VS Code', 'Cloud Sandbox'],
    audience: [`Learners seeking a specialized career in ${title}`, 'IT Professionals upgrading their technical stack', 'Engineering Students & Career Starters'],
    careers: [
      { role: `${title} Specialist`, pkg: '₹7.0 LPA - ₹15.0 LPA' },
      { role: 'Technical Solutions Engineer', pkg: '₹6.5 LPA - ₹13.0 LPA' },
      { role: 'Senior Domain Developer', pkg: '₹8.5 LPA - ₹17.5 LPA' }
    ],
    outcomes: [
      `Master core technical concepts and production workflows in ${title}`,
      'Build hands-on practical project experience in dedicated lab environments',
      'Prepare for technical interviews, domain certifications, and industry career roles'
    ],
    modules: [
      ['Module 01: Core Foundations & Industry Overview', `Key terminology, tool setup, essential concepts, and foundational workflows for ${title}.`],
      ['Module 02: Intermediate Technical Practice', `Hands-on guided exercises, configuration rules, and real scenario execution.`],
      ['Module 03: Advanced Implementation & Architecture', `System optimization, security best practices, and enterprise integration patterns.`],
      ['Module 04: Troubleshooting & Production Workflows', `Debugging common issues, performance tuning, and industry compliance.`],
      ['Module 05: Industry Project Execution', `Build an end-to-end practical project incorporating modern domain standards.`],
      ['Module 06: Career Prep & Capstone Review', `Portfolio presentation, resume optimization, and mock interview evaluation.`]
    ],
    faqs: [
      ['Who is eligible to enroll in this course?', 'Anyone passionate about building a career in tech. Basic computer literacy is the only prerequisite.'],
      ['Is practical lab access provided?', 'Yes! You receive dedicated access to our live cloud labs throughout your training.'],
      ['How does placement assistance work?', 'We provide 1-on-1 career counseling, mock interview sessions, resume reviews, and direct interview opportunities.']
    ]
  };
}

function ensureStylesheets() {
  const isSubfolder = window.location.pathname.includes('/courses/') || window.location.pathname.includes('/services/');
  const prefix = isSubfolder ? '../../' : '';
  const files = [prefix + 'css/header-footer.css', prefix + 'courses/course-template.css'];
  files.forEach(href => {
    if (!document.querySelector(`link[href*="${href.replace(prefix, '')}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  ensureStylesheets();
  const page = document.getElementById('course-page');
  if (!page) return;
  const courseKey = page.dataset.course;
  const course = getCourse(courseKey);
  course.key = courseKey;

  document.title = `${course.title} | SecureHub`;
  page.innerHTML = renderCoursePage(course);
  initCourseInteractions(page);
});

function renderCoursePage(course) {
  const isSubfolder = window.location.pathname.includes('/courses/') || window.location.pathname.includes('/services/');
  const rootPrefix = isSubfolder ? '../../' : '';

  const moduleMarkup = course.modules.map(([mTitle, mDesc], index) => `
    <article class="course-module">
      <button class="course-module-toggle" aria-expanded="${index === 0}" aria-controls="module-${index}">
        <span><b>Module ${String(index + 1).padStart(2, '0')}</b>${mTitle}</span>
        <span class="course-module-plus" aria-hidden="true">+</span>
      </button>
      <div class="course-module-body" id="module-${index}" ${index === 0 ? '' : 'hidden'}>
        <p>${mDesc}</p>
        <ul>
          <li>Guided senior instructor walkthrough</li>
          <li>Hands-on practical lab exercise</li>
          <li>Code / Project review &amp; feedback</li>
        </ul>
      </div>
    </article>
  `).join('');

  const toolsMarkup = course.tools ? course.tools.map(t => `<span class="tool-tag">${t}</span>`).join('') : '';

  const faqMarkup = course.faqs.map(([q, a], idx) => `
    <article class="course-faq-item">
      <button class="faq-toggle" aria-expanded="${idx === 0}" aria-controls="faq-${idx}">
        <span>${q}</span>
        <span class="faq-plus">+</span>
      </button>
      <div class="faq-body" id="faq-${idx}" ${idx === 0 ? '' : 'hidden'}>
        <p>${a}</p>
      </div>
    </article>
  `).join('');

  const careerMarkup = course.careers ? course.careers.map(c => `
    <div class="career-role-card">
      <div class="role-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      </div>
      <div>
        <h4>${c.role}</h4>
        <span class="role-pkg">Expected Package: <strong>${c.pkg}</strong></span>
      </div>
    </div>
  `).join('') : '';

  return `
    <!-- 1. Hero Section (Enlarged Left Copy Matching Form Height, Zero Buttons) -->
    <section class="course-hero course-hero-enhanced" id="course-overview">
      <div class="course-shell">
        <p class="course-breadcrumb">
          <a href="${rootPrefix}index.html">Home</a><span>/</span>
          <a href="${rootPrefix}index.html#courses-section">Courses</a><span>/</span>
          ${course.label}
        </p>
        <div class="course-hero-grid">
          <div class="course-hero-copy">
            <span class="course-eyebrow">${course.label} Track</span>
            <div class="course-hero-title-row">
              <div class="course-hero-logo-box">
                <img src="${rootPrefix}${getCourseLogo(course.key)}" alt="${course.title}">
              </div>
              <h1 class="hero-large-title">${course.title}</h1>
            </div>
            <p class="course-hero-sub large-hero-sub">${course.subtitle}</p>

            <!-- Non-Button Informational Trust Badges (Zero Buttons) -->
            <div class="hero-trust-badges-row">
              <div class="hero-trust-badge-large">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>ISO 9001:2015 Certified Track</span>
              </div>
              <div class="hero-trust-pill-large">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                <span>Next Practical Batch Starts Monday</span>
              </div>
            </div>
          </div>

          <!-- Hero Right Column: EmailJS Lead Form (No Address) -->
          <div class="hero-enquiry-card" id="hero-enquiry-form">
            <div class="hero-form-header">
              <span class="form-tag">ENQUIRE FOR BATCH DETAILS</span>
              <h3>Speak with Admissions</h3>
              <p>Get batch timings, fee structures, and customized learning guidance.</p>
            </div>

            <form class="hero-lead-form" id="hero-emailjs-form">
              <input type="hidden" name="course_name" value="${course.title}">
              <div class="hero-form-group">
                <label for="hero_user_name">Full Name *</label>
                <input type="text" id="hero_user_name" name="user_name" placeholder="Enter your name" required>
              </div>
              <div class="hero-form-group">
                <label for="hero_user_phone">Phone Number *</label>
                <input type="tel" id="hero_user_phone" name="user_phone" placeholder="Enter your phone number" required>
              </div>
              <div class="hero-form-group">
                <label for="hero_user_email">Email Address *</label>
                <input type="email" id="hero_user_email" name="user_email" placeholder="Enter your email" required>
              </div>
              <div class="hero-form-group">
                <label for="hero_user_message">Message / Query</label>
                <input type="text" id="hero_user_message" name="message" placeholder="Optional query...">
              </div>
              <button type="submit" class="btn-hero-submit">
                <span>Submit Lead Enquiry</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <span class="hero-form-status" id="hero-form-status"></span>
            </form>
          </div>
        </div>

        <!-- Key Metadata Fact Bar -->
        <div class="course-facts-bar">
          <div class="fact-item"><span>Duration</span><strong>${course.duration}</strong></div>
          <div class="fact-item"><span>Skill Level</span><strong>${course.level}</strong></div>
          <div class="fact-item"><span>Learning Format</span><strong>${course.lab}</strong></div>
          <div class="fact-item"><span>Avg Salary Package</span><strong class="salary-highlight">${course.salaryRange || '₹7.0 LPA - ₹16.0 LPA'}</strong></div>
        </div>
      </div>
    </section>

    <!-- 4 Core Career Pillars Banner -->
    <section class="career-pillars-banner">
      <div class="course-shell">
        <div class="pillars-grid">
          <div class="pillar-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            <span>Build an Impressive Portfolio</span>
          </div>
          <div class="pillar-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            <span>Expand Your Career Opportunities</span>
          </div>
          <div class="pillar-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            <span>Stay Ahead with Industry Trends</span>
          </div>
          <div class="pillar-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <span>Master Production Tools</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Flexible Learning Modes -->
    <section class="course-section bg-alt" id="learning-modes">
      <div class="course-shell">
        <div class="section-center-header">
          <span class="course-section-label">FLEXIBLE TRAINING OPTIONS</span>
          <h2>Flexible Learning Modes to Fit Your Schedule</h2>
          <p class="section-sub-copy">Choose the training format that best aligns with your routine, learning pace, and professional goals.</p>
        </div>

        <div class="learning-modes-grid">
          <div class="mode-card">
            <div class="mode-icon">🏫</div>
            <h3>Interactive Classroom Sessions</h3>
            <p>In-person campus learning at our Hyderabad &amp; Bengaluru centers with live mentor lab supervision.</p>
          </div>
          <div class="mode-card">
            <div class="mode-icon">💻</div>
            <h3>Live Virtual Instructor-Led</h3>
            <p>Real-time interactive online batches with direct Q&amp;A, code walkthroughs, and screen-share guidance.</p>
          </div>
          <div class="mode-card">
            <div class="mode-icon">⚡</div>
            <h3>Self-Guided Online Practice</h3>
            <p>24/7 access to cloud lab environments, recorded module sessions, and project assignments.</p>
          </div>
          <div class="mode-card">
            <div class="mode-icon">🏢</div>
            <h3>Corporate &amp; Enterprise Training</h3>
            <p>Customized tech stack training tailored for enterprise teams, upskilling, and bulk certifications.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Overview & Key Outcomes -->
    <section class="course-section">
      <div class="course-shell">
        <div class="course-overview-grid">
          <div class="overview-left">
            <span class="course-section-label">PROGRAM OVERVIEW</span>
            <h2>Master Real-World Industry Workflows</h2>
            <p class="course-lead-copy">${course.overview}</p>
            
            <div class="outcomes-list">
              <h3>Key Learning Outcomes</h3>
              ${course.outcomes.map(o => `
                <div class="outcome-bullet">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>${o}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="overview-right">
            <div class="tools-card">
              <h3>Tools &amp; Technologies Covered</h3>
              <div class="tools-grid">
                ${toolsMarkup}
              </div>
            </div>

            <div class="audience-card">
              <h3>Who Should Enroll</h3>
              <ul>
                ${course.audience.map(a => `<li>${a}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- High-Paying Career Opportunities -->
    ${course.careers ? `
    <section class="course-section bg-alt" id="career-opportunities">
      <div class="course-shell">
        <div class="section-center-header">
          <span class="course-section-label">CAREER OUTCOMES</span>
          <h2>High-Paying Careers for ${course.shortTitle || course.title} Graduates</h2>
          <p class="section-sub-copy">Explore high-demand industry roles and average salary potential upon program completion.</p>
        </div>
        <div class="career-roles-grid">
          ${careerMarkup}
        </div>
      </div>
    </section>
    ` : ''}

    <!-- Comprehensive Curriculum Accordion -->
    <section class="course-section" id="course-curriculum">
      <div class="course-shell">
        <div class="section-center-header">
          <span class="course-section-label">CURRICULUM BREAKDOWN</span>
          <h2>Comprehensive 6-Module Learning Pathway</h2>
          <p class="section-sub-copy">Every module combines theory explanation, guided live lab practice, and a mentor code review checkpoint.</p>
        </div>
        <div class="course-module-list">${moduleMarkup}</div>
      </div>
    </section>

    <!-- Frequently Asked Questions (FAQs) -->
    <section class="course-section bg-alt">
      <div class="course-shell">
        <div class="section-center-header">
          <span class="course-section-label">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Have Questions? We Have Answers.</h2>
        </div>
        <div class="course-faq-list">${faqMarkup}</div>
      </div>
    </section>
  `;
}

function initCourseInteractions(page) {
  page.querySelectorAll('.course-module-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const body = document.getElementById(button.getAttribute('aria-controls'));
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      body.hidden = expanded;
    });
  });

  page.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const body = document.getElementById(button.getAttribute('aria-controls'));
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      body.hidden = expanded;
    });
  });

  const heroForm = page.querySelector('#hero-emailjs-form');
  if (heroForm) {
    heroForm.addEventListener('submit', event => {
      event.preventDefault();
      const status = page.querySelector('#hero-form-status');
      if (status) {
        status.textContent = 'Thank you! Your enquiry has been received. Our team will contact you shortly.';
        status.style.color = '#059669';
      }
      heroForm.reset();
    });
  }
}
