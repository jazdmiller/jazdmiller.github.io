
const cards = document.querySelectorAll('.card')
let cardFlipped = false;
let card1, card2;

cards.forEach(card => card.addEventListener('click', flipCard))

function shuffleCards(){
    cards.forEach(card => {
        let randomCard = Math.floor(Math.random() * 12);
        card.style.order = randomCard;
    })
}
shuffleCards();

function flipCard(){
    this.classList.toggle('flip');
    if(cardFlipped === false){
        cardFlipped = true;
        card1 = this;
    } else {
        cardFlipped = false;
        card2 = this;
        if(card1.dataset.name === card2.dataset.name){
            card1.removeEventListener('click',flipCard);
            card2.removeEventListener('click',flipCard);
        } else {
            setTimeout(() => {
                card1.classList.remove('flip');
                card2.classList.remove('flip');
            }, 1500)
        }
    }
}


