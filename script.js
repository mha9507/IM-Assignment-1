// Current slide index
let slideIndex = 1;

// Initialize the dots for the slideshow navigation
function initDots() {
  const slides = document.getElementsByClassName("mySlides");
  const dotsContainer = document.querySelector(".dots-container");

  if (!dotsContainer) {
    console.error("No .dots-container found in the document.");
    return;
  }

  // Clear any existing dots
  dotsContainer.innerHTML = "";

  // Create one dot per slide and add click event listener
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", () => currentSlide(i + 1));
    dotsContainer.appendChild(dot);
  }
}

// Change slide by n positions (e.g., next or previous)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Set current slide to n
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Show the slide at index n and update dots W3schools
function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (slides.length === 0) {
    console.warn("No slides found.");
    return;
  }

  // Wrap around slides if out of bounds
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Hide all slides
  for (let slide of slides) {
    slide.style.display = "none";
  }

  // Remove active class from all dots
  for (let dot of dots) {
    dot.classList.remove("active");
  }

  // Display current slide and highlight corresponding dot W3schools
  slides[slideIndex - 1].style.display = "block";
  if (dots.length >= slideIndex) {
    dots[slideIndex - 1].classList.add("active");
  }
}

// Show only the selected section by its id, hide others
function showSection(sectionId) {
  const sections = ['home', 'content', 'watch', 'contact'];
  for (let id of sections) {
    const elem = document.getElementById(id);
    if (elem) {
      elem.style.display = (id === sectionId) ? 'block' : 'none';
    }
  }
}

// Wait until DOM content is fully loaded before initializing
document.addEventListener("DOMContentLoaded", () => {
  initDots();
  showSlides(slideIndex);
});
