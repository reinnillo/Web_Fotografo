// Obtener las variables.
const presentation = document.querySelector('.presentation');

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
        element.style.backgroundImage = `url(${imgList[i]})`;
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


// Funcion para verificar si el elemento esta en el Viewport
function isElementInViewport(element) {
    // obtenemos las dimenciones del elemento html
    let rect = element.getBoundingClientRect();
    // se evaluan todas las caras del elemento y de existir seria true o false en caso contrario.
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.onload = function () {
    autoSize(presentation);
    animatePortada(presentation, 15000);
}
window.onresize = function () {
    autoSize(presentation);
}