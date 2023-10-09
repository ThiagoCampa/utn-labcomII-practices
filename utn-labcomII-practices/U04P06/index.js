function concatenar() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const resultado = nombre + ' ' + apellido;
    document.getElementById('resultado').value = resultado;
  }