const carouselCard = document.querySelector('.carousel-card');
const card = document.querySelectorAll('.carousel-card');
const carouselButtons = document.querySelectorAll('.carousel-button');
const numberOfCard = document.querySelectorAll('.carousel-card img').length;

let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 260;
      }
    } else {
      if (imageIndex !== numberOfCard) {
        imageIndex++;
        translateX -= 260;
      }
    }

    carouselCard.style.transform = `translateX(${translateX}px)`;
    card.forEach((image, index) => {
      if (index === imageIndex - 1) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
});
