const buttonColors = ["red", "blue", "green", "yellow"]
const animateDelay = 200
let gamePattern = new Array();
let userClickedPattern = new Array();

$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    //console.log(userClickedPattern);
    playSound(userChosenColor);
});

function nextSequence() {
    let randomNum = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNum]
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(animateDelay).fadeOut(animateDelay).fadeIn(animateDelay);
    playSound(randomChosenColor);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, animateDelay);
}
  
// for (let i = 0; i < 10; i++) {
//     nextSequence();
// }
// console.log(gamePattern)