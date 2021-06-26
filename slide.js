let slideIndex = 1;

showSlides(slideIndex);

function plusSlide(n){
  showSlides((slideIndex += n));
};

function currentSlide(n){
  showSlides((slideIndex = n));
};

function showSlides (n){
  let i;
  const slides = document.querySelectorAll("#Slide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[slideIndex - 1].style.display = "block";
};
