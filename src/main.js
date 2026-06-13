// snapshot-cli site — main entry
// Retro terminal landing page

// Smooth scroll for older browsers
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Log a friendly greeting to the console
console.log(
  '%c$ snapshot-cli %c terminal screenshots for READMEs',
  'color: #00ff41; font-family: monospace; font-weight: bold;',
  'color: #ffb000; font-family: monospace;'
);
