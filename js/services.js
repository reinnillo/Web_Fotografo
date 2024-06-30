
// lista de div de "items services" con su parrafo.
const servicesItemsP_List = document.querySelectorAll('.item-p');

// funcion para animar la muestra de los servicios y sus imagenes.
let interval = 0;
const changeTextFromServices = (array, int) => {
    const onOpacity = 5;
    const offOpacity = 0;
    let count = 0;

    interval = setInterval(() => {
        if (count === 4) { 
            count = 0;
        };
        switch (count) {
            case 0:
                array[0].style.opacity = onOpacity;
                array[1].style.opacity = offOpacity;
                array[2].style.opacity = offOpacity;
                array[3].style.opacity = offOpacity;
                break;
            case 1:
                array[0].style.opacity = offOpacity;
                array[1].style.opacity = onOpacity;
                array[2].style.opacity = offOpacity;
                array[3].style.opacity = offOpacity;
                break;
            case 2:
                array[0].style.opacity = offOpacity;
                array[1].style.opacity = offOpacity;
                array[2].style.opacity = onOpacity;
                array[3].style.opacity = offOpacity;
                break;
            case 3:
                array[0].style.opacity = offOpacity;
                array[1].style.opacity = offOpacity;
                array[2].style.opacity = offOpacity;
                array[3].style.opacity = onOpacity;
                break;
            default:
                clearInterval(interval);
        }
        count += 1;
        console.log(interval);
    }, int)
}
changeTextFromServices(servicesItemsP_List, 10000);