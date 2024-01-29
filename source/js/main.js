// https://swiperjs.com/get-started#installation
// import Swiper from 'swiper/bundle';
// import {Navigation, Pagination} from "swiper/modules";
import {initSliderPrograms, initSliderSlider, initSliderReviews, initSliderNews} from './modules/slide-slider';
import {initAccordions} from './modules/init-accordion';
import {menuToggle} from './modules/menu';
import 'swiper/css/bundle';
import { StickyHeader } from './modules/sticky-header';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  initSliderSlider();
  initSliderPrograms();
  initSliderReviews();
  initSliderNews();
  initAccordions();
  menuToggle();

  const stickyHeader = new StickyHeader();
  window.stickyHeader = stickyHeader;
  stickyHeader.init();

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
