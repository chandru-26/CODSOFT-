document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Dark mode toggle
  const toggleButton = document.createElement("button");
  toggleButton.innerText = "Toggle Dark Mode";
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "10px";
  toggleButton.style.right = "10px";
  toggleButton.style.padding = "10px";
  toggleButton.style.cursor = "pointer";
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  // Add dark mode styles
  const style = document.createElement("style");
  style.innerHTML = `
        .dark-mode {
            background-color: #333;
            color: white;
        }
        .dark-mode section {
            background-color: #444;
            color: white;
        }
    `;
  document.head.appendChild(style);
});
