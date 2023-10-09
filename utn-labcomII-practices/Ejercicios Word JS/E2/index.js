function verificarNumero() {
    const numero = parseFloat(document.getElementById('numero').value);
  
    if (isNaN(numero)) {
      document.getElementById('resultado').innerText = 'Por favor, ingrese un número válido.';
    } else if (numero > 0) {
      document.getElementById('resultado').innerText = 'El número es positivo.';
    } else if (numero < 0) {
      document.getElementById('resultado').innerText = 'El número es negativo.';
    } else {
      document.getElementById('resultado').innerText = 'El número es cero.';
    }
  }
  