// Claves únicas para cada campo
const campos = [
  "inversionInicial", "costosFijos", "costosVariables",
  "precioVenta", "impuestos", "participacionVentas",
  "cantidad", "beneficiosClave", "moneda", "estrategiaPrecio"
];

// Guardar datos automáticamente al cambiar
campos.forEach(id => {
  const campo = document.getElementById(id);
  if (campo) {
    campo.addEventListener("input", () => {
      localStorage.setItem(id, campo.value);
    });
  }
});

// Cargar datos al iniciar la página
window.addEventListener("DOMContentLoaded", () => {
  campos.forEach(id => {
    const campo = document.getElementById(id);
    if (campo && localStorage.getItem(id)) {
      campo.value = localStorage.getItem(id);
    }
  });
});

// Función para limpiar todos los datos guardados
function limpiarDatosCalculadora() {
  campos.forEach(id => localStorage.removeItem(id));
  location.reload(); // Opcional: recargar la página
}

// Puedes vincular esta función a un botón de reinicio
// <button onclick="limpiarDatosCalculadora()">Reiniciar</button>
