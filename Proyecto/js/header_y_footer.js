window.addEventListener('load', function() {

let formularioBuscador = document.querySelector('.formularioBuscador');
let campoBuscador = document.querySelector('.campoBuscador');




formularioBuscador.addEventListener('submit', function(e) {
    
 e.preventDefault;

 if (campoBuscador.value == "") {
     alert("Tu busqueda carece de caracteres");
 } else if (campoBuscador.value.length <= 3) {
     alert("La búsqueda no supera los 3 caracteres. Por favor, inténtalo devuelta.");
 } else {
     this.submit();
 }
})

});