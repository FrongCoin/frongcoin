
// Simple script: smooth scroll for anchor links and current year update
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({behavior:'smooth'});
    });
  });
  // update year in footer if any
  const y = new Date().getFullYear();
  document.querySelectorAll('footer, .site-footer').forEach(f => {
    f.innerHTML = `© ${y} FRONG • frongcoin.io • The wrong frog in the right universe.`;
  });
});
