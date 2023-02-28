const imagesArray = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg'
];

const imageListDom = document.querySelector('.image-list');
const circleContainerDom = document.querySelector('.circle-container');

let sliderContent = "";
let circleContent = "";

for (let i = 0; i < imagesArray.length; i++) {
    const newImageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${imagesArray[i]}" />
                            </div>`;

    const newCircle = `<div class="circle"></div>`;
    sliderContent += newImageWrapper;       
    circleContent += newCircle;
}

imageListDom.innerHTML = sliderContent;
circleContainerDom.innerHTML = circleContent;

const imagesWrapperDom = document.getElementsByClassName('image-wrapper');
const circlesDom = document.getElementsByClassName('circle');

let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show'); //TODO rivedere lo 0 in modo più flessibile
circlesDom[activeImage].classList.add('current');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click', 
    function() {
        if (activeImage < imagesWrapperDom.length - 1) {

            imagesWrapperDom[activeImage].classList.remove('show');
            circlesDom[activeImage].classList.remove('current');
            activeImage++;
            imagesWrapperDom[activeImage].classList.add('show');
            circlesDom[activeImage].classList.add('current');

            prevDom.classList.remove('hide');

            if (activeImage == imagesWrapperDom.length - 1) {
                nextDom.classList.add('hide');
            }

        }
    }
);

prevDom.addEventListener('click', 
    function() {
        if (activeImage > 0) {

            imagesWrapperDom[activeImage].classList.remove('show');
            circlesDom[activeImage].classList.remove('current');
            activeImage--;
            imagesWrapperDom[activeImage].classList.add('show');
            circlesDom[activeImage].classList.add('current');

            nextDom.classList.remove('hide');

            if (activeImage == 0) {
                prevDom.classList.add('hide');
            }

        }
    }
);