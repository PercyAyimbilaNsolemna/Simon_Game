
var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;


$(".btn").on("click", function(){

    var userChosenColour = this.getAttribute("id");

    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);

    playSound(userChosenColour);

    console.log(gamePattern);

    console.log(userClickedPattern);

    checkAnswer();

})



function newSequence(){

    level++;

    $("h1").html("Level " + level);

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

    $("h1").html("Level 0");

    newSequence();
})

//Checks the user's chosen answer compared to the game pattern

function checkAnswer(){
    for(var i = 0; i < gamePattern.length; i++){
        for(var x = 0; x < userClickedPattern.length; x++){
            if(gamePattern[i] === userClickedPattern[i]){
                console.log("Correct pattern");
            }
            else {
                console.log("Wrong Pattern");
            }
        }
    }
}