
var buttonColours = ["red", "blue", "green", "yellow"];

var randomNumber = newSequence();

var randonChosenColour = buttonColours[randomNumber];

// console.log(randonChosenColour);

function newSequence(){
    var randomNumber = Math.random() * 4;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}