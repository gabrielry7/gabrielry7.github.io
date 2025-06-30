const video = document.getElementById("video");
const fondo = document.querySelector(".fondo-con-frase");
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const skipBtn = document.getElementById("skipBtn");
const mask = document.getElementById("mask");
const aboutBtn = document.querySelector(".about-btn");

let revealing = false;

function startReveal() {
  video.pause();
  video.currentTime = 0;
  video.style.display = "none";
  fondo.style.visibility = "visible";
  skipBtn.style.display = "none";
  mask.style.display = "block";
  revealing = true;
}

startBtn.addEventListener("click", () => {
  video.play().then(() => {
    startScreen.style.display = "none";
    skipBtn.style.display = "block";
  }).catch(err => console.error("Error al reproducir video:", err));
});

skipBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  startReveal();
});

video.addEventListener("ended", () => {
  startReveal();
});

document.addEventListener("mousemove", (e) => {
  if (!revealing) return;
  const x = e.clientX;
  const y = e.clientY;
  mask.style.setProperty("--x", `${x}px`);
  mask.style.setProperty("--y", `${y}px`);
});



function startReveal() {
  video.pause();
  video.currentTime = 0;
  video.style.display = "none";
  fondo.style.visibility = "visible";
  mask.style.display = "block";
  skipBtn.style.display = "none";
  aboutBtn.style.display = "block";   // show the link-button
  revealing = true;
}


