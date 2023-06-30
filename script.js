//**********************************************************************************
// written by Ben Jones
//
// Student boilerplate to make a OOP Rock Paper Scissors
// - OOP - Const data type - Passing data into methods
//
// Written 22/6/2023
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE
//**********************************************************************************



let playerScore = 0;
let computerScore = 0;


function gameLoop (playerClicked) {
	const randomNumber = generateRandomNumber()

	// convert random number to a choice so you can both equality check and use in the ouput string it should be stored in a const 
	if(randomNumber ==1){
		computerChoice = "Rock"
	}

	if (randomNumber == 2){
		computerChoice = "Paper"
	}
	
	
	if (randomNumber == 3){
		computerChoice = "Scissors"
	}
	
	
	equalityCheck (playerClicked, computerChoice);
	

}

function generateRandomNumber () {
	const result = Math.floor((Math.random() * 3) + 1);
	return result;
	
	
}


function equalityCheck (playerChoice, computerChoice){
	// perform an equality check, update scores and output a string using concatenation that gives user feedback 
	

	// possible situation for rock
	if (playerChoice === "Rock" && computerChoice === "Rock"){
		playerTip = ("It's a tie")
	}

	if (playerChoice === "Rock" && computerChoice === "Paper"){
		playerTip = ("Computer chose paper, Computer win!")
		computerScore = computerScore + 1
	}

	if (playerChoice === "Rock" && computerChoice === "Scissors"){
		playerTip = ("Computer chose scissors, you wins!")
		playerScore = playerScore + 1
	}

	// possible situation for paper
	if (playerChoice === "Paper" && computerChoice === "Paper"){
		playerTip = ("It's a tie")
	}

	if (playerChoice === "Paper" && computerChoice === "Scissors"){
		playerTip = ("Computer chose scissors, Computer win!")
		computerScore = computerScore + 1
	}

	if (playerChoice === "Paper" && computerChoice === "Rock"){
		playerTip = ("Computer chose rock, you wins!")
		playerScore = playerScore + 1
	}

	// possible situation for scissor
	if (playerChoice === "Scissors" && computerChoice === "Scissors"){
		playerTip = ("It's a tie")
	}

	if (playerChoice === "Scissors" && computerChoice === "Rock"){
		playerTip = ("Computer chose rock, Computer win!")
		computerScore = computerScore + 1
	}
	
	if (playerChoice === "Scissors" && computerChoice === "Paper"){
		playerTip = ("Computer chose scissors, you wins!")
		playerScore = playerScore + 1
	}

	
	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
}


