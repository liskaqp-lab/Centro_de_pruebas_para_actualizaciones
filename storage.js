
// Guardar todos los campos de entrada, incluyendo dinámicos
function guardarCampo(id, valor) {
  let datos = JSON.parse(localStorage.getItem("datosCalculadora") || "{}");
  datos[id] = valor;
  localStorage.setItem("datosCalculadora", JSON.stringify(datos));
}

function restaurarCampos() {
  let datos = JSON.parse(localStorage.getItem("datosCalculadora") || "{}");
  for (let id in datos) {
    let campo = document.getElementById(id);
    if (campo) campo.value = datos[id];
  }
}

function registrarEventos() {
  const campos = document.querySelectorAll("input, textarea, select");
  campos.forEach(campo => {
    if (campo.id) {
      campo.addEventListener("input", () => guardarCampo(campo.id, campo.value));
      campo.addEventListener("change", () => guardarCampo(campo.id, campo.value));
    }
  });
}

function guardarCamposDinamicos() {
  const tablas = document.querySelectorAll("table");
  let contenidoTablas = [];
  tablas.forEach(tabla => contenidoTablas.push(tabla.innerHTML));
  localStorage.setItem("tablasCalculadora", JSON.stringify(contenidoTablas));
}

function restaurarCamposDinamicos() {
  let contenidoTablas = JSON.parse(localStorage.getItem("tablasCalculadora") || "[]");
  const tablas = document.querySelectorAll("table");
  tablas.forEach((tabla, i) => {
    if (contenidoTablas[i]) tabla.innerHTML = contenidoTablas[i];
  });
}

function limpiarDatosCalculadora() {
  localStorage.removeItem("datosCalculadora");
  localStorage.removeItem("tablasCalculadora");
  location.reload();
}

window.addEventListener("DOMContentLoaded", () => {
  restaurarCampos();
  restaurarCamposDinamicos();
  registrarEventos();

  // Guardar dinámicos cada 5 segundos
  setInterval(guardarCamposDinamicos, 5000);
});
