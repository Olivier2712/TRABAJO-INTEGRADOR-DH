let url = ("https://api.themoviedb.org/3/genre/movie/list?api_key=0f9656f2ce0988e0a6ad7ea1f7bb5506&language=en-US")

//fetch pelis
fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data)
    for (i=0; i < data.length; i++){
        
    }
})