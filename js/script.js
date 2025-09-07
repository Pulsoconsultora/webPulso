// ========== CONTADOR REGRESIVO ==========
(function () {
  let seconds = 5;
  const countdownElement = document.getElementById("countdown");

  if (countdownElement) {
    const timer = setInterval(() => {
      seconds--;
      countdownElement.textContent = seconds;

      if (seconds <= 0) {
        clearInterval(timer);
        window.location.href = "/";
      }
    }, 1000);
  }
})();

// ========== BOTONES "LEER MÁS / MENOS" ==========
(function () {
  const toggles = [
    { btn: "boton-leer", content: "contenido-oculto" },
    { btn: "boton-leer1", content: "contenido-oculto1" },
    { btn: "boton-leer2", content: "contenido-oculto2" },
    { btn: "boton-leer3", content: "contenido-oculto3" },
    { btn: "boton-leer4", content: "contenido-oculto4" },
  ];

  toggles.forEach(({ btn, content }) => {
    const button = document.getElementById(btn);
    const target = document.getElementById(content);

    if (button && target) {
      button.addEventListener("click", () => {
        const hidden = target.classList.contains("hidden");
        target.classList.toggle("hidden");
        button.textContent = hidden ? "Leer menos" : "Leer más";
      });
    }
  });
})();

// ========== ACORDEONES "AMPLIAR / CONTRAER" ==========
(function () {
  for (let i = 1; i <= 10; i++) {
    const btn = document.getElementById(`expandBtn${i === 1 ? "" : i}`);
    const content = document.getElementById(
      `expandableContent${i === 1 ? "" : i}`
    );
    const btnText = document.getElementById(`btnText${i === 1 ? "" : i}`);

    if (btn && content && btnText) {
      btn.addEventListener("click", () => {
        const expanded = content.classList.toggle("expanded");
        btnText.textContent = expanded ? "Contraer" : "Ampliar";
      });
    }
  }
})();
