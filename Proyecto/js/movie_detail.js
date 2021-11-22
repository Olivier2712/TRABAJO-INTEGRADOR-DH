window.addEventListener('load', function() {
// Query string
let queryString = location.search;
let objetoQueryString = new URLSearchParams(queryString);
let id = objetoQueryString.get('id');

// URL DE DETALLES

let urlDetail = `https://api.themoviedb.org/3/movie/${id}?api_key=0c401fea6bfd4fce4b40d85aa22f7fff&language=en-US`;

// FETCH API MOVIE DATA BASE  
fetch (urlDetail)
.then ( function(response) {
    return response.json();
})
.then (function(data) {


    console.log(data);

    //titulo de la pelicula    
    let title = document.querySelector('.nombre-pelicula');
    let titulo = data.title;

    title.innerHTML = titulo;

    // Fecha de estreno
    let fechaHtml = document.querySelector('.fechaDeEstreno');
    let fechaJS = data.release_date;

    fechaHtml.innerHTML = fechaJS;

    // Sinopsis 

    let sinopsisHtml = document.querySelector('.texto-sinopsis');
    let sinopsisJS = data.overview;

    sinopsisHtml.innerHTML = sinopsisJS;

    // Género
    let generoHtml = document.querySelector('.genero')
    let generoJS = `${data.genres[0].name}  ${data.genres[1].name} ${data.genres[2].name}`;

    generoHtml.innerHTML = generoJS;


    // Duracion
    let duracionHtml = document.querySelector('.duracion')
    let duracionJS = `${data.runtime} minutes.`

    duracionHtml.innerHTML = duracionJS;

    //rating
    let ratingHtml = document.querySelector('.ratingH')
    let ratingJS = ` | ${data.vote_count} people say: ${data.vote_average} |`

    ratingHtml.innerHTML = ratingJS;


    // Imagenes
    let imgHtml = document.querySelector('.img-isla');
    let imgJS = ` <img class="img-isla" src="https://image.tmdb.org/t/p/original/${data.poster_path}"  width="" alt=""> `

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








