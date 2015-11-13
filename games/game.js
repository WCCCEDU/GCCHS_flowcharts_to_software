var box = document.getElementsByClassName("box")[0]
box.style.position = "absolute";
box.style.width = "5em";
box.style.height = "5em";//em is based on the size of the letter m depending on what font you are using
box.style.background = "blue";
box.style.top = "40%";
box.style.left = "25%";
//50% is in the middle of the screen


var box2 = document.getElementsByClassName("box2")[0]//0 is array index
box2.style.position = "absolute";
box2.style.width = "5em";
box2.style.height = "5em";//em is based on the size of the letter m depending on what font you are using
box2.style.background = "red";
box2.style.top = "40%";
box2.style.left = "75%";

var box3 = document.getElementsByClassName("box3")[0]
box3.style.position = "absolute";
box3.style.width = "5em";
box3.style.height = "5em";
box3.style.background = "green";
box3.style.top = "50%";
box3.style.left = "0%";

var box4 = document.getElementsByClassName("box4")[0]
box4.style.position = "absolute";
box4.style.width = "5em";
box4.style.height = "5em";
box4.style.background = "purple";
box4.style.top = "40%";
box4.style.left = "50%";

var box5 = document.getElementsByClassName("box5")[0]
box5.style.position = "absolute";
box5.style.width = "80em";
box5.style.height = "2em";
box5.style.background = "yellow";
box5.style.top = "60%";
box5.style.left = "0%"


var obstaclePath = ['d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d',
                    'u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u'];

var secondObstaclePath = ['u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u',
						  'd','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d'];

var thirdObstaclePath = ['u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u',
						  'd','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d'];                  
var obstaclePosition = 0;
var secondObstaclePosition = 0;
var thirdObstaclePosition = 0;

var pushLeft = function(box, intensity){
  var currentLeft = parseFloat(box.style.left);//50
  if(currentLeft > 0){
  	box.style.left = currentLeft - intensity + "%";
	}
}

//y has to increase to go down to increase distance from top
var pushDown = function(box, intensity){
  var currentTop = parseFloat(box.style.top);
  if(currentTop < 85){
  	box.style.top = currentTop + intensity + "%"
  }
}

//left is x-values and top is y-values
var pushRight = function(box, intensity){
  var currentLeft = parseFloat(box.style.left);
  if(currentLeft < 94){
  	box.style.left = currentLeft + intensity + "%";
	}
}

var pushUp = function(box, intensity){
  var currentTop = parseFloat(box.style.top);
  if(currentTop > 0){
  	box.style.top = currentTop - intensity + "%"
  }
}
//ctrl d

var expandOut = function(box, intensity){
	var currentWidth = parseFloat(box.style.width);
	if(currentWidth > 4){
		box.style.width = currentWidth + intensity + "px"
	}
}

var expandHeight = function(box, intensity){
	var currentHeight = parseFloat(box.style.height);
	if(currentHeight > 4){
		box.style.height = currentHeight + intensity + "px"
	}
}

/*var startOver = function(object, intensity){
	var currentLocation = parseFloat(box.style.position);
	var startPosition = parseFloat(box.style.left);
	if(currentLocation > startPosition){
		box.style.position = currentLocation - intensity + "%"
	}
}*/


// Event Handler
// e => Event
var whatKey = function(e){
	console.log(e.keyCode);
}


var colliding = function(object1, object2){
  var rect1 = object1.getBoundingClientRect()
  var rect2 = object2.getBoundingClientRect()
  var collides = !(rect1.right < rect2.left ||
           rect1.left > rect2.right ||
           rect1.bottom < rect2.top ||
           rect1.top > rect2.bottom)
  console.log(collides);
  return collides;
}

// Same as var checkKey = function(e)
function checkKey(e){
	if (e.keyCode == '38'){
		pushUp(box3, 0);
		if(colliding(box3, box1)){
		}
	}
	else if (e.keyCode == '40'){
		pushDown(box3, 0);
		if(colliding(box3, box5)){
			pushDown(box3, 0);
		}
	}
	else if (e.keyCode == '37'){
		pushLeft(box3, 2);
		if(colliding(box3, box)){
			startOver(box3);
		}
	}
	else if (e.keyCode == '39'){
		pushRight(box3, 2);
		if(colliding(box3, box)){
			startOver(box3);
		}
	}
	else if(e.keyCode == '87'){
		pushUp(box2, 2);
		if(colliding(box2, box)){
			pushLeft(box2, 20);
		}
	}
	else if(e.keyCode == '83'){
		pushDown(box2, 2);
		if(colliding(box2, box)){
			pushLeft(box2, 20);
		}
	}
	else if(e.keyCode == '65'){
		pushLeft(box2, 2);
		if(colliding(box2, box)){
			pushLeft(box2, 20);
		}
	}
	else if(e.keyCode == '68'){
		pushRight(box2, 2);
		if(colliding(box2, box)){
			pushLeft(box2, 20);
		}
	}
}

var animateObstacle = function(){
  return setTimeout(function () {
    var direction = obstaclePath[obstaclePosition];
    if(direction == 'l'){
      pushLeft(box, 1);
    }else if(direction == 'r'){
      pushRight(box, 1);
    }else if(direction == 'u'){
      pushUp(box, 3.5);
      if(colliding(box3, box)){
      	pushLeft(box3, 20);
      }
    }else if(direction == 'd'){
      pushDown(box, 3.5);
      if(colliding(box3, box)){
      	pushLeft(box3, 20);
      }
    }
    obstaclePosition++;
    if(obstaclePosition > obstaclePath.length){
      obstaclePosition = 0;
    }
    animateObstacle();
  }, 10);
}
var animateObstacle2 = function(){
  return setTimeout(function () {
    var direction = secondObstaclePath[secondObstaclePosition];
    if(direction == 'l'){
      pushLeft(box2, 1);
    }else if(direction == 'r'){
      pushRight(box2, 1);
    }else if(direction == 'u'){
      pushUp(box2, 3.5);
      if(colliding(box3, box2)){
      	pushLeft(box3, 70);
      }
    }else if(direction == 'd'){
      pushDown(box2, 3.5);
      if(colliding(box3, box2)){
      	pushLeft(box3, 70);
      }
    }
    secondObstaclePosition++;
    if(secondObstaclePosition > secondObstaclePath.length){
      secondObstaclePosition = 0;
    }
    animateObstacle2();
  }, 10);
}

var animateObstacle3 = function(){
  return setTimeout(function () {
    var direction = thirdObstaclePath[thirdObstaclePosition];
    if(direction == 'l'){
      pushLeft(box4, 1);
    }else if(direction == 'r'){
      pushRight(box4, 1);
    }else if(direction == 'u'){
      pushUp(box4, 2.5);
      if(colliding(box3, box4)){
      	pushLeft(box3, 45);
      }
    }else if(direction == 'd'){
      pushDown(box4, 2.5);
      if(colliding(box3, box4)){
      	pushLeft(box3, 45);
      }
    }
    thirdObstaclePosition++;
    if(thirdObstaclePosition > thirdObstaclePath.length){
      thirdObstaclePosition = 0;
    }
    animateObstacle3();
  }, 10);
}


// Bind Event Handler
// Binding to onekeydown
document.body.onkeydown = checkKey;
animateObstacle();
animateObstacle2();
animateObstacle3();
