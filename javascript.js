const suits = ["spades", "hearts", "clubs", "diams"]
const cardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
let deck = []
let player1 = [];
let player2 = [];
let firstRun = true;
let gameOver = false;
let battleCards = []
let p1 = document.querySelector("#player1 .hand");
let p2 = document.querySelector("#player2 .hand");
let score1 = document.querySelector("#player1 .score");
let score2 = document.querySelector("#player2 .score");
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
       let  card1 = player1.shift();
        let card2 = player2.shift();
        battleCards.push(card1, card2);
        console.log({card1});
        //update html
        p1.innerHTML = showCard(card1)
        p2.innerHTML = showCard(card2)
        //update winners
        //update scores
        if (card1.cardValue === card2.cardValue) {
          warBattle();
        } else if (card1.cardValue > card2.cardValue) {
          player1.push(battleCards);
        score1.innerHTML = player1.length;
        score2.innerHTML = player2.length;
        } else {
          player2.push(battleCards);
        score1.innerHTML = player1.length;
          score2.innerHTML = player2.length;
        }
    }
    
}

const showCard = (card) => {
    // const move = position * 40;
    const cardColor = (card.suit == "diams" || card.suit == "hearts") ? "red" : "back";
    const coloredCard = `<p style=${cardColor}>${parseInt(card.cardValue)} ${card.suit}</p>`
    return coloredCard
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
  battle()
  console.log("work ne");
};
start.addEventListener("click",
  startGame);