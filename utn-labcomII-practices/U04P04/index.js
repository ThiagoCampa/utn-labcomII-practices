function calcularCubo() {
    const entero = parseInt(document.getElementById('entero').value);
  
    if (isNaN(entero)) {
      alert('Por favor, ingrese un entero válido.');
      return;
    }
  
    const cubo = entero ** 3;
    alert(`El cubo de ${entero} es: ${cubo}`);
  }