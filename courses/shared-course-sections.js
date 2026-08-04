/**
 * Shared Course Section Helpers (Preventing duplicate FAQ & About insertion)
 */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('course-page');
  if (!page || !page.children.length) return;
  const enquiry = page.querySelector('.course-hero-enquiry');
  if (enquiry) enquiry.id = 'course-enquiry';
  
  // Custom event signal
  document.dispatchEvent(new CustomEvent('securehub:course-sections-ready'));
});
