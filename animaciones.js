// Detecta cuando una sección entra en el viewport
function animarPantalla2() {
    const pantalla2 = document.querySelector(".pantalla2");
    const rect = pantalla2.getBoundingClientRect();
    const alturaVentana = window.innerHeight;
  
    if (rect.top < alturaVentana - 100) {
      pantalla2.classList.add("visible");
      window.removeEventListener("scroll", animarPantalla2); // solo se activa una vez
    }
  }
  
  window.addEventListener("scroll", animarPantalla2);
  