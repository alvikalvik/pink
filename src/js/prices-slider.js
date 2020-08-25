export default function pricesSlider() {
    const slider = document.querySelector('.prices');
    const table = slider.querySelector('.prices__table');
    const pins = slider.querySelectorAll('.prices__pin');
    const activeNum = 1;
    let tableOffset = -280 - (activeNum * 280);

    function initPricesSlider() {
        resetPricesSlider();
        showSlide(activeNum);
        slider.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('prices__pin')) {
                resetPricesSlider();
                pins.forEach((item, i) => {
                    if (evt.target === item) {
                        showSlide(i);
                    }
                });
            }
        });
    }

    function resetPricesSlider() {
        pins.forEach((item) => {
            item.classList.remove('prices__pin--active');
        });
    }

    function showSlide(slideNum) {
        pins[slideNum].classList.add('prices__pin--active');
        tableOffset = -280 - (slideNum * 280);
        table.style.left = `${tableOffset}px`;
    }

    initPricesSlider();
}

