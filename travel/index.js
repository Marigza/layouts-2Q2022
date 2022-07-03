
console.log("Total points 108: \n done: 23 items; \n not done: 1 item (favicon)");

// burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const accountClose = document.querySelector('.account');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
    accountClose.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
}());