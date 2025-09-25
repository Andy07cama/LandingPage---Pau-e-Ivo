const track = document.querySelector(".logos-track");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let step = 200;
let index = 0;

const logos = document.querySelectorAll(".logos-track img");
logos.forEach(logo => {
  const clone = logo.cloneNode(true);
  track.appendChild(clone);
});

rightArrow.addEventListener("click", () => {
  index++;
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${index * step}px)`;

  if (index >= logos.length) {
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      index = 0;
    }, 500);
  }
});

leftArrow.addEventListener("click", () => {
  if (index <= 0) {
    track.style.transition = "none";
    track.style.transform = `translateX(-${logos.length * step}px)`;
    index = logos.length;
    setTimeout(() => {
      index--;
      track.style.transition = "transform 0.5s ease";
      track.style.transform = `translateX(-${index * step}px)`;
    }, 20);
  } else {
    index--;
    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(-${index * step}px)`;
  }
});
