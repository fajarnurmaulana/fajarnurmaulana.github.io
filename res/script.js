const menuToogle = document.querySelector('.hamburger input');
const menu = document.querySelector('.navlink');

menuToogle.addEventListener('click', function () {
    menu.classList.toggle('slide');
})