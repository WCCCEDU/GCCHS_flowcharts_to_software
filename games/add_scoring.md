## Add Scoring (10pts)

You will need to setup a local version of the code at

https://github.com/WCCCEDU/GCCHS_projects/tree/master/games/andrew_nassur

if you have not already done so.

You should have these files locally in sublime text:
- game.html
- game.js
- walkingmangif.gif

To add scoring we will have to consider where we want to score to be displayed and how a players actions should be scored.

Some options for consideration for how the player will be scored.

- If they move towards the end they should gain points eg. +10
- If they move away from the end they should lose points eg. -10
- if they strike an obstacle they should lose points and eg. -50

We will start by setting up a location for the Score to be displayed

1. open game.html
2. Within the `<body>` element add `<div class="score">0000</div>` as the first child
3. open game.js
4. Add the following code with the other object definitions at the top of file:

    ```javascript
    var score = document.getElementsByClassName("score")[0]
    score.style.position = "absolute";
    score.style.fontSize = "5em";
    score.style.top = "0%";
    score.style.right = "5%";
    ```
    The code above will increase the size of the score container and move it to the top right hand side of the page.
5. Initialize the score to zero near the initializes for the obstacle paths at the top of the file:

    ```javascript
    var scoreValue = 0;
    ```
6. Add the update score function to the part of the file where you defined your `pushUp` `pushRight` `pushLeft` `pushDown` functions.

    ```javascript
    var updateScore = function(){
      score.innerHTML = scoreValue;
    }
    ```
    This function will change the value displayed in the top right corner of the game screen based on the value of `scoreValue` which is available globally to all methods. If you change the value of `scoreValue` and call `updateScore()` the value in the browser will be updated to that value. Some ways you can change `scoreValue` are:
    ```javascript
    scoreValue += 10 // increase the value of scoreValue by 10
    scoreValue = scoreValue + 10 // increase the value of scoreValue by 10
    // or
    scoreValue = 100 // set the value of scoreValue to 100
    // or
    scoreValue -= 10 // decrease the value of scoreValue by 10
    scoreValue = scoreValue - 10 // decrease the value of scoreValue by 10
    ```
7. You must now add calls to the `updateScore()` and manipulate the value of `scoreValue` based upon player actions. You may want to consider the guidelines for scoring at the beginning of these instructions.
8. This is to be completed in class and I will review it first thing during our next class for 10 points.
