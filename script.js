const countdownEl = document.getElementById("countdown");
const envelopeContainer = document.getElementById("envelope-container");
const flap = document.querySelector(".flap");
const paper = document.getElementById("paper");
const audio = document.getElementById("bg-music");

let startedMusic = false;

let count = 3;
const countdownInterval = setInterval(() => {
  count--;
  if (count === 0) {
    countdownEl.textContent = "1";
  } else if (count < 0) {
    clearInterval(countdownInterval);
    countdownEl.style.display = "none";
    envelopeContainer.classList.remove("hidden");
    setTimeout(() => {
      flap.style.transform = "rotateX(180deg)";
      paper.style.top = "0";
    }, 500);
  } else {
    countdownEl.textContent = count;
  }
}, 1000);

document.body.addEventListener("click", () => {
  if (!startedMusic) {
    audio.play();
    startedMusic = true;
  }

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window
