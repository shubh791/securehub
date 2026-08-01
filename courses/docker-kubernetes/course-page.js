const containerCourses = {
  'docker-containers': {
    title: 'Docker Containers Training', duration: '8 weeks', level: 'Foundation', practicalWork: 'Containerised application, Compose environment, Image optimisation review',
    subtitle: 'Build, package and run applications in dependable Docker containers through guided hands-on practice.',
    overview: 'A practical foundation for learners who want to move applications from local development to consistent container-based workflows.',
    outcomes: ['Build and manage Docker images for application workloads', 'Run multi-service environments with Docker Compose', 'Use registries, volumes and networking with confidence'],
    modules: [['Container foundations', 'Understand images, containers, registries and the Docker workflow.'], ['Building images', 'Write Dockerfiles, manage layers and create efficient application images.'], ['Running services', 'Configure ports, volumes, networks and runtime settings.'], ['Compose workflows', 'Create repeatable multi-container development environments.'], ['Container capstone', 'Package and document a complete application environment.']]
  },
  'kubernetes-administration': {
    title: 'Kubernetes Administration', duration: '3 months', level: 'Intermediate', practicalWork: 'Cluster deployment, Application rollout, Incident recovery scenario',
    subtitle: 'Operate production-minded Kubernetes clusters with deployment, networking, observability and recovery practice.',
    overview: 'A structured Kubernetes operations path for learners ready to deploy, monitor and troubleshoot containerised applications at scale.',
    outcomes: ['Deploy and manage workloads using core Kubernetes resources', 'Configure services, storage and secure application access', 'Monitor clusters and respond to common operational incidents'],
    modules: [['Kubernetes architecture', 'Learn cluster components, control plane responsibilities and workload lifecycle.'], ['Workloads and deployments', 'Deploy applications using pods, deployments, config maps and secrets.'], ['Networking and storage', 'Expose services and attach persistent storage safely.'], ['Observability and recovery', 'Use logs, metrics and operational practices to diagnose issues.'], ['Cluster operations capstone', 'Deploy and operate a documented application environment.']]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('course-page');
  const course = page && containerCourses[page.dataset.course];
  if (!course) return;
  document.title = `${course.title} | SecureHub`;
  page.innerHTML = renderCourse(course);
  page.querySelectorAll('.course-module-toggle').forEach(button => button.addEventListener('click', () => {
    const body = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    body.hidden = expanded;
  }));
  const form = page.querySelector('.course-enquiry-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.querySelector('.course-form-message').textContent = 'Thanks. Our admissions team will contact you shortly.';
    form.reset();
  });
});

function renderCourse(course) {
  const modules = course.modules.map(([title, copy], index) => `<article class="course-module"><button class="course-module-toggle" aria-expanded="${index === 0}" aria-controls="module-${index}"><span><b>Module ${String(index + 1).padStart(2, '0')}</b>${title}</span><span class="course-module-plus" aria-hidden="true">+</span></button><div class="course-module-body" id="module-${index}" ${index === 0 ? '' : 'hidden'}><p>${copy}</p><ul><li>Guided instructor walkthrough</li><li>Hands-on environment practice</li><li>Review and feedback checkpoint</li></ul></div></article>`).join('');
  return `<section class="course-hero course-hero-simple"><div class="course-shell"><p class="course-breadcrumb"><a href="index.html">Home</a><span>/</span><a href="index.html#courses-section">Courses</a><span>/</span>Docker &amp; Kubernetes</p><div class="course-hero-grid course-hero-with-form"><div class="course-hero-copy"><span class="course-eyebrow">Container technology learning path</span><h1>${course.title}</h1><p>${course.subtitle}</p></div><aside class="course-enquiry-card course-hero-enquiry"><span>Speak with an advisor</span><h3>Find the right starting point.</h3><p>Share your details and our admissions team will explain the next available batch.</p><form class="course-enquiry-form"><label>Name<input required name="name" type="text" placeholder="Your name"></label><label>Phone<input required name="phone" type="tel" placeholder="Your phone number"></label><button type="submit">Request a callback</button><small class="course-form-message" aria-live="polite"></small></form></aside></div><div class="course-facts"><div><span>Duration</span><strong>${course.duration}</strong></div><div><span>Level</span><strong>${course.level}</strong></div><div><span>Learning format</span><strong>Live + lab practice</strong></div><div><span>Practical work</span><strong>${course.practicalWork.split(',').join('<br>')}</strong></div></div></div></section><section class="course-section course-detail-section"><div class="course-shell course-detail-layout"><article class="course-description-panel"><span class="course-section-label">Course description</span><h2>Build delivery skills teams can rely on.</h2><p class="course-lead">${course.overview}</p><div class="course-description-points">${course.outcomes.map(outcome => `<p>${outcome}</p>`).join('')}</div></article><div class="course-curriculum-block"><span class="course-section-label">Curriculum</span><h2>What you will cover.</h2><p class="course-lead">Every module combines explanation, controlled practice and a clear review point.</p><div class="course-module-list">${modules}</div></div></div></section>`;
}
