// Obtener las variables.
const presentation = document.querySelector('.presentation');
const imgPortada = document.querySelector('#img-portada');

const imgForMobile = [
    '../assets/img/boudoir-photos/background-boudoir/sentada-sombra.jpg',
    '../assets/img/boudoir-photos/modelo-1/boudoir-photo-12.jpg',
    '../assets/img/boudoir-photos/background-boudoir/espalda-semiDes-bn.jpg',
    '../assets/img/boudoir-photos/background-boudoir/atada-bn.jpg',
    '../assets/img/boudoir-photos/modelo-1/boudoir-photo-11.jpg',
];
const imgList = [
    '../assets/img/background/presentation/presentation-1.jpg',
    '../assets/img/background/presentation/presentation-2.jpg',
    '../assets/img/background/presentation/presentation-3.jpg',
    '../assets/img/background/presentation/presentation-4.jpg',
    '../assets/img/background/presentation/presentation-5.jpg',
    '../assets/img/background/presentation/presentation-6.jpg',
];

// Funcion para animar la imagen de portada del home
function animatePortada(element, interval) {
    let i = 0;
    setInterval(() => {
        element.src = `${imgList[i]}`;
        i = (i + 1) % imgList.length;
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
    if (window.innerWidth <= 768) {
        imgPortada.src = imgForMobile[0];
        animatePortada(imgForMobile, 15000);
        
    } else {
        imgPortada.src = imgList[0];
        animatePortada(imgPortada, 15000);
    }
}
window.onresize = function () {
    autoSize(presentation);
    if (window.innerWidth <= 768) {
       imgPortada.src = imgForMobile[0];
       animatePortada(imgForMobile, 15000);
       
    } else {
        imgPortada.src = imgList[0];
        animatePortada(imgPortada, 15000);
    }
}

