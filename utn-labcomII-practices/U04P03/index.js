function verificarNumero() {
    const numero = parseFloat(document.getElementById('numero').value);
    const resultadoElement = document.getElementById('resultado');
  
    if (isNaN(numero)) {
      resultadoElement.textContent = 'Por favor, ingrese un número válido.';
    } else if (numero > 0) {
      resultadoElement.textContent = 'El número es positivo.';
    } else if (numero < 0) {
      resultadoElement.textContent = 'El número es negativo.';
    } else {
      resultadoElement.textContent = 'El número es nulo.';
    }
  }