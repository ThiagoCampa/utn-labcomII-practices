let claveCorrecta = 'miClave'; // Cambia la clave a tu palabra clave deseada
let intentosFallidos = 0;

function validarClave() {
  const claveIngresada = document.getElementById('clave').value;

  if (claveIngresada === claveCorrecta) {
    intentosFallidos = 0; // Resetea los intentos fallidos si la clave es correcta
    mostrarMensaje('Acceso concedido', 'green');
  } else {
    intentosFallidos++;
    if (intentosFallidos >= 3) {
      mostrarMensaje('Intruso', 'red');
    } else {
      mostrarMensaje('Clave incorrecta', 'red');
    }
  }
}

function mostrarMensaje(texto, color) {
  const mensajeElement = document.getElementById('message');
  mensajeElement.textContent = texto;
  mensajeElement.style.color = color;
}