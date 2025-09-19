// Botón inicial
const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const ticket = document.getElementById("ticket");
const music = document.getElementById("bg-music");

startBtn.addEventListener("click", () => {
  // Ocultar botón
  startBtn.classList.add("hide");

  // Arrancar música
  music.play();

  // Quitar blur del fondo
  intro.classList.add("clear");

  // Cuando termine la transición del blur → mostrar ticket
  intro.addEventListener(
    "transitionend",
    () => {
      ticket.classList.add("show");
    },
    { once: true }
  );
});

// Botón "Lo tengo claro"
document.getElementById("confirmBtn").addEventListener("click", () => {
  const checked = document.querySelectorAll('input[type="checkbox"]:checked');

  if (checked.length < 2) {
    alert("Selecciona 2 rata 🐀");
  } else if (checked.length > 2) {
    alert("No más de dos, no abuses 😒");
  } else {
    document.getElementById("message").classList.add("show");

    // 🎉 Confeti con canvas-confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 4,
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
