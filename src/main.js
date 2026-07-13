import './style.css';

let cards = document.querySelectorAll('.card');
let show_cards = document.querySelectorAll('.work-show-card');
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        show_cards.forEach((show_card, j) => {
            if(index === j) {
                show_card.classList.add('block');
                show_card.classList.remove('hidden');
            } else {
                show_card.classList.add('hidden');
                show_card.classList.remove('block');
            }
        });
    })
});