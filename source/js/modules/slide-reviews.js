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

export {initSliderReviews};
