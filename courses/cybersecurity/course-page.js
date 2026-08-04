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
  return iconMap[name] || '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2"/></svg>';
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
      }
    ],
    faqs: [
      { cat: 'Course Basics', q: 'Do I need prior programming experience to join?', a: 'Basic computer literacy is expected. The program starts from web fundamentals (HTML5/CSS3/JavaScript) before advancing to React 19, Next.js, and Node.js.' },
      { cat: 'Projects & Hands', q: 'What real-world projects will I build?', a: 'You will build 15+ practical projects including an AI SaaS Dashboard, E-Commerce Platform, Real-Time Chat System, and a Full Stack Capstone Application.' },
      { cat: 'Certification & Careers', q: 'Is placement assistance provided?', a: 'Yes! You receive 1-on-1 placement support, resume building, GitHub portfolio review, and direct interview opportunities.' },
      { cat: 'Learning Format & Flexibility', q: 'How flexible are the batch timings?', a: 'We offer interactive weekday and weekend batches, with 24/7 access to cloud lab environments and recorded sessions.' }
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
    ]
  };
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
  const courseKey = page.dataset.course;
  const course = getCourse(courseKey);
  course.key = courseKey;

  document.title = `${course.title} | SecureHub`;
  page.innerHTML = renderCoursePage(course);
  initCourseInteractions(page, course);
});

