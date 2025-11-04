// Example: Highlight active page in navbar
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.navbar a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
