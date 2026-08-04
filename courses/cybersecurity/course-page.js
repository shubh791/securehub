/**
 * SecureHub Master Course Page Renderer
 * Unified Clean Light Hero (Balanced text & 1:1 right image match),
 * Interactive Designation Graph & Scope Switcher, Tech SVG Skill Icons,
 * Fieldset Skills Legend Box, 6-Module Curriculum, Categorized FAQs.
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
    'ceh': 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg',
    'ceh-v12-master-program': 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg',
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
    'soc': 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg',
    'soc-analyst-l1-l2': 'assets/images/courses/cybersecurity/ethical-hacking-cyber-security.jpg',
    'soft-skills-mastery': 'assets/images/courses/official-logos/softskills-official.svg',
    'terraform': 'assets/images/courses/official-logos/terraform-official.svg',
    'ui-ux-front-end-integration': 'assets/images/courses/uiux/ui-ux-design-front-end-integration-mastery.png',
    'uiux-design-mastery': 'assets/images/courses/uiux/ui-ux-design-front-end-integration-mastery.png',
    'vpt': 'assets/images/courses/official-logos/advanced-pentest-square.svg',
    'web-application-vpt': 'assets/images/courses/official-logos/advanced-pentest-square.svg'
  };
  return logoMap[key] || 'assets/images/courses/official-logos/devops-official.svg';
}

const recommendedCourseCatalog = [
  {
    key: 'advanced-mern-stack',
    category: 'Web Development',
    title: 'Advanced MERN Stack Development Program',
    summary: 'Build and deploy complete full-stack JavaScript products.',
    duration: '9 months',
    rating: '4.8/5',
    href: 'courses/web-development/advanced-mern-stack.html'
  },
  {
    key: 'data-science-machine-learning-genai',
    category: 'Data Science & AI',
    title: 'Data Science, Machine Learning & GenAI',
    summary: 'Turn data into predictive insights and production AI workflows.',
    duration: '9 months',
    rating: '4.9/5',
    href: 'courses/data-science/data-science-machine-learning-genai.html'
  },
  {
    key: 'advanced-penetration-testing',
    category: 'Cyber Security',
    title: 'Advanced Penetration Testing',
    summary: 'Practice modern offensive security in controlled lab environments.',
    duration: '6 months',
    rating: '4.8/5',
    href: 'courses/cybersecurity/advanced-penetration-testing.html'
  },
  {
    key: 'certified-aws-devops',
    category: 'Cloud & DevOps',
    title: 'Certified AWS DevOps Program',
    summary: 'Automate cloud delivery with CI/CD, containers, and AWS services.',
    duration: '6 months',
    rating: '4.8/5',
    href: 'courses/devops/certified-aws-devops.html'
  },
  {
    key: 'ui-ux-front-end-integration',
    category: 'UI/UX Design',
    title: 'UI/UX & Front-End Integration Mastery',
    summary: 'Design polished digital experiences and bring them to life.',
    duration: '6 months',
    rating: '4.7/5',
    href: 'courses/uiux/ui-ux-front-end-integration.html'
  }
];

const webDevelopmentCourseKeys = new Set([
  'advanced-mern-stack',
  'react-development',
  'python-django',
  'java-training',
  'mern',
  'django'
]);

const sharedCourseFaqs = [
  { cat: 'Course Basics', q: 'Who can enroll in a SecureHub course?', a: 'Students, graduates, working professionals, career changers, and business learners can enroll. Each program begins with guided foundations before progressing to more advanced, job-focused work.' },
  { cat: 'Course Basics', q: 'Do I need prior technical experience?', a: 'Most programs are suitable for beginners. Basic computer literacy is enough to start, and any course-specific prerequisites are introduced before the advanced modules.' },
  { cat: 'Course Basics', q: 'How is progress measured throughout the program?', a: 'Progress is reviewed through practical exercises, module checkpoints, assignments, mentor feedback, and portfolio milestones rather than relying only on final examinations.' },
  { cat: 'Learning Format & Flexibility', q: 'Which learning formats are available?', a: 'Learners can choose from live online instruction, classroom batches where available, guided practice resources, and customized corporate training formats.' },
  { cat: 'Learning Format & Flexibility', q: 'What happens if I miss a live class?', a: 'Learners can use session resources, recordings where provided, and mentor-led doubt support to catch up before the next practical checkpoint.' },
  { cat: 'Learning Format & Flexibility', q: 'Can working professionals manage the schedule?', a: 'Yes. Weekday and weekend batch options are designed to support working professionals, students, and learners balancing other commitments.' },
  { cat: 'Projects & Hands', q: 'Are hands-on projects included in every course?', a: 'Yes. Every program includes guided practical work, assignments, or projects that apply the course concepts in realistic scenarios.' },
  { cat: 'Projects & Hands', q: 'Are the projects based on real industry situations?', a: 'Projects are structured around practical workflows, common business requirements, and role-relevant challenges so learners practice how the skills are used at work.' },
  { cat: 'Projects & Hands', q: 'Can I showcase my project work in a portfolio?', a: 'Yes. Learners receive guidance on documenting, presenting, and organizing eligible project work for a portfolio, GitHub profile, case study, or interview discussion.' },
  { cat: 'Certification & Careers', q: 'Will I receive a certificate after completion?', a: 'Learners who meet the completion requirements receive a SecureHub training certificate that records the completed program and validates their practical learning journey.' },
  { cat: 'Certification & Careers', q: 'What career support is included?', a: 'Career support can include resume and profile reviews, mock interviews, project presentation guidance, role mapping, and interview-readiness sessions.' },
  { cat: 'Certification & Careers', q: 'Does the training support external certification preparation?', a: 'Where a program aligns with a vendor or professional certification, the curriculum supports the relevant knowledge areas and practical skills. External exam registration and fees remain separate unless stated otherwise.' },
  { cat: 'Tools & Technologies', q: 'Which tools will I use during training?', a: 'Each course uses the tools, platforms, and workflows shown in its Course Snapshot. The focus is on current, role-relevant technology rather than isolated demonstrations.' },
  { cat: 'Tools & Technologies', q: 'Will I receive access to practical lab environments?', a: 'Courses that require technical practice include guided lab activities or setup support so learners can complete exercises in a safe, structured environment.' },
  { cat: 'Tools & Technologies', q: 'Do I need a high-end computer to participate?', a: 'A modern laptop with a stable internet connection is suitable for most programs. Mentors provide setup guidance and explain any additional course-specific requirements.' },
  { cat: 'Support & Community', q: 'Will I receive mentor support during the course?', a: 'Yes. Experienced trainers guide concepts, practical work, reviews, and learning milestones throughout the program.' },
  { cat: 'Support & Community', q: 'How are questions and technical doubts handled?', a: 'Doubts are addressed during live sessions, guided reviews, and designated support touchpoints so learners can resolve blockers before moving forward.' },
  { cat: 'Support & Community', q: 'Can I continue learning with the SecureHub community?', a: 'Learners can stay connected through relevant workshops, peer discussions, alumni activities, and learning updates made available for their program.' }
];

const sharedWebCourseFaqs = [
  ...sharedCourseFaqs,
  { cat: 'Course Basics', q: 'What does the web-development learning path cover?', a: 'The path connects browser foundations, programming, application architecture, data handling, security, testing, deployment, and portfolio presentation. The exact stack is shown in each course snapshot.' },
  { cat: 'Course Basics', q: 'How much weekly practice should I plan for?', a: 'Most learners benefit from scheduling regular practice outside live sessions for exercises, revision, project work, and mentor feedback. Your trainer will explain the expected rhythm for the selected batch.' },
  { cat: 'Learning Format & Flexibility', q: 'Are live demonstrations included alongside theory?', a: 'Yes. Instructors demonstrate implementation and debugging during live sessions, followed by guided exercises and project checkpoints that let learners apply the same ideas independently.' },
  { cat: 'Learning Format & Flexibility', q: 'Can I revisit code examples after a session?', a: 'Relevant examples, notes, and practice instructions are made available through the course learning workflow so learners can revise concepts and complete unfinished exercises.' },
  { cat: 'Projects & Hands', q: 'Will projects include both interface and application logic?', a: 'Projects follow the selected course stack. Full-stack programs combine interface, server, data, and deployment work, while specialist programs go deeper into their primary frontend or backend discipline.' },
  { cat: 'Projects & Hands', q: 'Will mentors review project structure and code quality?', a: 'Project checkpoints include feedback on implementation choices, maintainability, accessibility, security, testing, documentation, and how clearly the work can be presented.' },
  { cat: 'Certification & Careers', q: 'Which web-development roles can this training support?', a: 'Depending on the selected stack, learners can prepare for frontend, backend, Java, Python, React, Django, MERN, or broader full-stack development opportunities.' },
  { cat: 'Certification & Careers', q: 'Will my portfolio be reviewed before interviews?', a: 'Career-readiness support includes guidance on repository organization, project documentation, deployed demonstrations, technical explanation, and presenting the strongest work during interviews.' },
  { cat: 'Tools & Technologies', q: 'How do you keep frameworks and tooling current?', a: 'Course examples and workflows are reviewed against current stable practices, while mentors explain durable concepts so learners can adapt when individual tools or framework versions change.' },
  { cat: 'Tools & Technologies', q: 'Are deployment and version-control workflows included?', a: 'Yes. Web-development courses include Git-based collaboration and practical deployment steps appropriate to the stack, together with environment configuration and production-readiness guidance.' },
  { cat: 'Support & Community', q: 'Will I receive feedback on coding assignments?', a: 'Mentors use assignment and project checkpoints to identify gaps, explain improvements, and help learners develop a repeatable debugging and review process.' },
  { cat: 'Support & Community', q: 'Is support available while I work on the capstone?', a: 'Yes. Capstone support focuses on planning, technical blockers, review milestones, documentation, deployment, and preparing a clear final demonstration.' }
];

function getRecommendedCourses(currentKey) {
  return recommendedCourseCatalog.filter(course => course.key !== currentKey).slice(0, 4);
}

function getTechIcon(name) {
  const iconMap = {
    'React': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><ellipse cx="12" cy="12" rx="10" ry="4.5"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="2" fill="#0284c7"/></svg>',
    'React 19': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><ellipse cx="12" cy="12" rx="10" ry="4.5"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="2" fill="#0284c7"/></svg>',
    'Next.js': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f172a" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 16V8l8 9.5V8"/></svg>',
    'Next.js 15': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f172a" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 16V8l8 9.5V8"/></svg>',
    'Node.js': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/><circle cx="12" cy="12" r="3" fill="#16a34a"/></svg>',
    'Express.js': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2"><path d="M4 12h16M12 4v16"/></svg>',
    'MongoDB': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M12 2v20M7 8c2.5-3 7.5-3 10 0 0 6-5 12-5 12S7 14 7 8z"/></svg>',
    'TypeScript': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 9h6M10 9v8M14 13c1 0 2 .5 2 1.5s-1 1.5-2 1.5h-1v2h3"/></svg>',
    'Prisma': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f172a" stroke-width="2"><path d="M12 2L3 19h18L12 2z"/></svg>',
    'Prisma ORM': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f172a" stroke-width="2"><path d="M12 2L3 19h18L12 2z"/></svg>',
    'Redux Toolkit': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/></svg>',
    'Tailwind CSS': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><path d="M12 6c-3 0-5 2-6 5 2-1 4-1 5 0 1 1 2 3 4 3 3 0 5-2 6-5-2 1-4 1-5 0-1-1-2-3-4-3zM6 14c-3 0-5 2-6 5 2-1 4-1 5 0 1 1 2 3 4 3 3 0 5-2 6-5-2 1-4 1-5 0-1-1-2-3-4-3z"/></svg>',
    'Docker': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><rect x="4" y="11" width="4" height="3"/><rect x="9" y="11" width="4" height="3"/><rect x="14" y="11" width="4" height="3"/><path d="M2 16c2 2 6 3 10 3s8-1 10-3"/></svg>',
    'Git': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6"/></svg>',
    'GitHub': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f172a" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
    'HTML5': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2"><path d="M4 3l2 16 6 2 6-2 2-16H4z"/></svg>',
    'CSS3': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><path d="M4 3l2 16 6 2 6-2 2-16H4z"/></svg>',
    'GraphQL': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2"><polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2"/></svg>',
    'VS Code': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><path d="M16.5 3.5L5 12l11.5 8.5L21 17V7l-4.5-3.5z"/></svg>',
    'WebSockets': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M4 12a8 8 0 0 1 16 0M8 12a4 4 0 0 1 8 0"/><circle cx="12" cy="12" r="1.5" fill="#2563eb"/></svg>'
  };
  const cyberToolIcons = {
    'Aircrack-ng': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1677ff" stroke-width="2"><path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1" fill="#1677ff"/></svg>',
    'Burp Suite': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e8751a" stroke-width="2"><path d="M9 9h6M9 15h6M5 4h14v16H5z"/><path d="M12 4v16"/></svg>',
    'Hashcat': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><path d="M8 10V7a4 4 0 0 1 8 0v3"/><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M12 14v2"/></svg>',
    'John the Ripper': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c2410c" stroke-width="2"><path d="M12 3v18M7 8l5-5 5 5M7 16l5 5 5-5"/></svg>',
    'kali linux': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1677ff" stroke-width="2"><path d="M4 5h16v14H4z"/><path d="m8 10 2 2-2 2M12 16h4"/></svg>',
    'Linux': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#334155" stroke-width="2"><path d="M8 4c1.2-1 6.8-1 8 0l1 10-2 6H9l-2-6z"/><circle cx="10" cy="9" r=".8" fill="#334155"/><circle cx="14" cy="9" r=".8" fill="#334155"/></svg>',
    'Maltego': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="12" cy="18" r="2"/><path d="m7.8 7.1 2.8 9M16.2 8.2l-3 7.8M8 6.4l8 .3"/></svg>',
    'Metasploit Framework': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><path d="M12 3 4 7v5c0 5 3.4 7.7 8 9 4.6-1.3 8-4 8-9V7z"/><path d="m9 12 2 2 4-4"/></svg>',
    'Nikto': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4M8 11h6M11 8v6"/></svg>',
    'Nmap': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="m12 7 3 5-5 3z"/></svg>',
    'OWASP ZAP': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e8751a" stroke-width="2"><path d="m13 2-9 12h7l-1 8 10-13h-7z"/></svg>',
    'SET (Social Engineering Toolkit)': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><circle cx="12" cy="8" r="3"/><path d="M5 21c.5-4 3-6 7-6s6.5 2 7 6"/></svg>',
    'Shodan': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.2 2.3 2.2 13.7 0 16"/></svg>',
    'SQLMap': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v10c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3"/></svg>',
    'VeraCrypt': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2"/></svg>',
    'Wireshark': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><path d="M4 15c2-6 5-9 8-9s6 3 8 9"/><path d="M4 15h16M7 19h10"/></svg>'
  };
  return iconMap[name] || cyberToolIcons[name] || '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2"/></svg>';
}

const courseData = {
  'advanced-mern-stack': {
    title: 'Advanced MERN Stack Development Program',
    shortTitle: 'MERN Stack',
    label: 'Full Stack Engineering',
    duration: '9 Months (36 Weeks)',
    level: 'Beginner to Advanced',
    lab: 'Live Web Development Studio',
    practicalWork: '15+ Production SaaS & Capstone Apps',
    salaryRange: '₹7.5 LPA - ₹16.0 LPA',
    highestPkg: '₹76 Lakhs Highest Annual Package',
    placements: '150k+ Placements till Date',
    partners: '600+ Hiring Partners',
    rating: '4.8 ★★★★★ (426 Student Reviews)',
    subtitle: 'The Advanced MERN Stack Development program is designed to transform aspiring developers into industry-ready full-stack professionals. Build a strong GitHub portfolio and graduate ready for top tech challenges.',
    overview: 'Complete MERN Stack Development Program is an intensive bootcamp designed to transform beginners into industry-ready full-stack software engineers capable of building, deploying, and scaling modern web applications.',
    careerIntro: 'Progress from full-stack foundations to production-ready MERN engineering through React, Node.js, Express, MongoDB, Next.js, GraphQL, cloud delivery, and a substantial project portfolio.',
    tools: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React 19', 'Next.js 15', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Prisma ORM', 'Redux Toolkit', 'Tailwind CSS', 'GraphQL', 'AWS Cloud', 'Docker', 'WebSockets', 'VS Code', 'Git', 'GitHub'],
    audience: ['College Students (CS/IT & related) aiming for tech roles', 'Career switchers from non-tech backgrounds entering software engineering', 'Frontend Engineers upgrading to Full-Stack Node.js & Architecture'],
    projects: [
      {
        num: '#01',
        title: 'Full-Stack Job Portal Application',
        desc: 'Build a production-grade hiring portal with role-based access control, applicant management, and real-time email notifications.',
        skills: ['Authentication', 'Role-Based Access (RBAC)', 'REST APIs', 'MongoDB Aggregations', 'React State'],
        tags: ['React 19', 'Node.js', 'Express.js', 'MongoDB']
      },
      {
        num: '#02',
        title: 'E-Commerce Web Application',
        desc: 'Architect a modern online store with product filtering, shopping cart persistence, Stripe payment integration, and admin dashboards.',
        skills: ['Product Catalog Management', 'Cart Persistence', 'Stripe Payment Gateway', 'Node.js API', 'Redux Toolkit'],
        tags: ['React 19', 'Next.js 15', 'MongoDB', 'Redux Toolkit']
      },
      {
        num: '#03',
        title: 'Online Learning Management System (LMS)',
        desc: 'Engineer a scalable video streaming LMS with course subscriptions, progress tracking, role management, and secure media APIs.',
        skills: ['Video Integration', 'Secure API Endpoints', 'Payment Subscriptions', 'Tailwind Styling', 'WebSockets'],
        tags: ['React 19', 'Tailwind CSS', 'Node.js', 'Prisma ORM']
      }
    ],
    careers: [
      {
        role: 'MERN Stack Developer',
        range: '₹7.5 LPA - ₹16.0 LPA',
        salaryChart: { entryMin: 18, entryMax: 40, midMin: 40, midMax: 80, srMin: 80, srMax: 114 },
        scopeText: 'Develops full-stack web applications using MongoDB, Express, React, and Node.js; ensures performance, scalability, security, and responsive user experience.'
      },
      {
        role: 'Full Stack JavaScript Developer',
        range: '₹7.0 LPA - ₹14.5 LPA',
        salaryChart: { entryMin: 20, entryMax: 50, midMin: 50, midMax: 95, srMin: 95, srMax: 140 },
        scopeText: 'Builds both frontend and backend systems using modern JS frameworks; integrates RESTful APIs and maintains maintainable, scalable web architecture.'
      },
      {
        role: 'Frontend React & Next.js Engineer',
        range: '₹6.5 LPA - ₹13.0 LPA',
        salaryChart: { entryMin: 22, entryMax: 45, midMin: 45, midMax: 85, srMin: 85, srMax: 125 },
        scopeText: 'Specializes in building pixel-perfect, server-rendered UIs with Next.js App Router, Tailwind CSS, and state management pipelines.'
      },
      {
        role: 'Backend Node.js & API Specialist',
        range: '₹7.0 LPA - ₹15.0 LPA',
        salaryChart: { entryMin: 25, entryMax: 55, midMin: 55, midMax: 100, srMin: 100, srMax: 150 },
        scopeText: 'Architects microservices, GraphQL/REST APIs, database indexing, authentication security, and real-time WebSockets.'
      },
      {
        role: 'Web Application Engineer',
        range: '₹8.0 LPA - ₹16.5 LPA',
        salaryChart: { entryMin: 28, entryMax: 60, midMin: 60, midMax: 110, srMin: 110, srMax: 165 },
        scopeText: 'Engineers high-concurrency enterprise web solutions with cloud CI/CD deployment, automated testing, and performance profiling.'
      },
      {
        role: 'Cloud-Ready Full Stack Developer',
        range: '₹9.0 LPA - ₹18.0 LPA',
        salaryChart: { entryMin: 30, entryMax: 65, midMin: 65, midMax: 120, srMin: 120, srMax: 180 },
        scopeText: 'Combines full-stack JavaScript mastery with Docker containerization, AWS serverless deployments, and DevOps automated pipelines.'
      }
    ],
    outcomes: [
      'Build production-grade apps with React 19, Next.js 15 Server Components & Node.js microservices',
      'Master RESTful & GraphQL APIs with JWT authentication, rate limiting, and role-based access control (RBAC)',
      'Design optimized MongoDB & PostgreSQL schemas using Mongoose ORM and Prisma migrations',
      'Deploy scalable cloud applications to Vercel, AWS, and Docker containers with automated CI/CD pipelines'
    ],
    modules: [
      {
        title: 'Module 1: Web Fundamentals & Frontend Basics',
        objective: 'Master HTML5, CSS3, and responsive design principles to build modern, mobile-first websites with clean semantic structure and professional styling.',
        bullets: [
          'Learn HTML5 semantic elements for clean and meaningful page structure',
          'Create and manage HTML forms with proper input types and validation',
          'Integrate multimedia elements (audio, video, iframe) effectively',
          'Master CSS Flexbox for one-dimensional layouts',
          'Master CSS Grid for complex two-dimensional layouts',
          'Implement responsive design using media queries',
          'Get introduced to Tailwind CSS and its utility-first approach',
          'Build pixel-perfect, fully responsive web pages from scratch'
        ]
      },
      {
        title: 'Module 2: Advanced JavaScript ES6+ & Async Engine',
        objective: 'Deep dive into modern JavaScript programming, DOM manipulation, closures, promises, async/await, and modern ES Modules.',
        bullets: [
          'Understand JavaScript execution context, call stack, and event loop',
          'Master ES6+ arrow functions, destructuring, spread/rest operators',
          'Work with Promises, async/await, and Fetch API for network requests',
          'Manipulate the DOM efficiently with event delegation and dynamic elements',
          'Object-Oriented Programming (OOP) and Prototype Inheritance in JS',
          'JavaScript Functional Programming concepts (map, filter, reduce)',
          'Error handling, try-catch blocks, and custom debugging strategies',
          'Build interactive client-side applications with local storage state'
        ]
      },
      {
        title: 'Module 3: Frontend Engineering with React 19 & Redux Toolkit',
        objective: 'Build scalable single-page web applications using React 19 Functional Components, Custom Hooks, State Management, and Redux Toolkit.',
        bullets: [
          'Master React 19 JSX syntax, props, state, and component lifecycle',
          'Utilize core hooks: useState, useEffect, useMemo, useCallback, useRef',
          'Create reusable custom hooks for modular code architecture',
          'Manage global state efficiently using React Context API & Redux Toolkit',
          'Implement client-side routing with React Router v6',
          'Form validation and state handling using React Hook Form & Zod',
          'Optimize React render performance and code splitting with Lazy/Suspense',
          'Build a full-fledged dynamic E-Commerce user portal'
        ]
      },
      {
        title: 'Module 4: Full Stack Frameworks with Next.js 15 App Router',
        objective: 'Architect enterprise server-rendered applications using Next.js 15 Server Components, Server Actions, and SSR/SSG rendering.',
        bullets: [
          'Master Next.js 15 App Router directory structure and file-based routing',
          'Understand Server Components vs Client Components rendering paradigms',
          'Implement Server Actions for mutation and database form submissions',
          'Execute Data Fetching, Caching, and Revalidation strategies',
          'Build dynamic metadata for advanced Search Engine Optimization (SEO)',
          'Implement NextAuth.js (Auth.js) for OAuth and credentials authentication',
          'Handle middleware security, route guards, and internationalization',
          'Deploy Next.js 15 SaaS applications to Vercel edge networks'
        ]
      },
      {
        title: 'Module 5: Backend Microservices with Node.js & Express',
        objective: 'Design scalable RESTful and GraphQL backend APIs using Node.js event-driven architecture, Express.js middleware, and security protocols.',
        bullets: [
          'Understand Node.js asynchronous architecture, modules, and file system',
          'Build RESTful APIs with Express.js routing, controllers, and services',
          'Implement custom middleware for authentication, logging, and error handling',
          'Secure backend endpoints with JWT tokens, bcrypt password hashing, and CORS',
          'Implement rate limiting, helmet security headers, and input sanitization',
          'Build GraphQL endpoints with Apollo Server and schema definitions',
          'Enable real-time communication using WebSockets (Socket.io)',
          'Write unit and integration tests for backend APIs using Jest & Supertest'
        ]
      },
      {
        title: 'Module 6: Database Engineering, Cloud & Capstone Deployment',
        objective: 'Master MongoDB NoSQL & Prisma ORM database modeling, Docker containerization, and AWS cloud deployment for production SaaS apps.',
        bullets: [
          'Design MongoDB collections, schemas, and Mongoose ORM validation models',
          'Execute complex MongoDB aggregation pipelines, indexing, and lookup joins',
          'Work with Prisma ORM for relational SQL database migrations (PostgreSQL/MySQL)',
          'Containerize MERN Stack applications using Docker and Docker Compose',
          'Configure environment variables, production builds, and Nginx reverse proxy',
          'Deploy backend APIs and database instances to AWS EC2, S3, and CloudFront',
          'Set up automated CI/CD pipelines with GitHub Actions',
          'Complete end-to-end Capstone Project review and portfolio presentation'
        ]
      },
      {
        title: 'Module 7: TypeScript, Testing & Engineering Quality',
        objective: 'Strengthen type safety, automated verification, debugging discipline, and maintainable full-stack delivery.',
        bullets: [
          'Model application contracts with TypeScript types, interfaces, unions, and generics',
          'Share validated data structures between browser and server layers',
          'Write component, API, and integration tests for critical user journeys',
          'Use mocks, fixtures, and test databases without coupling tests to production data',
          'Profile frontend rendering and backend request performance',
          'Apply accessibility, error-state, and responsive-behavior checks',
          'Review pull requests using clear quality and security criteria'
        ]
      },
      {
        title: 'Module 8: GraphQL, Real-Time Systems & Advanced Integration',
        objective: 'Build efficient data APIs and interactive product features for complex full-stack applications.',
        bullets: [
          'Design GraphQL schemas, queries, mutations, and resolver boundaries',
          'Connect React applications with Apollo Client caching and pagination',
          'Protect GraphQL operations with authentication and authorization rules',
          'Build real-time collaboration with Socket.io rooms and event flows',
          'Handle uploads, background tasks, notifications, and third-party services',
          'Plan failure states, retries, optimistic updates, and user feedback',
          'Document API behavior for team collaboration and portfolio review'
        ]
      },
      {
        title: 'Module 9: Major MERN Product Capstone',
        objective: 'Plan and deliver a complete multi-role product using a production-style engineering workflow.',
        bullets: [
          'Translate product requirements into features, data models, and delivery milestones',
          'Implement student, customer, staff, or administrator role workflows',
          'Connect secure authentication, payments, media, search, and notifications',
          'Build responsive dashboards and operational management interfaces',
          'Add analytics, audit history, validation, and recoverable error states',
          'Complete testing, code review, performance checks, and deployment readiness',
          'Present architectural decisions and a live product demonstration'
        ]
      },
      {
        title: 'Module 10: GenAI Features & Advanced Cloud Delivery',
        objective: 'Add responsible AI-assisted features and operate full-stack applications in a modern cloud environment.',
        bullets: [
          'Integrate text-generation and embedding APIs through protected server endpoints',
          'Design prompts, structured outputs, moderation, and fallback behavior',
          'Build semantic search, document assistance, and support workflows',
          'Protect secrets, control usage, and log AI feature behavior',
          'Deploy frontend, API, database, storage, and background services',
          'Configure CI/CD checks, environment promotion, monitoring, and rollback basics',
          'Finalize portfolio documentation, architecture diagrams, and interview walkthroughs'
        ]
      }
    ],
    faqs: [
      { cat: 'Course Basics', q: 'Do I need prior programming experience to join?', a: 'Basic computer literacy is expected. The program starts from web fundamentals (HTML5/CSS3/JavaScript) before advancing to React 19, Next.js, and Node.js.' },
      { cat: 'Projects & Hands', q: 'What real-world projects will I build?', a: 'You will build 15+ practical projects including an AI SaaS Dashboard, E-Commerce Platform, Real-Time Chat System, and a Full Stack Capstone Application.' },
      { cat: 'Certification & Careers', q: 'Is placement assistance provided?', a: 'Yes! You receive 1-on-1 placement support, resume building, GitHub portfolio review, and direct interview opportunities.' },
      { cat: 'Learning Format & Flexibility', q: 'How flexible are the batch timings?', a: 'We offer interactive weekday and weekend batches, with 24/7 access to cloud lab environments and recorded sessions.' }
    ]
  },
  'ethical-hacking-cyber-security': {
    title: 'Ethical Hacking & Cyber Security',
    metaTitle: 'Ethical Hacking and Cyber Security Certification Training Course',
    shortTitle: 'Ethical Hacking & Cyber Security',
    label: 'Cyber Security',
    duration: '75–80 hours total',
    level: 'Beginner to advanced levels of cybersecurity',
    lab: 'Live technical sessions + value-added content',
    practicalWork: 'Hands-on practical learning with real scenarios',
    salaryRange: '₹5–12 LPA (Entry-Level), ₹12–25 LPA (Mid-Level), ₹25+ LPA (Senior-Level)',
    placements: '150k+ Placemenets to Date',
    partners: '600+ Hiring Partners',
    highestPkg: '76 Lakhs Highest Annual',
    rating: '632 reviews 4.7',
    batchText: 'Next Batch starts in November',
    subtitle: 'Dive into the exciting world of Cybersecurity and Ethical Hacking with our comprehensive course! Perfect for beginners, this program equips you with the essential skills to protect digital systems from cyber threats. With the cybersecurity field expanding tenfold, learn how to safeguard vital data, combat cybercrime, and secure your future in a career that promises high demand and lucrative salaries.',
    overview: 'This comprehensive course spans 75–80 hours with 72+ live technical sessions and 8 value-added sessions. The curriculum covers everything from foundational cybersecurity principles to advanced ethical hacking techniques, empowering learners with hands-on, real-world expertise in digital security.',
    approach: 'Hands-on practical learning with real scenarios',
    progression: 'Progressive skill building from fundamentals to expert level',
    tools: ['Aircrack-ng', 'Burp Suite', 'Hashcat', 'John the Ripper', 'kali linux', 'Linux', 'Maltego', 'Metasploit Framework', 'Nikto', 'Nmap', 'OWASP ZAP', 'SET (Social Engineering Toolkit)', 'Shodan', 'SQLMap', 'VeraCrypt', 'Wireshark'],
    audience: [
      'Aspiring cybersecurity professionals ready to enter the field',
      'IT professionals enhancing their cybersecurity and ethical hacking skills',
      'College students in tech programs (B.Tech, BCA, MCA)',
      'Enthusiasts passionate about learning ethical hacking',
      'Business owners aiming to strengthen organizational security',
      'Recent graduates seeking industry-recognized cybersecurity credentials'
    ],
    outcomes: [
      'Master essential cybersecurity principles, tools, and best practices',
      'Identify, analyze, and mitigate system vulnerabilities effectively',
      'Use advanced cybersecurity and ethical hacking methodologies confidently',
      'Build a strong portfolio demonstrating real-world security projects',
      'Become job-ready for in-demand cybersecurity and IT security roles',
      'Develop expertise in protecting systems from digital threats and breaches'
    ],
    careerHeading: 'High-Paying Careers in Ethical Hacking & Cyber Security',
    careerIntro: 'Our structured curriculum guides you through the complexities of cybersecurity and ethical hacking, equipping you with both theoretical knowledge and practical expertise. Engage with real-world scenarios and master the skills needed to protect against evolving digital threats',
    careers: [
      { role: 'Ethical Hacker', range: '₹5–12 LPA (Entry-Level), ₹12–25 LPA (Mid-Level), ₹25+ LPA (Senior-Level)', salarySummary: '₹5–12 LPA (Entry-Level), ₹12–25 LPA (Mid-Level), ₹25+ LPA (Senior-Level)', salaryChart: { entryMin: 50, entryMax: 120, midMin: 120, midMax: 250, srMin: 250, srMax: 300 }, scopeText: 'Ethical Hackers identify vulnerabilities in systems, networks, and applications by simulating cyberattacks to enhance security.' },
      { role: 'Cybersecurity Analyst', range: '₹5–10 LPA (Entry-Level), ₹10–18 LPA (Mid-Level), ₹20+ LPA (Senior-Level)', salarySummary: '₹5–10 LPA (Entry-Level), ₹10–18 LPA (Mid-Level), ₹20+ LPA (Senior-Level)', salaryChart: { entryMin: 50, entryMax: 100, midMin: 100, midMax: 180, srMin: 200, srMax: 250 }, scopeText: 'Cybersecurity Analysts monitor and secure systems against cyber threats, ensuring robust defenses using ethical hacking techniques.' },
      { role: 'Penetration Tester (Pentester)', range: '₹6–15 LPA (Entry-Level), ₹15–25 LPA (Mid-Level), ₹30+ LPA (Senior-Level)', salarySummary: '₹6–15 LPA (Entry-Level), ₹15–25 LPA (Mid-Level), ₹30+ LPA (Senior-Level)', salaryChart: { entryMin: 60, entryMax: 150, midMin: 150, midMax: 250, srMin: 300, srMax: 350 }, scopeText: 'Penetration Testers simulate cyberattacks on systems to uncover vulnerabilities, ensuring data and network security.' },
      { role: 'Information Security Analyst', range: '₹5–12 LPA (Entry-Level), ₹12–20 LPA (Mid-Level), ₹25+ LPA (Senior-Level)', salarySummary: '₹5–12 LPA (Entry-Level), ₹12–20 LPA (Mid-Level), ₹25+ LPA (Senior-Level)', salaryChart: { entryMin: 50, entryMax: 120, midMin: 120, midMax: 200, srMin: 250, srMax: 300 }, scopeText: 'Information Security Analysts protect sensitive data and systems by identifying risks and implementing security measures.' },
      { role: 'Security Consultant', range: '₹8–18 LPA (Entry-Level), ₹20–30+ LPA (Mid-Level), ₹30+ LPA (Senior-Level)', salarySummary: '₹8–18 LPA (Entry-Level), ₹20–30+ LPA (Mid-Level), ₹30+ LPA (Senior-Level)', salaryChart: { entryMin: 80, entryMax: 180, midMin: 200, midMax: 300, srMin: 300, srMax: 350 }, scopeText: 'Security Consultants provide expert advice on securing systems and networks, helping organizations implement best practices.' },
      { role: 'Network Security Engineer', range: '₹5–12 LPA (Entry-Level), ₹12–20 LPA (Mid-Level), ₹20–30 LPA (Senior-Level)', salarySummary: '₹5–12 LPA (Entry-Level), ₹12–20 LPA (Mid-Level), ₹20–30 LPA (Senior-Level)', salaryChart: { entryMin: 50, entryMax: 120, midMin: 120, midMax: 200, srMin: 200, srMax: 300 }, scopeText: 'Network Security Engineers secure and maintain the integrity of network infrastructure, ensuring data protection against cyber threats.' },
      { role: 'Malware Analyst', range: '₹6–15 LPA (Entry-Level), ₹15–25 LPA (Mid-Level)', salarySummary: '₹6–15 LPA (Entry-Level), ₹15–25 LPA (Mid-Level)', salaryChart: { entryMin: 60, entryMax: 150, midMin: 150, midMax: 250, srMin: 250, srMax: 250 }, scopeText: 'Malware Analysts identify, study, and neutralize malicious software to protect systems from cyberattacks.' },
      { role: 'Cybersecurity Manager', range: '₹15–25 LPA (Mid-Level), ₹30–40+ LPA (Senior-Level)', salarySummary: '₹15–25 LPA (Mid-Level), ₹30–40+ LPA (Senior-Level)', salaryChart: { entryMin: 150, entryMax: 250, midMin: 150, midMax: 250, srMin: 300, srMax: 400 }, scopeText: 'Cybersecurity Managers oversee security teams, implement security strategies, and manage risk assessment and mitigation plans.' }
    ],
    curriculumHeading: 'Ethical Hacking & Cyber Security Course Curriculum',
    curriculumIntro: 'This comprehensive course spans 75-80 hours with 72+ live technical sessions and 8 value-added sessions. The curriculum covers everything from cybersecurity fundamentals to advanced ethical hacking techniques.',
    modules: [
      {
        title: 'Cyber Security Foundations',
        sections: [{ title: 'Topics', topics: ['Fundamentals of Cyber Security & Information Security', 'Fundamentals of Ethical Hacking', 'Security Principles, Controls, Laws, and Standards', 'Indian Cyber Law', 'Careers in Cyber Security'] }],
        projects: ['Explore different cyber threats in lab scenarios', 'Case study: Understanding real-world cyber attacks']
      },
      {
        title: 'AI in Cybersecurity',
        sections: [
          { title: 'Topics', topics: ['Role of AI in cybersecurity', 'AI-based detection concepts', 'AI in attack and defense (ethical view)', 'Responsible and ethical AI usage'] },
          { title: 'Tools', topics: ['HackerAI', 'shellGPT'] }
        ],
        projects: ['Use AI to map detected threats to MITRE ATT&CK techniques', 'Generate security incident summaries using AI for faster reporting']
      },
      {
        title: 'Computer Networking',
        sections: [
          { title: 'Topics', topics: ['Introduction to Computer Network, Topologies, and Types', 'IP Addressing & Subnetting', 'TCP/IP Model Overview', 'Most Common Protocols', 'Overview of Web Architecture'] },
          { title: 'Tools', topics: ['Cisco Packet Tracer'] }
        ],
        projects: ['Draw and label different network topologies', 'Calculate subnets for given IP ranges', 'Match protocols to their functions (HTTP, FTP, DNS)', 'Diagram a basic web architecture', 'Simulate network topologies in Cisco Packet Tracer', 'Capture and analyze packets using Wireshark']
      },
      {
        title: 'Linux Fundamentals',
        sections: [
          { title: 'Topics', topics: ['Lab Setup & OS Virtualization', 'Introduction to Linux', 'Basic Commands', 'Creating, Viewing, and Editing Text Files', 'Process Management', 'Linux Networking', 'Introduction to Bash Scripting'] },
          { title: 'Tools', topics: ['VMware', 'Kali Linux', 'Parrot OS'] }
        ],
        projects: ['Install Kali/Parrot OS on VMware', 'Practice common Linux commands', 'List running processes and terminate a specific process', 'Configure a static IP address in Linux', 'Write a simple Bash script to automate a task']
      },
      {
        title: 'Target Identification & Information Gathering',
        sections: [
          { title: 'Topics', topics: ['Introduction to reconnaissance techniques', 'Passive vs active information gathering', 'Asset discovery concepts', 'Ethical boundaries in reconnaissance'] },
          { title: 'Tools', topics: ['Maltego', 'Recon-ng', 'theHarvester', 'Shodan', 'WHOIS Lookup Tools', 'Google Dorks', 'Dig'] }
        ],
        projects: ['Perform Google Dorks search for sensitive data', 'Use WHOIS to gather domain info', 'Run DNS queries using nslookup/dig', 'Identify open directories using dirb/gobuster', 'Map relationships using Maltego', 'Conduct reconnaissance using Recon-ng and theHarvester']
      },
      {
        title: 'Network Scanning',
        sections: [
          { title: 'Topics', topics: ['Identifying live systems', 'Open ports and service detection', 'Network mapping fundamentals', 'Scan result interpretation'] },
          { title: 'Tools', topics: ['Nmap', 'Zenmap', 'Hping3'] }
        ],
        projects: ['Run basic Nmap scans to identify open ports', 'Perform banner grabbing on target systems', 'Identify OS using Nmap', 'Compare scan results with Angry IP Scanner & Zenmap', 'Execute full Nmap scan with OS detection & service enumeration']
      },
      {
        title: 'Enumeration & Weak Service Analysis',
        sections: [
          { title: 'Topics', topics: ['Service-level information extraction', 'Identifying weak or exposed services', 'Mapping enumeration to potential risks', 'Attack surface understanding'] },
          { title: 'Tools', topics: ['enum4linux', 'Nmap scripts (NSE)', 'SNMPwalk'] }
        ],
        projects: ['Run Nmap scripts for SMB enumeration', 'Perform NetBIOS enumeration on a target', 'Query SNMP services using SNMPwalk', 'Extract LDAP attributes using LDAPsearch', 'Enumerate a target system using enum4linux & Nmap scripts']
      },
      {
        title: 'Vulnerability Assessment',
        sections: [
          { title: 'Topics', topics: ['Vulnerability discovery concepts', 'Risk analysis and prioritization', 'Understanding vulnerability severity'] },
          { title: 'Tools', topics: ['Nessus', 'OpenVAS', 'Nikto'] }
        ],
        projects: ['Run basic Nikto scan on a web server', 'Identify CVEs for known vulnerabilities', 'Compare Nessus and OpenVAS scan outputs', 'Categorize vulnerabilities by severity', 'Perform vulnerability scan using OpenVAS and generate a report']
      },
      {
        title: 'Cryptography',
        sections: [
          { title: 'Topics', topics: ['Encryption and hashing concepts', 'Secure data protection principles', 'Cryptographic weaknesses overview', 'Practical use of cryptography in security'] },
          { title: 'Tools', topics: ['VeraCrypt', 'Cryptool', 'CyberChef', 'HashCalc'] }
        ],
        projects: ['Encrypt files using VeraCrypt', 'Generate hashes with HashCalc', 'Analyze ciphers with CyberChef', 'Perform disk encryption and decryption']
      },
      {
        title: 'System Hacking',
        sections: [
          { title: 'Topics', topics: ['System exploitation concepts', 'Privilege escalation overview', 'Persistence and attacker behavior', 'Complete attack lifecycle understanding'] },
          { title: 'Tools', topics: ['John the Ripper', 'Hashcat', 'Metasploit Framework', 'Mimikatz', 'Netcat', 'Hydra', 'Searchsploit', 'CCleaner'] }
        ],
        projects: ['Crack password hashes using John the Ripper', 'Extract credentials using Mimikatz', 'Identify privilege escalation vectors with WinPEAS', 'Exploit system vulnerabilities using Metasploit']
      },
      {
        title: 'Malware & Payload Understanding',
        sections: [
          { title: 'Topics', topics: ['Malware types and behavior', 'How malware operates internally', 'Introduction to malware analysis', 'Malware detection concepts'] },
          { title: 'Tools', topics: ['Strings', 'PEStudio', 'VirusTotal', 'Sandbox', 'Remnux', 'Ghidra', 'Regshot'] }
        ],
        projects: ['Extract strings from a binary using Strings', 'Analyze files with PEStudio', 'Submit samples to VirusTotal', 'Compare system snapshots using Regshot', 'Conduct malware analysis in a sandbox environment']
      },
      {
        title: 'Social Engineering',
        sections: [
          { title: 'Topics', topics: ['Human-based attack techniques', 'Phishing and impersonation concepts', 'Psychological aspects of attacks', 'Prevention and awareness strategies'] },
          { title: 'Tools', topics: ['SET (Social Engineering Toolkit)', 'Ohphish'] }
        ],
        projects: ['Create phishing email templates', 'Identify phishing indicators in sample emails', 'Simulate pretexting scenarios', 'Set up a phishing campaign using SET and analyze results']
      },
      {
        title: 'Denial of Service',
        sections: [
          { title: 'Topics', topics: ['Availability attack concepts', 'Impact of DoS/DDoS attacks', 'Detection indicators', 'Legal and ethical implications'] },
          { title: 'Tools', topics: ['LOIC', 'Hping3'] }
        ],
        projects: ['Simulate basic DoS attacks with Hping3', 'Identify botnet characteristics', 'List DoS countermeasures', 'Analyze DoS attack logs', 'Perform controlled DoS simulation using LOIC']
      },
      {
        title: 'Sniffing',
        sections: [
          { title: 'Topics', topics: ['Sniffing Concepts', 'Different Sniffing Techniques', 'Sniffing Countermeasures'] },
          { title: 'Tools', topics: ['Wireshark', 'Ettercap'] }
        ],
        projects: ['Capture HTTP traffic with Wireshark', 'Identify clear-text credentials in packets', 'Perform ARP spoofing using Ettercap', 'Analyze network traffic in lab environment']
      },
      {
        title: 'Session Hijacking',
        sections: [
          { title: 'Topics', topics: ['Session and authentication concepts', 'Cookie and token security basics', 'Session attack scenarios', 'Secure session handling principles'] },
          { title: 'Tools', topics: ['Wireshark', 'Burp Suite', 'OWASP ZAP', 'Cookie Editor'] }
        ],
        projects: ['Capture session cookies with Wireshark', 'Manipulate cookies using Cookie Editor', 'Test session vulnerabilities using OWASP ZAP', 'Perform session hijacking in lab using Burp Suite']
      },
      {
        title: 'Evading IDS, Firewall, and Honeypots',
        sections: [
          { title: 'Topics', topics: ['Security monitoring systems overview', 'Detection and prevention concepts', 'Evasion awareness techniques', 'Countermeasures'] },
          { title: 'Tools', topics: ['Nmap', 'MSF', 'Snort', 'Honeyd'] }
        ],
        projects: ['Run Nmap scan to evade IDS detection', 'Identify firewall rules using MSF', 'Detect honeypots with probes', 'Evade firewall using lab simulations']
      },
      {
        title: 'Hacking Web Servers',
        sections: [
          { title: 'Topics', topics: ['Web Server Concepts', 'Web Server Hacking Methodology', 'Web Server Attacks'] },
          { title: 'Tools', topics: ['Nikto', 'Nmap', 'Dirb', 'Metasploit'] }
        ],
        projects: ['Run Nikto scans on web servers', 'Identify directories using Dirb', 'Conduct Nmap scans', 'Test web server vulnerabilities using Metasploit']
      },
      {
        title: 'Hacking Web Applications',
        sections: [
          { title: 'Topics', topics: ['Web Application Concepts & Threats', 'Web Application Hacking Methodology', 'OWASP Top 10', 'Web API, Webhooks, Web Shell Security'] },
          { title: 'Tools', topics: ['OWASP ZAP', 'Burp Suite', 'SQLmap', 'DVWA', 'Juice Shop'] }
        ],
        projects: ['Run OWASP ZAP on test applications', 'Identify XSS vulnerabilities in DVWA', 'Test APIs for misconfigurations', 'Exploit web app vulnerabilities ethically']
      },
      {
        title: 'SQL Injection',
        sections: [
          { title: 'Topics', topics: ['SQL Injection Concepts & Types', 'Injection Methodology', 'Evasion Techniques', 'Countermeasures'] },
          { title: 'Tools', topics: ['SQLmap'] }
        ],
        projects: ['Perform manual SQL injection tests', 'Run SQLmap on test databases', 'Identify vulnerabilities and test evasion', 'Execute SQL injection in lab']
      },
      {
        title: 'Hacking Wireless Networks',
        sections: [
          { title: 'Topics', topics: ['Wireless networking basics', 'Wireless encryption concepts', 'Common wireless threats', 'Wireless security best practices'] },
          { title: 'Tools', topics: ['Aircrack-ng', 'Wifite'] }
        ],
        projects: ['Capture wireless packets with Aircrack-ng', 'Identify WEP/WPA vulnerabilities', 'Perform deauthentication attacks', 'Crack wireless passwords using Wifite']
      },
      {
        title: 'Hacking Mobile Platforms',
        sections: [
          { title: 'Topics', topics: ['Mobile Platform Attack Vectors', 'Mobile Device Management (MDM) Concepts', 'Android/iOS Threats & OWASP Mobile Top 10', 'Mobile Security Tools'] },
          { title: 'Tools', topics: ['MobSF', 'Frida', 'APKTool', 'Drozer', 'JADX', 'Genymotion', 'Objection'] }
        ],
        projects: ['Analyze APKs with MobSF', 'Decompile apps using JADX', 'Simulate Android attacks with Drozer', 'Perform mobile app security assessments']
      },
      {
        title: 'Hacking IoT & OT Devices',
        sections: [
          { title: 'Topics', topics: ['IoT & OT Concepts', 'IoT/OT Attacks & Hacking Methodology', 'Attack Countermeasures'] },
          { title: 'Tools', topics: ['Shodan'] }
        ],
        projects: ['Search for IoT devices using Shodan', 'Identify IoT vulnerabilities', 'Conduct OT reconnaissance']
      },
      {
        title: 'Cloud Computing',
        sections: [
          { title: 'Topics', topics: ['Introduction to Cloud Computing', 'Cloud Concepts & Models', 'Cloud Attacks & Hacking Methodology', 'Cloud Security'] },
          { title: 'Tools', topics: ['AWS CLI'] }
        ],
        projects: ['Configure AWS CLI', 'Identify cloud service models (IaaS, PaaS, SaaS)', 'Detect cloud misconfigurations', 'Perform basic cloud security audits']
      }
    ],
    projectsHeading: 'Build Real-World Ethical Hacking & Cyber Security Projects',
    projectsIntro: 'Develop industry-ready cybersecurity skills by working on real-world projects. To find and address security flaws in systems and apps, conduct vulnerability assessments and penetration testing using programs like Kali Linux and Metasploit. Discover how to prevent unwanted access to wireless networks, examine malware behavior, and create strong defenses. Engage in incident response exercises as well to manage fictitious cyberattacks and use real-time tactics to safeguard digital infrastructure.',
    projects: [
      { num: '#01', title: 'Network Vulnerability Scanner', desc: 'In this project, you will build a Network Vulnerability Scanner to proactively detect security weaknesses in a network. You’ll write Python scripts to scan hosts for open ports, running services, and potential vulnerabilities.…', skills: ['Python Programming', 'Nmap', 'Socket Programming', 'Network Security', 'Automation'], tags: ['Python', 'NumPy', 'Socket Library', 'JSON', 'CSV'] },
      { num: '#02', title: 'Web Application Penetration Testing Tool', desc: 'Web applications are frequent targets for cyberattacks. In this project, you’ll create a Penetration Testing Toolkit that identifies and exploits common vulnerabilities such as SQL Injection, Cross-Site Scripting…', skills: ['Web Security', 'OWASP Top 10', 'SQL Injection', 'XSS', 'Python Requests', 'Burp Suite'], tags: ['Python', 'OWASP ZAP', 'Chrome DevTools', 'Requests Library'] },
      { num: '#03', title: 'Malware Analysis & Detection System', desc: 'Malware is a critical threat in cybersecurity, and understanding its behavior is essential. In this project, you will develop a Malware Detection & Analysis System that inspects suspicious files, calculates hashes (MD5/SHA),…', skills: ['Malware Analysis', 'Python Programming', 'Hashing (MD5/SHA)', 'Sandbox Testing', 'File Security'], tags: ['Python', 'Virtual Sandbox', 'VirusTotal API', 'Hash Libraries'] }
    ],
    recommendedCourses: [
      { key: 'advanced-penetration-testing', image: 'assets/images/courses/official-logos/advanced-pentest-square.svg', category: 'Cyber Security', title: 'Advanced Penetration Testing', summary: 'Practice modern offensive security in controlled lab environments.', duration: '6 months', rating: '4.8/5', href: 'courses/cybersecurity/advanced-penetration-testing.html' },
      { key: 'certified-devops-engineer', image: 'assets/images/courses/official-logos/devops-official.svg', category: 'Cloud & DevOps', title: 'Certified DevOps Engineer Course', summary: 'Build reliable delivery workflows with automation and cloud tooling.', duration: '6 months', rating: '4.8/5', href: 'courses/devops/certified-devops-engineer.html' },
      { key: 'certified-aws-devops', image: 'assets/images/courses/official-logos/aws-devops-square.svg', category: 'Cloud & DevOps', title: 'Certified AWS DevOps Program', summary: 'Automate cloud delivery with CI/CD, containers, and AWS services.', duration: '6 months', rating: '4.8/5', href: 'courses/devops/certified-aws-devops.html' },
      { key: 'data-science-machine-learning-genai', image: 'assets/images/courses/data-science/data-science-machine-learning-genai.webp', category: 'Data Science & AI', title: 'Data Science, Machine Learning & GenAI', summary: 'Turn data into predictive insights and production AI workflows.', duration: '9 months', rating: '4.9/5', href: 'courses/data-science/data-science-machine-learning-genai.html' },
      { key: 'advanced-mern-stack', image: 'assets/images/courses/web-development/advanced-mern-stack-development-program.webp', category: 'Web Development', title: 'Advanced MERN Stack Development Program', summary: 'Build and deploy complete full-stack JavaScript products.', duration: '9 months', rating: '4.8/5', href: 'courses/web-development/advanced-mern-stack.html' },
      { key: 'ui-ux-front-end-integration', image: 'assets/images/courses/uiux/ui-ux-design-front-end-integration-mastery.png', category: 'UI/UX Design', title: 'UI/UX & Front-End Integration Mastery', summary: 'Design polished digital experiences and bring them to life.', duration: '6 months', rating: '4.7/5', href: 'courses/uiux/ui-ux-front-end-integration.html' }
    ],
    certificationTitle: 'Industry-Recognized Professional Certification',
    certificationDescription: 'Receive a globally valued certification that validates your skills, practical knowledge, and job-ready expertise. This certification enhances your credibility, strengthens your resume, and helps you stand out to employers in competitive industries worldwide.',
    certificationStats: [
      { value: '20000+', label: 'Professionals Trained' },
      { value: '20+', label: 'Countries & Counting' },
      { value: '100+', label: 'Corporate Served' }
    ],
    preserveFaqCategoryLabels: true,
    faqCategories: ['Support & Community', 'Certification & Careers', 'Projects & Hands', 'Learning Format & Flexibility', 'Tools & Technologies', 'Course Basics'],
    faqs: [
      { cat: 'Support & Community', q: 'Q1. Do I get mentorship during the course?', a: 'Yes, you’ll learn from cybersecurity experts with years of experience.' },
      { cat: 'Support & Community', q: 'Q2. Is there a doubt-clearing system?', a: 'Yes, live Q&A sessions and mentor support are available.' },
      { cat: 'Support & Community', q: 'Q3. Will I join a cybersecurity community?', a: 'Yes, you’ll network through webinars, hackathons, and workshops.' },
      { cat: 'Support & Community', q: 'Q4. Do students get lifelong access?', a: 'Yes, resources and updates remain accessible after completion.' },
      { cat: 'Support & Community', q: 'Q5. Why choose Grras Solutions?', a: 'Because of expert-led training, real-world projects, and trusted placement support.' },
      { cat: 'Certification & Careers', q: 'Do I get a certification after completing?', a: 'Yes, you’ll earn an industry-recognized Ethical Hacking & Cyber Security Certification.' },
      { cat: 'Certification & Careers', q: 'Q2. Does this course prepare for CEH?', a: 'Yes, it prepares you for CEH, CompTIA Security+, OSCP, and CISSP certifications.' },
      { cat: 'Certification & Careers', q: 'Q3. What career roles are available?', a: 'You can become an Ethical Hacker, Security Consultant, or Cyber Security Analyst.' },
      { cat: 'Certification & Careers', q: 'Q4. Do you provide placement assistance?', a: 'Yes, with resume building, mock interviews, and job portal access.' },
      { cat: 'Certification & Careers', q: 'Q5. Is cybersecurity a high-paying field?', a: 'Yes, cybersecurity offers high-paying jobs globally with growing demand.' },
      { cat: 'Projects & Hands', q: 'Q1. What projects will I complete in this course?', a: 'Projects include vulnerability assessments, penetration testing, malware analysis, and network security audits.' },
      { cat: 'Projects & Hands', q: 'Q2. Are projects based on industry scenarios?', a: 'Yes, all projects simulate real-world cybersecurity problems to prepare you for jobs.' },
      { cat: 'Projects & Hands', q: 'Q3. Will I do penetration testing?', a: 'Yes, you’ll perform penetration testing with Kali Linux and Metasploit.' },
      { cat: 'Projects & Hands', q: 'Q4. Are CTF challenges included?', a: 'Yes, you’ll participate in Capture The Flag (CTF) competitions to improve skills.' },
      { cat: 'Projects & Hands', q: 'Q5. Can I showcase my projects on LinkedIn?', a: 'Yes, projects can be shared on GitHub and LinkedIn to attract recruiters.' },
      { cat: 'Learning Format & Flexibility', q: 'Q1. Is the course online or offline?', a: 'Yes, both online live sessions and offline classroom training at Jaipur are available with flexible schedules.' },
      { cat: 'Learning Format & Flexibility', q: 'Q2. Can working professionals take this course?', a: 'Yes, the flexible schedule makes it ideal for students, professionals, and career changers exploring cybersecurity.' },
      { cat: 'Learning Format & Flexibility', q: 'Q3. What if I miss a class?', a: 'All sessions are recorded, and you’ll get access to recordings and backup classes anytime.' },
      { cat: 'Learning Format & Flexibility', q: 'Q4. Can beginners with no background join?', a: 'Yes, even beginners can start learning ethical hacking with guided mentorship and practical exercises.' },
      { cat: 'Learning Format & Flexibility', q: 'Q5. Do I get lifetime access to materials?', a: 'Yes, you’ll receive course resources, notes, and updates for future reference after completing the course.' },
      { cat: 'Tools & Technologies', q: 'Q1. What tools will I learn in this course?', a: 'You’ll work with Kali Linux, Metasploit, Wireshark, Nmap, Burp Suite, Nessus, and Snort.' },
      { cat: 'Tools & Technologies', q: 'Q2. Do you cover OWASP frameworks?', a: 'Yes, you’ll learn OWASP standards for web and application security against modern cyber threats.' },
      { cat: 'Tools & Technologies', q: 'Q3. Is cloud security included?', a: 'Yes, the course covers cloud, wireless, and advanced security practices to secure digital infrastructure.' },
      { cat: 'Tools & Technologies', q: 'Q4. Will I study malware analysis?', a: 'Yes, you’ll analyze malware behavior, digital forensics, and incident response handling.' },
      { cat: 'Tools & Technologies', q: 'Q5. Do we practice real-world hacking techniques?', a: 'Yes, you’ll simulate ethical hacking attacks and defenses in real-world lab environments.' },
      { cat: 'Course Basics', q: 'Q1. What is this Ethical Hacking course about?', a: 'This course teaches ethical hacking, penetration testing, and cyber defense with hands-on projects to become cybersecurity-ready.' },
      { cat: 'Course Basics', q: 'Q2. Who can join this course?', a: 'Beginners, IT professionals, students, and developers who want practical skills in ethical hacking and cybersecurity careers.' },
      { cat: 'Course Basics', q: 'Q3. Do I need prior experience for this course?', a: 'Basic computer and networking knowledge is helpful, but beginners can also start and learn step by step.' },
      { cat: 'Course Basics', q: 'Q4. How long does this course take?', a: 'The program runs over 240+ hours with practical training in hacking, cryptography, penetration testing, and cyber defense.' },
      { cat: 'Course Basics', q: 'Q5. What jobs can I get after completing?', a: 'You can work as an Ethical Hacker, Cyber Security Analyst, Penetration Tester, or Security Consultant.' }
    ]
  }
};

function getCourse(key) {
  if (courseData[key]) return courseData[key];
  const title = key.replace(/[-_]/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  return {
    title: `${title} Professional Program`,
    shortTitle: title,
    label: 'Professional Certification',
    duration: '6 Months (24 Weeks)',
    level: 'Beginner to Advanced',
    lab: 'Live Technical Studio',
    practicalWork: '10+ Production Projects',
    salaryRange: '₹7.0 LPA - ₹16.0 LPA',
    highestPkg: '₹65 Lakhs Highest Package',
    placements: '150k+ Placements till Date',
    partners: '600+ Hiring Partners',
    rating: '4.8 ★★★★★ (410 Reviews)',
    subtitle: `Master ${title} through practical hands-on workflows, enterprise lab environments, and expert guidance. Build a strong portfolio and graduate ready for top tech challenges.`,
    overview: `An intensive, industry-aligned engineering program designed to give you deep technical competency in ${title}. Learn production methodologies, real-world troubleshooting, and industry standards.`,
    tools: [title, 'Git', 'GitHub', 'Docker', 'Linux', 'VS Code', 'AWS Cloud', 'REST APIs'],
    audience: [`Learners seeking a specialized career in ${title}`, 'IT Professionals upgrading their technical stack', 'Engineering Students & Career Starters'],
    projects: [
      {
        num: '#01',
        title: `${title} Enterprise Application`,
        desc: `Build an end-to-end production-grade application implementing core patterns of ${title}.`,
        skills: ['Architecture', 'API Integration', 'Data Validation', 'Security'],
        tags: [title, 'Git', 'Docker']
      },
      {
        num: '#02',
        title: `Real-Time Data System`,
        desc: `Architect a scalable real-time processing system using modern development workflows.`,
        skills: ['Data Streams', 'Performance Optimization', 'Error Diagnostics'],
        tags: [title, 'Linux', 'Cloud']
      }
    ],
    careers: [
      {
        role: `${title} Developer`,
        range: '₹7.5 LPA - ₹15.5 LPA',
        salaryChart: { entryMin: 20, entryMax: 45, midMin: 45, midMax: 85, srMin: 85, srMax: 120 },
        scopeText: `Builds end-to-end software applications using ${title} architectures and modern engineering patterns.`
      },
      {
        role: 'Technical Solutions Specialist',
        range: '₹6.5 LPA - ₹13.5 LPA',
        salaryChart: { entryMin: 22, entryMax: 50, midMin: 50, midMax: 90, srMin: 90, srMax: 135 },
        scopeText: `Implements enterprise solutions, integration pipelines, and system security frameworks.`
      }
    ],
    outcomes: [
      `Master core technical concepts and production workflows in ${title}`,
      'Build hands-on practical project experience in dedicated lab environments',
      'Prepare for technical interviews, domain certifications, and industry career roles'
    ],
    modules: [
      {
        title: 'Module 1: Core Foundations & Setup',
        objective: `Understand key terminology, tool installation, essential syntax, and foundational principles of ${title}.`,
        bullets: [
          'Environment configuration and modern toolchain setup',
          'Core language / technology syntax and fundamental structures',
          'Working with version control (Git) and repository management',
          'Basic architectural patterns and best practices overview'
        ]
      },
      {
        title: 'Module 2: Advanced Architecture & Deployment',
        objective: `Build, containerize, and deploy a complete production-grade application to cloud platforms.`,
        bullets: [
          'Enterprise design patterns and scalable architecture',
          'Docker containerization and multi-container orchestration',
          'Cloud infrastructure deployment (AWS / Vercel / Azure)'
        ]
      }
    ],
    faqs: [
      { cat: 'Course Basics', q: 'Who is eligible to enroll in this course?', a: 'Anyone passionate about building a career in tech. Basic computer literacy is the only prerequisite.' },
      { cat: 'Learning Format & Flexibility', q: 'Is practical lab access provided?', a: 'Yes! You receive dedicated access to our live cloud labs throughout your training.' },
      { cat: 'Certification & Careers', q: 'How does placement assistance work?', a: 'We provide 1-on-1 career counseling, mock interview sessions, resume reviews, and direct interview opportunities.' }
    ],
    ...getWebDevelopmentCourseProfile(key)
  };
}

function getWebDevelopmentCourseProfile(key) {
  const profiles = {
    'react-development': {
      shortTitle: 'React.js',
      label: 'Web Development',
      duration: '3 Months (12 Weeks)',
      level: 'Beginner to Intermediate',
      lab: 'Live Front-End Project Studio',
      practicalWork: '8+ Interfaces & React Projects',
      salaryRange: '₹5.0 LPA - ₹13.0 LPA',
      subtitle: 'Learn modern front-end engineering with JavaScript, React, reusable component architecture, state management, API integration, testing, and deployment.',
      overview: 'A project-led React development program covering browser foundations, component thinking, application state, routing, APIs, accessibility, performance, testing, and production deployment. Learners progress from focused interface exercises to a complete portfolio-ready application.',
      tools: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React 19', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs', 'Git', 'GitHub', 'VS Code'],
      audience: ['Beginners who understand basic computer use and want to enter front-end development', 'Web designers or JavaScript learners moving into component-based UI engineering', 'Working professionals upgrading to modern React application workflows'],
      outcomes: ['Build responsive, accessible interfaces with reusable React components', 'Manage local and application state with hooks and Redux Toolkit', 'Integrate REST APIs with loading, error, authentication, and form states', 'Test, optimize, document, and deploy a production-ready React application'],
      projects: [
        { num: '#01', title: 'Responsive Product Discovery Interface', desc: 'Create a responsive catalog with filters, sorting, saved state, accessible controls, and reusable UI components.', skills: ['Responsive UI', 'Component Architecture', 'Filtering', 'Accessibility'], tags: ['React 19', 'CSS3', 'Git'] },
        { num: '#02', title: 'API-Powered Analytics Workspace', desc: 'Build an authenticated dashboard with charts, route protection, asynchronous API states, and reusable data views.', skills: ['REST APIs', 'Authentication', 'State Management', 'Data Visualization'], tags: ['React 19', 'Redux Toolkit', 'TypeScript'] },
        { num: '#03', title: 'Production React Capstone', desc: 'Plan, build, test, optimize, and deploy a complete React product with portfolio documentation.', skills: ['Testing', 'Performance', 'Deployment', 'Documentation'], tags: ['React 19', 'GitHub', 'Tailwind CSS'] }
      ],
      careers: [
        { role: 'React Developer', range: '₹5.0 LPA - ₹12.0 LPA', salaryChart: { entryMin: 35, entryMax: 60, midMin: 60, midMax: 95, srMin: 95, srMax: 125 }, scopeText: 'Builds component-driven web applications, integrates APIs, manages application state, and maintains accessible responsive interfaces.' },
        { role: 'Front-End Engineer', range: '₹6.0 LPA - ₹14.0 LPA', salaryChart: { entryMin: 40, entryMax: 68, midMin: 68, midMax: 105, srMin: 105, srMax: 140 }, scopeText: 'Owns browser-side architecture, design-system implementation, performance, testing, and front-end delivery standards.' },
        { role: 'UI Engineer', range: '₹5.5 LPA - ₹13.0 LPA', salaryChart: { entryMin: 38, entryMax: 65, midMin: 65, midMax: 100, srMin: 100, srMax: 130 }, scopeText: 'Translates product and design requirements into reusable, accessible, polished interface systems.' },
        { role: 'JavaScript Application Developer', range: '₹5.5 LPA - ₹13.5 LPA', salaryChart: { entryMin: 36, entryMax: 64, midMin: 64, midMax: 102, srMin: 102, srMax: 135 }, scopeText: 'Develops interactive browser applications using modern JavaScript, modular architecture, API integrations, and automated quality checks.' }
      ],
      modules: [
        { title: 'Module 1: Web, HTML & CSS Foundations', objective: 'Build responsive, semantic, accessible page foundations.', bullets: ['Semantic HTML structure and forms', 'Modern CSS layout with Flexbox and Grid', 'Responsive behavior, accessibility, and browser tools'] },
        { title: 'Module 2: Modern JavaScript', objective: 'Develop reliable browser logic using contemporary JavaScript.', bullets: ['Variables, functions, arrays, objects, and modules', 'DOM events, forms, validation, and storage', 'Promises, async/await, fetch, and error handling'] },
        { title: 'Module 3: React Components & Hooks', objective: 'Create reusable component systems and predictable interface behavior.', bullets: ['JSX, props, composition, and component boundaries', 'State, effects, refs, and custom hooks', 'Forms, validation, routing, and protected views'] },
        { title: 'Module 4: State, APIs & Type Safety', objective: 'Connect applications to real services and manage shared state.', bullets: ['Redux Toolkit slices and asynchronous flows', 'REST API integration and authentication states', 'TypeScript interfaces, props, and API models'] },
        { title: 'Module 5: Quality, Accessibility & Performance', objective: 'Prepare React applications for production use.', bullets: ['Component testing and user-flow checks', 'Accessible navigation, focus, and form feedback', 'Code splitting, rendering performance, and optimization'] },
        { title: 'Module 6: Capstone & Deployment', objective: 'Ship and present a complete React portfolio project.', bullets: ['Application planning and repository workflow', 'Production build, environment settings, and deployment', 'README documentation, live demonstration, and review'] }
      ]
    },
    'python-django': {
      shortTitle: 'Python & Django', label: 'Web Development', duration: '4 Months (16 Weeks)', level: 'Beginner to Advanced', lab: 'Live Python Web Studio', practicalWork: '10+ Backend & Full-Stack Builds', salaryRange: '₹5.5 LPA - ₹14.0 LPA',
      subtitle: 'Build secure, database-backed web applications with Python, Django, Django REST Framework, modern frontend fundamentals, testing, and cloud deployment.',
      overview: 'A full-stack Python pathway that moves from programming foundations into Django architecture, relational data modeling, authentication, REST APIs, testing, security, and deployment. Practical work centers on applications that reflect real product and business requirements.',
      tools: ['Python', 'Django', 'Django REST Framework', 'HTML5', 'CSS3', 'JavaScript ES6+', 'PostgreSQL', 'REST APIs', 'Docker', 'Git', 'GitHub'],
      audience: ['Beginners starting a structured Python web-development path', 'Python learners ready to build complete database-backed applications', 'Professionals moving into backend or full-stack engineering roles'],
      outcomes: ['Write maintainable Python and structure Django applications correctly', 'Design relational data models, authentication, permissions, and admin workflows', 'Create documented REST APIs and connect responsive frontend experiences', 'Test, secure, containerize, and deploy a portfolio-ready Django product'],
      projects: [
        { num: '#01', title: 'Django Operations Portal', desc: 'Create a role-based operations portal with authentication, workflows, reporting, and admin controls.', skills: ['Django Models', 'Authentication', 'Permissions', 'Reporting'], tags: ['Python', 'Django', 'PostgreSQL'] },
        { num: '#02', title: 'REST API & Client Application', desc: 'Develop a documented API with validation, pagination, permissions, and a responsive client interface.', skills: ['REST APIs', 'Serialization', 'Validation', 'API Security'], tags: ['Django REST Framework', 'JavaScript ES6+', 'Git'] },
        { num: '#03', title: 'Cloud-Deployed Django Capstone', desc: 'Build, test, containerize, and deploy a complete web product with production configuration.', skills: ['Testing', 'Docker', 'Deployment', 'Documentation'], tags: ['Django', 'Docker', 'GitHub'] }
      ],
      careers: [
        { role: 'Python Developer', range: '₹5.5 LPA - ₹13.0 LPA', salaryChart: { entryMin: 36, entryMax: 62, midMin: 62, midMax: 100, srMin: 100, srMax: 132 }, scopeText: 'Builds maintainable Python services, automation, data workflows, and backend application logic.' },
        { role: 'Django Developer', range: '₹5.5 LPA - ₹14.0 LPA', salaryChart: { entryMin: 38, entryMax: 66, midMin: 66, midMax: 105, srMin: 105, srMax: 140 }, scopeText: 'Develops secure Django applications, relational data models, authentication, APIs, and administrative workflows.' },
        { role: 'Backend Engineer', range: '₹6.5 LPA - ₹16.0 LPA', salaryChart: { entryMin: 42, entryMax: 72, midMin: 72, midMax: 115, srMin: 115, srMax: 150 }, scopeText: 'Designs APIs, application services, database interactions, security controls, testing strategies, and production integrations.' },
        { role: 'Full-Stack Python Developer', range: '₹6.0 LPA - ₹15.0 LPA', salaryChart: { entryMin: 40, entryMax: 70, midMin: 70, midMax: 110, srMin: 110, srMax: 145 }, scopeText: 'Combines Django backend delivery with responsive frontend implementation, API integration, testing, and deployment.' }
      ],
      modules: [
        { title: 'Module 1: Python Programming Foundations', objective: 'Build reliable programming foundations for web engineering.', bullets: ['Python syntax, collections, functions, and modules', 'Object-oriented programming and exception handling', 'Virtual environments, packages, Git, and debugging'] },
        { title: 'Module 2: Web & Database Foundations', objective: 'Understand browser, server, HTTP, and relational data fundamentals.', bullets: ['Semantic HTML, responsive CSS, and browser JavaScript', 'HTTP requests, responses, sessions, and cookies', 'SQL, schema design, relationships, and PostgreSQL'] },
        { title: 'Module 3: Django Application Architecture', objective: 'Build structured applications using Django conventions.', bullets: ['Projects, apps, settings, URLs, views, and templates', 'Models, migrations, forms, and the Django admin', 'Static files, media, reusable templates, and messages'] },
        { title: 'Module 4: Authentication, APIs & Security', objective: 'Deliver protected workflows and reusable application services.', bullets: ['Authentication, authorization, groups, and permissions', 'Django REST Framework serializers and viewsets', 'Validation, CORS, CSRF, secure settings, and API documentation'] },
        { title: 'Module 5: Testing & Production Readiness', objective: 'Validate quality and prepare applications for reliable operation.', bullets: ['Unit tests, integration tests, fixtures, and debugging', 'Caching, query optimization, logging, and error handling', 'Environment variables, static assets, and production configuration'] },
        { title: 'Module 6: Docker, Cloud & Capstone', objective: 'Deploy and present a complete full-stack Django application.', bullets: ['Docker and service configuration', 'Cloud database and application deployment', 'Capstone review, documentation, and portfolio presentation'] }
      ]
    },
    'java-training': {
      title: 'Java Web Development',
      metaTitle: 'Java Training and Certification',
      shortTitle: 'Java Web Development',
      label: 'Web Development',
      duration: '6–8 months of intensive training',
      level: 'Intermediate',
      lab: 'Live Virtual Instructor-Led Classes',
      practicalWork: 'Projects and assignments',
      salaryRange: '₹05–09 LPA (Entry-Level)',
      placements: '150k+ Placemenets to Date',
      partners: '600+ Hiring Partners',
      highestPkg: '76 Lakhs Highest Annual',
      rating: '488 reviews 4.8',
      batchText: 'Next Batch starts in November',
      subtitle: 'Master advanced Java development with this comprehensive full-stack program designed for intermediate developers. Build enterprise-grade web applications using cutting-edge technologies.',
      overview: 'This intensive program covers the complete Java ecosystem from advanced backend frameworks to modern frontend technologies, ensuring you master full-stack development within a structured, hands-on learning path.',
      approach: 'Continuous evaluation through projects and assignments',
      progression: '3–4 hours per week with flexible scheduling',
      tools: ['Bootstrap', 'CSS3', 'HTML5', 'Java'],
      audience: [
        'Java developers with basic experience seeking advanced full-stack capabilities',
        'Software engineers transitioning into enterprise Java development',
        'Computer science graduates aiming for specialized Java career paths',
        'Web developers looking to master backend Java frameworks',
        'IT professionals preparing for senior developer or architect roles',
        'Freelancers expanding service offerings with professional Java expertise'
      ],
      outcomes: [
        'Advanced Java Expertise: Master Java EE, Spring Boot, and enterprise-level application development.',
        'Database Proficiency: Design and manage MySQL databases using JDBC and Hibernate ORM.',
        'RESTful API Development: Build scalable web services and microservices architectures.',
        'Frontend Integration: Connect ReactJS applications seamlessly with Java backends.',
        'Version Control Mastery: Implement professional Git workflows and collaboration practices.',
        'Full-Stack Project Delivery: Deploy complete web applications from conception to production.'
      ],
      careerHeading: 'High-Paying Careers in Java Web Development',
      careerIntro: 'Java Web Developers are in high demand because they can make web apps that are safe, can grow, and change. This training gives you the skills you need to get a good job in software or enterprise development.',
      curriculumHeading: 'Java Web Development Curriculum',
      curriculumIntro: 'Structured learning path covering Java fundamentals, Object-Oriented Programming, advanced concepts, database connectivity, and practical project development. Each module includes hands-on exercises, real-world examples, and progressive skill building for comprehensive Java mastery.',
      projectsHeading: 'Build Real-World Java Web Development Projects',
      projectsIntro: 'Apply your Java knowledge through three comprehensive console applications: ATM Management System, Inventory Management System, and POS Billing System for practical experience.',
      certificationTitle: 'Industry-Recognized Professional Certification',
      certificationDescription: 'Receive a globally valued certification that validates your skills, practical knowledge, and job-ready expertise. This certification enhances your credibility, strengthens your resume, and helps you stand out to employers in competitive industries worldwide.',
      certificationStats: [
        { value: '20000+', label: 'Professionals Trained' },
        { value: '20+', label: 'Countries & Counting' },
        { value: '100+', label: 'Corporate Served' }
      ],
      projects: [
        { num: '#01', title: 'Online Blogging Application', desc: 'Skills You\'ll Gain: Building dynamic pages with JSP User authentication and profile management Database-driven content management CRUD operations with JDBC Deploying applications on Tomcat Description: This project is all about making an online blogging app where people can sign up, log in, write posts, and manage their content. It uses…', skills: ['Java', 'MySQL', 'Tomcat', 'JDBC'], tags: ['Java', 'MySQL', 'Tomcat'] },
        { num: '#02', title: 'Expense Tracker', desc: 'The Expense Tracker is a standalone financial management application developed using Java Swing, designed to help users track, categorize, and analyze their expenses efficiently. This user-friendly application provides a simple yet powerful platform for recording transactions, managing categories, generating reports, and setting reminders for bill payments. With local data storage…', skills: ['Java', 'Java Swing', 'NetBeans', 'File Handling', 'SQLite'], tags: ['Java', 'Java Swing', 'NetBeans'] },
        { num: '#03', title: 'E-commerce Platform with Spring Boot & MySQL', desc: 'Skills You\'ll Gain: REST API development with Spring Boot Database schema design and integration Payment and order management Secure authentication and authorization Deploying Java web applications Description: This project is about making an E-commerce platform where people can look at products, put things in their cart, and place safe orders.…', skills: ['Java', 'MySQL', 'REST API', 'Tomcat'], tags: ['Java', 'MySQL', 'REST API'] }
      ],
      careers: [
        { role: 'Java Web Developer', range: '₹05–09 LPA (Entry-Level), ₹10–18 LPA (Mid-Level), ₹19+25 LPA (Senior-Level)', salarySummary: '₹05–09 LPA (Entry-Level), ₹10–18 LPA (Mid-Level), ₹19+25 LPA (Senior-Level)', salaryChart: { entryMin: 50, entryMax: 90, midMin: 100, midMax: 180, srMin: 190, srMax: 250 }, scopeText: 'Java Web Developers design and build web applications using JSP, Servlets, JDBC, and Spring Boot, ensuring scalability, reliability, and database-driven functionality.' },
        { role: 'Backend Java Engineer', range: '₹04–08 LPA (Entry-Level), ₹09–16 LPA (Mid-Level), ₹17+22 LPA (Senior-Level)', salarySummary: '₹04–08 LPA (Entry-Level), ₹09–16 LPA (Mid-Level), ₹17+22 LPA (Senior-Level)', salaryChart: { entryMin: 40, entryMax: 80, midMin: 90, midMax: 160, srMin: 170, srMax: 220 }, scopeText: 'Backend Java Engineers develop APIs, handle server-side logic, manage databases, and ensure secure integration for enterprise-grade applications using Java frameworks.' },
        { role: 'JSP/Servlet Developer', range: '₹04–07 LPA (Entry-Level), ₹08–15 LPA (Mid-Level), ₹16+22 LPA (Senior-Level)', salarySummary: '₹04–07 LPA (Entry-Level), ₹08–15 LPA (Mid-Level), ₹16+22 LPA (Senior-Level)', salaryChart: { entryMin: 40, entryMax: 70, midMin: 80, midMax: 150, srMin: 160, srMax: 220 }, scopeText: 'JSP/Servlet Developers specialize in building dynamic web applications, handling user requests, and developing server-side functionality for enterprise portals and platforms.' },
        { role: 'Software Engineer', range: '₹04–08 LPA (Entry-Level), ₹09–17 LPA (Mid-Level), ₹18+24 LPA (Senior-Level)', salarySummary: '₹04–08 LPA (Entry-Level), ₹09–17 LPA (Mid-Level), ₹18+24 LPA (Senior-Level)', salaryChart: { entryMin: 40, entryMax: 80, midMin: 90, midMax: 170, srMin: 180, srMax: 240 }, scopeText: 'Software Engineers develop, test, and deploy Java-based applications, ensuring performance, scalability, and integration with databases and frontend frameworks.' },
        { role: 'Application Support Engineer', range: '₹03–06 LPA (Entry-Level), ₹07–14+ LPA (Mid-Level), ₹15+20 LPA (Senior-Level)', salarySummary: '₹03–06 LPA (Entry-Level), ₹07–14+ LPA (Mid-Level), ₹15+20 LPA (Senior-Level)', salaryChart: { entryMin: 30, entryMax: 60, midMin: 70, midMax: 140, srMin: 150, srMax: 200 }, scopeText: 'Application Support Engineers monitor, maintain, and troubleshoot Java web applications, ensuring seamless performance, bug fixing, and continuous improvements for enterprise systems.' },
        { role: 'API Integration Specialist', range: '₹05–10 LPA (Entry-Level), ₹11–19+ LPA (Mid-Level), ₹20+ 26LPA (Senior-Level)', salarySummary: '₹05–10 LPA (Entry-Level), ₹11–19+ LPA (Mid-Level), ₹20+ 26LPA (Senior-Level)', salaryChart: { entryMin: 50, entryMax: 100, midMin: 110, midMax: 190, srMin: 200, srMax: 260 }, scopeText: 'API Integration Specialists design, implement, and manage APIs, ensuring smooth communication between Java applications, databases, and third-party systems.' }
      ],
      modules: [
        { title: 'Module 1: Core Java Refresher', sections: [{ title: 'Java Fundamentals', topics: ['OOP principles: classes, objects, inheritance', 'Exception handling and collections'] }, { title: 'Advanced Java Concepts', topics: ['Multithreading basics', 'Input/output streams'] }], projects: ['Student Record Manager', 'Simple Banking Application'] },
        { title: 'Module 2: JSP & Servlet Fundamentals', sections: [{ title: 'Servlets', topics: ['Lifecycle, requests, responses', 'Session handling and filters'] }, { title: 'JSP Basics', topics: ['Scripting elements and directives', 'MVC architecture integration'] }], projects: ['Online Feedback System', 'Login Authentication Portal'] },
        { title: 'Module 3: JDBC & Database Connectivity', sections: [{ title: 'JDBC Basics', topics: ['Drivers and architecture', 'CRUD operations with MySQL'] }, { title: 'Advanced JDBC', topics: ['Prepared statements', 'Transaction management'] }], projects: ['Payroll Management System', 'Inventory Management App'] },
        { title: 'Module 4: Web Frameworks with Spring Boot', sections: [{ title: 'Spring Boot Essentials', topics: ['Dependency injection and beans', 'RESTful API development'] }, { title: 'Data Access Layer', topics: ['Spring Data JPA integration', 'Hibernate ORM'] }], projects: ['Employee Management API', 'Online Course Portal Backend'] },
        { title: 'Module 5: Deployment & Testing', sections: [{ title: 'Testing Tools', topics: ['JUnit and Mockito basics', 'Unit and integration tests'] }, { title: 'Deployment', topics: ['WAR packaging with Tomcat', 'GitHub version control'] }], projects: ['Blog Application Deployment', 'Tested REST API Service'] }
      ],
      preserveFaqCategoryLabels: true,
      faqCategories: ['Support & Community', 'Certification & Careers', 'Projects & Hands', 'Learning Format & Flexibility', 'Tools & Technologies', 'Course Basics'],
      faqs: [
        { cat: 'Support & Community', q: 'Q1. Will I have a mentor while I learn Java Full Stack?', a: 'Yes, expert mentors help students with projects, give them coding advice, fix problems, and get them ready for full stack Java jobs.' },
        { cat: 'Support & Community', q: 'Q2. Can I talk to other students and Java experts while I\'m learning?', a: 'Yes, learners join coding workshops, webinars, and communities to work with Java developers and meet new people in their field.' },
        { cat: 'Support & Community', q: 'Q3. Will I still get help after I finish this course?', a: 'Yes, students get lifetime access to alumni networks, resources, and faculty support that will help them succeed in full stack Java careers for a long time.' },
        { cat: 'Support & Community', q: 'Q4. Is this Java Full Stack course a good choice for people who want to change careers?', a: 'Yes, this program gives people who want to change careers strong skills in frontend, backend, and deployment, which makes it easy for them to get Java jobs.' },
        { cat: 'Support & Community', q: 'Q5. What are the benefits of choosing Grras Solutions for Java Full Stack training?', a: 'Because they have expert trainers, project-based learning, recognized certifications, help with finding a job, and a history of helping students succeed in Java careers.' },
        { cat: 'Certification & Careers', q: 'Q1. Will I get a certificate after I finish my Java Full Stack training?', a: 'Yes, students get a certification that is recognized by the industry that proves their skills in full stack Java development. This opens up job opportunities in software engineering and IT.' },
        { cat: 'Certification & Careers', q: 'Q2. Do companies care about Java Full Stack certifications?', a: 'Yes, employers see certification as proof that you know how to work with Java on the frontend, backend, databases, and deployment. This will make it more likely that you will get the best jobs.' },
        { cat: 'Certification & Careers', q: 'Q3. What kinds of jobs can I get after getting my Java Full Stack certification?', a: 'In businesses, you can work as a Full Stack Java Developer, Backend Developer, Software Engineer, Web Application Developer, or API Integration Specialist.' },
        { cat: 'Certification & Careers', q: 'Q4. Will this Java Full Stack course help me get a job?', a: 'Yes, placement help includes getting ready for interviews, making a resume, optimizing your LinkedIn profile, and getting access to job portals for full stack development jobs.' },
        { cat: 'Certification & Careers', q: 'Q5. Is there still a need for Java Full Stack in IT?', a: 'Yes, Java is still the backbone of business systems, which is why full stack Java development is one of the most sought-after software skills in the world.' },
        { cat: 'Projects & Hands', q: 'Q1.What projects will I finish in this Java Full Stack course?', a: 'Some of the projects are making web apps, making REST APIs, connecting MySQL databases, testing apps, and putting solutions into the cloud.' },
        { cat: 'Projects & Hands', q: 'Q2. Can I include these Java projects in my portfolio?', a: 'Yes, all of the projects are ready for your portfolio. They show off your skills in Java development, frontend, backend, and DevOps integration to potential employers.' },
        { cat: 'Projects & Hands', q: 'Q3. Will I get to practice making REST APIs while working on projects?', a: 'Yes, projects involve making REST APIs with Spring Boot, linking them to MySQL databases, and connecting them to React or Angular frontends.' },
        { cat: 'Projects & Hands', q: 'Q4. Are there projects that include deployment and cloud integration?', a: 'Yes, you will deploy Java full stack apps to AWS or Azure and practice CI/CD workflows for delivery pipelines that are good enough for businesses.' },
        { cat: 'Projects & Hands', q: 'Q5. Will I work on projects that involve testing in this program?', a: 'Yes, students make apps that are tested with JUnit and Mockito, which gives them the quality assurance and debugging skills they need to work as professional Java developers.' },
        { cat: 'Learning Format & Flexibility', q: 'Q1. Is it possible for me to take this Java training online or in person?', a: 'Yes, you can choose either way to learn. Learners can choose between live online interactive classes and offline classroom-based sessions, depending on what they want.' },
        { cat: 'Learning Format & Flexibility', q: 'Q2. Is it possible for people who work to take this Java Full Stack course?', a: 'Yes, professionals can learn Java full stack development on a flexible schedule while still working. This helps keep career growth steady in the field of modern enterprise software development.' },
        { cat: 'Learning Format & Flexibility', q: 'Q3. Can I listen to recordings of Java classes I missed?', a: 'Yes, all of the sessions are recorded. Students can go back and review things they missed, watch recordings whenever they want, and work on coding assignments and projects to get a better understanding.' },
        { cat: 'Learning Format & Flexibility', q: 'Q4. Do I get access to Java Full Stack learning materials for the rest of my life?', a: 'Yes, students can access project files, notes, and recordings for life, which means they can improve their full stack Java skills at any time in their careers.' },
        { cat: 'Learning Format & Flexibility', q: 'Q5. Will Java training give me help from experts?', a: 'Yes, certified trainers will help you with your career, explain Java frameworks, help you build projects, answer your questions, and guide you through the full stack program.' },
        { cat: 'Tools & Technologies', q: 'Q1.What tools will I learn in Java Full Stack training?', a: 'You will learn how to use DevOps tools for making enterprise applications, as well as Java, Spring Boot, Hibernate, REST APIs, React, Angular, MySQL, GitHub, and JUnit.' },
        { cat: 'Tools & Technologies', q: 'Q2. Will I learn how to do both front-end and back-end work in this class?', a: 'Yes, the training includes front-end work with React and Angular, back-end work with Java and Spring Boot, database work with MySQL, and deployment for full-stack apps.' },
        { cat: 'Tools & Technologies', q: 'Q3. Are there any real-world projects in this Java course?', a: 'Yes, students work on projects like blogging apps, e-commerce platforms, employee management systems, and REST APIs that are in line with what businesses really need.' },
        { cat: 'Tools & Technologies', q: 'Q4. Does the course teach how to make and use APIs?', a: 'Yes, students use Spring Boot to design and build REST APIs, connect them to frontend frameworks, and keep connections with databases safe.' },
        { cat: 'Tools & Technologies', q: 'Q5. Will I learn how to test Java and deploy it with DevOps?', a: 'Yes, the course covers JUnit, Mockito, GitHub version control, CI/CD pipelines, and deploying to AWS in the cloud for full-stack projects that are ready for business.' },
        { cat: 'Course Basics', q: 'Q1. What is this class about Java Full Stack Development?', a: 'This course teaches full stack Java development, which includes the front end, back end, REST APIs, databases, and deployment. Students consistently build enterprise applications in a variety of settings.' },
        { cat: 'Course Basics', q: 'Q2. Who should take this Java Full Stack course?', a: 'Anyone who wants to learn how to use Java for frontend, backend, and deployment should join. This includes students, developers, administrators, DevOps engineers, and IT professionals.' },
        { cat: 'Course Basics', q: 'Q3. Do I need to know Java before I take this course?', a: 'No, you don’t need to know Java before. It helps to know a little about programming or web development, but all the full stack concepts are explained one at a time.' },
        { cat: 'Course Basics', q: 'Q4. What jobs can I get after I finish my Java Full Stack training?', a: 'People who learn can work as Full Stack Developers, Backend Java Developers, Software Engineers, Web Application Developers, or API Integration Specialists in any field.' },
        { cat: 'Course Basics', q: 'Q5. Is this Java course good for both students and graduates?', a: 'Yes, students and graduates can get Java certification, work on projects, and get ready for jobs in full stack development, software engineering, and web application development.' }
      ]
    },
    'mern': {
      shortTitle: 'MERN Stack', label: 'Web Development', duration: '5 Months (20 Weeks)', level: 'Beginner to Advanced', lab: 'Live Full-Stack Project Studio', practicalWork: '12+ MERN Applications', salaryRange: '₹6.0 LPA - ₹15.0 LPA',
      subtitle: 'Build complete JavaScript applications with MongoDB, Express, React, and Node.js through guided frontend, backend, database, security, and deployment projects.',
      overview: 'A practical MERN development pathway that connects modern JavaScript, React interfaces, Node and Express services, MongoDB data modeling, authentication, testing, real-time features, and cloud deployment in one coherent full-stack workflow.',
      tools: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React 19', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'REST APIs', 'Docker', 'Git', 'GitHub'],
      audience: ['Beginners who want one structured route into full-stack JavaScript development', 'Frontend learners expanding into APIs, authentication, and databases', 'Developers preparing portfolio projects for full-stack interviews'],
      outcomes: ['Build reusable React interfaces and predictable client-side state', 'Create secure Express APIs with validation and authentication', 'Model and query MongoDB data for real application requirements', 'Test, containerize, deploy, and present a complete MERN product'],
      projects: [
        { num: '#01', title: 'Team Workflow Application', desc: 'Build a multi-user task and collaboration product with authentication, permissions, filters, and activity history.', skills: ['React UI', 'Authentication', 'REST APIs', 'MongoDB'], tags: ['React 19', 'Node.js', 'MongoDB'] },
        { num: '#02', title: 'Full-Stack Commerce Experience', desc: 'Create catalog, cart, checkout, order management, and administration workflows.', skills: ['State Management', 'Payments', 'API Security', 'Data Modeling'], tags: ['Redux Toolkit', 'Express.js', 'MongoDB'] },
        { num: '#03', title: 'Deployed MERN Capstone', desc: 'Design, test, optimize, and deploy a complete full-stack product with technical documentation.', skills: ['Testing', 'Docker', 'Deployment', 'Documentation'], tags: ['React 19', 'Docker', 'GitHub'] }
      ],
      careers: [
        { role: 'MERN Stack Developer', range: '₹6.0 LPA - ₹15.0 LPA', salaryChart: { entryMin: 40, entryMax: 70, midMin: 70, midMax: 112, srMin: 112, srMax: 150 }, scopeText: 'Builds complete JavaScript products across React interfaces, Express APIs, Node services, and MongoDB data layers.' },
        { role: 'Full-Stack JavaScript Developer', range: '₹6.5 LPA - ₹16.0 LPA', salaryChart: { entryMin: 42, entryMax: 74, midMin: 74, midMax: 118, srMin: 118, srMax: 158 }, scopeText: 'Owns browser and server features, API integration, authentication, testing, and deployment across the JavaScript stack.' },
        { role: 'Node.js Backend Developer', range: '₹6.0 LPA - ₹15.5 LPA', salaryChart: { entryMin: 40, entryMax: 72, midMin: 72, midMax: 115, srMin: 115, srMax: 154 }, scopeText: 'Creates Node and Express services, API contracts, database operations, security controls, and real-time integrations.' },
        { role: 'React Front-End Engineer', range: '₹5.5 LPA - ₹14.0 LPA', salaryChart: { entryMin: 38, entryMax: 68, midMin: 68, midMax: 108, srMin: 108, srMax: 142 }, scopeText: 'Develops responsive React experiences with reusable components, application state, API integration, and performance safeguards.' }
      ],
      modules: [
        { title: 'Module 1: Web & JavaScript Foundations', objective: 'Build semantic interfaces and strong JavaScript fundamentals.', bullets: ['HTML, CSS, responsive layouts, and accessibility', 'Modern JavaScript syntax, functions, objects, and modules', 'DOM, asynchronous JavaScript, fetch, Git, and debugging'] },
        { title: 'Module 2: React Application Development', objective: 'Create reusable, data-driven frontend applications.', bullets: ['Components, props, hooks, routing, and forms', 'Redux Toolkit and shared application state', 'API states, authentication flows, and responsive UI'] },
        { title: 'Module 3: Node.js & Express APIs', objective: 'Build structured and secure backend services.', bullets: ['Node runtime, modules, and asynchronous patterns', 'Express routing, middleware, validation, and errors', 'REST design, authentication, authorization, and security'] },
        { title: 'Module 4: MongoDB & Data Engineering', objective: 'Model and query application data efficiently.', bullets: ['Documents, schemas, relationships, and validation', 'Queries, indexes, aggregation, and pagination', 'Transactions, data integrity, and performance'] },
        { title: 'Module 5: Full-Stack Integration & Quality', objective: 'Connect the stack and validate complete user workflows.', bullets: ['Client-server contracts and secure session handling', 'Uploads, payments, notifications, and real-time features', 'Unit, integration, accessibility, and performance testing'] },
        { title: 'Module 6: Cloud Deployment & Capstone', objective: 'Ship and present a production-style MERN application.', bullets: ['Environment configuration and Docker', 'Cloud deployment and CI/CD foundations', 'Capstone documentation, demonstration, and review'] }
      ]
    },
    'django': {
      shortTitle: 'Django Full Stack', label: 'Web Development', duration: '5 Months (20 Weeks)', level: 'Beginner to Advanced', lab: 'Live Django Application Studio', practicalWork: '10+ Full-Stack Projects', salaryRange: '₹5.5 LPA - ₹14.5 LPA',
      subtitle: 'Learn Python, Django, databases, APIs, responsive frontend integration, application security, testing, and deployment through complete full-stack projects.',
      overview: 'A progressive Django full-stack program that starts with Python and browser foundations, then advances through Django architecture, relational data, authentication, APIs, testing, security, and deployment. The course emphasizes complete application workflows and portfolio evidence.',
      tools: ['Python', 'Django', 'Django REST Framework', 'HTML5', 'CSS3', 'JavaScript ES6+', 'PostgreSQL', 'REST APIs', 'Docker', 'Git', 'GitHub'],
      audience: ['Beginners seeking a complete Python-based full-stack pathway', 'Python programmers moving into web application engineering', 'Career switchers building practical backend and frontend portfolio evidence'],
      outcomes: ['Develop Python applications using clean, maintainable structure', 'Build responsive Django interfaces, forms, authentication, and admin workflows', 'Design relational databases and secure REST APIs', 'Test, optimize, deploy, and explain a complete full-stack product'],
      projects: [
        { num: '#01', title: 'Service Booking Platform', desc: 'Build customer, provider, scheduling, authentication, notification, and administration workflows.', skills: ['Django Models', 'Forms', 'Authentication', 'Business Workflows'], tags: ['Python', 'Django', 'PostgreSQL'] },
        { num: '#02', title: 'Content & Community Application', desc: 'Create role-based publishing, search, comments, moderation, and responsive frontend interactions.', skills: ['Permissions', 'Search', 'Responsive UI', 'Moderation'], tags: ['Django', 'JavaScript ES6+', 'CSS3'] },
        { num: '#03', title: 'Django Full-Stack Capstone', desc: 'Plan, test, secure, containerize, and deploy a complete application with portfolio documentation.', skills: ['REST APIs', 'Testing', 'Docker', 'Deployment'], tags: ['Django REST Framework', 'Docker', 'GitHub'] }
      ],
      careers: [
        { role: 'Django Developer', range: '₹5.5 LPA - ₹14.0 LPA', salaryChart: { entryMin: 38, entryMax: 66, midMin: 66, midMax: 105, srMin: 105, srMax: 140 }, scopeText: 'Builds secure Django applications, data models, forms, authentication, admin workflows, APIs, and production settings.' },
        { role: 'Python Web Developer', range: '₹5.5 LPA - ₹13.5 LPA', salaryChart: { entryMin: 36, entryMax: 64, midMin: 64, midMax: 102, srMin: 102, srMax: 136 }, scopeText: 'Develops Python web features, integrates databases and services, writes tests, and maintains application quality.' },
        { role: 'Backend Engineer', range: '₹6.5 LPA - ₹16.0 LPA', salaryChart: { entryMin: 42, entryMax: 74, midMin: 74, midMax: 118, srMin: 118, srMax: 155 }, scopeText: 'Designs service architecture, APIs, persistence, security, observability, and reliable backend integrations.' },
        { role: 'Full-Stack Django Engineer', range: '₹6.0 LPA - ₹15.0 LPA', salaryChart: { entryMin: 40, entryMax: 70, midMin: 70, midMax: 112, srMin: 112, srMax: 150 }, scopeText: 'Combines Django backend delivery with responsive frontend implementation, API connections, testing, and cloud deployment.' }
      ],
      modules: [
        { title: 'Module 1: Python & Programming Foundations', objective: 'Develop the programming habits required for Django engineering.', bullets: ['Python syntax, collections, functions, and modules', 'Object-oriented programming and exception handling', 'Environments, packages, testing basics, and Git'] },
        { title: 'Module 2: Frontend & Web Foundations', objective: 'Understand how responsive browser interfaces communicate with servers.', bullets: ['Semantic HTML, forms, and accessibility', 'CSS layouts, responsive design, and reusable styles', 'JavaScript events, validation, fetch, and browser storage'] },
        { title: 'Module 3: Django Core', objective: 'Build structured applications with Django conventions.', bullets: ['Projects, apps, settings, URLs, views, and templates', 'Models, migrations, forms, and admin configuration', 'Static files, uploads, messages, and reusable templates'] },
        { title: 'Module 4: Data, Authentication & APIs', objective: 'Deliver secure, data-driven application workflows.', bullets: ['PostgreSQL modeling, relationships, queries, and transactions', 'Authentication, permissions, sessions, and security', 'Django REST Framework, validation, and API documentation'] },
        { title: 'Module 5: Testing, Performance & Security', objective: 'Improve reliability and production readiness.', bullets: ['Unit and integration tests for views, models, and APIs', 'Query optimization, caching, logging, and error handling', 'CSRF, CORS, secure configuration, and deployment checks'] },
        { title: 'Module 6: Deployment & Portfolio Capstone', objective: 'Ship and present a complete Django full-stack application.', bullets: ['Docker, environment variables, and service configuration', 'Cloud deployment and database operations', 'Portfolio documentation, demonstration, and mentor review'] }
      ]
    }
  };

  return profiles[key] || {};
}

function ensureStylesheets() {
  const files = ['css/header-footer.css', 'courses/course-template.css'];
  files.forEach(href => {
    if (!document.querySelector(`link[href*="${href}"]`)) {
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
  const courseKey = page.dataset.course || new URLSearchParams(window.location.search).get('course') || 'advanced-mern-stack';
  const authoredTitle = document.title.replace(/\s*\|\s*SecureHub.*$/i, '').trim();
  const course = getCourse(courseKey);
  if (!courseData[courseKey] && !course.metaTitle && authoredTitle && authoredTitle.toLowerCase() !== 'course') {
    course.title = authoredTitle;
  }
  course.key = courseKey;
  course.isWebDevelopment = webDevelopmentCourseKeys.has(courseKey);
  page.classList.toggle('course-page--web', course.isWebDevelopment);
  page.classList.toggle('course-page--ethical-hacking', courseKey === 'ethical-hacking-cyber-security');

  document.title = `${course.metaTitle || course.title} | SecureHub`;
  page.innerHTML = renderCoursePage(course);
  arrangeCourseSections(page, course);
  initCourseInteractions(page, course);
});

function arrangeCourseSections(page, course) {
  const sharedOrder = [
    'course-overview',
    'learning-modes',
    'learner-benefits',
    'career-opportunities',
    'course-snapshot',
    'course-curriculum',
    'real-projects',
    'professional-certification',
    'why-choose-us',
    'roadmap-to-success'
  ];
  const sectionOrder = course.isWebDevelopment || course.key === 'ethical-hacking-cyber-security'
    ? [...sharedOrder, 'recommended-courses', 'faq-section']
    : ['course-overview', 'recommended-courses', ...sharedOrder.slice(1), 'faq-section'];

  sectionOrder.forEach(id => {
    const section = page.querySelector(`#${id}`);
    if (section) page.append(section);
  });
}

function renderCoursePage(course) {
  const logoPath = getCourseLogo(course.key);
  const defaultWebFaqCategories = ['Support & Community', 'Certification & Careers', 'Projects & Hands', 'Learning Format & Flexibility', 'Tools & Technologies', 'Course Basics'];
  const faqCategories = course.faqCategories || (course.isWebDevelopment ? defaultWebFaqCategories : []);
  const sourceFaqs = course.faqs || (course.isWebDevelopment ? sharedWebCourseFaqs : sharedCourseFaqs);
  const faqs = faqCategories.length
    ? faqCategories.flatMap(category => sourceFaqs.filter(faq => faq.cat === category))
    : sourceFaqs;
  const initialFaqCategory = faqCategories[0] || 'all';
  const recommendedCourses = course.recommendedCourses || getRecommendedCourses(course.key);
  const usesRecommendedCarousel = course.isWebDevelopment || course.key === 'ethical-hacking-cyber-security';

  const moduleMarkup = course.modules.map((m, index) => {
    const moduleItems = m.sections
      ? `${m.sections.map(section => `<li>${section.title}<ul>${section.topics.map(topic => `<li>${topic}</li>`).join('')}</ul></li>`).join('')}${m.projects ? `<li>Projects<ul>${m.projects.map(project => `<li>${project}</li>`).join('')}</ul></li>` : ''}`
      : m.bullets.map(b => `<li>${b}</li>`).join('');

    return `
      <article class="course-module">
        <button class="course-module-toggle" aria-expanded="${index === 0}" aria-controls="module-${index}">
          <span><b>Module ${index + 1}</b>: ${m.title.replace(/^Module \d+:\s*/i, '')}</span>
          <span class="course-module-plus" aria-hidden="true">+</span>
        </button>
        <div class="course-module-body" id="module-${index}" ${index === 0 ? '' : 'hidden'}>
          ${m.objective ? `<p class="module-objective"><strong>Objective:</strong> ${m.objective}</p>` : ''}
          <ul class="module-bullets-list">${moduleItems}</ul>
        </div>
      </article>
    `;
  }).join('');

  // Skill Pills WITH Tech SVG Icons
  const toolsMarkup = course.tools ? course.tools.map(t => `<span class="tool-tag">${getTechIcon(t)} <span>${t}</span></span>`).join('') : '';

  const projectsMarkup = course.projects ? course.projects.map(p => `
    <div class="real-project-card">
      <div class="project-num-badge">${p.num}</div>
      <h3>${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-skills-list">
        <strong>Skills:</strong> ${p.skills.join(', ')}
      </div>
      <div class="project-tags-row">
        ${p.tags.map(t => `<span class="pj-tag">${getTechIcon(t)} ${t}</span>`).join('')}
      </div>
    </div>
  `).join('') : '';

  // Designation Role Pills with Active Index
  const careerMarkup = course.careers ? course.careers.map((c, idx) => `
    <button type="button" class="career-role-pill ${idx === 0 ? 'active' : ''}" data-role-index="${idx}" aria-pressed="${idx === 0}">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>
        <span class="career-role-name">${c.role}</span>
        <span class="career-salary">${c.range}</span>
      </span>
    </button>
  `).join('') : '';

  const initialCareer = course.careers && course.careers[0] ? course.careers[0] : {
    role: course.shortTitle || course.title,
    range: course.salaryRange || '₹7.5 LPA - ₹16.0 LPA',
    salaryChart: { entryMin: 18, entryMax: 40, midMin: 40, midMax: 80, srMin: 80, srMax: 114 },
    scopeText: 'Develops production-ready applications with modern architecture; ensures performance, scalability, security, and responsive user experience.'
  };

  const sc = initialCareer.salaryChart;
  const chartScale = Math.ceil(Math.max(120, ...Object.values(sc)) / 20) * 20;
  const chartAxis = [1, .8, .6, .4, .2].map(step => `${Number((chartScale * step / 10).toFixed(1))}LPA`);
  const salarySummary = initialCareer.salarySummary || `₹${sc.entryMin / 10}-${sc.entryMax / 10} LPA (Entry-Level), ₹${sc.midMin / 10}-${sc.midMax / 10} LPA (Mid-Level), ₹${sc.srMin / 10}-${sc.srMax / 10} LPA (Senior-Level)`;

  const faqMarkup = faqs.map((f, idx) => `
    <article class="course-faq-item" data-category="${f.cat}" ${initialFaqCategory !== 'all' && f.cat !== initialFaqCategory ? 'style="display: none;"' : ''}>
      <button class="faq-toggle" aria-expanded="${idx === 0}" aria-controls="faq-${idx}">
        <span>${f.q}</span>
        <span class="faq-plus">+</span>
      </button>
      <div class="faq-body" id="faq-${idx}" ${idx === 0 ? '' : 'hidden'}>
        <p>${f.a}</p>
      </div>
    </article>
  `).join('');

  const faqFiltersMarkup = faqCategories.length
    ? faqCategories.map((category, index) => `
        <button type="button" class="faq-cat-pill ${index === 0 ? 'active' : ''}" data-cat="${category}" aria-pressed="${index === 0}">
          <span>${course.preserveFaqCategoryLabels ? category : (category === 'Projects & Hands' ? 'Projects & Hands-On' : category)}</span>
          <span class="faq-cat-count">${faqs.filter(faq => faq.cat === category).length}</span>
        </button>
      `).join('')
    : `
        <button type="button" class="faq-cat-pill active" data-cat="all" aria-pressed="true">All Categories</button>
        <button type="button" class="faq-cat-pill" data-cat="Course Basics" aria-pressed="false">Course Basics</button>
        <button type="button" class="faq-cat-pill" data-cat="Certification & Careers" aria-pressed="false">Certification &amp; Careers</button>
        <button type="button" class="faq-cat-pill" data-cat="Projects & Hands" aria-pressed="false">Projects &amp; Hands-On</button>
        <button type="button" class="faq-cat-pill" data-cat="Learning Format & Flexibility" aria-pressed="false">Learning Format &amp; Flexibility</button>
        <button type="button" class="faq-cat-pill" data-cat="Tools & Technologies" aria-pressed="false">Tools &amp; Technologies</button>
        <button type="button" class="faq-cat-pill" data-cat="Support & Community" aria-pressed="false">Support &amp; Community</button>
      `;

  const recommendedMarkup = recommendedCourses.map(item => `
    <a class="recommended-course-card" href="${item.href}" aria-label="Explore ${item.title}" role="listitem">
      <span class="recommended-course-media">
        <img src="${item.image || getCourseLogo(item.key)}" alt="${item.title} ${item.image ? 'course visual' : 'course logo'}">
      </span>
      <span class="recommended-course-copy">
        <span class="recommended-course-category">${item.category}</span>
        <h3 class="recommended-course-title">${item.title}</h3>
        <span class="recommended-course-summary">${item.summary}</span>
        <span class="recommended-course-meta"><span>${item.duration}</span><span>${item.rating}</span></span>
      </span>
      <span class="recommended-course-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </span>
    </a>
  `).join('');

  // Fixed Title without duplicate words (e.g. Avoid "Developer Developers")
  const careerTitle = (course.shortTitle || course.title).replace(/developer$/i, '').trim();
  const careerIntro = course.careerIntro || (course.isWebDevelopment
    ? `Compare the primary ${careerTitle} career paths, salary progression, and role expectations supported by this practical web-development program.`
    : `Build role-ready capability in ${careerTitle} and prepare for technical interviews through structured practical training.`);
  const curriculumHeading = course.curriculumHeading || (course.isWebDevelopment
    ? `${careerTitle} Development Course Curriculum`
    : `Comprehensive ${careerTitle} Curriculum`);
  const certificationStats = course.certificationStats || [
    { value: '20,000+', label: 'Professionals Trained' },
    { value: '20+', label: 'Countries & Counting' },
    { value: '100+', label: 'Corporates Served' }
  ];

  return `
    <!-- 1. UNIFIED LIGHT HERO SECTION (Left Text Height Matches Right Image Height Perfectly) -->
    <section class="course-hero course-hero-unified-light" id="course-overview">
      <div class="course-shell">
        <p class="course-breadcrumb">
          <a href="index.html">Home</a><span>/</span>
          <a href="index.html#courses-section">Courses</a><span>/</span>
          ${course.label}
        </p>
        <div class="course-hero-grid">
          <!-- Hero Left Column -->
          <div class="course-hero-copy">
            <div class="hero-tags-row">
              <span class="hero-tag-pill">ISO-certified</span>
              <span class="hero-tag-pill ai-tag">AI Powered ✨</span>
            </div>

            <div class="course-hero-title-row">
              <div class="course-hero-logo-box">
                <img src="${logoPath}" alt="${course.title}">
              </div>
              <h1 class="hero-balanced-title">${course.title}</h1>
            </div>

            <p class="course-hero-sub balanced-hero-sub">${course.subtitle}</p>

            <div class="hero-stats-row">
              <div class="stat-pill"><span class="stat-icon">📍</span> ${course.placements || '150k+ Placements till Date'}</div>
              <div class="stat-pill"><span class="stat-icon">🏢</span> ${course.partners || '600+ Hiring Partners'}</div>
              <div class="stat-pill highlight-stat"><span class="stat-icon">💰</span> ${course.highestPkg || '₹76 Lakhs Highest Package'}</div>
            </div>

            <div class="hero-trust-badges-row">
              <div class="rating-badge">
                <span class="stars">⭐⭐⭐⭐⭐</span>
                <span>${course.rating || '4.8 (426 reviews)'}</span>
              </div>
              <div class="hero-trust-pill-large">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                <span>${course.batchText || 'Next Practical Batch Starts Monday'}</span>
              </div>
            </div>
          </div>

          <!-- Hero Right Column: High-Impact 1:1 Vector Badge Card (NO FORM) -->
          <div class="course-hero-graphic-card">
            <div class="graphic-badge-container">
              <img src="${logoPath}" alt="${course.title} course visual" class="hero-graphic-img">
            </div>
            <div class="graphic-card-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Certified ${course.label} Track</span>
            </div>
          </div>
        </div>

        <div class="course-facts-bar">
          <div class="fact-item"><span>Duration</span><strong>${course.duration}</strong></div>
          <div class="fact-item"><span>Skill Level</span><strong>${course.level}</strong></div>
          <div class="fact-item"><span>Learning Format</span><strong>${course.lab}</strong></div>
          <div class="fact-item"><span>Avg Salary Package</span><strong class="salary-highlight">${course.salaryRange || '₹7.5 LPA - ₹16.0 LPA'}</strong></div>
        </div>
      </div>
    </section>

    <!-- 2. HIGHLY RECOMMENDED COURSES -->
    <section class="course-section recommended-courses-section" id="recommended-courses" aria-labelledby="recommended-courses-title">
      <div class="course-shell">
        <div class="recommended-courses-heading">
          <div>
            <span class="course-section-label">CURATED NEXT STEPS</span>
            <h2 id="recommended-courses-title">Highly Recommended Courses</h2>
            <p>Explore focused programs that complement your learning path and build in-demand technical capability.</p>
          </div>
          <div class="recommended-courses-actions">
            ${usesRecommendedCarousel ? `
              <div class="recommended-carousel-controls" aria-label="Recommended course gallery controls">
                <button type="button" class="recommended-carousel-button recommended-carousel-prev" aria-label="Show previous recommended courses">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
                </button>
                <button type="button" class="recommended-carousel-button recommended-carousel-next" aria-label="Show next recommended courses">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </button>
              </div>
            ` : ''}
            <a class="recommended-courses-all" href="index.html#courses-section">Explore all courses
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
        <div class="recommended-courses-viewport" ${usesRecommendedCarousel ? 'tabindex="0" aria-label="Recommended course gallery"' : ''}>
          <div class="recommended-courses-grid" role="list">${recommendedMarkup}</div>
        </div>
        ${usesRecommendedCarousel ? '<div class="recommended-carousel-pagination" aria-label="Recommended course pages"></div>' : ''}
      </div>
    </section>

    <!-- LEARNER BENEFITS -->
    <section class="course-section career-pillars-banner" id="learner-benefits" aria-labelledby="learner-benefits-title">
      <div class="course-shell">
        <div class="benefits-section-heading">
          <span class="course-section-label">OUTCOME-LED LEARNING</span>
          <h2 id="learner-benefits-title">Turn Learning Into Visible Career Proof</h2>
        </div>
        <div class="pillars-grid">
          <article class="pillar-item pillar-item-featured">
            <span class="pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></span>
            <div><span class="pillar-kicker">Portfolio-ready proof</span><h3>Build an Impressive Portfolio</h3><p>Complete practical work you can explain, demonstrate, and present with confidence during interviews.</p></div>
          </article>
          <article class="pillar-item">
            <span class="pillar-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></span>
            <div><h3>Expand Your Career Opportunities</h3><p>Connect course skills to relevant roles and professional pathways.</p></div>
          </article>
          <article class="pillar-item">
            <span class="pillar-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></span>
            <div><h3>Stay Ahead with Industry Trends</h3><p>Practice current workflows and understand how the field is evolving.</p></div>
          </article>
          <article class="pillar-item">
            <span class="pillar-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>
            <div><h3>Master Production Tools</h3><p>Build fluency with the platforms used in real delivery environments.</p></div>
          </article>
        </div>
      </div>
    </section>

    <!-- 3. FLEXIBLE LEARNING MODES -->
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

    <!-- 4. COURSE SNAPSHOT & FIELDSET SKILLS LEGEND BOX WITH ICONS -->
    <section class="course-section" id="course-snapshot">
      <div class="course-shell">
        <div class="section-header-left">
          <h2>Course Snapshot</h2>
        </div>

        <div class="snapshot-container">
          <!-- Fieldset Legend Box for Skills Covered -->
          <fieldset class="skills-fieldset-box">
            <legend class="skills-fieldset-legend">Skills Covered</legend>
            <div class="tools-grid">
              ${toolsMarkup}
            </div>
          </fieldset>

          <div class="snapshot-details-grid">
            <div class="snapshot-left">
              <h3>Course Description</h3>
              <p class="course-lead-copy">${course.overview}</p>

              ${course.isWebDevelopment ? `
                <div class="snapshot-course-details" aria-label="Course details">
                  <div><span>Duration</span><strong>${course.duration}</strong></div>
                  <div><span>Format</span><strong>${course.lab}</strong></div>
                  <div><span>Approach</span><strong>${course.approach || 'Live instruction, guided labs, and portfolio projects'}</strong></div>
                  <div><span>Progression</span><strong>${course.progression || course.level}</strong></div>
                </div>
              ` : ''}

              <div class="outcomes-list">
                <h3>Program Key Highlights &amp; Outcomes</h3>
                ${course.outcomes.map(o => `
                  <div class="outcome-bullet">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>${o}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="snapshot-right">
              <div class="audience-card">
                <h3>Who Should Enroll</h3>
                <ul>
                  ${course.audience.map(a => `<li>${a}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. HANDS-ON LEARNING | BUILD REAL PROJECTS -->
    ${course.projects ? `
    <section class="course-section bg-alt" id="real-projects">
      <div class="course-shell">
        <div class="section-center-header">
          <span class="course-section-label">PRACTICAL PORTFOLIO</span>
          <h2>${course.projectsHeading || `Hands-On Learning | Build Real ${careerTitle} Projects`}</h2>
          <p class="section-sub-copy">${course.projectsIntro || 'Build fully functional applications that prepare you for the job market and create a standout GitHub profile.'}</p>
        </div>

        <div class="real-projects-grid">
          ${projectsMarkup}
        </div>
      </div>
    </section>
    ` : ''}

    <!-- 6. HIGH-PAYING CAREERS & INTERACTIVE DYNAMIC SALARY GRAPH -->
    <section class="course-section" id="career-opportunities">
      <div class="course-shell">
        <div class="section-center-header">
          <span class="course-section-label">CAREER OUTCOMES</span>
          <h2>${course.careerHeading || `High-Paying Careers for ${careerTitle} Developers`}</h2>
          <p class="section-sub-copy">${careerIntro}</p>
        </div>

        <div class="career-dashboard-grid">
          <!-- Designation List Column (Clickable Role Pills) -->
          <div class="career-designations-col">
            <h3>Designation</h3>
            <div class="roles-pills-list">
              ${careerMarkup}
            </div>
          </div>

          <!-- Dynamic Annual Salary Chart Graph Column -->
          <div class="career-salary-col">
            <h3 id="salary-chart-heading">${initialCareer.role} Annual Salary</h3>
            <div class="salary-graph-card" role="img" aria-labelledby="salary-chart-heading" aria-describedby="salary-graph-footer-text">
              <div class="graph-legend-row">
                <span class="legend-box min-leg">Minimum Salary (LPA)</span>
                <span class="legend-box max-leg">Maximum Salary (LPA)</span>
              </div>

              <div class="salary-bar-chart" id="interactive-salary-chart">
                <div class="chart-y-axis">
                  ${chartAxis.map(value => `<span>${value}</span>`).join('')}
                </div>
                <div class="chart-bars-container">
                  <div class="bar-group">
                    <div class="bars-pair">
                      <div class="bar min-bar" id="bar-entry-min" style="height: ${(sc.entryMin / chartScale) * 100}%;" title="Min: ₹${sc.entryMin / 10} LPA"></div>
                      <div class="bar max-bar" id="bar-entry-max" style="height: ${(sc.entryMax / chartScale) * 100}%;" title="Max: ₹${sc.entryMax / 10} LPA"></div>
                    </div>
                    <span class="group-label">Entry-Level</span>
                  </div>

                  <div class="bar-group">
                    <div class="bars-pair">
                      <div class="bar min-bar" id="bar-mid-min" style="height: ${(sc.midMin / chartScale) * 100}%;" title="Min: ₹${sc.midMin / 10} LPA"></div>
                      <div class="bar max-bar" id="bar-mid-max" style="height: ${(sc.midMax / chartScale) * 100}%;" title="Max: ₹${sc.midMax / 10} LPA"></div>
                    </div>
                    <span class="group-label">Mid-Level</span>
                  </div>

                  <div class="bar-group">
                    <div class="bars-pair">
                      <div class="bar min-bar" id="bar-sr-min" style="height: ${(sc.srMin / chartScale) * 100}%;" title="Min: ₹${sc.srMin / 10} LPA"></div>
                      <div class="bar max-bar" id="bar-sr-max" style="height: ${(sc.srMax / chartScale) * 100}%;" title="Max: ₹${sc.srMax / 10} LPA"></div>
                    </div>
                    <span class="group-label">Senior-Level</span>
                  </div>
                </div>
              </div>

              <p class="salary-graph-footer" id="salary-graph-footer-text">${salarySummary}</p>
            </div>
          </div>

          <!-- Dynamic Hiring Scope Column -->
          <div class="career-scope-col">
            <h3>${course.isWebDevelopment ? 'Hiring Companies & Role Scope' : 'Hiring Scope & Demand'}</h3>
            <div class="hiring-scope-card">
              ${course.isWebDevelopment ? `
                <div class="career-hiring-logos" aria-label="Example hiring partners">
                  <img src="assets/images/partners/accenture.svg" alt="Accenture">
                  <img src="assets/images/partners/tcs.svg" alt="TCS">
                  <img src="assets/images/partners/wipro.svg" alt="Wipro">
                </div>
              ` : ''}
              <p id="scope-description-text">${initialCareer.scopeText}</p>
              <div class="scope-badges">
                <span>Top Startup Hiring</span>
                <span>MNC Enterprise Demand</span>
                <span>Remote Global Roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. INDUSTRY-RECOGNIZED PROFESSIONAL CERTIFICATION -->
    <section class="course-section bg-alt" id="professional-certification">
      <div class="course-shell">
        <div class="certification-flex-card">
          <div class="cert-card-left">
            <span class="course-section-label">OFFICIAL ACCREDITATION</span>
            <h2>${course.certificationTitle || 'Industry-Recognized Professional Certification'}</h2>
            <p>${course.certificationDescription || 'Receive a globally valued certification that validates your skills, practical knowledge, and job-ready expertise. Enhance your credibility and strengthen your resume for global employers.'}</p>
            
            <div class="cert-stats-row">
              <div class="cert-stat-box">
                <strong>${certificationStats[0].value}</strong>
                <span>${certificationStats[0].label}</span>
              </div>
              <div class="cert-stat-box">
                <strong>${certificationStats[1].value}</strong>
                <span>${certificationStats[1].label}</span>
              </div>
              <div class="cert-stat-box">
                <strong>${certificationStats[2].value}</strong>
                <span>${certificationStats[2].label}</span>
              </div>
            </div>
          </div>

          <div class="cert-card-right">
            <div class="cert-mockup-frame">
              <div class="cert-header-bar">
                <span>Certificate of Training</span>
                <span class="cert-brand">SecureHub</span>
              </div>
              <div class="cert-body-preview">
                <p>This certificate is awarded to</p>
                <h3>[YOUR NAME]</h3>
                <p>for successfully completing the <strong>${course.title}</strong></p>
                <div class="cert-seal-row">
                  <div class="cert-qr-box">QR VERIFIED</div>
                  <div class="cert-signature">Official Verification Seal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. WHY CHOOSE SECUREHUB? -->
    <section class="course-section" id="why-choose-us">
      <div class="course-shell">
        <div class="section-center-header">
          <span class="course-section-label">THE SECUREHUB ADVANTAGE</span>
          <h2>Why Choose SecureHub?</h2>
          <p class="section-sub-copy">Discover why thousands of tech learners and professionals choose our career-focused training ecosystem.</p>
        </div>

        <div class="why-us-grid">
          <div class="why-card">
            <div class="why-icon">📚</div>
            <h3>Industry-Aligned Curriculum</h3>
            <p>Master a curriculum crafted and updated by industry experts to match real-world tech trends.</p>
          </div>
          <div class="why-card">
            <div class="why-icon">🤝</div>
            <h3>Personalized Career Support</h3>
            <p>Receive one-on-one mentorship, resume reviews, mock interviews, and placement assistance through our partner network.</p>
          </div>
          <div class="why-card">
            <div class="why-icon">💡</div>
            <h3>Expert Mentorship</h3>
            <p>Learn directly from certified professionals with years of hands-on experience who guide you personally.</p>
          </div>
          <div class="why-card">
            <div class="why-icon">🚀</div>
            <h3>Real-World Projects</h3>
            <p>Gain practical exposure by working on live, industry-grade projects that mirror real engineering challenges.</p>
          </div>
          <div class="why-card full-width-why">
            <div class="why-icon">🏆</div>
            <h3>Proven Track Record</h3>
            <p>Join thousands of successful learners who have launched rewarding tech careers through SecureHub's trusted training programs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. ROADMAP TO SUCCESS -->
    <section class="course-section bg-alt" id="roadmap-to-success">
      <div class="course-shell">
        <div class="section-center-header">
          <span class="course-section-label">CAREER BLUEPRINT</span>
          <h2>From Training to Placement: A Roadmap to Success</h2>
          <p class="section-sub-copy">Navigate your professional journey with a proven step-by-step roadmap designed to transform learning into job opportunities.</p>
        </div>

        <div class="roadmap-flex-layout">
          <div class="roadmap-steps-list">
            <div class="roadmap-step-pill active" data-step="1"><span>01</span> Building Strong Foundation</div>
            <div class="roadmap-step-pill" data-step="2"><span>02</span> Sharpening Interview Readiness</div>
            <div class="roadmap-step-pill" data-step="3"><span>03</span> Communication &amp; Aptitude Skill Development</div>
            <div class="roadmap-step-pill" data-step="4"><span>04</span> Resume Building Masterclasses</div>
            <div class="roadmap-step-pill" data-step="5"><span>05</span> Advance Interview Boot Camp</div>
            <div class="roadmap-step-pill" data-step="6"><span>06</span> Personalized 1:1 Guidance</div>
          </div>

          <div class="roadmap-details-pane" id="roadmap-details-pane">
            <div class="roadmap-feature-box">
              <div class="feature-icon">🎓</div>
              <h4>Expert Training Sessions</h4>
              <p>Focus on industry-relevant skills and hands-on coding walkthroughs led by senior engineers.</p>
            </div>
            <div class="roadmap-feature-box">
              <div class="feature-icon">💻</div>
              <h4>Hands-On Projects &amp; Assignments</h4>
              <p>Real-world projects to implement learned concepts and build a verifiable GitHub portfolio.</p>
            </div>
            <div class="roadmap-feature-box">
              <div class="feature-icon">📊</div>
              <h4>Performance Tracking</h4>
              <p>Weekly tests, code reviews, and progress tracking to continuously assess readiness.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. COMPREHENSIVE 6-MODULE CURRICULUM ACCORDION -->
    <section class="course-section" id="course-curriculum">
      <div class="course-shell">
        <div class="section-center-header">
          <span class="course-section-label">CURRICULUM BREAKDOWN</span>
          <h2>${curriculumHeading}</h2>
          <p class="section-sub-copy">${course.curriculumIntro || 'Every module combines theory explanation, guided live lab practice, and a mentor code review checkpoint.'}</p>
        </div>

        <div class="course-module-list">${moduleMarkup}</div>
      </div>
    </section>

    <!-- 11. FREQUENTLY ASKED QUESTIONS -->
    <section class="course-section bg-alt" id="faq-section">
      <div class="course-shell">
        <div class="section-center-header">
          <span class="course-section-label">FREQUENTLY ASKED QUESTIONS</span>
          <h2>${course.isWebDevelopment ? 'Frequently Asked Questions' : 'Have Questions? We Have Answers.'}</h2>
        </div>

        <div class="faq-categorized-layout">
          <div class="faq-categories-sidebar">
            ${faqFiltersMarkup}
          </div>

          <div class="faq-accordion-container">
            <div class="course-faq-list">${faqMarkup}</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function initCourseInteractions(page, course) {
  initRecommendedCourseGallery(page);

  // Module Accordion Toggle
  page.querySelectorAll('.course-module-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const body = document.getElementById(button.getAttribute('aria-controls'));
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      body.hidden = expanded;
    });
  });

  // FAQ Accordion Toggle
  page.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const body = document.getElementById(button.getAttribute('aria-controls'));
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      body.hidden = expanded;
    });
  });

  // Interactive Designation Role Switcher (Updates Annual Salary Chart Graph & Scope!)
  const rolePills = page.querySelectorAll('.career-role-pill');
  rolePills.forEach(pill => {
    pill.addEventListener('click', () => {
      rolePills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-pressed', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-pressed', 'true');

      const roleIdx = parseInt(pill.getAttribute('data-role-index') || '0', 10);
      const selectedCareer = course.careers && course.careers[roleIdx] ? course.careers[roleIdx] : null;

      if (selectedCareer) {
        // Update Chart Heading
        const heading = page.querySelector('#salary-chart-heading');
        if (heading) heading.textContent = `${selectedCareer.role} Annual Salary`;

        // Update Chart Bars
        const sc = selectedCareer.salaryChart || { entryMin: 18, entryMax: 40, midMin: 40, midMax: 80, srMin: 80, srMax: 114 };
        const barEntryMin = page.querySelector('#bar-entry-min');
        const barEntryMax = page.querySelector('#bar-entry-max');
        const barMidMin = page.querySelector('#bar-mid-min');
        const barMidMax = page.querySelector('#bar-mid-max');
        const barSrMin = page.querySelector('#bar-sr-min');
        const barSrMax = page.querySelector('#bar-sr-max');

        const chartScale = Math.ceil(Math.max(120, ...Object.values(sc)) / 20) * 20;
        if (barEntryMin) barEntryMin.style.height = `${(sc.entryMin / chartScale) * 100}%`;
        if (barEntryMax) barEntryMax.style.height = `${(sc.entryMax / chartScale) * 100}%`;
        if (barMidMin) barMidMin.style.height = `${(sc.midMin / chartScale) * 100}%`;
        if (barMidMax) barMidMax.style.height = `${(sc.midMax / chartScale) * 100}%`;
        if (barSrMin) barSrMin.style.height = `${(sc.srMin / chartScale) * 100}%`;
        if (barSrMax) barSrMax.style.height = `${(sc.srMax / chartScale) * 100}%`;
        page.querySelectorAll('.chart-y-axis span').forEach((label, index) => {
          const step = [1, .8, .6, .4, .2][index];
          label.textContent = `${Number((chartScale * step / 10).toFixed(1))}LPA`;
        });

        // Update Graph Footer Text
        const footerText = page.querySelector('#salary-graph-footer-text');
        if (footerText) {
          footerText.textContent = selectedCareer.salarySummary || `₹${sc.entryMin / 10}-${sc.entryMax / 10} LPA (Entry-Level), ₹${sc.midMin / 10}-${sc.midMax / 10} LPA (Mid-Level), ₹${sc.srMin / 10}-${sc.srMax / 10} LPA (Senior-Level)`;
        }

        // Update Scope Text
        const scopeDesc = page.querySelector('#scope-description-text');
        if (scopeDesc && selectedCareer.scopeText) {
          scopeDesc.textContent = selectedCareer.scopeText;
        }
      }
    });
  });

  // Category FAQ filter
  const faqPills = page.querySelectorAll('.faq-cat-pill');
  faqPills.forEach(pill => {
    pill.addEventListener('click', () => {
      faqPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-pressed', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-pressed', 'true');
      const category = pill.getAttribute('data-cat');
      const faqItems = page.querySelectorAll('.course-faq-item');
      faqItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Interactive Roadmap Step Switcher
  const roadmapSteps = page.querySelectorAll('.roadmap-step-pill');
  const detailsPane = page.querySelector('#roadmap-details-pane');
  const roadmapData = {
    '1': [
      { title: 'Expert Training Sessions', desc: 'Focus on industry-relevant skills and hands-on coding walkthroughs led by senior engineers.', icon: '🎓' },
      { title: 'Hands-On Projects & Assignments', desc: 'Real-world projects to implement learned concepts and build a verifiable GitHub portfolio.', icon: '💻' },
      { title: 'Performance Tracking', desc: 'Weekly tests, code reviews, and progress tracking to continuously assess readiness.', icon: '📊' }
    ],
    '2': [
      { title: 'Technical Mock Interviews', desc: 'Simulated 1-on-1 technical interviews with senior engineering mentors.', icon: '🎯' },
      { title: 'Problem Solving & DSA', desc: 'Algorithmic problem-solving challenges and live whiteboard coding.', icon: '⚡' },
      { title: 'System Design Fundamentals', desc: 'Learn architecture trade-offs, scaling strategies, and design patterns.', icon: '🏗️' }
    ],
    '3': [
      { title: 'Corporate Communication', desc: 'Strengthen verbal presentation, email etiquette, and technical explanation skills.', icon: '🗣️' },
      { title: 'Aptitude & Analytical Training', desc: 'Aptitude tests and logical reasoning practice for top MNC hiring rounds.', icon: '🧠' }
    ],
    '4': [
      { title: 'ATS-Optimized Resume Building', desc: 'Craft high-converting resumes tailored to automated Applicant Tracking Systems.', icon: '📄' },
      { title: 'GitHub Portfolio Showcase', desc: 'Organize project repositories, README documentation, and deployed live demos.', icon: '🌐' }
    ],
    '5': [
      { title: 'Advance Interview Boot Camp', desc: 'Intensive 2-week interview bootcamp with real interview case studies.', icon: '🔥' },
      { title: 'HR & Negotiation Skills', desc: 'Learn offer evaluation, salary negotiation tactics, and professional onboarding.', icon: '🤝' }
    ],
    '6': [
      { title: '1-on-1 Mentor Guidance', desc: 'Personalized career roadmap sessions with industry veterans.', icon: '⭐' },
      { title: 'Direct Placement Referrals', desc: 'Direct candidate referrals to partner tech startups and enterprise firms.', icon: '🚀' }
    ]
  };

  roadmapSteps.forEach(step => {
    step.addEventListener('click', () => {
      roadmapSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
      const stepNum = step.getAttribute('data-step');
      const items = roadmapData[stepNum] || roadmapData['1'];
      if (detailsPane) {
        detailsPane.innerHTML = items.map(item => `
          <div class="roadmap-feature-box">
            <div class="feature-icon">${item.icon}</div>
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
          </div>
        `).join('');
      }
    });
  });
}

function initRecommendedCourseGallery(page) {
  if (!page.classList.contains('course-page--web') && !page.classList.contains('course-page--ethical-hacking')) return;
  const viewport = page.querySelector('.recommended-courses-viewport');
  const previousButton = page.querySelector('.recommended-carousel-prev');
  const nextButton = page.querySelector('.recommended-carousel-next');
  const pagination = page.querySelector('.recommended-carousel-pagination');
  const cards = [...page.querySelectorAll('.recommended-course-card')];
  if (!viewport || !previousButton || !nextButton || !cards.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const getPageCount = () => {
    const visibleCards = window.innerWidth < 640 ? 1 : window.innerWidth < 960 ? 2 : 3;
    return Math.max(1, Math.ceil(cards.length / visibleCards));
  };
  const moveToPage = pageIndex => {
    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const maxPage = getPageCount() - 1;
    const target = maxPage ? maxScroll * (Math.max(0, Math.min(pageIndex, maxPage)) / maxPage) : 0;
    viewport.scrollTo({ left: target, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };
  const renderPagination = () => {
    if (!pagination) return;
    const pageCount = getPageCount();
    pagination.innerHTML = Array.from({ length: pageCount }, (_, index) => `
      <button type="button" class="recommended-pagination-dot" data-page="${index}" aria-label="Show recommended course page ${index + 1}" aria-current="${index === 0 ? 'true' : 'false'}"></button>
    `).join('');
    pagination.querySelectorAll('.recommended-pagination-dot').forEach(dot => {
      dot.addEventListener('click', () => moveToPage(Number(dot.dataset.page)));
    });
  };
  const updateControls = () => {
    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    previousButton.disabled = viewport.scrollLeft <= 2;
    nextButton.disabled = viewport.scrollLeft >= maxScroll - 2;
    if (pagination) {
      const pageCount = getPageCount();
      const activePage = maxScroll ? Math.round((viewport.scrollLeft / maxScroll) * (pageCount - 1)) : 0;
      pagination.querySelectorAll('.recommended-pagination-dot').forEach((dot, index) => {
        dot.setAttribute('aria-current', String(index === activePage));
      });
    }
  };
  const moveGallery = direction => {
    viewport.scrollBy({
      left: direction * Math.max(280, viewport.clientWidth * .82),
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  previousButton.addEventListener('click', () => moveGallery(-1));
  nextButton.addEventListener('click', () => moveGallery(1));
  viewport.addEventListener('scroll', updateControls, { passive: true });
  viewport.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    moveGallery(event.key === 'ArrowRight' ? 1 : -1);
  });
  window.addEventListener('resize', () => {
    renderPagination();
    updateControls();
  }, { passive: true });
  renderPagination();
  updateControls();
}
