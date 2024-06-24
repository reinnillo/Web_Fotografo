
// lista de div de "items services" con su h3 y su parrafo.
const servicesItemsH3_List = document.querySelectorAll('.item-h3');
const servicesItemsP_List = document.querySelectorAll('.item-p');
// lista de imagenes de cada tipo
const servicesImgList = document.querySelectorAll('.img-box');

// funcion para animar la muestra de los servicios y sus imagenes.
const changeIgmAndTextFromServices = (item) => {
    const we = 0;
    const bo = 1;
    const pe = 2;
    const pr = 3;
    const primaryOpacity = 5;
    const secondaryOpacity = 0;
    
    servicesItemsH3_List[item].firstElementChild.addEventListener('mouseover', (event) => {
        switch (event.target.innerText) {
            case servicesItemsH3_List[item].firstElementChild.innerText:

                // valores por defecto de Bodas
                servicesItemsP_List[we].style.opacity = secondaryOpacity;
                servicesImgList[we].style.opacity = secondaryOpacity;

                // valores por defecto de Boudoir
                servicesItemsP_List[bo].style.opacity = secondaryOpacity;
                servicesImgList[bo].style.opacity = secondaryOpacity;

                // valores por defecto de Pet
                servicesItemsP_List[pe].style.opacity = secondaryOpacity;
                servicesImgList[pe].style.opacity = secondaryOpacity;

                // valores por defecto de Pregnant
                servicesItemsP_List[pr].style.opacity = secondaryOpacity;
                servicesImgList[pr].style.opacity = secondaryOpacity;

                // valores para la animacion.
                servicesItemsP_List[item].style.opacity = primaryOpacity;
                servicesImgList[item].style.opacity = primaryOpacity;
                break;
        }
    })
}
changeIgmAndTextFromServices(0);
changeIgmAndTextFromServices(1);
changeIgmAndTextFromServices(2);
changeIgmAndTextFromServices(3);