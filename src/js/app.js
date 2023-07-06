import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.6.1.min.js";
import "./modules/bootstrap.bundle.min.js";
import "./modules/fslightbox.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Burger
const btnMenu = document.querySelector('#toggle');
let btnMenuClose = document.querySelector('.btn-close');
const menu = document.querySelector('.header__nav');
const bodyEl = document.querySelector('body');

let inputSearchForm = document.querySelector('.header-search input');
let btnSearchForm = document.querySelector('.header-search__btn');
let searchContent = document.querySelector('.header-search');
let searchBtnSm = document.querySelector('.mobile-search');
let headerFormMobileClose = document.querySelector('.header-form-close');


const menuLine1 = document.querySelector('.top-bun');
const menuLine2 = document.querySelector('.meat');
const menuLine3 = document.querySelector('.bottom-bun');

const toggleMenu = function () {
  menu.classList.toggle('open');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}

const toggleMenuLine = function () {
  menuLine1.classList.toggle('active');
  menuLine2.classList.toggle('active');
  menuLine3.classList.toggle('active');
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  toggleMenuLine();
});
btnMenuClose.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  toggleMenuLine();
});

// Menu show
document.addEventListener('click', function (e) {
  const target = e.target;

  const its_inputSearch = target == inputSearchForm || inputSearchForm.contains(target);
  const its_searchContent = target == searchContent || searchContent.contains(target);
  const its_searchBtnCall = target == searchBtnSm || searchBtnSm.contains(target);
  const its_btnSearchForm = target == btnSearchForm || btnSearchForm.contains(target);


  if (!its_inputSearch && !its_searchContent && !its_btnSearchForm && !its_searchBtnCall) {
    searchContent.classList.remove('active');
  }

});


// search initialize in mobile-screen
searchBtnSm.addEventListener('click', () => {
  searchContent.classList.add('active');
});

// search-content close 
headerFormMobileClose.addEventListener('click', () => {
  searchContent.classList.remove('active');
});


// product-slider
document.querySelectorAll('.product-sect').forEach(n => {
  const mySwiperProduct = new Swiper(n.querySelector('.product-slider'), {
    slidesPerView: 4,
    spaceBetween: 10,
    speed: 600,   
    allowTouchMove: true,
    navigation: {
      prevEl: n.querySelector('.nav-arrow-left'),
      nextEl: n.querySelector('.nav-arrow-right'),
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      576: {
        slidesPerView: 2,
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

// quality-slider
const qualitySlider = document.querySelector('.quality-slider');
var mySwiperQuality = new Swiper(qualitySlider, {
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: {
    nextEl: '.quality .nav-arrow-right',
    prevEl: '.quality .nav-arrow-left',
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  runCallbacksOnInit: true,
  breakpoints: {
    0: {    
      spaceBetween: 8,
    },
    576:{
      slidesPerView: 2,
    },
    992: {     
      spaceBetween: 10,
      slidesPerView: 1,
    },  
  },
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
  speed: 600, 
  allowTouchMove: true,
  navigation: {
    nextEl: '.reviews .nav-arrow-right',
    prevEl: '.reviews .nav-arrow-left',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },   
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// blog-slider
const blogSlider = document.querySelector('.blog-slider');
var mySwiperBlogs = new Swiper(blogSlider, {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 600, 
  allowTouchMove: true,
  navigation: {
    nextEl: '.blog .nav-arrow-right',
    prevEl: '.blog .nav-arrow-left',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },   
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
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
const productSlider = document.querySelector('.product-page-slider');
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
      breakpoints: {
        0: {
          slidesPerView: 5,
          spaceBetween: 4,
        },   
        576: {
          slidesPerView: 'auto',
        },      
      },
    }
  },
});

// exclusive-slider
const exclusiveSlider = document.querySelector('.exclusive-slider');
var mySwiperExclusive = new Swiper(exclusiveSlider, {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.exclusive .nav-arrow-right',
    prevEl: '.exclusive .nav-arrow-left',
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  runCallbacksOnInit: true,
});

function change_exclusive() {
  var offer = document.querySelector('.exclusive .slider-count');
  if (offer) {
    offer.innerHTML = (mySwiperExclusive.realIndex + 1) + '/' + (mySwiperExclusive.slides.length);
  }
}

change_exclusive();
document.querySelector(".exclusive .nav-arrow-right")?.addEventListener("click", change_exclusive);
document.querySelector(".exclusive .nav-arrow-left")?.addEventListener("click", change_exclusive);

mySwiperExclusive.on('slideChange', function () {
  change_exclusive();
});

// Инициализация слайдера propose-slider
const proposeSlider = document.querySelector('.propose-slider');
var mySwiperPropose = new Swiper(proposeSlider, {
  slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,
  speed: 600,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.propose .nav-arrow-right',
    prevEl: '.propose .nav-arrow-left',
  },
});

function change_propose() {
  var offer = document.querySelector('.propose .slider-count');
  if (offer) {
    offer.innerHTML = (mySwiperPropose.realIndex + 1) + '/' + (mySwiperPropose.slides.length);
  }
}

change_propose();
document.querySelector(".propose .nav-arrow-right")?.addEventListener("click", change_propose);
document.querySelector(".propose .nav-arrow-left")?.addEventListener("click", change_propose);

mySwiperPropose.on('slideChange', function () {
  change_propose();
});

