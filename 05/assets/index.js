const panels = document.querySelectorAll(".panel");

const cleanClasses = (panel) =>
  panels.forEach((panel2) => {
    const isActive = panel2.classList.contains("open");

    if (isActive && panel !== panel2) {
      panel2.classList.remove("active");
      panel2.classList.remove("open");
    }
  });

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    cleanClasses(panel);

    panel.classList.toggle("open");
  });

  panel.addEventListener(
    "transitionend",
    (e) => e.propertyName === "flex-grow" && panel.classList.toggle("active")
  );
});
