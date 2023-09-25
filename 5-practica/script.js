/* 4. Mostrar/ocultar elementos:

Crea una página HTML con un botón y un elemento, como un <div>.
Utilice JavaScript para hacer que al hacer clic en el botón se cambie el texto del parrafo. */

let div = document.getElementById("contenedorDiv");


let boton = document.createElement("button")
boton.innerHTML = "Click aqui"
div.appendChild(boton)
boton.addEventListener("click", textoNuevo)

function textoNuevo() {
  let parrafo = document.getElementById("nuevoParrafo");
  parrafo.innerHTML = "El nuevo texto"
}
