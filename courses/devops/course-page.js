const devopsCourses = {
  'aws-devops': {
    title: 'AWS DevOps Engineering', duration: '4 months', level: 'Intermediate', practicalWork: 'AWS CI/CD pipeline, Infrastructure automation, Cloud deployment project',
    subtitle: 'Build reliable cloud delivery workflows with AWS, automation, containers and practical CI/CD implementation.',
    overview: 'A focused program for learners who want to automate how software is built, tested, released and operated on AWS.',
    outcomes: ['Design repeatable CI/CD workflows for cloud applications', 'Automate infrastructure changes with reliable version-controlled practices', 'Deploy, monitor and improve production-ready AWS workloads'],
    modules: [['DevOps and AWS foundations', 'Understand cloud delivery, version control, IAM and the AWS services behind modern DevOps workflows.'], ['Continuous integration', 'Build, test and package applications through Git-based CI pipelines.'], ['Infrastructure automation', 'Provision reproducible cloud resources using infrastructure-as-code practices.'], ['Containers and deployment', 'Work with Docker, container delivery and AWS deployment patterns.'], ['Observability and capstone', 'Monitor a deployment, respond to failures and present an end-to-end automated release.']]
  },
  'devops-engineer': {
    title: 'Certified DevOps Engineer', duration: '5 months', level: 'Beginner to intermediate', practicalWork: 'CI/CD pipeline project, Infrastructure automation, Kubernetes deployment',
    subtitle: 'Learn the automation, collaboration and deployment practices used to ship software with confidence.',
    overview: 'A practical DevOps learning path that connects source control, continuous delivery, infrastructure automation and modern container operations.',
    outcomes: ['Build automated delivery pipelines from source code to deployment', 'Use containers and orchestration concepts to run applications consistently', 'Apply operational habits for reliable releases and team collaboration'],
    modules: [['DevOps foundations', 'Explore delivery culture, Git workflows, Linux basics and collaborative engineering practices.'], ['CI/CD automation', 'Create pipelines that validate, package and release applications consistently.'], ['Configuration and infrastructure', 'Use automation tools to manage environments and repeatable configuration.'], ['Docker and Kubernetes', 'Containerise applications and understand cluster deployment fundamentals.'], ['Capstone delivery project', 'Build an automated release workflow with documentation and operational checks.']]
  },
  'azure-devops': {
    title: 'Master Azure DevOps', duration: '3 months', level: 'Intermediate', practicalWork: 'Azure pipeline, Release strategy, Cloud delivery project',
    subtitle: 'Plan, automate and improve application delivery with Azure DevOps, cloud repositories and release workflows.',
    overview: 'A streamlined Azure DevOps program for learners who want to manage source code, pipelines, releases and team delivery practices in one cloud workflow.',
    outcomes: ['Set up Azure Repos, Boards and Pipelines for delivery teams', 'Create build and release pipelines with clear quality gates', 'Manage cloud application releases with traceable, repeatable processes'],
    modules: [['Azure DevOps essentials', 'Understand projects, repositories, boards, work items and team delivery structure.'], ['Build pipelines', 'Configure source triggers, build validation, artifacts and pipeline variables.'], ['Release management', 'Plan environments, approvals and controlled multi-stage releases.'], ['Infrastructure and cloud integration', 'Connect Azure resources, configuration and deployment workflows.'], ['Delivery capstone', 'Create a complete Azure DevOps project with a documented release path.']]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('course-page');
  const course = page && devopsCourses[page.dataset.course];
  if (!course) return;
  document.title = `${course.title} | SecureHub`;
  page.innerHTML = renderDevOpsCourse(course);
  page.querySelectorAll('.course-module-toggle').forEach(button => button.addEventListener('click', () => {
    const body = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    body.hidden = expanded;
  }));
  const form = page.querySelector('.course-enquiry-form');
  form.addEventListener('submit', event => { event.preventDefault(); form.querySelector('.course-form-message').textContent = 'Thanks. Our admissions team will contact you shortly.'; form.reset(); });
});

function renderDevOpsCourse(course) {
  const modules = course.modules.map(([title, copy], index) => `<article class="course-module"><button class="course-module-toggle" aria-expanded="${index === 0}" aria-controls="module-${index}"><span><b>Module ${String(index + 1).padStart(2, '0')}</b>${title}</span><span class="course-module-plus" aria-hidden="true">+</span></button><div class="course-module-body" id="module-${index}" ${index === 0 ? '' : 'hidden'}><p>${copy}</p><ul><li>Guided instructor walkthrough</li><li>Hands-on implementation practice</li><li>Review and feedback checkpoint</li></ul></div></article>`).join('');
  return `<section class="course-hero course-hero-simple" id="course-overview"><div class="course-shell"><p class="course-breadcrumb"><a href="index.html">Home</a><span>/</span><a href="index.html#courses-section">Courses</a><span>/</span>DevOps</p><div class="course-hero-grid course-hero-with-form"><div class="course-hero-copy"><span class="course-eyebrow">DevOps learning path</span><h1>${course.title}</h1><p>${course.subtitle}</p></div><aside class="course-enquiry-card course-hero-enquiry" id="course-enquiry"><span>Speak with an advisor</span><h3>Find the right starting point.</h3><p>Share your details and our admissions team will explain the next available batch.</p><form class="course-enquiry-form"><label>Name<input required name="name" type="text" placeholder="Your name"></label><label>Phone<input required name="phone" type="tel" placeholder="Your phone number"></label><button type="submit">Request a callback</button><small class="course-form-message" aria-live="polite"></small></form></aside></div><div class="course-facts" aria-label="Course facts"><div><span>Duration</span><strong>${course.duration}</strong></div><div><span>Level</span><strong>${course.level}</strong></div><div><span>Learning format</span><strong>Live + lab practice</strong></div><div><span>Practical work</span><strong>${course.practicalWork.split(',').join('<br>')}</strong></div></div></div></section><section class="course-section course-detail-section"><div class="course-shell course-detail-layout"><article class="course-description-panel"><span class="course-section-label">Course description</span><h2>Learn the delivery skills modern teams depend on.</h2><p class="course-lead">${course.overview}</p><div class="course-description-points">${course.outcomes.map(outcome => `<p>${outcome}</p>`).join('')}</div></article><div id="course-curriculum" class="course-curriculum-block"><span class="course-section-label">Curriculum</span><h2>What you will cover.</h2><p class="course-lead">Every module combines explanation, controlled practice and a clear review point.</p><div class="course-module-list">${modules}</div></div></div></section>`;
}
