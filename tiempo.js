// Fecha final absoluta (puedes cambiarla a la que quieras)
const fechaFinal = new Date("Jan 1, 2026 00:00:00").getTime();

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

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
  document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
  document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
}

const intervalo = setInterval(actualizarTimer, 1000);
actualizarTimer();
