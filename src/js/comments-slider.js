export default function commentsSlider() {
    const slider = document.querySelector('.comments');
    const comments = slider.querySelectorAll('.comments__item');
    const pins = slider.querySelectorAll('.comments__pin');
    const nextArrow = slider.querySelector('.comments__next');
    const prevArrow = slider.querySelector('.comments__prev');
    let activeNum = 0;

    function initCommentsSlider() {
        resetCommentsSlider();
        showSlide(activeNum);
        slider.addEventListener('click', (evt) => {
            if (evt.target === nextArrow) {
                pins.forEach((item, i) => {
                    if (item.classList.contains('comments__pin--active')) {
                        activeNum = i;
                    }
                });
                resetCommentsSlider();
                if (activeNum < (pins.length - 1)) {
                    showSlide(activeNum + 1);
                } else {
                    showSlide(0);
                }
            }

            if (evt.target === prevArrow) {
                pins.forEach((item, i) => {
                    if (item.classList.contains('comments__pin--active')) {
                        activeNum = i;
                    }
                });
                resetCommentsSlider();
                if (activeNum !== 0) {
                    showSlide(activeNum - 1);
                } else {
                    showSlide(pins.length - 1);
                }
            }

            if (evt.target.classList.contains('comments__pin')) {
                resetCommentsSlider();
                pins.forEach((item, i) => {
                    if (evt.target === item) {
                        showSlide(i);
                    }
                });
            }
        });
    }

    function resetCommentsSlider() {
        comments.forEach((item) => {
            item.classList.remove('comments__item--active');
        });
        pins.forEach((item) => {
            item.classList.remove('comments__pin--active');
        });
    }

    function showSlide(slideNum) {
        comments[slideNum].classList.add('comments__item--active');
        pins[slideNum].classList.add('comments__pin--active');
    }

    initCommentsSlider();
}

