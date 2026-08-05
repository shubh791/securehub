/* ═══════════════════════════════════════════════════════════════
   SECUREHUB — PREMIUM SERVICE PAGE RENDERER
   Renders rich, content-heavy pages for each ?type= service
   ═══════════════════════════════════════════════════════════════ */

const SERVICES = {

  /* ─────────────────────────────────────────────
     CORPORATE TRAINING
  ───────────────────────────────────────────── */
  corporate: {
    tag: 'Enterprise Solutions',
    title: 'Corporate Training',
    titleGrad: 'That Drives Real Results',
    desc: 'Bespoke technology upskilling programmes built around your team\'s existing stack, business goals, and delivery timelines. From individual contributors to entire engineering divisions.',
    heroImage: 'assets/images/services/corporate-training.jpg',
    heroImageAlt: 'Corporate training session in a modern conference room',
    heroStats: [
      { icon: '🏢', name: 'Enterprise Clients Served', val: '180+ Companies', badge: 'Active', badgeType: 'green' },
      { icon: '👥', name: 'Avg Team Batch Size',       val: '20–80 Learners',  badge: 'Flexible', badgeType: 'blue' },
      { icon: '📈', name: 'Productivity Gain Avg',     val: '34% Uplift',      badge: 'Verified',  badgeType: 'green' },
      { icon: '⚡', name: 'Programme Kickoff',          val: 'Within 7 Days',  badge: 'Fast Track', badgeType: 'blue' },
    ],
    trustItems: [
      { icon: 'shield', label: 'ISO 9001:2015 Certified Delivery' },
      { icon: 'users',  label: 'Dedicated Enterprise Account Manager' },
      { icon: 'clock',  label: 'Flexible Batch Scheduling' },
      { icon: 'chart',  label: 'Progress Analytics Dashboard' },
      { icon: 'star',   label: 'Post-Training Support Included' },
    ],
    features: [
      { icon: '🎯', bg: 'ic-blue',   title: 'Role-Aligned Curriculum Design', desc: 'We map every module to actual job roles inside your organisation — DevOps engineers, cloud architects, security analysts, and full-stack developers all get precisely relevant content.', checks: ['Skills gap analysis', 'Custom learning path per role', 'Quarterly content refresh'] },
      { icon: '🏗️', bg: 'ic-purple', title: 'Enterprise Live Lab Environments', desc: 'Your teams train inside live, isolated cloud sandboxes mirroring your production infrastructure — AWS, Azure, GCP, Kubernetes clusters and SIEM platforms.', checks: ['AWS & Azure sandbox access', 'SOC simulation environments', 'Kubernetes & Docker labs'] },
      { icon: '📊', bg: 'ic-green',  title: 'Real-Time Progress Analytics', desc: 'HR and L&D leads get a live dashboard showing completion rates, assessment scores, skill acquisition curves, and individual learner progress per module.', checks: ['Manager dashboard access', 'Weekly progress reports', 'Completion certificates'] },
      { icon: '🎤', bg: 'ic-orange', title: 'Live Instructor-Led Sessions', desc: 'Sessions are run by senior industry engineers with 8+ years of active consulting experience — not just trainers. All sessions are recorded and available for 90 days.', checks: ['Senior engineer instructors', '90-day session recordings', 'Live Q&A every session'] },
      { icon: '🔄', bg: 'ic-pink',   title: 'Flexible Delivery Formats', desc: 'Choose from fully online live cohorts, hybrid on-site workshop series, or self-paced modules with mentor check-ins — whatever matches your team\'s delivery rhythm.', checks: ['Online, hybrid or on-site', 'Self-paced + mentor support', 'Weekend batch options'] },
      { icon: '🏆', bg: 'ic-cyan',   title: 'Certification & Assessment', desc: 'Programme completion unlocks globally recognised certifications. Assessments are practical, project-based, and directly tied to real job deliverables.', checks: ['Industry-recognised certs', 'Practical capstone projects', 'LinkedIn badge eligible'] },
    ],
    process: [
      { emoji: '📋', phase: 'STEP 01', title: 'Needs Discovery Call', desc: 'We assess your team\'s current skill levels, technology stack, and learning goals in a focused 45-minute discovery session.' },
      { emoji: '🗺️', phase: 'STEP 02', title: 'Custom Programme Design', desc: 'Our curriculum team builds a bespoke training roadmap mapped to your tech environment and business outcomes.' },
      { emoji: '🚀', phase: 'STEP 03', title: 'Kickoff Within 7 Days', desc: 'Your dedicated account manager schedules the first live session and shares the full programme calendar and pre-reads.' },
      { emoji: '📈', phase: 'STEP 04', title: 'Live Training & Reporting', desc: 'Instructor-led sessions run with weekly progress snapshots delivered to your L&D or HR lead automatically.' },
    ],
    bentos: [
      { dark: true,  emoji: '🏢', span2: false, title: 'Dedicated Enterprise Account Manager', desc: 'Every corporate client gets a named account manager who handles scheduling, instructor coordination, and all communications — one point of contact, always.' },
      { dark: false, emoji: '📋', span2: false, title: 'Custom NDA & IP Agreements Available', desc: 'All training content developed for your organisation can be covered under full NDA and IP assignment agreements for sensitive engineering contexts.' },
      { dark: false, emoji: '📊', span2: false, title: 'L&D Dashboard & Reporting Suite', desc: 'Real-time learning analytics for HR and L&D leads: completion rates, assessment results, time-on-task, and certification readiness per learner.' },
      { dark: false, emoji: '🎓', span2: true,  title: 'From Fresher Onboarding to Senior Upskilling — All in One Partner', desc: 'Whether you are onboarding a batch of new graduates or upskilling senior architects for a cloud migration, SecureHub scales from individual tracks to organisation-wide programmes. We handle curriculum, instruction, assessment, and certification under one roof.' },
    ],
    metrics: [
      { num: '180+',  label: 'Enterprise Clients', sub: 'From startups to Fortune-500 subsidiaries in India.' },
      { num: '34%',   label: 'Avg Productivity Gain', sub: 'Measured 3 months post-training by client L&D teams.' },
      { num: '92%',   label: 'Renewal Rate', sub: 'Enterprises that return for follow-on programmes.' },
      { num: '7 Days',label: 'Kickoff Turnaround', sub: 'From signed agreement to first live session.' },
    ],
    ctaTitle: 'Ready to Upskill Your Engineering Team?',
    ctaDesc: 'Connect with our enterprise training team. Share your team size, tech stack, and goal — we will send a custom programme outline within 24 hours.',
  },

  /* ─────────────────────────────────────────────
     TRAINING PROGRAMS
  ───────────────────────────────────────────── */
  programs: {
    tag: 'Career Tracks',
    title: 'Professional Training Programs',
    titleGrad: 'Built for Job Readiness',
    desc: 'Structured, industry-aligned certification tracks that take you from fundamentals to job-ready practitioner. Every programme is built around real tools, live labs, and 1-on-1 placement support.',
    heroImage: 'assets/images/services/training-programs.jpg',
    heroImageAlt: 'Students learning in a modern tech training lab',
    heroStats: [
      { icon: '📚', name: 'Active Training Tracks', val: '25+ Programs',      badge: 'Enrolling', badgeType: 'green' },
      { icon: '👨‍💻', name: 'Active Learners',         val: '2,400+ Students',  badge: 'Live',      badgeType: 'blue' },
      { icon: '🏆', name: 'Avg Placement Rate',      val: '94.8%',             badge: 'Verified',  badgeType: 'green' },
      { icon: '⭐', name: 'Learner Satisfaction',    val: '4.9 / 5.0',        badge: 'Rated',     badgeType: 'blue' },
    ],
    trustItems: [
      { icon: 'shield', label: 'ISO 9001:2015 Certified Delivery' },
      { icon: 'users',  label: '1-on-1 Dedicated Career Advisor' },
      { icon: 'clock',  label: 'Flexible Batch Timings' },
      { icon: 'chart',  label: '94.8% Placement Rate' },
      { icon: 'star',   label: 'Industry-Recognised Certifications' },
    ],
    features: [
      { icon: '🛡️', bg: 'ic-blue',   title: 'Cybersecurity & Ethical Hacking', desc: 'CEH v12, CompTIA Security+, SOC Analyst L1/L2, Network Pentesting, SIEM & Log Forensics. Live attack simulation labs in isolated environments.', checks: ['CEH v12 certification prep', 'Live SOC simulation labs', 'OWASP & network pentesting'] },
      { icon: '☁️', bg: 'ic-purple', title: 'Cloud & DevOps Engineering', desc: 'AWS Solutions Architect, DevOps Master with Docker & Kubernetes, Terraform IaC, Jenkins CI/CD, GitHub Actions, and Azure fundamentals.', checks: ['AWS & Azure sandbox labs', 'CI/CD pipeline builds', 'Kubernetes orchestration'] },
      { icon: '⚛️', bg: 'ic-green',  title: 'Full Stack & MERN Development', desc: 'React 19, Next.js 15, Node.js, MongoDB, Express, TypeScript, Prisma ORM, REST & GraphQL APIs, and Redux Toolkit — from zero to production SaaS.', checks: ['React 19 & Next.js App Router', 'Full TypeScript integration', '6 production SaaS capstones'] },
      { icon: '📊', bg: 'ic-orange', title: 'Data Analytics & Business Intelligence', desc: 'SQL, Power BI, Tableau, Python Pandas, Excel automation, and real business dataset dashboards that match actual analyst job deliverables.', checks: ['Power BI & Tableau mastery', 'Advanced SQL & data modeling', 'Python automation scripting'] },
      { icon: '🤖', bg: 'ic-pink',   title: 'Data Science, ML & Generative AI', desc: 'Python, PyTorch, scikit-learn, LangChain, RAG architecture, MLOps, and production GenAI application deployment on cloud infrastructure.', checks: ['Supervised & deep learning', 'LangChain & RAG systems', 'MLOps cloud deployment'] },
      { icon: '🔵', bg: 'ic-cyan',   title: 'Salesforce & Java Enterprise', desc: 'Salesforce Admin, Apex, Lightning Web Components, SOQL, and Java Full Stack with Spring Boot, Hibernate, and microservices architecture.', checks: ['Salesforce Dev Org access', 'Apex & LWC development', 'Spring Boot microservices'] },
    ],
    process: [
      { emoji: '📋', phase: 'STEP 01', title: 'Free Career Consultation', desc: 'A senior advisor reviews your background and recommends the best-fit programme for your goals and current skill level.' },
      { emoji: '🎓', phase: 'STEP 02', title: 'Enrol & Begin Immediately', desc: 'Join the next live batch — typically starting Monday. Access your LMS, pre-reads, lab credentials, and course calendar.' },
      { emoji: '💻', phase: 'STEP 03', title: 'Live Labs & Capstone Projects', desc: 'Train in real enterprise environments alongside industry-grade tools. Build portfolio-ready projects every module.' },
      { emoji: '🚀', phase: 'STEP 04', title: 'Placement Launch Sprint', desc: 'Resume, LinkedIn, mock interviews, and direct corporate referrals through our 600+ hiring partner network.' },
    ],
    bentos: [
      { dark: true,  emoji: '🎯', span2: false, title: '600+ Corporate Hiring Partners', desc: 'Every programme includes direct access to our placement network — your profile goes straight to hiring managers, bypassing generic portals entirely.' },
      { dark: false, emoji: '💻', span2: false, title: 'Enterprise Live Lab Access', desc: 'Real AWS, Azure, Kubernetes, SIEM, and development environments — not simulators. You train the exact tools hiring companies use in production.' },
      { dark: false, emoji: '📋', span2: false, title: 'ATS-Optimised Resume & LinkedIn', desc: 'Our placement cell builds your resume and LinkedIn from scratch, optimised for Applicant Tracking Systems used by 98% of tech companies.' },
      { dark: false, emoji: '🔄', span2: true,  title: 'Lifetime Alumni Access — Your Support Never Expires', desc: 'Once you graduate from a SecureHub programme, you retain lifetime access to alumni workshops, updated course materials, placement support, and the SecureHub career network. Whether you are in your first role or making a senior-level transition, we are still your partner.' },
    ],
    metrics: [
      { num: '25+',   label: 'Specialised Tech Tracks', sub: 'Covering Cybersecurity, Cloud, Full Stack, Data & AI.' },
      { num: '94.8%', label: 'Placement Rate', sub: 'Industry-leading placement across all programmes.' },
      { num: '600+',  label: 'Hiring Partners', sub: 'MNCs, startups & enterprise tech firms in our network.' },
      { num: '₹76 LPA', label: 'Highest Package', sub: 'Highest annual package from our alumni in 2025.' },
    ],
    ctaTitle: 'Find Your Perfect Training Programme',
    ctaDesc: 'Talk to a senior career advisor — we will match you to the right track, review upcoming batch schedules, and walk you through the full placement pathway.',
  },

  /* ─────────────────────────────────────────────
     INTERNSHIPS
  ───────────────────────────────────────────── */
  internships: {
    tag: 'Emerging Talent',
    title: 'Internship Programme',
    titleGrad: 'Where Learners Become Practitioners',
    desc: 'Guided, mentor-driven internship experiences that give you real project work, a credible portfolio, and a professional story to present at your first technical interview.',
    heroImage: 'assets/images/services/internship-program.jpg',
    heroImageAlt: 'Mentor guiding an intern at a modern workstation',
    heroStats: [
      { icon: '🎓', name: 'Interns per Cohort',    val: 'Up to 40 Interns',  badge: 'Enrolling', badgeType: 'green' },
      { icon: '📁', name: 'Portfolio Projects',    val: '3–5 Live Projects', badge: 'Real Work', badgeType: 'blue' },
      { icon: '📅', name: 'Programme Duration',    val: '8–12 Weeks',        badge: 'Flexible',  badgeType: 'green' },
      { icon: '🤝', name: 'Mentor Hours / Week',   val: '4 hrs Live Mentor', badge: 'Guided',    badgeType: 'blue' },
    ],
    trustItems: [
      { icon: 'shield', label: 'Official Internship Certificate Issued' },
      { icon: 'users',  label: '1-on-1 Senior Mentor Assignment' },
      { icon: 'clock',  label: '8 or 12 Week Track Options' },
      { icon: 'chart',  label: 'Portfolio-Ready Outcomes' },
      { icon: 'star',   label: 'Placement Cell Access Post-Internship' },
    ],
    features: [
      { icon: '🛠️', bg: 'ic-blue',   title: 'Real Project Assignment', desc: 'You are assigned to an active project — not mock exercises. Intern projects range from security audit tools and CI/CD dashboards to React SaaS apps and data analysis pipelines.', checks: ['Live project from Day 1', 'Domain-matched assignment', 'GitHub contribution record'] },
      { icon: '👨‍🏫', bg: 'ic-green',  title: '1-on-1 Senior Mentor', desc: 'Each intern has a named senior mentor — a working engineer with 6+ years of field experience. Four hours of weekly live guidance covering code reviews, architecture decisions, and career advice.', checks: ['Weekly 1-on-1 sessions', 'Code review & PR feedback', 'Career roadmap guidance'] },
      { icon: '📁', bg: 'ic-purple', title: 'Portfolio-Ready Deliverables', desc: 'By the end of your internship, you have 3–5 live deployments you can present in interviews — hosted on GitHub and linked from your LinkedIn with full documentation.', checks: ['Live deployed projects', 'GitHub portfolio structured', 'LinkedIn project showcase'] },
      { icon: '📋', bg: 'ic-orange', title: 'Official Certificate of Completion', desc: 'SecureHub issues a formally signed, role-specific internship completion certificate that clearly states your project scope, tools used, and mentor endorsement.', checks: ['Formally signed certificate', 'Role & tools specified', 'Mentor endorsement letter'] },
      { icon: '🎯', bg: 'ic-pink',   title: 'Interview Readiness Track', desc: 'Final two weeks of the internship include a focused career sprint — mock interviews, resume polishing, and a presentation of your project to a senior panel.', checks: ['Mock technical interviews', 'Resume crafted from work', 'Panel project presentation'] },
      { icon: '🚀', bg: 'ic-cyan',   title: 'Placement Cell Handoff', desc: 'Graduates move directly into the SecureHub placement pipeline — your internship output becomes the strongest asset on your resume for your first full-time role.', checks: ['Direct placement cell access', 'Corporate referral priority', 'Alumni network access'] },
    ],
    process: [
      { emoji: '📝', phase: 'STEP 01', title: 'Apply & Domain Selection', desc: 'Submit a brief application specifying your domain interest — cybersecurity, development, cloud, or data. No prior experience required.' },
      { emoji: '🤝', phase: 'STEP 02', title: 'Mentor Match & Onboarding', desc: 'We match you with a senior mentor in your domain. Onboarding session covers your project brief, tools, access credentials, and weekly schedule.' },
      { emoji: '💻', phase: 'STEP 03', title: 'Build, Review, Iterate', desc: 'Weekly 1-on-1 mentor sessions guide you through development cycles — writing code, designing architecture, reviewing PRs, and solving real blockers.' },
      { emoji: '🎓', phase: 'STEP 04', title: 'Graduate & Launch', desc: 'Present your completed project to a senior panel, receive your certificate, and hand off to the placement team for your first job campaign.' },
    ],
    bentos: [
      { dark: true,  emoji: '🛠️', span2: false, title: 'Real Projects. Not Mock Exercises.', desc: 'Interns work on genuine deliverables that go into production or are client-facing. Your work is reviewed by engineers, not just evaluated by instructors.' },
      { dark: false, emoji: '📁', span2: false, title: '3–5 Deployed Portfolio Projects', desc: 'By Week 12, you have live projects on GitHub and Vercel/Heroku/AWS that demonstrate your actual engineering capability to any recruiter.' },
      { dark: false, emoji: '📋', span2: false, title: 'Signed Certificate + Mentor Letter', desc: 'A formal SecureHub certificate with project details, tools used, and a personal endorsement letter from your named senior mentor.' },
      { dark: false, emoji: '🎯', span2: true,  title: 'The Internship That Becomes Your First Job Application', desc: 'Your entire internship output — project documentation, GitHub commits, code reviews, and the certificate — becomes the foundation of your job application. Our placement team then takes this portfolio directly to hiring partners who trust SecureHub interns as hire-ready candidates.' },
    ],
    metrics: [
      { num: '92%',    label: 'Placement Within 90 Days', sub: 'Interns placed in full-time roles within 3 months.' },
      { num: '3–5',    label: 'Live Portfolio Projects', sub: 'Deployed, documented, and interview-ready.' },
      { num: '4 hrs',  label: 'Weekly Mentor Time', sub: 'Senior 1-on-1 guidance every week, guaranteed.' },
      { num: '12 Wks', label: 'Full Programme Length', sub: 'From first commit to placement cell handoff.' },
    ],
    ctaTitle: 'Apply for the Next Internship Cohort',
    ctaDesc: 'Applications are reviewed on a rolling basis. Share your domain interest and current skill level and we will confirm your spot in the next cohort.',
  },

  /* ─────────────────────────────────────────────
     MASTERCLASSES
  ───────────────────────────────────────────── */
  masterclasses: {
    tag: 'Expert-Led Sessions',
    title: 'Live Tech Masterclasses',
    titleGrad: 'Deep Dives with Senior Practitioners',
    desc: 'Focused, 3–6 hour live sessions on the most in-demand topics in cloud, cybersecurity, AI, and full-stack engineering. Join as an individual or book a private batch for your team.',
    heroImage: 'assets/images/services/masterclass-session.jpg',
    heroImageAlt: 'Expert presenting a live tech masterclass to an audience',
    heroStats: [
      { icon: '📅', name: 'Sessions Per Month',  val: '12+ Live Classes',  badge: 'Scheduled', badgeType: 'green' },
      { icon: '⏱️', name: 'Session Duration',    val: '3–6 Hours Live',    badge: 'Deep Dive',  badgeType: 'blue' },
      { icon: '👨‍🏫', name: 'Instructor Level',   val: 'Senior Engineers',  badge: '8+ Yrs Exp', badgeType: 'green' },
      { icon: '🎥', name: 'Recording Access',    val: '90-Day Playback',   badge: 'Included',   badgeType: 'blue' },
    ],
    trustItems: [
      { icon: 'shield', label: 'Senior Practitioner Instructors' },
      { icon: 'users',  label: 'Live Q&A — No Pre-Recorded Lectures' },
      { icon: 'clock',  label: '90-Day Session Recording Access' },
      { icon: 'chart',  label: 'Certificate of Completion Issued' },
      { icon: 'star',   label: 'Private Corporate Batches Available' },
    ],
    features: [
      { icon: '🛡️', bg: 'ic-blue',   title: 'Cybersecurity Deep Dives', desc: 'Active Directory attacks, SIEM tuning, AWS security architecture, red vs. blue team exercises, and zero-day exploit analysis with real tool demonstrations.', checks: ['AD attack & defence labs', 'AWS & Azure security config', 'Live SIEM investigation'] },
      { icon: '☁️', bg: 'ic-purple', title: 'Cloud & Infrastructure Sessions', desc: 'Terraform IaC patterns, Kubernetes production hardening, cost optimisation on AWS, multi-cloud architecture decisions, and GitOps workflow mastery.', checks: ['Terraform advanced patterns', 'Kubernetes hardening lab', 'GitOps pipeline builds'] },
      { icon: '🤖', bg: 'ic-green',  title: 'AI & Generative AI Workshops', desc: 'Building production RAG applications with LangChain, fine-tuning open-source LLMs, prompt engineering for enterprise, and MLOps deployment patterns.', checks: ['RAG app build from scratch', 'LLM fine-tuning walkthrough', 'MLOps deployment lab'] },
      { icon: '⚛️', bg: 'ic-orange', title: 'Full Stack Engineering Clinics', desc: 'React 19 server components deep dive, Next.js 15 App Router architecture, tRPC & Drizzle ORM, WebSockets, and real-time SaaS design patterns.', checks: ['Next.js App Router mastery', 'tRPC & Drizzle integration', 'Real-time WebSocket apps'] },
      { icon: '📊', bg: 'ic-pink',   title: 'Data Analytics Power Sessions', desc: 'Advanced Power BI DAX formulas, Python automation with pandas & polars, SQL window functions, and dashboard design for C-suite presentations.', checks: ['Advanced DAX & measures', 'Polars vs pandas benchmarks', 'Dashboard storytelling'] },
      { icon: '🗣️', bg: 'ic-cyan',   title: 'Career & Interview Masterclasses', desc: 'System design interview preparation, negotiating a 30%+ salary increase, building a developer brand on LinkedIn, and structuring a technical portfolio.', checks: ['System design patterns', 'Salary negotiation tactics', 'LinkedIn personal branding'] },
    ],
    process: [
      { emoji: '📅', phase: 'STEP 01', title: 'Choose Your Session', desc: 'Browse the upcoming masterclass calendar and pick a topic that matches your current focus area or next skill gap.' },
      { emoji: '✅', phase: 'STEP 02', title: 'Reserve Your Seat', desc: 'Sessions are capped at 60 live participants for quality. Once confirmed, you receive the session link, pre-reads, and lab credentials.' },
      { emoji: '🎓', phase: 'STEP 03', title: 'Attend & Ask Live', desc: 'A 3–6 hour deep-dive session with a senior practitioner. Live Q&A throughout — no question is too advanced or too basic.' },
      { emoji: '🎥', phase: 'STEP 04', title: 'Keep the Recording', desc: 'The full session recording is available in your account for 90 days post-session, along with all slides, lab files, and code repositories.' },
    ],
    bentos: [
      { dark: true,  emoji: '👨‍🏫', span2: false, title: 'Senior Engineers, Not Just Trainers', desc: 'Every masterclass is led by an active practitioner — cloud architects with live AWS contracts, pen testers with current CVE discoveries, or full-stack leads shipping production code today.' },
      { dark: false, emoji: '🎥', span2: false, title: '90-Day Recording + Full Lab Files', desc: 'You do not lose access after the session ends. All recordings, slides, code repos, and lab files remain accessible for 90 days so you can revisit at your own pace.' },
      { dark: false, emoji: '🏢', span2: false, title: 'Private Corporate Masterclass Bookings', desc: 'Book an exclusive session for your team. We customise the topic, examples, and hands-on exercises around your specific technology stack and challenges.' },
      { dark: false, emoji: '📋', span2: true,  title: 'Certificate of Completion for Every Session', desc: 'Each attendee receives a signed certificate of completion with the session topic, date, instructor name, and duration — suitable for adding to LinkedIn, performance reviews, or CPD records. Corporate attendees receive a verified batch completion summary for L&D records.' },
    ],
    metrics: [
      { num: '12+',   label: 'Sessions Per Month', sub: 'Live masterclasses across all tech domains.' },
      { num: '60',    label: 'Max Seats Per Session', sub: 'Kept small for quality live interaction.' },
      { num: '4.9★',  label: 'Avg Session Rating', sub: 'From post-session attendee surveys.' },
      { num: '90 Days', label: 'Recording Access', sub: 'All sessions available for 90 days post-live.' },
    ],
    ctaTitle: 'Book a Seat in the Next Masterclass',
    ctaDesc: 'Browse upcoming sessions and secure your spot — most sessions fill within 48 hours of announcement. Corporate team bookings are handled separately.',
  },
};

