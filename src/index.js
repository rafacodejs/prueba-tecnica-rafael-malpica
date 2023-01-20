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

$('.owl-carousel').owlCarousel({
  margin: 15,
  nav: true,
  navText: [
    "<div class='nav-button owl-prev'>‹</div>",
    "<div class='nav-button owl-next'>›</div>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
