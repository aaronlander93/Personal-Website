h1 = document.querySelector("h1");
h3 = document.querySelector("h3");
number = document.querySelector("input");
player1 = document.querySelector("#player1");
player2 = document.querySelector("#player2");
score1 = document.querySelector("#score1");
score2 = document.querySelector("#score2");
reset = document.querySelector("#reset");

var player1Score = 0;
var player2Score = 0;
var maxScore = 5

addListeners();

function addListeners(){
	number.addEventListener("click", changeMaxScore);
	player1.addEventListener("click", updatePlayerOne);
	player2.addEventListener("click", updatePlayerTwo);
	reset.addEventListener("click", resetGame);
}

function updatePlayerOne(){
	if(player1Score < maxScore){
		player1Score += 1;
		changePlayerScore()

		if(player1Score == maxScore){
			turnScoreGreen(score1);
			stopListeners();
		}
	}
}

function updatePlayerTwo(){
	if(player2Score < maxScore){
		player2Score += 1;
		changePlayerScore();

		if(player2Score == maxScore){
			turnScoreGreen(score2);
			stopListeners();
		}
	}
}

function stopListeners(){
	number.removeEventListener("click", changeMaxScore);
	player1.removeEventListener("click", updatePlayerOne);
	player2.removeEventListener("click", updatePlayerTwo);
}

function changeMaxScore(){
	maxScore = number.value;
	h3.innerHTML = "Playing to: " + maxScore;
	player1Score = 0;
	player2Score = 0;
	changePlayerScore();
}

function changePlayerScore(){
	score1.innerHTML = player1Score;
	score2.innerHTML = player2Score;
}

function turnScoreGreen(scoreObj){
	scoreObj.style.color = 'green';
}

function resetGame(){
	player1Score = 0;
	player2Score = 0;
	score1.style.color = 'black';
	score2.style.color = 'black';
	changePlayerScore();
	changeMaxScore();
	addListeners();
}