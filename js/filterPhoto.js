import { isElementMiddleViewport } from "./verifyElementInViewport.js";

document.addEventListener('DOMContentLoaded', () => {

    // Obtenemos los botones de los filtros
    const allBtn = document.querySelector('.all');
    const weddingBtn = document.querySelector('.wedding');
    const boudoirBtn = document.querySelector('.boudoir');
    const petsBtn = document.querySelector('.pets');
    const pregnantBtn = document.querySelector('.pregnant');
    const photo = document.querySelector('.photo');
    const gallery = document.querySelector('.portfolio-gallery').children;
    const params = new URLSearchParams(window.location.search);

    const filterPhoto = filter => {
        Array.from(gallery).forEach(photo => {
            const filters = photo.getAttribute('data-filter').split(' ');
            if (filters.includes(filter)) {
                photo.style.display = 'block';
            } else {
                photo.style.display = 'none';
            }
        });
    };

    const changeBackgroundFilterBtn = (btn1, btn2, btn3, btn4, btn5) => {
        if (btn1.classList.contains('active')) {
            btn1.classList.remove('active');
        } else {
            btn1.classList.add('active');

            // remover la clase 'active' a los demas botones
            btn2.classList.remove('active');
            btn3.classList.remove('active');
            btn4.classList.remove('active');
            btn5.classList.remove('active');
        }
    }

    const filter = params.get('filter');
    if (filter) {
        filterPhoto(filter);
    }

    allBtn.addEventListener('click', () => {
        filterPhoto('all');
        changeBackgroundFilterBtn(allBtn, weddingBtn, boudoirBtn, petsBtn, pregnantBtn);
    })
    weddingBtn.addEventListener('click', () => {
        filterPhoto('wedding');
        changeBackgroundFilterBtn(weddingBtn, allBtn, boudoirBtn, petsBtn, pregnantBtn);
    })
    boudoirBtn.addEventListener('click', () => {
        filterPhoto('boudoir');
        changeBackgroundFilterBtn(boudoirBtn, allBtn, weddingBtn, petsBtn, pregnantBtn);
    })
    petsBtn.addEventListener('click', () => {
        filterPhoto('pets');
        changeBackgroundFilterBtn(petsBtn, allBtn, weddingBtn, boudoirBtn, pregnantBtn);
    })
    pregnantBtn.addEventListener('click', () => {
        filterPhoto('pregnant');
        changeBackgroundFilterBtn(pregnantBtn, allBtn, weddingBtn, boudoirBtn, petsBtn);
    })
    
    // animar las fotos cuando se hace scoll
    const animateViewImg = () => { 
        Array.from(gallery).forEach(photo => {
            let img = photo.firstElementChild
            
            if (isElementMiddleViewport(img)) {
                img.classList.add('view-img');
                photo.style.boxShadow = '0 0 10px rgba(81, 203, 238, 1)';
            } else {
                img.classList.remove('view-img');
                photo.style.boxShadow = 'none';
            }
        });
        
        requestAnimationFrame(animateViewImg);
    }
    animateViewImg()
})