/* ── SVG icons used in trust bar ── */
const ICONS = {
  shield: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  users:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  clock:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  chart:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  star:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
};
const CHECK = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.8"><polyline points="20 6 9 17 4 12"/></svg>`;
const ARROW = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;

/* ── Build & render ── */
document.addEventListener('DOMContentLoaded', () => {
  const type = new URLSearchParams(location.search).get('type') || 'corporate';
  const s    = SERVICES[type] || SERVICES.corporate;
  const root = document.getElementById('service-page');

  document.title = `${s.title} | SecureHub`;

  root.innerHTML = buildHero(s) + buildTrustBar(s) + buildShowcase(s) + buildFeatures(s)
                 + buildProcess(s) + buildMetrics(s) + buildBento(s) + buildCTA(s);
});

/* ═══ SECTION BUILDERS ═══════════════════════════════════════════ */

function buildHero(s) {
  const stats = s.heroStats.map(r => `
    <div class="sv-stat-row">
      <div class="sv-stat-left">
        <div class="sv-stat-icon">${r.icon}</div>
        <div class="sv-stat-meta">
          <div class="sv-stat-name">${r.name}</div>
          <div class="sv-stat-val">${r.val}</div>
        </div>
      </div>
      <span class="sv-badge-${r.badgeType}">${r.badge}</span>
    </div>`).join('');

  return `
  <section class="sv-hero">
    <div class="sv-shell">
      <div class="sv-hero-grid">
        <div class="sv-animate">
          <div class="sv-hero-eyebrow"><span class="sv-pulse"></span>${s.tag.toUpperCase()}</div>
          <h1 class="sv-hero-title">${s.title}<br><span class="sv-grad">${s.titleGrad}</span></h1>
          <p class="sv-hero-desc">${s.desc}</p>
          <div class="sv-hero-cta-row">
            <a href="enquiryform.html" class="sv-btn-primary">Speak to an Advisor ${ARROW}</a>
            <a href="index.html#courses-section" class="sv-btn-outline">Explore All Courses</a>
          </div>
        </div>
        <div class="sv-hero-panel sv-animate sv-d1">
          <img class="sv-hero-image" src="${s.heroImage}" alt="${s.heroImageAlt}" loading="eager">
          <p class="sv-hero-panel-label">Live Programme Snapshot</p>
          <div class="sv-stat-rows">${stats}</div>
        </div>
      </div>
    </div>
  </section>`;
}

