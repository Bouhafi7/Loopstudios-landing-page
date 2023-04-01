let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.burger-icon');
let menuItems = document.querySelectorAll('.menu li a');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menu.classList.contains('active') ? menuBtn.src = 'images/icon-close.svg' : menuBtn.src = 'images/icon-hamburger.svg' ;
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
        menu.classList.contains('active') ? menuBtn.src = 'images/icon-close.svg' : menuBtn.src = 'images/icon-hamburger.svg' ;
    });
});

let head = document.querySelector('header .container .head');

window.onscroll = function () {
    window.scrollY > 1 ? head.classList.add('active') : head.classList.remove('active');
};