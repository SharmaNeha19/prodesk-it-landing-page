(() => {
  "use strict";

  const body = document.body;
  const menuButton = document.querySelector(".menu-toggle");
  const navPanel = document.querySelector(".nav-panel");
  const themeButton = document.querySelector(".theme-toggle");
  const year = document.querySelector("#current-year");
  const navLinks = document.querySelectorAll(".nav-link");

  if (year) year.textContent = String(new Date().getFullYear());

  // Restore the visitor's theme preference when available.
  const savedTheme = localStorage.getItem("prodesk-theme");
  if (savedTheme === "light") body.classList.add("light-theme");

  function updateThemeButton() {
    const isLight = body.classList.contains("light-theme");
    themeButton?.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
    themeButton?.setAttribute("aria-pressed", String(isLight));
  }
  updateThemeButton();

  themeButton?.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    const theme = body.classList.contains("light-theme") ? "light" : "dark";
    try { localStorage.setItem("prodesk-theme", theme); } catch (_) { /* Storage may be disabled. */ }
    updateThemeButton();
  });

  function closeMenu() {
    navPanel?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation menu");
  }

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navPanel?.classList.toggle("open", !isOpen);
  });

  navLinks.forEach((link) => link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    closeMenu();
  }));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth <= 700 && navPanel?.classList.contains("open") &&
        !navPanel.contains(event.target) && !menuButton?.contains(event.target)) closeMenu();
  });
})();
