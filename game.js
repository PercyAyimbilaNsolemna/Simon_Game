
var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;


$(".btn").on("click", function(){

    var userChosenColour = this.getAttribute("id");

    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);

    playSound(userChosenColour);

    var indexOfLastAnswer = (userClickedPattern.length) - 1;

    console.log(gamePattern);

    console.log(userClickedPattern);

    checkAnswer(indexOfLastAnswer);

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

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success");

        if (gamePattern.length === userClickedPattern.length){
            while(currentLevel >= 0){
                userClickedPattern.pop(currentLevel);
                currentLevel--;
            }
            setTimeout(function()  {
                newSequence();
            }, 1000);
        }
    }
    else {
        console.log("Wrong");

        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").html("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function startOver(){
    level = 0;

    var gamePatternLength = (gamePattern.length) - 1;

    while (gamePatternLength >= 0){
        gamePattern.pop(gamePatternLength);
        gamePatternLength--;
    }

    var userClickedPatternLength = userClickedPattern.length - 1;

    while (userClickedPatternLength >= 0){
        userClickedPattern.pop(userClickedPatternLength);
        userClickedPatternLength--;
    }
}