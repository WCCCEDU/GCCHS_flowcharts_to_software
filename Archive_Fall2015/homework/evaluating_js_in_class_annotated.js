var userChoice = prompt("Choose 1 for Rock\n 2 for Paper\n 3 for Scissors", 1);
// Know that its a value from 1 to 3
var choices = ["Rock", "Paper", "Scissors"];
// Simplified ^^
var userSelection = choices[userChoice - 1];
// [userChoice - 1]  userChoice = 1
// [1 - 1] // Innermost
// [0]
// choices[0] // Outside
// "Rock"
// var userSelection = "Rock"
var computerChoice = 1;
// Simplified ^^
var computerSelection 
	= choices[computerChoice - 1];
	// [computerChoice - 1]
	// [1 - 1]
	// [0]
	// choices[0]
	// "Rock"
// var computerChoice = "Rock"
if(userChoice == computerChoice){
// userChoice == computerChoice
// 1 == 1
// true
// if(true){
	alert("Tie");
} else {
	alert("Someone Must Have won");
}
/*
if condition
	output: tie
else 
	output: some....
end if
*/

var words = ["Meeseeks", "were", "not", "born", "into", "this", "world",
             "fumbling", "for", "meaning,", "Jerry!"];
// Simplified ^^
var wordIndex = 0;
// Simplified ^^
while(wordIndex < words.length){ // words.length is how many items are in the array
// wordIndex < words.length
// 0 < 11
// true
// while(true)
	console.log(words[wordIndex]);
	// [wordIndex]
	// [0]
	// words[0]
	// "Meeseeks"
	// console.log("Meeseeks")
	wordIndex = wordIndex + 1;
	// wordIndex + 1
	// 0 + 1
	// 1
	// wordIndex = 1
} //end while
