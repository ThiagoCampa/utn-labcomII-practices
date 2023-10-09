function calcularFactorial() {
    let numero;
  
    // Pedir al usuario que ingrese un número mayor que 0
    do {
      numero = parseFloat(prompt('Por favor, ingrese un número mayor que 0:'));
    } while (isNaN(numero) || numero <= 0);
  
    // Calcular el factorial
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    // Mostrar el factorial en una alerta
    alert(`El factorial de ${numero} es: ${factorial}`);
  }
  