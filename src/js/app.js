import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.6.1.min.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// product-slider


document.querySelectorAll('.product-sect').forEach(n => {
  const mySwiperProduct = new Swiper(n.querySelector('.product-slider'), {
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    speed: 600,
    autoplay: {
      delay: 4000,
    },
    allowTouchMove: true,
    navigation: {
      prevEl: n.querySelector('.nav-arrow-left'),
      nextEl: n.querySelector('.nav-arrow-right'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});

// reviews-slider
const qualitySlider = document.querySelector('.quality-slider');
var mySwiperQuality = new Swiper(qualitySlider, {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerView: "auto",
  navigation: {
    nextEl: '.quality .nav-arrow-right',
    prevEl: '.quality .nav-arrow-left',
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  runCallbacksOnInit: true,
});

function change() {
  var offer = document.querySelector('.slider-count');
  if (offer) {
    offer.innerHTML = (mySwiperQuality.realIndex + 1) + '/' + (mySwiperQuality.slides.length);
  }

}

change();
document.querySelector(".quality .nav-arrow-right")?.addEventListener("click", change);
document.querySelector(".quality .nav-arrow-left")?.addEventListener("click", change);

mySwiperQuality.on('slideChange', function () {
  change();
});

// reviews-slider
const reviewsSlider = document.querySelector('.reviews-slider');
var mySwiperReviews = new Swiper(reviewsSlider, {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  speed: 600,
  autoplay: {
    delay: 4000,
  },
  allowTouchMove: true,
  navigation: {
    nextEl: '.reviews .nav-arrow-right',
    prevEl: '.reviews .nav-arrow-left',
  },
});

// blog-slider
const blogSlider = document.querySelector('.blog-slider');
var mySwiperBlogs = new Swiper(blogSlider, {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  speed: 600,
  autoplay: {
    delay: 4000,
  },
  allowTouchMove: true,
  navigation: {
    nextEl: '.blog .nav-arrow-right',
    prevEl: '.blog .nav-arrow-left',
  },
});

// reset select in catalog-action
let selectReset = document.querySelector('.select-reset');
let selectActionAll = document.querySelectorAll('.catalog-action__left .select-wrapper select');

selectReset?.addEventListener('click', () => {
  selectActionAll.forEach(el => {
    el.value = '1';
  });
});

// Инициализация слайдера product-slider + product-thumb-slider
const productSlider = document.querySelector('.product-slider');
var mySwiperProducts = new Swiper(productSlider, {
  slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,
  speed: 600,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  thumbs: { // указываем на превью слайдер
    swiper: {
      el: document.querySelector('.product-thumb-slider'),
      slidesPerView: 'auto',
      spaceBetween: 0,
      speed: 600,
      freeMode: true,
      watchSlidesProgress: true,
    }
  },
});