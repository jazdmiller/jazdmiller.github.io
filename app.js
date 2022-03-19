
const cards = [...document.querySelectorAll('.card')]
const resetBtn = document.querySelector('.reset-btn');
const game = document.querySelector('.game-board');
const msg = document.getElementsByClassName('matches');
let cardFlipped = false;
let card1, card2;
let matches = 1;
let clickCards = false;
const score = document.querySelector('.score')


cards.forEach(card => card.addEventListener('click', flipCard))
resetBtn.addEventListener('click', resetGame);


 
function flipCard(){
    if(clickCards){
        return;
    }
 this.classList.add('flip');
    if(cardFlipped === false){
        cardFlipped = true;
        card1 = this;
    } else {
        cardFlipped = false;
        card2 = this;
        checkMatch();
    }
}
 function checkMatch(){
    if(card1.dataset.name === card2.dataset.name){
        card1.removeEventListener('click',flipCard);
        card2.removeEventListener('click',flipCard);
        score.innerText = matches++;
    } else {
        disableCards();
    }
    if(matches === 7){
        document.querySelector('.matches').innerText = 'Congrats! You won.';
        // matches = 0;

    } else {
        msg.innerHTML = `MATCHÈS: ${matches}`;
    }
 }     
    

function disableCards() {
    clickCards = true;
    setTimeout(() => {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
        card1 = card2 = null;
        clickCards = false;
    }, 900)
}


function resetGame() {  
 
   cards.forEach(card => {
       cardFlipped = false;
       card.classList.remove('flip');
       card.addEventListener('click', flipCard)
   })
   shuffleCards();
   matches = 0;
   document.querySelector('.matches').innerHTML = `MATCHÈS: ${matches}`;

   
}


function shuffleCards(){
    cards.forEach(card => {
        let randomCard = Math.floor(Math.random() * 12);
        card.style.order = randomCard;
    })
}

shuffleCards();
