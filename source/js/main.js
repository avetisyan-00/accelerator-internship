// https://swiperjs.com/get-started#installation
// import Swiper from 'swiper/bundle';
// import {Navigation, Pagination} from "swiper/modules";
import {initSliderPrograms, initSliderSlider, initSliderReviews, initSliderNews} from './modules/slide-slider';
// import {initSliderPrograms} from './modules/slide-programs';
import {initAccordions} from './modules/init-accordion';
// import {initSliderReviews} from './modules/slide-reviews';
// import {initSliderReviews} from './modules/slide-news';
// import {Burger} from './modules/burger';
// import './modules/sticky-header';

import 'swiper/css/bundle';
window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  initSliderSlider();
  initSliderPrograms();
  initSliderReviews();
  initSliderNews();
  initAccordions();

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
