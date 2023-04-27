
var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomNumber = newSequence();

var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(50).fadeIn(50);

var randomChosenColourSoundPath = "sounds/" + randomChosenColour + ".mp3";

var randomChosenColourSound = new Audio(randomChosenColourSoundPath);

randomChosenColourSound.play();

$(".btn").on("click", function(){

    var userChosenColour = this.getAttribute("id");

    userClickedPattern.push(userChosenColour);

    console.log(userClickedPattern);
})



function newSequence(){
    var randomNumber = Math.random() * 4;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}