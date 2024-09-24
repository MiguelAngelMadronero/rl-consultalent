const nav = document.querySelector('.nav__links');
const botonAbrir = document.querySelector('#nav__open');
const Linksnav = document.querySelectorAll(".nav__link")
const botonAbrirMenu = document.querySelector('.header__menu--container')
const botonCerrar = document.querySelector('#nav__close');
const path = document.getElementById('nav__open--path');

botonAbrirMenu.addEventListener("click", ()=>{
    nav.classList.add('nav__links--mostrar');
    console.log(botonAbrir);
    console.log(nav);
});



botonCerrar.addEventListener("click", ()=>{
    nav.classList.remove("nav__links--mostrar");
    
   nav.classList.add("nav__links--close");

   setTimeout(() => {
    nav.classList.remove("nav__links--close");
   }, 500);
})

document.addEventListener("click", function(event) {
    // Si el clic no ocurrió dentro del menú o del botón para abrir el menú, cerrar el menú
    if (!nav.contains(event.target) && event.target !== botonAbrir) {
        nav.classList.remove("nav__links--mostrar");
    }
})

Linksnav.forEach(link =>{
    link.addEventListener('click', () => {
        nav.classList.remove("nav__links--mostrar");

    } )
})

