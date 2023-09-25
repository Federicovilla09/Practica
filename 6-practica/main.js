/* 5. Cambiar el atributo de una imagen:

Crea una página HTML con una imagen <img>que tenga un ID.
Utilice JavaScript para seleccionar esa imagen por su ID y cambiar su atributo src para que muestre una imagen diferente. */

let contenedorImagen = document.getElementById("contenedor");
let imagenOriginal = document.getElementById("imagen1");

let boton = document.createElement("button")
boton.innerHTML="Cambia la imagen"
contenedorImagen.appendChild(boton)
boton.addEventListener('click', imagenDos);

function imagenDos() {
  imagenOriginal.src =
    "https://img.freepik.com/vector-gratis/lindo-pinguino-volando-globos-ilustracion-vectorial-dibujos-animados-vector-aislado-concepto-amor-animal-estilo-dibujos-animados-plana_138676-2016.jpg?q=10&h=200";
}

