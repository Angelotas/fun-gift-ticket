const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const ticket = document.getElementById("ticket");
const music = document.getElementById("bg-music");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hide");
  music.play();
  intro.classList.add("clear");
  intro.addEventListener(
    "transitionend",
    () => {
      ticket.classList.add("show");
    },
    { once: true }
  );
});

// Configurar confeti en el canvas propio
const confettiCanvas = document.getElementById("confetti-canvas");
const myConfetti = confetti.create(confettiCanvas, {
  resize: true,
  useWorker: true,
});

document.getElementById("confirmBtn").addEventListener("click", () => {
  const checked = document.querySelectorAll('input[type="checkbox"]:checked');

  if (checked.length < 2) {
    alert("Selecciona 2 rata 🐀");
  } else if (checked.length > 2) {
    alert("No más de dos, no abuses 😒");
  } else {
    // Rellenar lista de actividades elegidas en el popup
    const selectedList = document.getElementById("selectedActivities");
    selectedList.innerHTML = ""; // limpiar antes de rellenar
    checked.forEach((cb) => {
      const li = document.createElement("li");
      li.textContent = cb.parentNode.textContent.trim();
      selectedList.appendChild(li);
    });

    // Mostrar popup
    popup.classList.add("show");

    // 🎉 Confeti sobre el popup
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    (function frame() {
      myConfetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      myConfetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    })();
  }
});

// Cerrar popup
closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});
