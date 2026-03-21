/* ========================================
   Maja Guseva Portfolio — script.js
   ======================================== */

(function () {
  'use strict';

  // --- Scroll fade-in animations ---
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach((el) => fadeObserver.observe(el));

  // --- Navbar scroll effect ---
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // --- Mobile hamburger menu ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navSocials = document.querySelector('.nav__socials');

  function toggleMenu() {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    if (navSocials) navSocials.classList.toggle('open');
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    if (navSocials) navSocials.classList.remove('open');
  }

  hamburger.addEventListener('click', toggleMenu);

  // Close menu when a link is clicked
  navLinks.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // --- Active nav link highlighting ---
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav__link');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinkEls.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -60% 0px' }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  // --- Auto year in footer ---
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
