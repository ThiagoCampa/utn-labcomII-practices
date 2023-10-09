function mostrarNumeroMayor() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
  
    if (isNaN(numero1) || isNaN(numero2)) {
      alert('Por favor, ingrese números válidos.');
      return;
    }
  
    const numeroMayor = Math.max(numero1, numero2);
    document.getElementById('resultado').value = numeroMayor;
  }