window.FontAwesomeConfig = {
  autoReplaceSvg: 'nest'
};

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop().toLowerCase();
  const normalizedPath = currentPath || 'index.html';

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop().toLowerCase();
    if (linkPath === normalizedPath) {
      link.classList.add('active');
    }
  });
});
