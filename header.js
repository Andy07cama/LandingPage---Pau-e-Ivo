document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const pantalla1 = document.querySelector("#pantalla1");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          header.classList.add("on-hero"); // Pantalla 1 visible
        } else {
          header.classList.remove("on-hero"); // Otras pantallas
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(pantalla1);
});
