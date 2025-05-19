const swiper1 = new Swiper(".swiper-services", {
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 3000,
  slidesPerView: 4,
  spaceBetween: 20,

  breakpoints: {
    // при ширине <= 1200px
    1201: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // при ширине <= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
    // при ширине <= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
  },
});

const swiper2 = new Swiper(".porjects-services", {
  loop: true,

  autoplay: {
    delay: 0, // нет задержки между слайдами
    disableOnInteraction: false,
  },
  speed: 3000, // скорость прокрутки одного слайда (в мс)
  slidesPerView: 4,
  spaceBetween: 24, // расстояние между слайдами

  breakpoints: {
    // при ширине <= 1200px
    1201: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // при ширине <= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
    // при ширине <= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
  },
});
