export default function initHamburger() {
    const hamburgerBlock = document.querySelector('.hamburger-block');
    const menu = document.querySelector('.menu');
    const hamburger = hamburgerBlock.querySelector('.hamburger-block__hamburger');

    hamburgerBlock.classList.remove('hamburger-block--nojs');
    menu.classList.remove('menu--nojs');

    hamburger.addEventListener('click', () => {
        hamburgerBlock.classList.toggle('hamburger-block--active');
        menu.classList.toggle('menu--active');
    });
}

