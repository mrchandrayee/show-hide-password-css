(() => {
  const password = document.getElementById("password");
  const toggle = document.getElementById("pass-icon");
  const hint = document.getElementById("hint");

  function setVisibility(visible) {
    password.type = visible ? "text" : "password";
    toggle.classList.toggle("is-visible", visible);
    toggle.setAttribute("aria-pressed", String(visible));
    toggle.setAttribute("aria-label", visible ? "Hide password" : "Show password");
    hint.textContent = visible ? "Your password is visible." : "Your password is hidden.";
  }

  toggle.addEventListener("click", () => {
    setVisibility(password.type === "password");
    password.focus({ preventScroll: true });
  });

  // Keep the eye icon state and accessible label in sync if the input is reset.
  document.getElementById("password-form").addEventListener("reset", () => {
    window.setTimeout(() => setVisibility(false), 0);
  });
})();
