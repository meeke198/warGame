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
        battleCards = [card1, card2];
        console.log({card1});
        //update html
        p1.innerHTML = showCard(card1, 0)
        p2.innerHTML = showCard(card2, 0)
        checkWinner(card1, card2, battleCards)
        //update winners
        //update scores
      
    }
    
}


const showCard = (card, pos) => {
    const move = pos * 40;
    const cardColor = (card.suit == "diams" || card.suit == "hearts") ? "red" : "back"
    const bCard = '<div style="color:'+cardColor+'">' + card.cardValue + ' &' + card.suit + '; </div>';
    //  const bCard = `<div style="color:${cardColor}">' + ${card.cardValue} + ' &' + ${card.suit} + ';</div>`;
    //  const testCard= '<div style="color:'+cardColor+'">' + card.cardValue + ' &' + card.suit + ';</div>';
    // const coloredCard = `<div style=${cardColor}>${divarseInt(card.cardValue)} ${card.suit}</p>`
    return bCard
    // return testCard
}
const checkWinner = (card1, card2, battleCards) => {
  if (card1.cardValue === card2.cardValue) {
    console.log("warBattle");
    warBattle(player1, player2);
  } else if (card1.cardValue > card2.cardValue) {
    player1 = player1.concat(battleCards);
    score1.innerHTML = `SCORE: ${player1.length}`;
    score2.innerHTML = `SCORE: ${player2.length}`;
  } else {
    player2 = player2.concat(battleCards);
    score1.innerHTML = `SCORE: ${player1.length}`;
    score2.innerHTML = `SCORE: ${player2.length}`;
  }
};

const warBattle = (player1, player2) => {
    battleCards.concat(player1.shift(), player2.shift());
    newCard1 = player1.shift();
    newCard2 = player2.shift();
    checkWinner(newCard1, newCard2)
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