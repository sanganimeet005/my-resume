// Meet Sangani - Portfolio JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Mobile navbar collapse on link click
  const navLinks = document.querySelectorAll('.custom-navbar .nav-link, .btn-contact-nav');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // Active navigation link tracking on scroll
  const sections = document.querySelectorAll('section[id]');
  const mainNavLinks = document.querySelectorAll('.custom-navbar .nav-link');

  const onScroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        mainNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll();


  // Resume View Handler
  const resumeBtn = document.getElementById('viewResumeBtn');
  if (resumeBtn) {
    // Allows default navigation to resume.html in a new tab
  }
});

// Certificate modal preview function
function showCertificateModal(title, issuer, skills) {
  const modalTitle = document.getElementById('certModalTitle');
  const modalIssuer = document.getElementById('certModalIssuer');
  const modalSkills = document.getElementById('certModalSkills');

  if (modalTitle) modalTitle.textContent = title;
  if (modalIssuer) modalIssuer.textContent = issuer;
  if (modalSkills) modalSkills.textContent = skills;

  const certModalEl = document.getElementById('certificateModal');
  if (certModalEl) {
    const certModal = new bootstrap.Modal(certModalEl);
    certModal.show();
  }
}
