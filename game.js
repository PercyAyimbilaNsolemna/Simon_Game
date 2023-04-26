
var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomNumber = newSequence();

var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(50).fadeIn(50);

document.querySelector("#" + randomChosenColour).addEventListener("click", function(){
    var randomChosenColourSoundPath = "sounds/" + randomChosenColour + ".mp3";

    var randomChosenColourSound = new Audio(randomChosenColourSoundPath);

    randomChosenColourSound.play();
})


function newSequence(){
    var randomNumber = Math.random() * 4;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}