let apiUrl = ("https://api.themoviedb.org/3/genre/movie/list?api_key=0f9656f2ce0988e0a6ad7ea1f7bb5506&language=en-US")

//fetch pelis
fetch(apiUrl)

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data.genres);

        for (let i = 0; i < 5; i++) {

            let artpelis = document.querySelector('.peli').innerHTML += `
                <ul class="genlis">
                    <a href="../htmls/detail-genres.html"><li>${data.genres[i].name}</li></a>
                </ul>
             `;

        }

    })
    .catch(function (error) {
        console.log(`El error fue: ${error}`)
    }
    )


//fetch series
let apiUrll =('https://api.themoviedb.org/3/genre/tv/list?api_key=0f9656f2ce0988e0a6ad7ea1f7bb5506&language=en-US')

fetch(apiUrll)

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data.genres);

        for (let i = 0; i < 5; i++) {

            let artseri = document.querySelector('.seri').innerHTML += `
                <ul class="genlis">
                    <a href="../htmls/detail-genres.html"><li>${data.genres[i].name}</li></a>
                </ul>
             `;

        }

    })
    .catch(function (error) {
        console.log(`El error fue: ${error}`)
    }
    )



