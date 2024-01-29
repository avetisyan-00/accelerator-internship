const navMain = document.querySelector('.header');
const navToggle = document.querySelector('.header__menu');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

function menuToggle() {
  navToggle.addEventListener('click', () => {
    navMain.classList.toggle('header--opened');
    body.classList.toggle('overlay-opened');
  });

  overlay.addEventListener('click', () => {
    navMain.classList.toggle('header--opened');
    body.classList.toggle('overlay-opened');
  });
}

export {menuToggle};
