//obtengo la url de generos con la api key
let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=0f9656f2ce0988e0a6ad7ea1f7bb5506&language=en-US';

//consultar los datos en la api

fetch(url)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (resp) {
        let listado = document.querySelector('#listaPeliculas');

        for (let i = 0; i < resp.genres.length; i++) {
            let id = resp.genres[i].id;
            let nombre = resp.genres[i].name;
            listado.innerHTML += `<article><a class="clasea" href="../htmls/detail-genres.html?id=${id}&genero=${nombre}&tipo=peliculas">${nombre}</a></article>`;
        }
    });


url = 'https://api.themoviedb.org/3/genre/tv/list?api_key=0f9656f2ce0988e0a6ad7ea1f7bb5506&language=en-US&page=1';

fetch(url)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (resp) {
        let listado = document.querySelector('#listaSeries');

        for (let i = 0; i < resp.genres.length; i++) {
            let id = resp.genres[i].id;
            let nombre = resp.genres[i].name;
            listado.innerHTML += `<article><a class="clasea" href="./detail-genres.html?id=${id}&genero=${nombre}&tipo=series">${nombre}</a></article>`;
        }

    });



