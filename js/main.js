const imagesArray = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg'
];

const imageListDom = document.querySelector('.image-list');
const thumbContainerDom = document.querySelector('.thumb-container');

let sliderContent = "";
let thumbContent = "";

// scorro l'array delle immagini e creo il codice html necessario alla stampa sulla pagina web
for (let i = 0; i < imagesArray.length; i++) {
    const newImageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${imagesArray[i]}" />
                            </div>`;

    const newThumb =    `<div class="thumb-wrapper">
                            <img class="thumb-img" src="${imagesArray[i]}" />
                        </div>`;
    sliderContent += newImageWrapper;       
    thumbContent += newThumb;
}

imageListDom.innerHTML = sliderContent;
thumbContainerDom.innerHTML = thumbContent;

const imagesWrapperDom = document.getElementsByClassName('image-wrapper');
const thumbsDom = document.getElementsByClassName('thumb-wrapper');

for (let i = 0; i < thumbsDom.length; i++) {
    thumbsDom[i].style.height = `calc(100% / ${thumbsDom.length}`;
}

let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show'); //TODO rivedere lo 0 in modo più flessibile
thumbsDom[activeImage].classList.add('active');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click', 
    function() {

        console.log("Valore di activeImage dentro ascoltatore eventi: " + activeImage);

        //if (activeImage < imagesWrapperDom.length - 1) {

            console.log("Valore di activeImage all'inizio della gestione dell'evento: " + activeImage);

            imagesWrapperDom[activeImage].classList.remove('show');
            thumbsDom[activeImage].classList.remove('active');

            if (activeImage == imagesWrapperDom.length -1) {
                activeImage = 0;
            } else {
                activeImage = activeImage + 1;
            }

            imagesWrapperDom[activeImage].classList.add('show');
            thumbsDom[activeImage].classList.add('active');

            /*
                prevDom.classList.remove('hide');

                console.log("Valore di activeImage per la slide seguente: " + activeImage);

                if (activeImage == imagesWrapperDom.length - 1) {
                    nextDom.classList.add('hide');
                }
            */

        //}
    }
);

prevDom.addEventListener('click', 
    function() {
        //if (activeImage > 0) {

            imagesWrapperDom[activeImage].classList.remove('show');
            thumbsDom[activeImage].classList.remove('active');

            if (activeImage == 0) {
                activeImage = imagesWrapperDom.length - 1;
            } else {
                activeImage--;
            }

            imagesWrapperDom[activeImage].classList.add('show');
            thumbsDom[activeImage].classList.add('active');

            /*
                nextDom.classList.remove('hide');

                if (activeImage == 0) {
                    prevDom.classList.add('hide');
                }
            */

        //}
    }
);