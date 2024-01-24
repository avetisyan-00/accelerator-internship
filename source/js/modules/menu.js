const navMain = document.querySelector('.header');
const navToggle = document.querySelector('.header__nav-toggle');

function menuToggle() {
  navMain.classList.remove('header--nojs');

  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('header--closed')) {
      navMain.classList.remove('header--closed');
      navMain.classList.add('header--opened');
    } else {
      navMain.classList.add('header--closed');
      navMain.classList.remove('header--opened');
    }
  });
}

export {menuToggle};
