const swiper = new Swiper(".swiper-services, .porjects-services", {
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 3000,
  slidesPerView: 4,
  spaceBetween: 24,

  breakpoints: {
    // >= 768px
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    // >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
