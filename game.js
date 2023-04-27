
var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];


$(".btn").on("click", function(){

    var userChosenColour = this.getAttribute("id");

    userClickedPattern.push(userChosenColour);

    var userChosenColourPath = "sounds/" + userChosenColour + ".mp3";

    var userChosenColourSound = new Audio(userChosenColourPath);

    userChosenColourSound.play();
})



function newSequence(){
    var randomNumber = Math.random() * 4;

    randomNumber = Math.floor(randomNumber);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    var randomChosenColourSoundPath = "sounds/" + randomChosenColour + ".mp3";

    var randomChosenColourSound = new Audio(randomChosenColourSoundPath);

    randomChosenColourSound.play();
}