window.addEventListener('load', function() {

let formularioBuscador = document.querySelector('.formularioBuscador');
let campoBuscador = document.querySelector('.campoBuscador');




formularioBuscador.addEventListener('submit', function(e) {
    
    e.preventDefault();

    if (campoBuscador.value == "") {
        
        alert("Tu búsqueda no incluye ningún carácter. Por favor inténtalo denuevo.");
    } else if (campoBuscador.value.length <= 3) {
    
        alert("Tu búsqueda no supera los 3 caracteres. Por favor, inténtalo devuelta.");
    } else {
        this.submit();
    }
})

});