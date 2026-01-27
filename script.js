const burger = document.querySelector('.burger');
const nav = document.querySelector('.header-nav');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.header-nav a');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
  burger.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
  burger.classList.remove('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    burger.classList.remove('active');
  });
});