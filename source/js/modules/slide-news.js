const initSliderNews = () => {
  if (sliderNews) {
    // eslint-disable-next-line
    new Swiper(sliderNews, {
      pagination: {
        el: '.news__pagination',
      },
      navigation: {
        nextEl: '#news-slider-next',
        prevEl: '#news-slider-prev',
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

export {initSliderNews};
