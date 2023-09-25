// Array de nombres
// Función para crear la lista
// Recorre el array de nombres y crea elementos de lista (li) para cada nombre
// Agrega la lista al elemento con el id "contenedor" en el DOM
// Agregar botón para obtener un nombre aleatorio
// Función para obtener un nombre aleatorio
// Llama a la función para crear la lista cuando la página se cargue

let nombres = [
  "Juan",
  "María",
  "Pedro",
  "Luis",
  "Ana",
  "Carlos",
  "Laura",
  "Marta",
  "Santiago",
  "Elena",
];

let app = document.getElementById("app");
let titulo = document.createElement("h2");
titulo.innerHTML = "Lista de nombres";
app.appendChild(titulo);

function crearLista() {
  let listaContenedor = document.getElementById("app"); //referencia al elemento donde deseas mostrar la lista

  for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i]; //me guardo la referencia del i dentro del array de nombres

    let listaNombres = document.createElement("li"); //me creo el elemento para representar "nombre"

    listaNombres.innerHTML = nombre; //asigno como texto nombre

    listaContenedor.appendChild(listaNombres); //creo el elemento nombre den do de app
  }
}

crearLista();

let boton = document.createElement("button");
boton.innerHTML = "Seleccion Aleatoria";
app.appendChild(boton);

let dondeMostrar = document.createElement("p");
app.appendChild(dondeMostrar);

function realizarSorteo() {
  const nombreGanador = obtenerNombre();
  mostrarNombre(`El ganador es: ${nombreGanador}`, dondeMostrar);
}

boton.addEventListener("click", realizarSorteo);

function obtenerNombre() {
  let nombreAleatorio = Math.floor(Math.random() * nombres.length);
  let nombreSeleccionado = nombres[nombreAleatorio];
  return nombreSeleccionado;
}

function mostrarNombre(nombre, dondeMostrar) {
  dondeMostrar.innerHTML = nombre;
}
