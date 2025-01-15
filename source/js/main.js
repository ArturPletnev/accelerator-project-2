// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
import 'swiper/scss';

import { menuToggle } from './menu-open';
import { initHeroSlider } from './hero-slider';
import { initToursSlider } from './tours-slider';
import { initTrainingSlider } from './training-slider';
import { addsShadow } from './about';
import { initReviewsSlider } from './reviews-slider';
import { handleResize } from './advantages-slider';
import { handleGalleryResize } from './gallery-slider';
import { checkWebpFormat } from './utils';
import { validatesForm } from './validation';

document.addEventListener('DOMContentLoaded', () => {
  menuToggle();
  initHeroSlider();
  initToursSlider();
  initTrainingSlider();
  addsShadow();
  initReviewsSlider();
  checkWebpFormat();
  validatesForm();

  window.addEventListener('resize', handleResize);
  window.addEventListener('load', handleResize);
  window.addEventListener('resize', handleGalleryResize);
  window.addEventListener('load', handleGalleryResize);
});
