/* 3. Manipular una lista:

Crea una página HTML con una lista <ul>que contiene varios elementos <li>.
Utilice JavaScript para agregar un nuevo elemento a la lista o eliminar uno existente. */

let articulos = ["Papa", "Cebolla", "Tomate", "Lechuga"];

function crearLista() {
  let divLista = document.getElementById("contenedorLista");

  for (let i = 0; i < articulos.length; i++) {
    let lista = articulos[i];
    let listaCompra = document.createElement("li");
    listaCompra.innerHTML = lista;
    divLista.appendChild(listaCompra)
  }
}

crearLista()

let boton = document.createElement("button")
boton.innerText="Agregar nuevos articulos"
contenedorLista.appendChild(boton)
boton.addEventListener("click", nuevosArticulos)

function nuevosArticulos() {
  let articulo = prompt("Ingrese un nuevo articulo a la lista")
  if (articulo) {
    let divLista = document.getElementById("contenedorLista");
    let articuloIngresado = document.createElement("li")
    articuloIngresado.innerHTML = articulo
    divLista.insertBefore(articuloIngresado, boton);    
  } else {
    alert("Debes ingresar algun articulo valido")
  }
}
  