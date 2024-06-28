const btn_MenuMobileClose = document.querySelector('#btn-close-mobile-menu');
const btn_MenuMobileOpen = document.querySelector('#btn-open-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const closeMenu = () => {
    mobileMenu.classList.remove('toggle');
}
const openMenu = () => {
    mobileMenu.classList.add('toggle');
}
const dissipate = (opacityValue, timeOut) => {
    setTimeout(() => {
        btn_MenuMobileOpen.style.opacity = opacityValue;
    }, timeOut);
}
btn_MenuMobileClose.addEventListener('click', () => {
    closeMenu();
    dissipate(1, 500);
});
btn_MenuMobileOpen.addEventListener('click', () => {
    openMenu();
    dissipate(0, 500);
});