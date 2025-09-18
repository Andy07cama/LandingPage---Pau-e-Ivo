// Tiempo inicial: 122 días 9 horas 12 minutos 18 segundos
const diasInicial = 122;
const horasInicial = 9;
const minutosInicial = 12;
const segundosInicial = 18;

// Convertir a segundos totales
const tiempoTotal =
  (diasInicial * 24 * 60 * 60) +
  (horasInicial * 60 * 60) +
  (minutosInicial * 60) +
  segundosInicial;

// Guardar la fecha de finalización
const fechaFinal = new Date().getTime() + (tiempoTotal * 1000);

function actualizarTimer() {
  const ahora = new Date().getTime();
  const distancia = fechaFinal - ahora;

  if (distancia <= 0) {
    document.getElementById("dias").textContent = "0";
    document.getElementById("horas").textContent = "00";
    document.getElementById("minutos").textContent = "00";
    document.getElementById("segundos").textContent = "00";
    clearInterval(intervalo);
    return;
  }

  // Calcular valores
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  // Mostrar en pantalla
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
  document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
  document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
}

// Actualizar cada segundo
const intervalo = setInterval(actualizarTimer, 1000);
actualizarTimer(); // primera ejecución inmediata
