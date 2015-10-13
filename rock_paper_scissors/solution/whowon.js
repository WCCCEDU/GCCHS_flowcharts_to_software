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

var rockWins = ["Rock", "Scissors"];
var scissorsWins = ["Scissors", "Paper"];
var paperWins = ["Paper", "Rock"];
var choicesSelected = [computerChoice, playerChoice];
						//["Scissors", "Rock"]

var winConditions = ["rs", "sp", "pr"];

var playerFirst = playerChoice[0].toLowerCase() + computerChoice[0].toLowerCase();
document.write("<div>" + playerFirst + "</div>");
var computerFirst = computerChoice[0].toLowerCase() + playerChoice[0].toLowerCase();
document.write("<div>" + computerFirst + "</div>");

playerFirst = "pp";
computerFirst = "rs";

var playerWinIndex = winConditions.indexOf(playerFirst);
var computerWinIndex = winConditions.indexOf(computerFirst);
debugger;
if(playerWinIndex >= 0){
	document.write("<div>Player Won</div>");
}else if(computerWinIndex >= 0){
	document.write("<div>Computer Won</div>");
}else{
	document.write("<div>They Tied</div>");
}


/*
Rock Scissors
Scissors Paper
Paper Rock
*/
