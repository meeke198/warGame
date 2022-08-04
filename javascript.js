const suits = ["spades", "hearts", "clubs", "diams"]
const cardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
let deck = []
let player1 = [];
let player2 = [];
let firstRun = true;
let gameOver = false;
let battleCards = []
const start = document.querySelector("#startBtn")


const createCard = () => {
   deck = []
    for(index in suits){
        let suit = suits[index]
        // console.log(suit);
        for(i in cardFaces){
            let card = {
              suit,
              face: cardFaces[i],
              cardValue: parseInt(i) + 2,
            };
            deck.push(card);
        }
    }
    console.log(deck);
}


const shuffleCards = (deck) => {
  console.log(deck);
  console.log("in shuffle");
  let j = deck.length - 1;
  let i;
  while (j) {
    i = (Math.floor(Math.random() * j--));
    [deck[j], deck[i]] = [deck[i], deck[j]];
  }

  return deck;
}


const deal = (deck) => {
    for(let i = 0; i < deck.length; i++){
        if(i % 2){
            player1.push(deck[i])
        } else{
            player2.push(deck[i]);
        }
    }
    // console.log({player1}, {player2});
}

const battle = () => {
    if(!gameOver){
        card1 = player1.shift();
        card2 = player2.shift();
        battleCards.push(card1, card2);
        //update html
        //update winners
        //update scores
        if (card1.cardValue === card2.cardValue) {
          warBattle();
        } else if (card1.cardValue > card2.cardValue) {
          player1.push(battleCards);
        } else {
          player2.push(battleCards);
        }
    }
    
}

const isGameOver = () => {
    if(player1.length === 0 || player2.length === 0){
        gameOver = true;
    }
}


const startGame = () => {
  if (firstRun) {
    firstRun = false;
    createCard();
    shuffleCards(deck);
    deal(deck)
  }
  console.log("work ne");
};
start.addEventListener("click",
  startGame);