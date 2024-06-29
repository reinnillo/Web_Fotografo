// Obtener las variables.
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
}

// Funcion para ajustar el tamano del elemento home igual al del dispositivo.
function autoSize(element) {
    let height = document.documentElement.clientHeight / 16;
    let width = document.documentElement.clientWidth / 16;
    element.style.width = width + 'rem';
    element.style.height = height + 'rem';
}

window.onload = function () {
    autoSize(presentation);
    window.innerWidth <= 768 ? imgPortada.src = background.mobile[0]: imgPortada.src = background.desktop[0];
}
window.onresize = function () {
    autoSize(presentation);
    window.innerWidth <= 768 ? imgPortada.src = background.mobile[2]: imgPortada.src = background.desktop[1];
}