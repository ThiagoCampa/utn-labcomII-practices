function calcularNivel() {
    const nombre = document.getElementById('nombre').value;
    const totalPreguntas = parseFloat(document.getElementById('totalPreguntas').value);
    const preguntasCorrectas = parseFloat(document.getElementById('preguntasCorrectas').value);
  
    if (isNaN(totalPreguntas) || isNaN(preguntasCorrectas) || totalPreguntas <= 0 || preguntasCorrectas < 0 || preguntasCorrectas > totalPreguntas) {
      document.getElementById('resultado').innerText = 'Ingrese datos válidos.';
      return;
    }
  
    const porcentaje = (preguntasCorrectas / totalPreguntas) * 100;
  
    let nivel;
  
    if (porcentaje >= 90) {
      nivel = 'Nivel superior';
    } else if (porcentaje >= 75) {
      nivel = 'Nivel medio';
    } else if (porcentaje >= 50) {
      nivel = 'Nivel regular';
    } else {
      nivel = 'Fuera de nivel';
    }
  
    document.getElementById('resultado').innerText = `${nombre} tiene un porcentaje de respuestas correctas del ${porcentaje.toFixed(2)}%. Nivel: ${nivel}`;
  }
  