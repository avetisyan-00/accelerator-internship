// https://swiperjs.com/get-started#installation
// import Swiper from 'swiper/bundle';
// import {Navigation, Pagination} from "swiper/modules";
import {initSliderSlider} from './modules/slide-slider';
// import {initSliderPrograms} from './modules/slide-programs';
// import {initAccordions} from './modules/accordions';
// import {initSliderReviews} from './modules/slide-reviews';
// import {Burger} from './modules/burger';
// import './modules/sticky-header';

import 'swiper/css/bundle';
window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  initSliderSlider();
  // initSliderPrograms();
  // initAccordions();
  // initSliderReviews();

  // const burger = new Burger();
  // window.burger = burger;
  // burger.init();


  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // initModals();
    // const form = new Form();
    // window.form = form;
    // form.init();
  });
});
