/* 1. Cambiar el texto de un elemento:

Crea una página HTML con un párrafo <p>que tenga un ID específico.
Utilice JavaScript para seleccionar ese elemento por su ID y cambiar su texto mediante un boton. */

let textoHtml = document.getElementById("parrafo");

let boton = document.createElement("button")
boton.innerHTML = "Click aqui"
textoHtml.appendChild(boton)

boton.addEventListener("click", cambiarTexto);

function cambiarTexto() {
  document.getElementById('parrafo').innerText="Hola mundo";
}


