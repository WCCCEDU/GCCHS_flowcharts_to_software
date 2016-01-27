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
1 > 0 // true
0 != 1 // true
option==1 // ??

// While Loop
while(condition){}

//While Loop that never executes
while(false){
  option = 2;
}

// declaration initialization
var x = 1;

// While loop that loops 9 times ^^ the var x = 1 is important here
while(x < 10){
  console.log("HEY YOU!");
  // assignment
  x = x + 1; // Increment so that this loop will eventually exit goes 1>2>3>4>5...10
}

while(option != 4){
	// body of the loop

	// condition
	if(condition){}

	if(option == 1){
		// body of the if
		
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
