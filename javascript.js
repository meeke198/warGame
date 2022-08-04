const suits = ["spades", "hearts", "clubs", "diams"]
const cardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
let deck = []
const player = [["player1"], ["player2"]];
const firstRun = true;
const start = document.querySelector("#startBtn")
start.addEventListener('click', dealCard)

function deal () {
    if(firstRun){
        firstRun = false;
        dealCard()
    }
    console.log("work ne");
}

function dealCard () {
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
    // console.log(deck);
}