function buildTrustBar(s) {
  const highlightIcons = {
    shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    users:  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
    clock:  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    chart:  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    star:   `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  };
  const cards = s.trustItems.map((t, i) => `
    <div class="sv-highlight-card" style="animation-delay:${i * 0.1}s">
      <div class="sv-highlight-icon-ring">
        ${highlightIcons[t.icon] || highlightIcons.star}
      </div>
      <span class="sv-highlight-num">0${i + 1}</span>
      <p class="sv-highlight-label">${t.label}</p>
      <div class="sv-highlight-accent"></div>
    </div>`).join('');

  return `
  <section class="sv-highlights-section">
    <div class="sv-shell">
      <div class="sv-highlights-grid">${cards}</div>
    </div>
  </section>`;
}

function buildShowcase(s) {
  return `
  <section class="sv-showcase-section">
    <div class="sv-shell">
      <div class="sv-showcase-card">
        <img class="sv-showcase-img" src="${s.heroImage}" alt="${s.heroImageAlt}" loading="lazy">
        <div class="sv-showcase-overlay">
          <span class="sv-eyebrow">${s.tag.toUpperCase()}</span>
          <h2 class="sv-showcase-title">${s.title}</h2>
          <p class="sv-showcase-desc">${s.desc}</p>
        </div>
      </div>
    </div>
  </section>`;
}

function buildFeatures(s) {
  const cards = s.features.map((f, i) => `
    <div class="sv-feature-card sv-animate sv-d${(i % 3) + 1}">
      <div class="sv-feature-icon ${f.bg}">${f.icon}</div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
      <ul class="sv-check-list">
        ${f.checks.map(c => `<li>${CHECK}<span>${c}</span></li>`).join('')}
      </ul>
    </div>`).join('');

  return `
  <section class="sv-section sv-section-alt">
    <div class="sv-shell">
      <div class="sv-section-header center">
        <span class="sv-eyebrow">WHAT'S INCLUDED</span>
        <h2 class="sv-section-title">Everything You Get With This Programme</h2>
        <p class="sv-section-desc">A full suite of resources, expert guidance, and practical outputs — designed to move your career or team forward.</p>
      </div>
      <div class="sv-features-grid">${cards}</div>
    </div>
  </section>`;
}

function buildProcess(s) {
  const steps = s.process.map((p, i) => `
    <div class="sv-process-step sv-animate sv-d${i + 1}">
      <div class="sv-step-dot">${p.emoji}</div>
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    </div>`).join('');

  return `
  <section class="sv-section sv-section-dark">
    <div class="sv-shell">
      <div class="sv-section-header center">
        <span class="sv-eyebrow">HOW IT WORKS</span>
        <h2 class="sv-section-title">Clear, Simple, Effective Process</h2>
        <p class="sv-section-desc">From first enquiry to programme completion — here is exactly how we work with you every step of the way.</p>
      </div>
      <div class="sv-process-steps">${steps}</div>
    </div>
  </section>`;
}

function buildMetrics(s) {
  const cards = s.metrics.map((m, i) => `
    <div class="sv-metric-card sv-animate sv-d${i + 1}">
      <div class="sv-metric-number">${m.num}</div>
      <div class="sv-metric-label">${m.label}</div>
      <div class="sv-metric-sub">${m.sub}</div>
    </div>`).join('');

  return `
  <section class="sv-section sv-section-dark" style="padding-top:0">
    <div class="sv-shell">
      <div class="sv-metrics-grid">${cards}</div>
    </div>
  </section>`;
}

function buildBento(s) {
  const cards = s.bentos.map(b => `
    <div class="sv-bento-card${b.dark ? ' sv-dark-card' : ''}${b.span2 ? ' sv-span2' : ''}">
      <span class="sv-bento-emoji">${b.emoji}</span>
      <h3>${b.title}</h3>
      <p>${b.desc}</p>
    </div>`).join('');

  return `
  <section class="sv-section">
    <div class="sv-shell">
      <div class="sv-section-header center">
        <span class="sv-eyebrow">THE SECUREHUB ADVANTAGE</span>
        <h2 class="sv-section-title">Why This Programme Stands Apart</h2>
        <p class="sv-section-desc">Details that make the difference between a credential on your CV and a genuine career transformation.</p>
      </div>
      <div class="sv-bento-grid">${cards}</div>
    </div>
  </section>`;
}

function buildCTA(s) {
  return `
  <section class="sv-cta-section">
    <div class="sv-shell">
      <div class="sv-cta-card">
        <div>
          <h2>${s.ctaTitle}</h2>
          <p>${s.ctaDesc}</p>
        </div>
        <div class="sv-cta-buttons">
          <a href="enquiryform.html" class="sv-btn-primary">Talk to an Advisor ${ARROW}</a>
          <a href="index.html#courses-section" class="sv-btn-outline">Browse All Programmes</a>
        </div>
      </div>
    </div>
  </section>`;
}
