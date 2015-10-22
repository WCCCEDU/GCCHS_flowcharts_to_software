##### Variables
```
// variables
var thing = 1;

// MEMORIZE
var identity = function(num){
	return num;
}

identity(10); // ******************* Pay attention

var square = function(num){
	return identity(num) * identity(num);
}

square(2);

var nameIt = function(name){
	var message = " is awesome";
	return name + message;
}

nameIt("Scott");
nameIt("Chase");

console.log(message);

var choice = 2;

// Condition
if(choice == 1){
	console.log(choice);
}else{
	console.log("no choice dummy");
}

// Loop
while(choice != 1){
	choice = choice - 1;
}
/*
choice  |  loop
2          true
1          false
*/

//i++ ~ i = i + 1

for(var i = 0; i < 10; i++){

}
```
##### Conditions
##### Functions
##### Scope
##### Loops
