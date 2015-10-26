

var number = 5;

// Write an if statement with body that has a "true"
// condition in terms of the variable "number"

if(number == number){
	console.log("true");
}


// Write a loop that has 10 iterations and begins
// at the variable "start"

var start = 10;

// These conditions cover the same range of solutions
(start >= 1);
(start > 0);

// Answer 1
// As a while loop
while(start >= 1){
	start = start - 1;
}

// Answer 2
// As a for loop
for(start; start > 0; start--){

}

// That pesky identity function
var identity = function(num){
	return num;
}

// Calling and storing the value of a call to the
// identity function
var number = identity(1);
// number -> 1


// Scopes
var start = 1;

while(start<20){
	start++;
	var name = "Sara";
	console.log("hey " + name);
}

// What is the value of "name" in the global scope
console.log(name); // what is the output
// Answer: name -> Sara
// If and While bodies do not create closed scopes like functions do



var hey = function(){
	var name2 = "Sarah";
	console.log("hey " + name2);
}

// What is the value of "name2" in the global scope
console.log(name2); // what is the output
// Answer: name2 -> undefined
// Functions declare closed scopes. Outside the body of the function variables
// are inaccessible

hey();

// What is the value of "name2" in the global scope
console.log(name2); // what is the output
// Answer: name2 -> undefined

