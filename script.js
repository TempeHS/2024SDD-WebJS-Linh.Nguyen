var randomNumber = 0;
var playerGuess = 0;
var playerScore = 0;
var computerScore = 0;
var playerTip = 0;
var countDownFrom = 10;
var currentSecond = 11;
var timerId = 0;

function gameLoop () {
		generateRandomNumber ();
		randomNumber = 5; //dubgging only
		equalityCheck ();
		updateHtmlContent ();
	//	secondCountDown ();
}

function generateRandomNumber () {
	randomNumber = Math.floor((Math.random() * 10) + 1);
}

function equalityCheck () {
	playerGuess = document.getElementById("playerGuessInput").value;
	playerGuess = Number (playerGuess);
	if (playerGuess === randomNumber) {
		currentSecond = 11;
		playerScore = playerScore + 1;
		playerTip = "Correct, click to play again";
		document.getElementById("playButton").value = "Play now";
		// clearTimeout (timerId);
	} else {
		document.getElementById("playButton").value = "Guess again";
		if ( playerGuess < randomNumber ) {
		playerTip = "It's higher than " + playerGuess;
			}
		if ( playerGuess > randomNumber ) {
		playerTip = "It's lower than " + playerGuess;
			}
		if (isNaN (playerGuess)) {
		playerTip = "Enter a number between 1 & 10"; 	
		}
			}
			return
}

function updateHtmlContent () {
	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
}