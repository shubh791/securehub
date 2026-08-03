const courseData = {
  ceh: {
    title: 'CEH v12 Master Program', shortTitle: 'CEH v12 Master', label: 'Cyber Security', duration: '6 months', level: 'Intermediate', lab: 'Ethical hacking lab', practicalWork: '8 guided labs',
    subtitle: 'Learn ethical hacking through controlled live-lab scenarios, guided attack paths and the defensive practices that protect modern organisations.',
    overview: 'A practical ethical hacking program for learners who want to understand how attackers think, test systems responsibly and document meaningful security findings.',
    audience: ['Students building a cybersecurity career', 'IT professionals moving into security', 'Network administrators strengthening defence skills'],
    skills: ['Linux', 'Nmap', 'Wireshark', 'Burp Suite', 'Metasploit', 'OWASP', 'Web security', 'Reporting'],
    outcomes: ['Map attack surfaces with a repeatable reconnaissance workflow', 'Test common network and web weaknesses in a controlled lab', 'Write clear vulnerability reports with practical remediation steps'],
    modules: [['Security foundations', 'Threat landscape, ethical practice, networking essentials and Linux command-line confidence.'], ['Reconnaissance and enumeration', 'Discover assets, services and exposed paths using structured information gathering.'], ['Network assessment', 'Work with scanning, traffic analysis, authentication risks and common service weaknesses.'], ['Web application testing', 'Practice the OWASP Top 10, request tampering, session security and vulnerability reporting.'], ['Capstone assessment', 'Plan, execute and present a guided assessment with mentor feedback.']],
    projects: ['Internal network assessment', 'E-commerce web security review', 'Executive-ready vulnerability report'],
    faqs: [['Who can join this program?', 'Learners with basic computer and networking familiarity can start. The first module brings everyone to a common security foundation.'], ['Do I work on real tools?', 'Yes. Every module includes guided lab work using security tools in a legal, controlled environment.'], ['Is an exam voucher included?', 'Certification preparation is covered. Voucher availability depends on the selected batch and is confirmed by the admissions team.']]
  },
  soc: {
    title: 'SOC Analyst (L1/L2)', shortTitle: 'SOC Analyst', label: 'Cyber Security', duration: '4 months', level: 'Beginner to intermediate', lab: 'SIEM investigation lab', practicalWork: '6 incident scenarios',
    subtitle: 'Build the monitoring, investigation and incident-response habits used by security operations teams.',
    overview: 'A job-focused path for learners who want to triage security alerts, investigate suspicious activity and communicate clearly during an incident.',
    audience: ['Graduates entering a SOC role', 'Support engineers moving into security', 'Learners interested in blue-team operations'],
    skills: ['SIEM', 'Splunk', 'Log analysis', 'MITRE ATT&CK', 'EDR', 'Threat triage', 'Incident response', 'Ticketing'],
    outcomes: ['Analyse alerts and separate real risk from noise', 'Investigate events across logs, endpoints and network signals', 'Escalate cases with clear evidence and recommended actions'],
    modules: [['SOC foundations', 'Security operations roles, alert lifecycle, severity and analyst communication.'], ['Logs and detection', 'Read endpoint, authentication, firewall and cloud logs with investigation context.'], ['SIEM workflows', 'Create searches, dashboards and investigation paths using SIEM tooling.'], ['Threat investigation', 'Use MITRE ATT&CK to identify tactics, evidence and likely scope.'], ['Incident response practice', 'Triage, document, escalate and close realistic incident scenarios.']],
    projects: ['Suspicious login investigation', 'Malware alert triage', 'Incident timeline and escalation report'],
    faqs: [['Is this suitable for beginners?', 'Yes. The program starts with SOC fundamentals before moving into SIEM workflows and incident scenarios.'], ['Will I learn Splunk?', 'The curriculum uses SIEM concepts and guided Splunk-style investigation exercises.'], ['What roles does it prepare me for?', 'The program supports entry-level SOC Analyst, Security Monitoring and Incident Response support roles.']]
  },
  vpt: {
    title: 'Web Application VPT', shortTitle: 'Web Application VPT', label: 'Cyber Security', duration: '3 months', level: 'Intermediate', lab: 'Web security lab', practicalWork: '5 assessment briefs',
    subtitle: 'Find, validate and report web application weaknesses through a focused OWASP and bug-bounty-style testing workflow.',
    overview: 'A hands-on vulnerability assessment and penetration testing course built around modern web applications, practical methodology and responsible reporting.',
    audience: ['Aspiring application security testers', 'Developers who want stronger secure-coding awareness', 'Cybersecurity learners with basic web knowledge'],
    skills: ['HTTP', 'Burp Suite', 'OWASP Top 10', 'Authentication', 'API testing', 'XSS', 'SQLi', 'Vulnerability reporting'],
    outcomes: ['Test web applications using a structured assessment checklist', 'Validate common authentication, input and API security weaknesses', 'Communicate technical findings in a useful developer-ready report'],
    modules: [['Web and HTTP essentials', 'Requests, sessions, cookies, APIs and the architecture behind modern web applications.'], ['Assessment methodology', 'Scope a test, map attack surfaces and maintain clean evidence throughout an engagement.'], ['OWASP Top 10 practice', 'Test common input, access-control, authentication and configuration weaknesses.'], ['API and modern application testing', 'Assess REST APIs, tokens, rate limits and application logic safely.'], ['Professional reporting', 'Prioritise findings, explain risk and recommend clear remediation.']],
    projects: ['OWASP testing workbook', 'API security assessment', 'Full web application VPT report'],
    faqs: [['Do I need coding experience?', 'Basic HTML, JavaScript and web concepts help, but the course explains the required web foundations first.'], ['Is this a legal hacking course?', 'Yes. All practice happens in authorised lab environments with a strong focus on ethical testing.'], ['Which tools are covered?', 'Learners work with browser tools, Burp Suite and supporting reconnaissance and reporting workflows.']]
  },
  'security-plus': {
    title: 'CompTIA Security+', shortTitle: 'CompTIA Security+', label: 'Cyber Security', duration: '3 months', level: 'Foundation', lab: 'Security foundations lab', practicalWork: 'Small-business risk review, Identity and access design exercise, Incident response tabletop scenario',
    subtitle: 'Build the broad security knowledge needed to understand risk, controls, operations and modern enterprise defence.',
    overview: 'A practical foundation program aligned to the core concepts behind global cybersecurity certification and entry-level security roles.',
    audience: ['Students beginning a security career', 'IT support professionals building security knowledge', 'Learners preparing for a recognised foundation pathway'],
    skills: ['Risk management', 'Network security', 'Identity', 'Cryptography', 'Cloud security', 'Governance', 'Security operations', 'Troubleshooting'],
    outcomes: ['Explain how core security controls reduce organisational risk', 'Recognise common identity, network, cloud and endpoint security issues', 'Build confidence for security interviews and certification preparation'],
    modules: [['Security concepts', 'Threats, vulnerabilities, controls, risk language and the principles of secure design.'], ['Architecture and identity', 'Network segmentation, authentication, access control and secure infrastructure concepts.'], ['Security operations', 'Monitoring, incident response, business continuity and day-to-day defence practices.'], ['Governance and risk', 'Policies, compliance, vendor risk and communicating security decisions.'], ['Exam and scenario practice', 'Apply concepts to practical scenarios and structured certification preparation.']],
    projects: ['Small-business risk review', 'Identity and access design exercise', 'Incident response tabletop scenario'],
    faqs: [['Is this an advanced technical course?', 'It is a foundation program, so it is appropriate for learners starting a cybersecurity pathway.'], ['Does it include practical work?', 'Yes. Concepts are supported with short labs, scenarios and review exercises.'], ['Will this help with certification preparation?', 'The curriculum is designed to reinforce the knowledge areas commonly expected in a global security foundation pathway.']]
  }
};

