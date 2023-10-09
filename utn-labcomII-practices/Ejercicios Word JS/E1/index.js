function encontrarMayor() {
    // Obtener los valores de los números ingresados
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);
  
    // Calcular el número mayor
    const numeroMayor = Math.max(numero1, numero2, numero3);
  
    // Mostrar el número mayor en la página
    document.getElementById('resultado').innerText = `El número mayor es: ${numeroMayor}`;
  }
  
