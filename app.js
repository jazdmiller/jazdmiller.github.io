// cards variables/selectors
const cards = document.querySelectorAll('.cards')

cards.forEach(card => card.addEventListener('click', flipCard))

function flipCard(e){
    console.log(e.target);

}

function shuffleCards(){

}
// 