function getCourse(key) {
  if (courseData[key]) return courseData[key];
  const title = key.replace(/[-_]/g, ' ').replace(/\w/g, c => c.toUpperCase());
  return {
    title: title,
    shortTitle: title,
    label: 'Professional Certification',
    duration: '3 to 4 months',
    level: 'Intermediate',
    lab: 'Live lab practice',
    practicalWork: '4 practical projects',
    subtitle: `Learn ${title} through controlled live-lab scenarios, guided practice and industry workflows.`,
    overview: `A practical program for learners who want to understand real workflows, build hands-on skills and document meaningful results.`,
    outcomes: [
      `Master core methodologies and practical workflows of ${title}`,
      'Build hands-on project experience in guided lab environments',
      'Prepare for technical interviews and professional role scenarios'
    ],
    modules: [
      ['Foundations', `Core concepts, terminology and essential tools behind ${title}.`],
      ['Practical Skills', `Guided exercises and hands-on workflow execution in controlled environments.`],
      ['Advanced Assessment', `Work with complex scenarios, troubleshooting and industry standards.`],
      ['Capstone Review', `Plan, execute and present a guided practical project with feedback.`]
    ]
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('course-page');
  if (!page) return;
  const course = getCourse(page.dataset.course);
  if (!course) return;

  document.title = `${course.title} | SecureHub`;
  page.innerHTML = renderCoursePage(course);
  initCourseInteractions(page);
});

