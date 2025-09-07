document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar todos los botones de acordeón
  const buttons = document.querySelectorAll(".accordion-header");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const container = btn.closest(".service-card-container");
      const content = container.querySelector(".accordion-content");
      const btnText = btn.querySelector("span");

      // Cierra otros acordeones
      document
        .querySelectorAll(".accordion-content.open")
        .forEach((openContent) => {
          if (openContent !== content) {
            openContent.classList.remove("open");
            const otherBtn = openContent
              .closest(".service-card-container")
              .querySelector(".accordion-header span");
            if (otherBtn) otherBtn.textContent = "Ampliar";
          }
        });

      // Toggle actual
      const isOpen = content.classList.toggle("open");
      btnText.textContent = isOpen ? "Cerrar" : "Ampliar";
    });
  });
});
