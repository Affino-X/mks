const swiper1 = new Swiper(".swiper-services", {
  loop: true,

  autoplay: {
    delay: 0, // нет задержки между слайдами
    disableOnInteraction: false,
  },
  speed: 3000, // скорость прокрутки одного слайда (в мс)
  slidesPerView: 4,
  spaceBetween: 24, // расстояние между слайдами
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
});
