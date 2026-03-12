/* =============================================
   PORTFOLIO — Nguyen Hoang Anh
   script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------
     1. Current year
  ------------------------------------------ */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------------------------------------
     2. Dark / Light theme toggle
  ------------------------------------------ */
  const html        = document.documentElement;
  const toggleBtn   = document.getElementById('theme-toggle');
  const DARK_ICON   = '🌙';
  const LIGHT_ICON  = '☀️';

  // Load saved preference
  const saved = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', saved);
  toggleBtn.textContent = saved === 'dark' ? DARK_ICON : LIGHT_ICON;

  toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    toggleBtn.textContent = next === 'dark' ? DARK_ICON : LIGHT_ICON;
    localStorage.setItem('theme', next);
  });

  /* ------------------------------------------
     3. Active topbar nav on scroll
  ------------------------------------------ */
  const sections = document.querySelectorAll('.section[id]');
  const navLinks  = document.querySelectorAll('.topbar-nav a');

  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(sec => navObserver.observe(sec));

  /* ------------------------------------------
     4. Scroll reveal
  ------------------------------------------ */
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${(i % 4) * 70}ms`;
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => revealObserver.observe(el));

});

  /* ------------------------------------------
     5. Contact form — mailto fallback
  ------------------------------------------ */
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name    = document.getElementById('cf-name').value.trim();
      const email   = document.getElementById('cf-email').value.trim();
      const message = document.getElementById('cf-message').value.trim();

      // Open mailto with pre-filled content
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:nha261105@gmail.com?subject=${subject}&body=${body}`;

      // Show success message
      success.style.display = 'block';
      form.reset();
      setTimeout(() => { success.style.display = 'none'; }, 5000);
    });
  }