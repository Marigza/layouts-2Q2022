
console.log("Part1 Total points 108: \n done: 23 items; \n not done: 1 item (favicon)");
console.log("Part2 Total points 85: \n done: 14 items");

// burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const modal = document.querySelector('.modal_container');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const modalCloseItem = document.querySelector('.modal_close');
    const menuLinks = document.querySelectorAll('.header_link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
        modal.classList.add('modal_container_active');
    }); 
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
        modal.classList.remove('modal_container_active');
    });
    if (window.innerWidth <= 410) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header_nav_active');
                modal.classList.remove('modal_container_active');
            }); 
        }
    }
    modalCloseItem.addEventListener('click', () => {
        modal.classList.remove('modal_container_active');
        menu.classList.remove('header_nav_active');
    });
}());

// carousel

const track = document.querySelector('.destin_slider');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button-right');
const prevButton = document.querySelector('.carousel__button-left');
const dotsNav = document.querySelector('.pointer');
const dots = Array.from(dotsNav.children);
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

//console.log(slideWidth);
// arrange the slides next to the another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// when I click left, move slides to the left


// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    //move to the next slide
    const currentSlide = track.querySelector('.current-slide');
    const NextSlide = currentSlide.nextElementSibling;
    const amountToMove = NextSlide.style.left;
    
    track.style.transform = 'translaleX(-' + amountToMove + ')'
    //console.log(amountToMove);

})

// when I click the indicator, move to that slide