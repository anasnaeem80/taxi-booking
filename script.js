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
