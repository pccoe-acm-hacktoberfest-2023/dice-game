
var randomNumber1 = Math.floor(Math.random());6//find random number till 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img");

image1.setAttribute("src", randomImageSource); //secect 1st elemet of array of img tag 


var randomNumber2 = Math.floor(Math.random()); //find random number till 6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img").setAttribute("src", randomImageSource2);//secect 2nd elemet of array of img tag 


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
