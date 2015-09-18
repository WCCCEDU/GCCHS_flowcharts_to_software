/*
Output: "1. Math Homework"
Output: "2. Chem Homework"
Output: "3. Write Essay"
Output: "4. Exit!"
*/
/* Block Comment */

// Single Line comment

// declaration
var printNotImplen;
// initialization
printNotImplen = 1;

// declaration and initialization with a string literal value
var printNotImplen = "10"

//functions
function(){};

// declaration and initialization with a function
var printNotImplen =  function(){
  // body of function part between {}
	console.log("Not Yet Implemented");
}

// output
console.log("1. Math Homework");
// output
alert("boom");
console.log("2. Chem Homework");
console.log("3. Write Essay");
console.log("4. Exit!");

// declaration and initialization
var option = prompt("CHOOSE!", 0);

// conditional statements
1==1 // true
1==0 // false
true // true
false // false
option==1 // ??

// While Loop
while(condition){}

while(option != 4){

	// condition
	if(condition){}

	if(option == 1){
		// call or invoke a function
		printNotImplen();
	}
	if(option == 2){
	  // body of the condition part between {}
		printNotImplen();
	}
	
	// more output
	console.log("1. Math Homework");
	console.log("2. Chem Homework");
	console.log("3. Write Essay");
	console.log("4. Exit!");

	// assignment
	option = 1;
	option = option;
	// assignment from the value of a function
	option = prompt("CHOOSE!", 0);
}
