const form = document.querySelector('.form');
const input = document.querySelector('.input');
const body = document.querySelector('body');
/* 
input.addEventListener('input', e => {

    console.log(e.currentTarget);

}); */

const seccion3 = document.querySelector('.seccion3');

document.addEventListener('scroll', e => {
    // const scrollY = window.scrollY;

    const ubicacion = seccion3.getBoundingClientRect();

    console.log(ubicacion);
    /* if (ubicacion.top < 411) {
        seccion3.classList.add('green');
    } else {
        console.log('Aun no');
    } */

})