function renderCoursePage(course) {
  const moduleMarkup = course.modules.map(([title, description], index) => `<article class="course-module"><button class="course-module-toggle" aria-expanded="${index === 0}" aria-controls="module-${index}"><span><b>Module ${String(index + 1).padStart(2, '0')}</b>${title}</span><span class="course-module-plus" aria-hidden="true">+</span></button><div class="course-module-body" id="module-${index}" ${index === 0 ? '' : 'hidden'}><p>${description}</p><ul><li>Guided instructor walkthrough</li><li>Hands-on lab practice</li><li>Review and feedback checkpoint</li></ul></div></article>`).join('');
  return `
    <section class="course-hero course-hero-simple" id="course-overview">
      <div class="course-shell">
        <p class="course-breadcrumb"><a href="index.html">Home</a><span>/</span><a href="index.html#courses-section">Courses</a><span>/</span>${course.label}</p>
        <div class="course-hero-grid course-hero-with-form">
          <div class="course-hero-copy">
            <span class="course-eyebrow">${course.label} learning path</span>
            <h1>${course.title}</h1>
            <p>${course.subtitle}</p>
          </div>
          <aside class="course-enquiry-card course-hero-enquiry" id="course-enquiry"><span>Speak with an advisor</span><h3>Find the right starting point.</h3><p>Share your details and our admissions team will explain the next available batch.</p><form class="course-enquiry-form"><label>Name<input required name="name" type="text" placeholder="Your name"></label><label>Phone<input required name="phone" type="tel" placeholder="Your phone number"></label><button type="submit">Request a callback</button><small class="course-form-message" aria-live="polite"></small></form></aside>
        </div>
        <div class="course-facts" aria-label="Course facts"><div><span>Duration</span><strong>${course.duration}</strong></div><div><span>Level</span><strong>${course.level}</strong></div><div><span>Learning format</span><strong>Live + lab practice</strong></div><div><span>Practical work</span><strong>${course.practicalWork.split(',').join('<br>')}</strong></div></div>
      </div>
    </section>
    <section class="course-section course-detail-section"><div class="course-shell course-detail-layout"><article class="course-description-panel"><span class="course-section-label">Course description</span><h2>Learn the skills that matter in real security work.</h2><p class="course-lead">${course.overview}</p><div class="course-description-points">${course.outcomes.map(outcome => `<p>${outcome}</p>`).join('')}</div></article><div id="course-curriculum" class="course-curriculum-block"><span class="course-section-label">Curriculum</span><h2>What you will cover.</h2><p class="course-lead">Every module combines explanation, controlled practice and a clear review point.</p><div class="course-module-list">${moduleMarkup}</div></div></div></section>
  `;
}

function initCourseInteractions(page) {
  page.querySelectorAll('.course-module-toggle').forEach(button => button.addEventListener('click', () => {
    const body = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    body.hidden = expanded;
  }));
  const form = page.querySelector('.course-enquiry-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const msg = form.querySelector('.course-form-message');
      if (msg) msg.textContent = 'Thanks. Our admissions team will contact you shortly.';
      form.reset();
    });
  }
}
