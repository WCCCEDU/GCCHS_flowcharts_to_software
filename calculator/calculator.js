// Calculator Program
// 4 Operations addition, subtraction,
// multiplication, and division
// You will need a function for each one
// You need a menu so user can select an
// operation

// input
var choice = prompt("Enter an operation", "none");

// outputs
alert("message");
console.log("message")
var myName = "Paul"
document.write("<div>"+myName+"</div>");
document.write("<div>message</div>");

if(choice == "fish"){
	var side1 = prompt("Enter side 1", 0);
	side1 = parseFloat(side1); // Convert to number
	document.write("<div>"+choice+"</div>");
}else if(choice == "fries"){
	var side1 = parseFloat(prompt("Enter side 1", 0));
	document.write("<div>"+choice+"</div>");
}

var order = function(main, side1){
	return main + " " + side1;
}

var userMain = "Fish";
var userSide1 = "Soda";
order(userMain, userSide1);

order("Fish", "Soda");
