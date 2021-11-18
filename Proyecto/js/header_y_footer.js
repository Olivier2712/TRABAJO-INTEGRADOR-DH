let formularioBuscador = document.getElementById('formularioBuscador');
let campoBuscador = document.getElementById('campoBuscador');




formularioBuscador.addEventListener('submit', function(e) {
    
 e.preventDefault;

 if (campoBuscador.value === "") {
     e.preventDefault();
     alert("Tu busqueda carece de caracteres");
 } else if (campoBuscador.value.length <= 3) {
     e.preventDefault();
     alert("Tu busqueda no supera los 3 caracteres");
 } else {
     this.submit();
 }
})