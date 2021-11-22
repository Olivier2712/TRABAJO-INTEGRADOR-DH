window.addEventListener('load', function() {

// Query string
let queryString = location.search;
let objetoQueryString = new URLSearchParams(queryString);
let id = objetoQueryString.get('id');


// URL DE DETALLES

let urlDetail = `https://api.themoviedb.org/3/tv/${id}?api_key=0c401fea6bfd4fce4b40d85aa22f7fff&language=en-US` ;

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
let imgJS = ` <img class="foto-office" src="https://image.tmdb.org/t/p/original/${data.poster_path}"  width="500px" alt="500px"> `

imgHtml.innerHTML = imgJS;



// Selector del botón favorito
let buttonFav = document.querySelector('.favoritosBoton');
let favoritos = [];
// localStorage
    
if(localStorage.getItem('favoritosToString')!=null){
    favoritos = JSON.parse(localStorage.getItem('favoritosToString'));
    if(favoritos.includes(data.id)) {
        buttonFav.innerHTML = `Remover`;
    }else{
        buttonFav.innerHTML = `Agregar`;
    }
}

// Evento del botón agregar/remover favorito

buttonFav.addEventListener('click', function(e){

    // e.preventDefault(); En caso de ser un hipervínculo (etiquetas <a href="">Enlace</a>)

    if (favoritos.includes(data.id)){
        favoritos.splice(favoritos.indexOf(data.id),1);
        buttonFav.innerHTML = `Agregar`;
    }else{
        favoritos.push(data.id);
        buttonFav.innerHTML = `Remover`;
    }
    
    localStorage.setItem('favoritosToString', JSON.stringify(favoritos));
    console.log(localStorage);

})

})



.catch (function (error) {
    console.log (`El error es ${error}`);
});



});