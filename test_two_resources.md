##### Memorize
```
var identity = function(num){
  return num;
}

// Calling or invoking
identity(10); // ******************* Pay attention
```

##### Variables
```
var thing = 1;
var choice = 2;
```
##### Conditions
```
if(1 == 1){
  console.log(true);
}

if (1 != i){
  console.log(false);
}
```
##### Functions
```
var square = function(num){
	return identity(num) * identity(num);
}

square(2);
```
##### Scope
Scopes are the part within {}
```
var nameIt = function(name){
	var message = " is awesome";
	return name + message;
}

nameIt("Scott");
nameIt("Chase");

// What is the output of the following statment. Does it have the same value as the value in the function above? (Hint: It doesn't)
console.log(message);
```
##### Loops
```
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
