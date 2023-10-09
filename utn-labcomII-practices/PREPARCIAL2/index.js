var tasasDeCambio = {
    'dolar': 0.014,  // Tasa de cambio a dólares (ejemplo)
    'euro': 0.012    // Tasa de cambio a euros (ejemplo)
  };
  
  function calcularVenta() {
    var cantidadPesos = parseFloat(document.getElementById('cantidadPesos').value);
    var moneda = document.getElementById('moneda').value;
  
    // Validar que los campos estén completos
    if (isNaN(cantidadPesos) || cantidadPesos <= 0 || moneda === '') {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }
  
    // Validar que la moneda seleccionada tenga una tasa de cambio
    if (!tasasDeCambio.hasOwnProperty(moneda)) {
      alert('No se encontró una tasa de cambio para la moneda seleccionada.');
      return;
    }
  
    var tasaCambio = tasasDeCambio[moneda];
    var resultado = cantidadPesos * tasaCambio;
  
    document.getElementById('resultado').innerText = 'El resultado es: ' + resultado.toFixed(2) + ' ' + moneda;
  }
  
  function agregarNuevaMoneda() {
    var nuevaMoneda = document.getElementById('nuevaMoneda').value;
    var costoConversion = parseFloat(document.getElementById('costoConversion').value);
  
    // Validar que los campos estén completos
    if (nuevaMoneda === '' || isNaN(costoConversion) || costoConversion <= 0) {
      alert('Por favor, complete todos los campos correctamente para agregar la nueva moneda.');
      return;
    }
  
    // Validar que la moneda no exista previamente
    if (tasasDeCambio.hasOwnProperty(nuevaMoneda)) {
      alert('La moneda ya existe en la lista.');
      return;
    }
  
    // Agregar la nueva moneda a la lista de tasas de cambio
    tasasDeCambio[nuevaMoneda] = costoConversion;
  
    // Actualizar el desplegable de selección de monedas
    var selectMoneda = document.getElementById('moneda');
    var option = document.createElement('option');
    option.value = nuevaMoneda;
    option.textContent = nuevaMoneda;
    selectMoneda.appendChild(option);
  
    // Limpiar los campos del formulario de agregar moneda
    document.getElementById('nuevaMoneda').value = '';
    document.getElementById('costoConversion').value = '';
  
    alert('Nueva moneda agregada con éxito: ' + nuevaMoneda);
  }
  