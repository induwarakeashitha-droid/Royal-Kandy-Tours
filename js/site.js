window.FontAwesomeConfig = {
  autoReplaceSvg: 'nest'
};

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop().toLowerCase();
  const normalizedPath = currentPath || 'index.html';
  const header = document.querySelector('.site-header') || document.querySelector('.navbar');

  // Highlight active links
  document.querySelectorAll('.nav-links a, .mobile-drawer a, .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop().toLowerCase();
    if (linkPath === normalizedPath) {
      link.classList.add('active');
    }
  });

  // Sticky header scrolled state
  if (header) {
    const handleScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // Mobile Drawer Functionality
  const menuToggle = document.getElementById('menuToggle');
  const closeDrawer = document.getElementById('closeDrawer');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const scrim = document.getElementById('scrim');

  const openMenu = () => {
    mobileDrawer?.classList.add('open');
    scrim?.classList.add('open');
    menuToggle?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileDrawer?.classList.remove('open');
    scrim?.classList.remove('open');
    menuToggle?.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (closeDrawer) closeDrawer.addEventListener('click', closeMenu);
  if (scrim) scrim.addEventListener('click', closeMenu);
});
