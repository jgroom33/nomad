// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('nav__menu--open');
  navToggle.classList.toggle('nav__toggle--active');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu when a link is clicked
navMenu.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('nav__menu--open');
    navToggle.classList.remove('nav__toggle--active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Sticky nav background on scroll
const nav = document.getElementById('nav');
const hero = document.getElementById('hero');

const observer = new IntersectionObserver(
  ([entry]) => {
    nav.classList.toggle('nav--scrolled', !entry.isIntersecting);
  },
  { threshold: 0.1 }
);

observer.observe(hero);
