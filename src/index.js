let position = 1;

function slidePosition(n) {
  showSlides((position = n));
}

function nextSlide(n) {
  showSlides((position += n));
}

setInterval(function time() {
  showSlides((position += 1));
}, 5000);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slide');

  if (n > slides.length) {
    position = 1;
  }
  if (n < 1) {
    position = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[position - 1].style.display = 'block';
}
showSlides(position);
