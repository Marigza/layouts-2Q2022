
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
const nextButton = document.querySelectorAll('.destination_foto')[2];
const prevButton = document.querySelectorAll('.destination_foto')[0];
const centerButton = document.querySelectorAll('.destination_foto')[1];

const dotsNav = document.querySelector('.pointer');
const dots = Array.from(dotsNav.children);
const nextDot = document.querySelectorAll('.pointer_round')[2];
const prevDot = document.querySelectorAll('.pointer_round')[0];
const centerDot = document.querySelectorAll('.pointer_round')[1];

function moveSlideToLeft() {
    track.classList.remove('slider_left_poz');
    track.classList.add('slider_right_poz');
    dots[1].classList.remove('pointer_round_active')
    dots[0].classList.remove('pointer_round_active')
    dots[2].classList.add('pointer_round_active')
}

function moveSlideToRight() {
    track.classList.remove('slider_right_poz');
    track.classList.add('slider_left_poz');
    dots[1].classList.remove('pointer_round_active')
    dots[2].classList.remove('pointer_round_active')
    dots[0].classList.add('pointer_round_active')
}

function moveCenterSlide() {
    if (track.classList.contains('slider_right_poz')) {
        track.classList.remove('slider_right_poz')
        dots[2].classList.remove('pointer_round_active')
        dots[0].classList.remove('pointer_round_active')
        dots[1].classList.add('pointer_round_active')
    } else  if (track.classList.contains('slider_left_poz')) {
        track.classList.remove('slider_left_poz')
        dots[0].classList.remove('pointer_round_active')
        dots[2].classList.remove('pointer_round_active')
        dots[1].classList.add('pointer_round_active')
    }
}

nextButton.addEventListener('click', moveSlideToLeft)
prevButton.addEventListener('click', moveSlideToRight)
centerButton.addEventListener('click', moveCenterSlide)

nextDot.addEventListener('click', moveSlideToLeft)
prevDot.addEventListener('click', moveSlideToRight)
centerDot.addEventListener('click', moveCenterSlide)

// carousel for adaptive version

const arrowLeft = document.querySelector('.destin_arrow-left')
const arrowRight = document.querySelector('.destin_arrow-right')

function moveSmallSlideToLeft() {
    if (track.classList.contains('slider_left_poz')) {
        track.classList.remove('slider_left_poz');
        dots[0].classList.remove('pointer_round_active')
        dots[1].classList.add('pointer_round_active')
    } else {
        track.classList.add('slider_right_poz');
        dots[1].classList.remove('pointer_round_active')
        dots[2].classList.add('pointer_round_active')
    }
}

function moveSmallSlideToRight() {
    if (track.classList.contains('slider_right_poz')) {
        track.classList.remove('slider_right_poz');
        dots[2].classList.remove('pointer_round_active')
        dots[1].classList.add('pointer_round_active')
    } else {
        track.classList.add('slider_left_poz');
        dots[1].classList.remove('pointer_round_active')
        dots[0].classList.add('pointer_round_active')
    }
    
}

arrowLeft.addEventListener('click', moveSmallSlideToRight)
arrowRight.addEventListener('click', moveSmallSlideToLeft)
