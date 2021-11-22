window.addEventListener('load', function() {

    // Query String para resultado de la busqueda H1
    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let busqueda = objetoQueryString.get('busqueda');
    let mensajeDeBusqueda = document.querySelector('.msj-resultado');


    mensajeDeBusqueda.innerHTML = `Términos relacionados con tu busqueda: ${busqueda}`;


    // Fetch resultados de busqueda de Peliculas

    let urlResultadosPeliculas = `https://api.themoviedb.org/3/search/movie?api_key=0c401fea6bfd4fce4b40d85aa22f7fff&language=es&query=${busqueda}`;

    fetch (urlResultadosPeliculas)
        .then (function(response) {
            return response.json();
        })
        .then (function (data){
            
                console.log(data)

                if (data.total_results>0){
                        for (i= 0; i < 10; i++) {

                            let tituloPeliculas = data.results[i].title;
                            let posterPeliculas =` https://image.tmdb.org/t/p/original/${data.results[i].poster_path}  `;
                            let idPeliculas = data.results[i].id;
                            
                            let contenidoHtmlPeliculas = document.querySelector('.lista-titulos-relacionados');
                    
                            let resultadosPeliculasEnHtml = `<li class="elemento-titulos-relacionados"> <a class="botones-titulos-relacionados" href="../htmls/movie_detail.html?id=${idPeliculas}"> <img class="img-titulos-relacionados" src="${posterPeliculas}" alt=""> <h1 class="nombres-resultados"> ${tituloPeliculas}  </h1> </a> </li>`;
                    
                            contenidoHtmlPeliculas.innerHTML += `${resultadosPeliculasEnHtml}`;
                    
                            
                
                    }
                } else {
                    let contenidoHtmlPeliculas = document.querySelector('.lista-titulos-relacionados');
                    contenidoHtmlPeliculas.innerHTML = `<p class="msj-resultado" > No hay resultados relacionados con tu búsqueda </p>`;
                }
            
        })

        .catch (function (error) {
            console.log (`El error es ${error}`);
        });


    // Fetch resultados de busqueda de Series

    let urlResultadosSeries = `https://api.themoviedb.org/3/search/tv?api_key=0c401fea6bfd4fce4b40d85aa22f7fff&language=es&query=${busqueda}`;

    fetch (urlResultadosSeries)
        .then (function(response) {
            return response.json();
        })
        .then (function (data){
        
                console.log(data)

                
                if (data.total_results>0){
                    for (i= 0; i < 10; i++) {

                        let tituloSeries = data.results[i].name;
                        let posterSeries =` https://image.tmdb.org/t/p/original/${data.results[i].poster_path}  `;
                        let idSeries = data.results[i].id;


                        let contenidoHtmlSeries = document.querySelector('.lista-titulos-relacionados');

                        let resultadosSeriesEnHtml = `<li class="elemento-titulos-relacionados"> <a class="botones-titulos-relacionados" href="../htmls/series_detail.html?id=${idSeries}"> <img class="img-titulos-relacionados" src="${posterSeries}" alt=""> <h1 class="nombres-resultados"> ${tituloSeries}  </h1> </a> </li>`;

                        contenidoHtmlSeries.innerHTML += `${resultadosSeriesEnHtml}`;

                        
                    }
                } else {
                    let contenidoHtmlPeliculas = document.querySelector('.lista-titulos-relacionados');
                    contenidoHtmlPeliculas.innerHTML = `<p class="msj-resultado" > No hay resultados relacionados con tu búsqueda </p>`;
                }
                
        
        })

        .catch (function (error) {
            console.log (`El error es ${error}`);
        });

});