const btn_MenuMobileClose = document.querySelector('#btn-close-mobile-menu');
const btn_MenuMobileOpen = document.querySelector('#btn-open-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const headerMobile = document.querySelector('.header-mobile');

const closeMenu = () => {
    mobileMenu.classList.remove('toggle');
}
const openMenu = () => {
    mobileMenu.classList.add('toggle');
}
const dissipate = (element, opacityValue, timeOut) => {
    setTimeout(() => {
        element.style.opacity = opacityValue;
    }, timeOut);
}
btn_MenuMobileClose.addEventListener('click', () => {
    closeMenu();
    dissipate(headerMobile, 1, 200);
});
btn_MenuMobileOpen.addEventListener('click', () => {
    openMenu();
    dissipate(headerMobile, 0, 200);
});