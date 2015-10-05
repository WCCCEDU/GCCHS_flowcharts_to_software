### Evaluate these functions

##### 1. Decrement function (Evaluate)
```javascript
  var number = 10;
  
  var decrement = function(number){
     return number - 1;
  }
  
  console.log(decrement(number));
```

##### 2. Multiplication function
```javascript
  var num1 = 10;
  var num2 = 2;
  
  var mult = function(multiplicand, multiplier){
    return multiplicand * multiplier;
  }
  
  console.log(mult(10, 2));
```

##### 3. Output array
```javascript
  var array = ["Good", "morning", "Vietnam"];
  
  var printArray = function(array){
    for(var i = 0; i < array.length; i++)
      document.write("<span>" + array[count] + " </span>");
    }
  }
  
  printArray(array);
```

##### 4. Write code to reverse the following array
```javascript
var array = ["It's", "necessary", "for", "the", "plan,", "Morty.", "Don't", "even", "trip,", "dawg."];
```
Output should look like __dawg trip, even__
