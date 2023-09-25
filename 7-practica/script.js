/* 7. Validación de formulario:

Crea un formulario HTML con campos como nombre, correo electrónico y contraseña.
Utiliza JavaScript para validar que los campos no estén vacíos cuando se envía el formulario.
Muestra mensajes de error si algún campo está vacío y evita que el formulario se envíe hasta que se completen correctamente todos los campos. */

let formulario = document.getElementById("contenedorForm");
formulario.addEventListener("submit", eventoForm);

function eventoForm(event) {
  if(!validarForm()){
    event.preventDefault();
  }
}

function validarForm() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("contraseña").value;

  if (nombre === "" || email === "" || contraseña === "") {
    alert("Debe llenar los campos")
    return false;
  }

  return true;
}