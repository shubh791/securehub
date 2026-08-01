document.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('course-page');
  if (!page || !page.children.length) return;
  const enquiry = page.querySelector('.course-hero-enquiry');
  if (enquiry) enquiry.id = 'course-enquiry';
  const heroCopy = page.querySelector('.course-hero-copy');
  if (heroCopy && !heroCopy.querySelector('.course-hero-signals')) {
    heroCopy.insertAdjacentHTML('beforeend', renderHeroSignals());
  }
  const title = page.querySelector('h1')?.textContent?.trim() || 'this program';
  page.insertAdjacentHTML('beforeend', renderSharedCourseSections(title));
  const aboutSection = page.querySelector('.course-about-section');
  if (aboutSection) {
    aboutSection.innerHTML = renderPremiumAbout();
    initialiseAboutReveal(aboutSection);
  }
  document.dispatchEvent(new CustomEvent('securehub:course-sections-ready'));
  page.querySelectorAll('.course-faq-question').forEach(button => button.addEventListener('click', () => {
    const answer = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    answer.hidden = expanded;
  }));
});

function renderSharedCourseSections(courseTitle) {
  const faqs = [
    ['Who is this program for?', `${courseTitle} is designed for learners who want guided, practical training and a clearer route into a technology role.`],
    ['How are classes delivered?', 'Sessions are delivered live with instructor guidance, practice tasks and review checkpoints. Batch schedules are shared by the admissions team.'],
    ['Will I receive a certificate?', 'Learners who complete the required attendance and course assessments receive a SecureHub course-completion certificate.'],
    ['Can I speak to someone before enrolling?', 'Yes. Send a callback request and an admissions advisor will help you choose the right batch and starting level.']
  ];
  const faqMarkup = faqs.map(([question, answer], index) => `<article class="course-faq-item"><button class="course-faq-question" type="button" aria-expanded="${index === 0}" aria-controls="course-faq-${index}"><span>${question}</span><span aria-hidden="true">+</span></button><div class="course-faq-answer" id="course-faq-${index}" ${index === 0 ? '' : 'hidden'}><p>${answer}</p></div></article>`).join('');
  return `<section class="course-shared-section course-certificate-section" id="course-certifications"><div class="course-shell course-certificate-grid"><div class="course-certificate-mark" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none"><path d="M18 10h22l8 8v32a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z" stroke="currentColor" stroke-width="3"/><path d="M40 10v10h10M23 31h18M23 39h13" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="42" cy="43" r="8" fill="#7ce1ca"/><path d="m38.5 43 2.3 2.3 4.7-5" stroke="#173d4b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><span class="course-section-label">Course certification</span><h2>Finish with proof of the work you have done.</h2><p>After meeting the required attendance and assessment criteria, learners receive a SecureHub course-completion certificate for ${courseTitle}.</p><div class="course-certificate-points"><p>Issued against your enrolled program</p><p>Records your successful course completion</p><p>Supported by advisor guidance for your next step</p></div></div></div></section><section class="course-shared-section course-about-section" id="course-about"><div class="course-shell course-about-grid"><div><span class="course-section-label">About SecureHub</span><h2>Focused learning for a changing technology workplace.</h2></div><div><p>SecureHub combines live instruction, structured practice and advisor support to help learners turn training into confident next steps.</p><div class="course-about-points"><p>Industry-aligned learning paths</p><p>Instructor-led lab practice</p><p>Clear support before and after enrolment</p></div></div></div></section><section class="course-shared-section course-faq-section" id="course-faqs"><div class="course-shell course-faq-layout"><div><span class="course-section-label">Frequently asked questions</span><h2>Useful answers before you apply.</h2><p>Need a more specific answer? Our admissions team can help with batches, eligibility and course fit.</p></div><div class="course-faq-list">${faqMarkup}</div></div></section>`;
}

function renderPremiumAbout() {
  return `<div class="course-shell course-about-premium"><div class="course-about-intro"><span class="course-section-label">About SecureHub</span><h2>Focused learning for a changing technology workplace.</h2></div><div class="course-about-story"><p>SecureHub combines live instruction, structured practice and advisor support to help learners turn training into confident next steps.</p><div class="course-about-commitments"><article class="course-about-commitment"><span>01</span><h3>Industry-aligned<br>learning paths</h3></article><article class="course-about-commitment"><span>02</span><h3>Instructor-led<br>lab practice</h3></article><article class="course-about-commitment"><span>03</span><h3>Clear support before<br>and after enrolment</h3></article></div></div></div>`;
}

function renderHeroSignals() {
  return `<div class="course-hero-signals" aria-label="Course delivery highlights"><div class="course-hero-signal"><span class="course-hero-signal-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 3a7 7 0 1 0 7 7c0-1.25-.33-2.42-.9-3.43M8.2 8.2a5.4 5.4 0 0 1 7.6 0M9.3 14.8c.7.55 1.62.88 2.7.88s2-.33 2.7-.88" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M19.2 3.2v3.4m-1.7-1.7h3.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span><b>AI-aware curriculum</b><small>Current tools and workflows</small></span></div><div class="course-hero-signal"><span class="course-hero-signal-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 5.5h16v10H4zM8 19h8M12 15.5V19M7 9h.01M10 9h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span><b>Live lab practice</b><small>Guided, practical learning</small></span></div><div class="course-hero-signal"><span class="course-hero-signal-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M7 3h8l3 3v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M15 3v4h4M8.5 14l2 2 4.5-4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span><b>Completion certificate</b><small>After required assessment</small></span></div></div>`;
}

function initialiseAboutReveal(section) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  section.classList.add('course-about-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      section.classList.add('is-visible');
      observer.unobserve(section);
    });
  }, { threshold: 0.18 });
  observer.observe(section);
}
