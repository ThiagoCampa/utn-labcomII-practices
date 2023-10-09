function validarFormulario() {
    var codigo = document.getElementById('codigo').value;
    var nombreLibro = document.getElementById('nombreLibro').value;
    var tipo = document.getElementById('tipo').value;
    var editorial = document.getElementById('editorial').value;
    var anio = document.getElementById('anio').value;
    var autor = document.getElementById('autor').value;
  
    if (codigo === '' || nombreLibro === '' || tipo === '' || editorial === '' || anio === '' || autor === '') {
      alert('Por favor, complete todos los campos.');
    } else {
      alert('Formulario enviado correctamente.');
    }
  }
  
  function limpiarFormulario() {
    document.getElementById('formulario').reset();
  }