function renderCoursePage(course) {
  const logoPath = getCourseLogo(course.key);
  const fallbackFaqs = [
    { cat: 'Course Basics', q: 'Who can enroll in this course?', a: 'The program is designed for learners and professionals who want structured, practical training. The course page explains the recommended starting level.' },
    { cat: 'Learning Format & Flexibility', q: 'How are the classes and practical sessions delivered?', a: 'Training combines instructor-led sessions with guided practical work so learners can apply each concept as they progress through the course.' },
    { cat: 'Projects & Hands', q: 'Will I build practical projects during the program?', a: 'Yes. The curriculum includes guided project work and practice activities designed to help you demonstrate relevant skills in a portfolio.' },
    { cat: 'Certification & Careers', q: 'Is career guidance available after the training?', a: 'SecureHub provides career-focused guidance, including support for project presentation, interview preparation, and next-step planning.' }
  ];
  const faqs = (Array.isArray(course.faqs) ? course.faqs : []).map(faq => ({
    ...faq,
    cat: faq.cat === 'Projects & Hands-On' ? 'Projects & Hands' : faq.cat
  }));
  fallbackFaqs.forEach(fallbackFaq => {
    if (!faqs.some(faq => faq.cat === fallbackFaq.cat)) faqs.push(fallbackFaq);
  });

  const moduleMarkup = course.modules.map((m, index) => `
    <article class="course-module">
      <button class="course-module-toggle" aria-expanded="${index === 0}" aria-controls="module-${index}">
        <span><b>Module ${index + 1}</b>: ${m.title.replace(/^Module \d+:\s*/i, '')}</span>
        <span class="course-module-plus" aria-hidden="true">+</span>
      </button>
      <div class="course-module-body" id="module-${index}" ${index === 0 ? '' : 'hidden'}>
        ${m.objective ? `<p class="module-objective"><strong>Objective:</strong> ${m.objective}</p>` : ''}
        <ul class="module-bullets-list">
          ${m.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </article>
  `).join('');

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
    <div class="career-role-pill ${idx === 0 ? 'active' : ''}" data-role-index="${idx}">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <div>
        <h4>${c.role}</h4>
        <span class="career-salary">${c.range}</span>
      </div>
    </div>
  `).join('') : '';

  const initialCareer = course.careers && course.careers[0] ? course.careers[0] : {
    role: course.shortTitle || course.title,
    range: course.salaryRange || '₹7.5 LPA - ₹16.0 LPA',
    salaryChart: { entryMin: 18, entryMax: 40, midMin: 40, midMax: 80, srMin: 80, srMax: 114 },
    scopeText: 'Develops production-ready applications with modern architecture; ensures performance, scalability, security, and responsive user experience.'
  };

  const sc = initialCareer.salaryChart;

  const faqMarkup = faqs.map((f, idx) => `
    <article class="course-faq-item" data-category="${f.cat}">
      <button class="faq-toggle" aria-expanded="${idx === 0}" aria-controls="faq-${idx}">
        <span>${f.q}</span>
        <span class="faq-plus">+</span>
      </button>
      <div class="faq-body" id="faq-${idx}" ${idx === 0 ? '' : 'hidden'}>
        <p>${f.a}</p>
      </div>
    </article>
  `).join('');

  // Fixed Title without duplicate words (e.g. Avoid "Developer Developers")
  const careerTitle = (course.shortTitle || course.title).replace(/developer$/i, '').trim();

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
                <span>Next Practical Batch Starts Monday</span>
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

    <!-- 2. 4 CORE VALUE PILLARS BAR -->
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
          <h2>Hands-On Learning | Build Real ${careerTitle} Projects</h2>
          <p class="section-sub-copy">Build fully functional applications that prepare you for the job market and create a standout GitHub profile.</p>
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
          <h2>High-Paying Careers for ${careerTitle} Developers</h2>
          <p class="section-sub-copy">Master full-stack capability with the industry's most comprehensive program and prepare for top tech interviews.</p>
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
            <div class="salary-graph-card">
              <div class="graph-legend-row">
                <span class="legend-box min-leg">Minimum Salary (LPA)</span>
                <span class="legend-box max-leg">Maximum Salary (LPA)</span>
              </div>

              <div class="salary-bar-chart" id="interactive-salary-chart">
                <div class="chart-y-axis">
                  <span>10LPA</span>
                  <span>8LPA</span>
                  <span>6LPA</span>
                  <span>4LPA</span>
                  <span>2LPA</span>
                </div>
                <div class="chart-bars-container">
                  <div class="bar-group">
                    <div class="bars-pair">
                      <div class="bar min-bar" id="bar-entry-min" style="height: ${(sc.entryMin / 120) * 100}%;" title="Min: ₹${sc.entryMin / 10} LPA"></div>
                      <div class="bar max-bar" id="bar-entry-max" style="height: ${(sc.entryMax / 120) * 100}%;" title="Max: ₹${sc.entryMax / 10} LPA"></div>
                    </div>
                    <span class="group-label">Entry-Level</span>
                  </div>

                  <div class="bar-group">
                    <div class="bars-pair">
                      <div class="bar min-bar" id="bar-mid-min" style="height: ${(sc.midMin / 120) * 100}%;" title="Min: ₹${sc.midMin / 10} LPA"></div>
                      <div class="bar max-bar" id="bar-mid-max" style="height: ${(sc.midMax / 120) * 100}%;" title="Max: ₹${sc.midMax / 10} LPA"></div>
                    </div>
                    <span class="group-label">Mid-Level</span>
                  </div>

                  <div class="bar-group">
                    <div class="bars-pair">
                      <div class="bar min-bar" id="bar-sr-min" style="height: ${(sc.srMin / 120) * 100}%;" title="Min: ₹${sc.srMin / 10} LPA"></div>
                      <div class="bar max-bar" id="bar-sr-max" style="height: ${(sc.srMax / 120) * 100}%;" title="Max: ₹${sc.srMax / 10} LPA"></div>
                    </div>
                    <span class="group-label">Senior-Level</span>
                  </div>
                </div>
              </div>

              <p class="salary-graph-footer" id="salary-graph-footer-text">₹${sc.entryMin / 10}-${sc.entryMax / 10} LPA (Entry-Level), ₹0${sc.midMin / 10}-0${sc.midMax / 10} LPA (Mid-Level), ₹0${sc.srMin / 10}+ ${sc.srMax / 10} LPA (Senior-Level)</p>
            </div>
          </div>

          <!-- Dynamic Hiring Scope Column -->
          <div class="career-scope-col">
            <h3>Hiring Scope &amp; Demand</h3>
            <div class="hiring-scope-card">
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
            <h2>Industry-Recognized Professional Certification</h2>
            <p>Receive a globally valued certification that validates your skills, practical knowledge, and job-ready expertise. Enhance your credibility and strengthen your resume for global employers.</p>
            
            <div class="cert-stats-row">
              <div class="cert-stat-box">
                <strong>20,000+</strong>
                <span>Professionals Trained</span>
              </div>
              <div class="cert-stat-box">
                <strong>20+</strong>
                <span>Countries &amp; Counting</span>
              </div>
              <div class="cert-stat-box">
                <strong>100+</strong>
                <span>Corporates Served</span>
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
          <h2>Comprehensive ${careerTitle} Curriculum</h2>
          <p class="section-sub-copy">Every module combines theory explanation, guided live lab practice, and a mentor code review checkpoint.</p>
        </div>

        <div class="course-module-list">${moduleMarkup}</div>
      </div>
    </section>

    <!-- 11. FREQUENTLY ASKED QUESTIONS -->
    <section class="course-section bg-alt" id="faq-section">
      <div class="course-shell">
        <div class="section-center-header">
          <span class="course-section-label">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Have Questions? We Have Answers.</h2>
        </div>

        <div class="faq-categorized-layout">
          <div class="faq-categories-sidebar">
            <div class="faq-cat-pill active" data-cat="all">All Categories</div>
            <div class="faq-cat-pill" data-cat="Course Basics">Course Basics</div>
            <div class="faq-cat-pill" data-cat="Certification & Careers">Certification &amp; Careers</div>
            <div class="faq-cat-pill" data-cat="Projects & Hands">Projects &amp; Hands-On</div>
            <div class="faq-cat-pill" data-cat="Learning Format & Flexibility">Learning Format &amp; Flexibility</div>
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
      rolePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

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

        if (barEntryMin) barEntryMin.style.height = `${(sc.entryMin / 150) * 100}%`;
        if (barEntryMax) barEntryMax.style.height = `${(sc.entryMax / 150) * 100}%`;
        if (barMidMin) barMidMin.style.height = `${(sc.midMin / 150) * 100}%`;
        if (barMidMax) barMidMax.style.height = `${(sc.midMax / 150) * 100}%`;
        if (barSrMin) barSrMin.style.height = `${(sc.srMin / 150) * 100}%`;
        if (barSrMax) barSrMax.style.height = `${(sc.srMax / 150) * 100}%`;

        // Update Graph Footer Text
        const footerText = page.querySelector('#salary-graph-footer-text');
        if (footerText) {
          footerText.textContent = `₹${sc.entryMin / 10}-${sc.entryMax / 10} LPA (Entry-Level), ₹0${sc.midMin / 10}-0${sc.midMax / 10} LPA (Mid-Level), ₹0${sc.srMin / 10}+ ${sc.srMax / 10} LPA (Senior-Level)`;
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
      faqPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
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
