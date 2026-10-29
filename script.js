const menuButton = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    });
  });
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reducedMotion) {
  document.querySelectorAll("img[data-static-src]").forEach((image) => {
    image.src = image.dataset.staticSrc;
  });
}
const revealItems = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
}

if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener(
    "pointermove",
    (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    },
    { passive: true }
  );
}

const lensCopy = {
  identify: {
    message: "FIND THE SIGNAL.",
    description: "What needs attention? Start with the signal and collect the evidence."
  },
  assess: {
    message: "WEIGH THE RISK.",
    description: "What could happen, and how serious is it? Put the finding into context."
  },
  respond: {
    message: "MAKE A MOVE.",
    description: "What is the next useful action? Turn the finding into a clear response."
  }
};

const lensButtons = document.querySelectorAll("[data-lens]");
const lensMessage = document.querySelector("[data-lens-message]");
const lensDescription = document.querySelector("[data-lens-description]");
if (lensButtons.length && lensMessage && lensDescription) {
  lensButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lens = lensCopy[button.dataset.lens];
      if (!lens) return;
      lensButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      lensMessage.textContent = lens.message;
      lensDescription.textContent = lens.description;
    });
  });
}
