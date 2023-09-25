/* 2. Cambiar el color de fondo de un elemento:

Crea una página HTML con un elemento, como un <div>, que tenga un ID.
Utilice JavaScript para seleccionar ese elemento por su ID y cambiar su color de fondo. */

let colorDiv = document.getElementById("contenedor");

let boton = document.getElementById("contenedorBoton");
let crearBoton = document.createElement("button");
crearBoton.innerHTML="Cambia de color con un click";
boton.appendChild(crearBoton);
boton.addEventListener("click", cambiarColor);

let seleccionColor = document.createElement("input")
seleccionColor.type = "color";
seleccionColor.id = "inputColor";
colorDiv.appendChild(seleccionColor)

function cambiarColor() {
  let paletaColores = seleccionColor.value; 
  colorDiv.style.backgroundColor = paletaColores;
}

