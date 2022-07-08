
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