function cuenta(numero) {
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = '';  // Limpiar el contenido anterior

  for (let i = 0; i <= numero; i++) {
    setTimeout(() => {
      resultadoElement.textContent = `Contando: ${i}`;
    }, i * 1000);
  }
}

function iniciarConteo() {
  const numero = parseInt(document.getElementById('numero').value);

  if (isNaN(numero) || numero < 0) {
    alert('Por favor, ingrese un número válido y positivo.');
    return;
  }

  cuenta(numero);
}