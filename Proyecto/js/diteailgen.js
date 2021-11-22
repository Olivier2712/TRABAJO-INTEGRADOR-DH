const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const genero = urlParams.get('genero');
const tipo = urlParams.get('tipo');
let url;

if(tipo == 'series') {
    url = 'https://api.themoviedb.org/3/discover/tv?api_key=0f9656f2ce0988e0a6ad7ea1f7bb5506&with_genres=' + id;
}else{
    url = 'https://api.themoviedb.org/3/discover/movie?api_key=0f9656f2ce0988e0a6ad7ea1f7bb5506&with_genres=' + id;
}
const titulo = document.querySelector('.genh1');

titulo.innerText = genero;


fetch(url)
    .then(function( resp ){
        return resp.json();
    })
    .then(function( resp ){
        
        let listado = document.querySelector('.uldetallesgen');
            
        for(let i = 0; i < resp.results.length; i++) {

            if(resp.results[i].backdrop_path != null) {

                
                if(tipo == 'series') {
                    let id = resp.results[i].id;
                    let nombre = resp.results[i].name;
                    listado.innerHTML += `
                    <li class="liclase">
                        <a href="./series_detail.html?id=${ id }">     
                            <img class="imag" src="https://image.tmdb.org/t/p/w342${resp.results[i].backdrop_path}" alt="">
                        </a>
                        <h3 class="h3detallesgen">${ nombre }</h3>
                    </li>`;

                }
                
                if(tipo == 'peliculas') {
                    let id = resp.results[i].id;
                    let nombre = resp.results[i].title;
                    listado.innerHTML += `
                    <li class="liclase">
                        <a href="./movie_detail.html?id=${ id }">     
                        <img class="imag" src="https://image.tmdb.org/t/p/w342${resp.results[i].backdrop_path}" alt="">
                        </a>
                        <h3 class="h3detallesgen">${ nombre }</h3>
                    </li>`;

                }
                
            }
        }

    });
