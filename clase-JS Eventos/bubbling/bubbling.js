const cardDiv = document.querySelector('.card');
const titulo = document.querySelector('.titulo');
const info = document.querySelector('.info');

//Problematica: Se propaga el evento a todos los elementos padre

/* cardDiv.addEventListener('click', () => {
    console.log('Click en card')
});

titulo.addEventListener('click', () => {
    console.log('Click en titulo')
});

info.addEventListener('click', () => {
    console.log('Click en info')
}); */

//Soluciones
cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en card')
});

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en titulo')
});

info.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en info')
});


cardDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('card')) {
        console.log('Click en la card')
    }

    if (e.target.classList.contains('titulo')) {
        console.log('Click en titulo')
    }
});