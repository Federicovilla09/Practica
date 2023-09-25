// 1 crear una lista en JavaScript a partir de una entrada en una página web
// 2 capturar el valor del input
// 3 agregarlo a la lista cuando se haga clic en el botón
// 4 realizador sorteo con los nombres ingresados
// 5 mostrar el resultado en pantalla


let inputNombre = document.getElementById("inputNombre");
let generarListaBtn = document.getElementById("generarLista");
let listaNombres = document.getElementById("listaNombres");

let nombres = [];

generarListaBtn.addEventListener("click", function () {
  let nombre = inputNombre.value;
  if(nombre) {
    let nuevoElementoLista = document.createElement("li");
    nuevoElementoLista.textContent = nombre;
    listaNombres.appendChild(nuevoElementoLista);
    nombres.push(nombre);
    inputNombre.value = ""; // Limpia el campo de entrada de texto
  } else {
    alert("Ingrese su nombre")
  }
});

let botonSorteo = document.getElementById("btnSorteo");
botonSorteo.addEventListener("click", sorteoAleatorio);

function sorteoAleatorio() {
  let nombresRegistrados = Math.floor(Math.random() * nombres.length);
  let nombreGanador = nombres[nombresRegistrados];
  let nombreElegido = document.getElementById("ganador");
  nombreElegido.innerHTML = nombreGanador;
}





