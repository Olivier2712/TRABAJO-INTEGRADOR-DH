window.addEventListener(`load`, function(){
    // crear un array sin elementos para almacenar lo que el usuario agregará a la lista

 let favoritos = [ ];
 if (localStorage.getItem("peliculasFavoritasString")!=null){

    favoritos = JSON.parse(localStorage.getItem("peliculasFavoritasString"));
    console.log(favoritos);
    
    for (let i = 0; i < favoritos.length; i++) {
        //se debe crear un fetch de todas las películas que el usuario agregue a favoritos

        fetch(`https://api.themoviedb.org/3/movie/550${favoritos[i]}
        ?api_key=0938a17506c745fb6004b99867b093d4`)
        .then(function (response) {
            return response.json();
        })
        .then(function(datos) {

            console.log(datos);

            document.querySelector(".contenedor-géneros").innerHTML +=`
            <article class="artículo-género">
              <div>
                <p id= "Clasificacíon">Película</p>
                <a href="movie_detail.html?id=${favoritos[i]}"><img src= ../img">
                <div class= "img_peliculas"
                    <h4>${datos.original_title}</h4>
                    <p>${datos.release_date}</p>
                </div>
            </article>
            `;
        })
        .catch(function(error) {
            console.log(`el error detectado fue: ${error}`);
        })

if(localStorage.getItem("seriesFavoritasString")!=null){

            favoritos = JSON.parse(localStorage.getItem("seriesFavoritasString"));
            console.log(favoritos);

    for (let i = 0; i < favoritos.length; i++) {
                
        //fetch que indique todas las series que el usuario coloque en favoritos

             fetch(`https://api.themoviedb.org/3/movie/550${favoritos[i]}
             ?api_key=0938a17506c745fb6004b99867b093d4`)
            .then(function (response) {
             return response.json();
             })
        .then(function(datos) {

            console.log(datos);

            document.querySelector(".contenedor-géneros").innerHTML +=`
                    <article class="artículo-género">
                    <div>
                        <p id= "Clasificacíon">Película</p>
                        <a href="series_detail.html?id=${favoritos[i]}"><img src=../img  >
                        <div class= "img_series"
                           <h4>${datos.original_title}</h4>
                           <p>${datos.release_date}</p>
                        </div>
                    </article>
            `;
            })
            .catch(function(error) {
                 console.log(`el error detectado fue: ${error}`);

            })
    
    }
