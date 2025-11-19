const accordions = document.querySelectorAll(".accordion");

accordions.forEach((btn, index) => {
  const content = btn.nextElementSibling;

  // CLICK TOGGLE
  btn.addEventListener("click", () => toggleAccordion(btn));

  // KEYBOARD SUPPORT
  btn.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        toggleAccordion(btn);
        break;

      case "ArrowDown":
        e.preventDefault();
        accordions[index + 1]?.focus();
        break;

      case "ArrowUp":
        e.preventDefault();
        accordions[index - 1]?.focus();
        break;

      case "Home":
        e.preventDefault();
        accordions[0].focus();
        break;

      case "End":
        e.preventDefault();
        accordions[accordions.length - 1].focus();
        break;
    }
  });
});


function toggleAccordion(button) {
  const panel = button.nextElementSibling;
  const isOpen = button.getAttribute("aria-expanded") === "true";

  // Toggle ARIA
  button.setAttribute("aria-expanded", !isOpen);

  // Toggle hidden
  panel.hidden = isOpen ? true : false;

  // Toggle animation height
  if (isOpen) {
    panel.style.maxHeight = null;
    button.classList.remove("is-open");
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    button.classList.add("is-open");
  }
}
