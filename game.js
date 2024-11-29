let buttonColors = ["red", "blue", "green", "yellow"]
let mSec = 150
let gamePattern = [];
let userClkPattern = [];
let started = false;
let level = 0;

$("h1").click(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});
  
$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClkPattern.push(userChosenColor);
    //console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClkPattern.length-1);
});


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClkPattern[currentLevel]) {
        if (userClkPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, mSec*10);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press HERE");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, mSec*2);
        startOver();
    }
}

function nextSequence() {
    userClkPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let randomNum = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNum]
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(mSec).fadeOut(mSec).fadeIn(mSec);
    playSound(randomChosenColor);
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, mSec);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }


  
// for (let i = 0; i < 10; i++) {
//     nextSequence();
// }
// console.log(gamePattern)