const body = document.querySelector('body');
const seccion1 = document.querySelector('.seccion1');
const seccion3 = document.querySelector('.seccion3');
const btn = document.querySelector('.btn');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const h1 = document.querySelector('.h1-seccion1');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Sitio web cargado!');

    //Recuerden que el evento "DOMContentLoaded" es igual al evento "load", y que seguramente lo vean muchas veces 馃槈
});


//Cambiamos el color de la primera secci贸n al interactuar con el boton y gracias al metodo "Toggle"
btn.addEventListener('click', () => {
    seccion1.classList.toggle('green');
});

//e.preventDefault();
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Evitamos que se recargue la pagina!');
})

//Evento de teclado
input.addEventListener('input', e => {
    console.log(e.target.value); //Obtenemos lo que el usuario escribre
    //Con el evento "input", podemos saber cuando el usuario selecciona el input, escribe, borra, copia, pega, corta e inclusive cuando sale del input
});

//Recuerden que tambi茅n pueden utilizar keypress, keydown, keyup, etc
input.addEventListener('keyup', e => {
    console.log(e.key); //Obtenemos que tecla se presion贸
});

//Evento de mouse 
h1.addEventListener('mouseenter', function () {
    this.style.color = 'green'; //Le cambiamos el color al h1 de la seccion 1

    //IMPORTANTE!! Si utilizan la palabra reservada "this", tiene que utilizar la funci贸n regular, ya que en el arrow function, la palabra this toma otro contexto
})



//Evento de scroll
document.addEventListener('scroll', () => {

    const ubicacion = seccion3.getBoundingClientRect(); //Gracias a este metodo y al evento scroll obtenemos en tiempo real la ubicaci贸n del elemento, en este caso es la secci贸n 3

    if (ubicacion.top < 400) {
        seccion3.classList.add('green'); //Cambiamos el color dependiendo a que distancia se encuentra el elemento del usuario al scrollear
    }

})