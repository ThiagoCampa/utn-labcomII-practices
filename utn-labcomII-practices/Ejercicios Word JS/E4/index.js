function mostrarDatosAlumno() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const domicilio = document.getElementById('domicilio').value;
    const curso = document.getElementById('curso').value;
    const carrera = document.getElementById('carrera').value;
    const materia = document.getElementById('materia').value;
    const notaPrimerParcial = parseFloat(document.getElementById('notaPrimerParcial').value);
  
    const datosAlumno = `
      <h3>Datos del Alumno:</h3>
      <p>Nombre: ${nombre}</p>
      <p>Apellido: ${apellido}</p>
      <p>Domicilio: ${domicilio}</p>
      <p>Curso: ${curso}</p>
      <p>Carrera: ${carrera}</p>
      <p>Materia: ${materia}</p>
      <p>Nota primer parcial: ${notaPrimerParcial}</p>
    `;
  
    document.getElementById('datosAlumno').innerHTML = datosAlumno;
  }
  