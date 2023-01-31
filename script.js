const button = document.querySelector('button');
const card = document.querySelector('.card-background');
const closeButton = document.querySelector('.card-close');

button.addEventListener('click', () => {
    card.style.display = 'block'
})

closeButton.addEventListener('click', () => {
    card.style.display = 'none'
})

