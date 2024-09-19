// Debounce function to improve performance
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Scroll event listener to add animation
document.addEventListener(
  "scroll",
  debounce(function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    const viewportHeight = window.innerHeight;

    fadeElements.forEach(function (element) {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < viewportHeight - 100) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  })
);

document.addEventListener("scroll", function () {
  const welcomeSection = document.querySelector(".welcome");
  const scrollPosition = window.scrollY; // Get how far the user has scrolled
  const windowHeight = window.innerHeight; // Get the viewport height

  // Calculate the opacity, reducing as the user scrolls down
  const opacity = 1 - scrollPosition / (windowHeight / 1.5); // Adjust factor for faster/slower fade

  // Set the opacity, ensuring it doesn't go below 0
  if (opacity >= 0) {
    welcomeSection.style.opacity = opacity;
  } else {
    welcomeSection.style.opacity = 0;
  }
});
