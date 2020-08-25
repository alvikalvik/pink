// import modules
import initHamburger from './hamburger';
import commentsSlider from './comments-slider';
import pricesSlider from './prices-slider';


// run modules

window.addEventListener('DOMContentLoaded', () => {
    // console.log('DOM fully loaded and parsed');
    initHamburger();
    commentsSlider();
    pricesSlider();
});
