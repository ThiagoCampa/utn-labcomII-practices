function calcularSuma() {
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);
  const suma = numero1 + numero2;

  const resultadoElement = document.getElementById('resultado');
  
  if (isNaN(suma)) {
    resultadoElement.textContent = 'Por favor, ingrese números válidos.';
    return;
  }

  const resultado = suma < 0 ? Math.abs(suma) : suma;
  resultadoElement.textContent = 'El resultado de la suma es: ' + resultado;
}