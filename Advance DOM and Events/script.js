'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const navLinks = document.querySelectorAll('.nav__link');
const nav = document.querySelector('.nav');
const sections = document.querySelectorAll('.section');
const header = document.querySelector('.header');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log('navLinks', navLinks);
navLinks.forEach(function (navLi) {
  navLi.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = navLi.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    console.log('targetSection', targetSection);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // add class nav sticky to nav element
      nav.classList.add('sticky');
    }
  });
});

// window.addEventListener('scroll', function () {
//   if (this.window.scrollY >= header.offsetHeight) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

const observer = new IntersectionObserver(function (entries) {
  console.log('entries', entries);
  const [entry] = entries;

  console.log('isIntersecting', entry.isIntersecting);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

observer.observe(header);
