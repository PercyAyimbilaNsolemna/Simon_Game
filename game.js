
var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];


$(".btn").on("click", function(){

    var userChosenColour = this.getAttribute("id");

    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);

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

//Animate press 

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

//Checking key press to start the game 

$(document).on("keydown", function(){
    newSequence();
})