const carouselCard2 = document.querySelector('.carousel-card2');
const card2 = document.querySelectorAll('.carousel-card2');
const carouselButtons2 = document.querySelectorAll('.carousel-button2');
const numberOfCard2 = document.querySelectorAll('.carousel-card2 img').length;

let imageIndex2 = 1;
let translateX2 = 0;

carouselButtons2.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous2') {
      if (imageIndex2 !== 1) {
        imageIndex2--;
        translateX2 += 260;
      }
    } else {
      if (imageIndex2 !== numberOfCard2) {
        imageIndex2++;
        translateX2 -= 260;
      }
    }

    carouselCard2.style.transform = `translateX(${translateX2}px)`;
    card2.forEach((image, index) => {
      if (index === imageIndex2 - 1) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
});
