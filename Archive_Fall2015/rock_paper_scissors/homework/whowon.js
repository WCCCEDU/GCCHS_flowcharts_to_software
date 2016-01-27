// will return a number 1 to 3
var chooseForMe = function(){
	var choice = Math.floor(Math.random() * 3) + 1;
	return choice;
}

//Computer will select at random Rock, Paper, or Scissors
var choices = ["Rock", "Paper", "Scissors"];
var computerSelection = chooseForMe()  - 1; // number 1 to 3
var computerChoice = choices[computerSelection];
document.write("<div>Computer Chose "+ computerChoice + "</div>");

//Player will select a choice
var playerSelection = prompt("1. Rock \n2. Paper \n3. Scissors", 1);
var playerSelNum = parseInt(playerSelection);
var playerChoice = choices[playerSelNum - 1];
document.write("<div>Player Chose "+ playerChoice + "</div>");

// Write the rest of the win conditions
if(playerChoice == "Rock"){
	if(computerChoice == "Paper"){
		document.write("<div>Computer Won</div>")
	}
}else if(playerChoice == "Paper"){
	// More Conditions
}
