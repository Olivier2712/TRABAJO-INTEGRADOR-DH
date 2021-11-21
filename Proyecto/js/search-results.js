window.addEventListener('load', function() {

// Querry busqueda en form
let querryStringDeBusqueda = new URLSearchParams(location.search)

let mensajeDeBusqueda = document.querySelector('.msj-resultado');

mensajeDeBusqueda.innerHTML = `Términos relacionados con tu busqueda: ${querryStringDeBusqueda.get('busqueda')}`;


// Fetch resultados de busqueda 

let urlResultados = 'https://api.themoviedb.org/3/search/movie?api_key=0c401fea6bfd4fce4b40d85aa22f7fff&language=en-US&page=1&include_adult=false';

fetch (urlResultados)
.then (response => response.json())
.then (data => {
    console.log(data)
   let peli = data[querryStringDeBusqueda];
})

.catch (error => {console.log(error)});
});