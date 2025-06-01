let slideIndex = 1;

function initDots() {
  const slides = document.getElementsByClassName("mySlides");
  const dotsContainer = document.querySelector(".dots-container");
  dotsContainer.innerHTML = ""; // Clear existing dots

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", () => currentSlide(i + 1));
    dotsContainer.appendChild(dot);
  }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let slide of slides) {
    slide.style.display = "none";
  }

  for (let dot of dots) {
    dot.classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Section switching (if you use it)
function showSection(sectionId) {
  const sections = ['home', 'content', 'watch', 'contact'];
  for (let id of sections) {
    document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
  }
}

// Initialize dots and show the first slide on page load
initDots();
showSlides(slideIndex);
