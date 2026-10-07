// Maneja reproducción de 20s para demos. Un solo audio a la vez.
(() => {
  let currentAudio = null;
  let stopTimer = null;
  let currentButton = null;

  function stopCurrent() {
    if (stopTimer) {
      clearTimeout(stopTimer);
      stopTimer = null;
    }
    if (currentAudio) {
      try { currentAudio.pause(); } catch {}
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
    if (currentButton) {
      currentButton.textContent = "Play";
      currentButton.classList.remove("btn-danger");
      currentButton.classList.add("btn-outline-primary");
      currentButton = null;
    }
  }

  function playDemo(src, button) {
    stopCurrent();
    currentAudio = new Audio(src);
    currentButton = button;
    button.textContent = "Detener";
    button.classList.remove("btn-outline-primary");
    button.classList.add("btn-danger");
    currentAudio.play().catch(() => {
      // silenciar errores de reproducción automática
    });
    stopTimer = setTimeout(() => stopCurrent(), 20000); // 20s
    // si el audio termina antes, limpiar estado
    currentAudio.addEventListener("ended", () => stopCurrent());
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest && e.target.closest(".btn-play");
    if (!btn) return;
    const src = btn.getAttribute("data-src");
    if (!src) return;
    // si el mismo botón está reproduciendo, parar
    if (currentButton === btn) {
      stopCurrent();
      return;
    }
    playDemo(src, btn);
  });

})();