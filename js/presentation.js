// Obtener las variables.
const presentation = document.querySelector('.presentation');
const imgPortada = document.querySelector('#img-portada');
let intervalActual = 0;
const imgForMobile = [
    '../assets/img/boudoir/bo-1.jpg',
    '../assets/img/bg-mobile/bg-mo-1.png',
    '../assets/img/bg-mobile/bg-mo-2.jpg',
    '../assets/img/boudoir/bo-2.jpg',
    '../assets/img/bg-mobile/bg-mo-3.jpg',
    '../assets/img/boudoir/bo-3.jpg',
    '../assets/img/bg-mobile/profile.jpg',
];
const imgList = [
    '../assets/img/bg-desktop/bg-pc-1.jpg',
    '../assets/img/bg-desktop/bg-pc-2.jpg',
    '../assets/img/bg-desktop/bg-pc-3.jpg',
    '../assets/img/bg-desktop/bg-pc-4.jpg',
    '../assets/img/bg-desktop/bg-pc-5.jpg',
    '../assets/img/bg-desktop/bg-pc-6.jpg',
];

// Funcion para animar la imagen de portada del home
function animatePortada(array, element, interval) {
    let i = 0;
    intervalActual = setInterval(() => {
        element.src = `${array[i]}`;
        i = (i + 1) % array.length;
    }, interval);
}

// Funcion para ajustar el tamano del elemento home igual al del dispositivo.
function autoSize(element) {
    let height = document.documentElement.clientHeight + 'px';
    let width = document.documentElement.clientWidth + 'px';
    element.style.width = width;
    element.style.height = height;
}

window.onload = function () {
    autoSize(presentation);
    // mobile
    if (window.innerWidth <= 768) {
        imgPortada.src = imgForMobile[5];

    } else {
        // desktop
        imgPortada.src = imgList[5];
        animatePortada(imgList, imgPortada, 15000);
    }
}
window.onresize = function () {
    autoSize(presentation);
    clearInterval(intervalActual);
    // mobile
    if (window.innerWidth <= 768) {
        imgPortada.src = imgForMobile[5];

    } else {
        // desktop
        imgPortada.src = imgList[5];
    }
}