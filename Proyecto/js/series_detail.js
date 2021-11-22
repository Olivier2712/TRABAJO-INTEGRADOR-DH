window.addEventListener('load', function() {

// URL DE DETALLES

let urlDetail = 'https://api.themoviedb.org/3/tv/2316?api_key=0c401fea6bfd4fce4b40d85aa22f7fff&language=en-US';

//fetch
fetch (urlDetail)
.then ( function(response) {
    return response.json();
})
.then (function(data) {
    console.log(data)

//titulo de la pelicula    
let title = document.querySelector('.nombre-pelicula');
let titulo = data.original_name;

title.innerHTML = titulo;

// Fecha de estreno
let fechaHtml = document.querySelector('.fechaDeEstreno');
let fechaJS = data.first_air_date;

fechaHtml.innerHTML = fechaJS;

// Sinopsis 

let sinopsisHtml = document.querySelector('.texto-sinopsis');
let sinopsisJS = data.overview;

sinopsisHtml.innerHTML = sinopsisJS;

// Género
let generoHtml = document.querySelector('.genero')
let generoJS = `${data.genres[0].name}`;

generoHtml.innerHTML = generoJS;


// Duracion
let duracionHtml = document.querySelector('.duracion')
let duracionJS = `${data.number_of_seasons} seasons with a total of ${data.number_of_episodes} episodes`;

duracionHtml.innerHTML = duracionJS;

//rating
let ratingHtml = document.querySelector('.ratingH')
let ratingJS = ` | ${data.vote_count} people say: ${data.vote_average} |`

ratingHtml.innerHTML = ratingJS;


// Imagenes
let imgHtml = document.querySelector('.img-isla');
let imgJS = ` <img class="img-isla" src="https://image.tmdb.org/t/p/original/${data.poster_path}"  width="" alt=""> `

imgHtml.innerHTML = imgJS;



// Boton agregar a favoritos

let botonFavoritos = document.querySelector('.favoritosBoton')

botonFavoritos.addEventListener('click', function(e) {
    e.preventDefault();

    localStorage.setItem('favoritos', data.id)
    botonFavoritos.innerHTML = 'Quitar';

    botonFavoritos.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('favoritos', data.id)
        botonFavoritos.innerHTML = 'Agregar'
    })
})

})



.catch (function (error) {
    console.log (`El error es ${error}`);
});



});