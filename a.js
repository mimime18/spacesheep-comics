 // Track the toggle state
  let isActive = false;

// Get elements
  const box = document.getElementById('menu');
  const btn = document.getElementById('btn-menu');

  // Click event
  btn.addEventListener('click', function () {
    if (!isActive) {
      // First click action
      document.getElementById('menu').style.display = "block"
    } else {
      // Second click reverses the action
      document.getElementById('menu').style.display = "none"
    }
    // Flip the state
    isActive = !isActive;
  });

  // carrusel

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
const totalSlides = slides.length;

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // vuelve al inicio
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; // va al final
  }
  updateCarousel();
});

// Ajuste responsive
window.addEventListener("resize", updateCarousel);