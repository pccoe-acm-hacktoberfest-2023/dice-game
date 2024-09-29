var randomNumber1 = Math.floor(Math.random()); 
var randomDiceImage = "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img"); 
image1.setAttribute("src", randomImageSource); 


var randomNumber2 = Math.floor(Math.random()); 
var randomImageSource2 = "dice" + randomNumber2 + ".png"; 

var image2 = document.querySelectorAll("img"); 
image2.setAttribute("src", randomImageSource2); 


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1") = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1") = "Player 2 Wins! 🚩"; 
} else {
    document.querySelector("h1") = "Draw!"; 
}
