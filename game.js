
var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];


$(".btn").on("click", function(){

    var userChosenColour = this.getAttribute("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

})



function newSequence(){
    var randomNumber = Math.random() * 4;

    randomNumber = Math.floor(randomNumber);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour)

}

//Play sound function 

function playSound(name){

    var colourSoundPath = "sounds/" + name + ".mp3";

    var colourSound = new Audio(colourSoundPath);

    colourSound.play();
}