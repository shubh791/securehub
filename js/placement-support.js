document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll('.placement-reveal');
  const roadmap = document.querySelector('.placement-roadmap');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(item => item.classList.add('is-visible'));
    roadmap?.classList.add('is-animated');
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: .16 });
  revealItems.forEach(item => observer.observe(item));

  if (roadmap) {
    const roadmapObserver = new IntersectionObserver((entries, currentObserver) => {
      if (!entries[0].isIntersecting) return;
      roadmap.classList.add('is-animated');
      currentObserver.disconnect();
    }, { threshold: .25 });
    roadmapObserver.observe(roadmap);
  }
});
