document.addEventListener('DOMContentLoaded', () => {
  const proof = document.querySelector('.about-proof');
  if (proof) {
    proof.insertAdjacentHTML('beforeend', '<div><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16M12 4v16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg><strong>Guided progress</strong><span>Clear milestones make every learning step feel manageable.</span></div><div><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M7 5h12v12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>Outcome-led</strong><span>Practice is shaped around work learners can confidently show.</span></div>');
  }
  const items = document.querySelectorAll('.about-page section > .about-shell');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  items.forEach((item) => item.setAttribute('data-reveal', ''));
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.15 });
  items.forEach((item) => observer.observe(item));
});
