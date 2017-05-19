console.log("Up and running!");

var cards = ["king", "king", "queen", "queen"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User Flipped king");
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User Flipped queen");
var cardThree = cards[2];
var cardFour = cards[3]
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You Found A Match!");
		} else {
			alert("Sorry! Try Again!");
		}
	} 

