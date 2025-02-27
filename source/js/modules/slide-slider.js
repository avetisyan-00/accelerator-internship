import Swiper from 'swiper/bundle';
const sliderSlider = document.querySelector('.slider');
const sliderPrograms = document.querySelector('.programs__swiper');
const sliderReviews = document.querySelector('.reviews__swiper');
const sliderNews = document.querySelector('.news__swiper');

const initSliderSlider = () => {
  if (sliderSlider) {
    // eslint-disable-next-line
const slider = new Swiper(sliderSlider, {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-slide-active .slider__bullets',
        type: 'bullets',
        bulletElement: 'button',
        bulletClass: 'slider__bullet',
        bulletActiveClass: 'slider__bullet--active',
        modifierClass: 'slider__',
        clickable: true,
      },
      on: {
        slideChangeTransitionStart: function () {
          slider.pagination.init();
          slider.pagination.render();
          slider.pagination.update();
        }
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
        1440: {
          slidesPerView: 3,
          spaceBetween: 32,
        },

        768: {
          slidesPerView: 'auto',
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

const initSliderReviews = () => {
  if (sliderReviews) {
    // eslint-disable-next-line
    new Swiper(sliderReviews, {
      scrollbar: {
        el: '.reviews__scrollbar',
        dragClass: 'reviews__scrollbar-drag',
        horizontalClass: 'reviews__scrollbar-horizontal',
      },
      navigation: {
        nextEl: '#reviews-slider-next',
        prevEl: '#reviews-slider-prev',
      },

      breakpoints: {
        1440: {
          slidesPerView: 2,
          spaceBetween: 32,
        },

        768: {
          slidesPerView: 'auto',
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

const initSliderNews = () => {
  if (sliderNews) {
    // eslint-disable-next-line
    new Swiper(sliderNews, {
      pagination: {
        el: '.news__pagination',
        clickable: true,
        bulletClass: 'news__pagination-link',
        bulletActiveClass: 'news__pagination-link--current',
        renderBullet: function (index, className) {
          return `<button class="${ className }">${ index + 1 }</button>`;
        },
      },
      navigation: {
        nextEl: '#news-slider-next',
        prevEl: '#news-slider-prev',
      },

      breakpoints: {
        1440: {
          grid: {
            rows: 1,
          },
          slidesPerView: 'auto',
          spaceBetween: 32,
        },

        768: {
          grid: {
            rows: 2,
          },
          slidesPerView: 2,
          spaceBetween: 30,
        },

        320: {
          grid: {
            rows: 2,
          },
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSliderPrograms, initSliderSlider, initSliderReviews, initSliderNews};
