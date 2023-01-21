const menuBtn = document.querySelector('.menu-icon');
const cancelBtn = document.querySelector('.cancel-icon');
const items = document.querySelector('.menu-mobile');

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
  loop: true,
  margin: 10,
  nav: true,
  items: 4,
  responsive: {
    0: {
      items: 2,
    },

    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

menuBtn.addEventListener('click', () => {
  items.classList.add('active');
  menuBtn.classList.add('hide');
  cancelBtn.classList.add('show');
  cancelBtn.classList.add('show');
});
cancelBtn.addEventListener('click', () => {
  items.classList.remove('active');
  menuBtn.classList.remove('hide');
  cancelBtn.classList.remove('show');
});

let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach((listElement) => {
  listElement.addEventListener('click', () => {
    listElement.classList.toggle('arrow');

    let height = 0;
    let menu = listElement.nextElementSibling;
    if (menu.clientHeight == '0') {
      height = menu.scrollHeight;
    }

    menu.style.height = `${height}px`;
  });
});
