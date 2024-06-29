const presentation = document.querySelector('.presentation');
const imgPortada = document.querySelector('#img-portada');

const background = {
    mobile: [
        '../assets/img/bg-mobile/bg-mo-1.jpg',
        '../assets/img/bg-mobile/bg-mo-2.jpg',
        '../assets/img/bg-mobile/bg-mo-3.jpg',
    ],
    desktop: [
        '../assets/img/bg-desktop/bg-pc-1.jpg',
        '../assets/img/bg-desktop/bg-pc-2.jpg',
        '../assets/img/bg-desktop/bg-pc-3.jpg',
    ],
};

function autoSize(element) {
    let height = document.documentElement.clientHeight / 16;
    let width = document.documentElement.clientWidth / 16;
    element.style.width = width + 'rem';
    element.style.height = height + 'rem';
}

function cargarImagen(src) {
    const img = new Image();
    img.onload = function() {
        imgPortada.src = src;
    };
    img.onerror = function() {
        console.error('Error al cargar la imagen:', src);
    };
    img.src = src;
}

window.addEventListener('DOMContentLoaded', () => {
    autoSize(presentation);
    const src = window.innerWidth <= 768 ? background.mobile[0] : background.desktop[0];
    cargarImagen(src);
});

window.addEventListener('resize', () => {
    autoSize(presentation);
    const src = window.innerWidth <= 768 ? background.mobile[2] : background.desktop[1];
    cargarImagen(src);
});
