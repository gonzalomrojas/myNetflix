const fila = document.querySelector('.carousel-container');
const peliculas = document.querySelectorAll('.movie');

const flechaIzquierda = document.getElementById('left-arrow');
const flechaDerecha = document.getElementById('right-arrow');

// EVENT LISTENER PARA LA FLECHA DERECHA

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth; 

    const indicatorActive = document.querySelector('.indicators .active');
    if (indicatorActive.nextSibling) {
        indicatorActive.nextSibling.classList.add('.active');
        indicatorActive.classList.remove('active');
    }
})

// EVENT LISTENER PARA LA FLECHA IZQUIERDA
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth; 

    const indicatorActive = document.querySelector('.indicators .active');
    if (indicatorActive.previousSibling) {
        indicatorActive.previousSibling.classList.add('.active');
        indicatorActive.classList.remove('active');
    }
})


// PAGINACION
const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');

    if (i === 0) {
        indicador.classList.add('active')
    }
    document.querySelector('.indicators').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicators .active').classList.remove('active')
        e.target.classList.add('active');
    })

}

// HOVER

peliculas.forEach((movie) => {
    movie.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget; 
        setTimeout(() => {
            peliculas.forEach(movie => movie.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(movie => movie.classList.remove('hover'));
});
