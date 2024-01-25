import Swiper from 'swiper/bundle';
const sliderSlider = document.querySelector('.slider');
const sliderPrograms = document.querySelector('.programs__swiper');

const initSliderSlider = () => {
  if (sliderSlider) {
    // eslint-disable-next-line
    new Swiper(sliderSlider, {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.slider__bullets',
        type: 'bullets',
        bulletElement: 'button',
        bulletClass: 'slider__bullet',
        bulletActiveClass: 'slider__bullet--active',
        modifierClass: 'slider__',
        clickable: true,
      },
    });
  }
};

const initSliderPrograms = () => {
  if (sliderPrograms) {
    // eslint-disable-next-line
    new Swiper(sliderPrograms, {
      scrollbar: {
        el: '.programs__scrollbar',
        dragClass: 'programs__scrollbar-drag',
        horizontalClass: 'programs__scrollbar-horizontal',
      },
      navigation: {
        nextEl: '#programs-slider-next',
        prevEl: '#programs-slider-prev',
      },

      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 32,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

const sliderReviews = document.querySelector('.reviews__slider');

const initSliderReviews = () => {
  if (sliderReviews) {
    // eslint-disable-next-line
    new Swiper(sliderReviews, {
      slidesPerView: 1,
      spaceBetween: 32,
      navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
      },
    });
  }
};

export {initSliderPrograms, initSliderSlider, initSliderReviews};

