document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.enquiry-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const messageEl = form.querySelector('small');
    if (messageEl) {
      messageEl.textContent = 'Thanks. A senior career advisor will call you shortly.';
    }
    form.reset();
  });
});
