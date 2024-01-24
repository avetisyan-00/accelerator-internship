const sliderPrograms = document.querySelector('.programs');

const initSliderPrograms = () => {
  if (sliderPrograms) {
    // eslint-disable-next-line
    new Swiper(sliderPrograms, {
      initialSlide: 1,
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

export {initSliderPrograms};
