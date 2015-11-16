var score = document.getElementsByClassName("score")[0]
score.style.position = "absolute";
score.style.fontSize = "5em";
score.style.top = "0%";
score.style.right = "5%";

var scoreValue = 0;

var player = document.getElementsByClassName("player")[0]
player.style.position = "absolute";
player.style.height = "5em";
player.style.background = "green";
player.style.top = "50%";
player.style.left = "0%";

var obstacle1 = document.getElementsByClassName("obstacle1")[0]
obstacle1.style.position = "absolute";
obstacle1.style.width = "5em";
obstacle1.style.height = "5em";
obstacle1.style.background = "blue";
obstacle1.style.top = "40%";
obstacle1.style.left = "25%";

var obstacle2 = document.getElementsByClassName("obstacle2")[0]//0 is array index
obstacle2.style.position = "absolute";
obstacle2.style.width = "5em";
obstacle2.style.height = "5em";
obstacle2.style.background = "red";
obstacle2.style.top = "40%";
obstacle2.style.left = "75%";

var obstacle3 = document.getElementsByClassName("obstacle3")[0]
obstacle3.style.position = "absolute";
obstacle3.style.width = "5em";
obstacle3.style.height = "5em";
obstacle3.style.background = "purple";
obstacle3.style.top = "40%";
obstacle3.style.left = "50%";

var floor = document.getElementsByClassName("floor")[0]
floor.style.position = "absolute";
floor.style.width = "100%";
floor.style.height = "2em";
floor.style.background = "yellow";
floor.style.top = "60%";
floor.style.left = "0%"

var obstacle1Path = ['d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d',
                     'u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u'];

var obstacle2Path = ['u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u',
						         'd','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d'];

var obstacle3Path = ['u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u',
						         'd','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d'];

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
  return collides;
}

// Same as var checkKey = function(e)
var checkKey = function(e){
	if (e.keyCode == '37'){
		pushLeft(player, 2);
    scoreValue -= 10;
	}
	else if (e.keyCode == '39'){
		pushRight(player, 2);
    scoreValue += 10;
	}
  updateScore();
}

var updateScore = function(){
  score.innerHTML = scoreValue;
}

var animateObstacle = function(object, path, index){
  return setTimeout(function () {
    var direction = path[index];
    if(direction == 'u'){
      pushUp(object, 3.5);
    }else if(direction == 'd'){
      pushDown(object, 3.5);
    }
    if(colliding(player, object)){
      player.style.left = "0%";
      scoreValue -= 50;
      updateScore();
    }
    index++
    if(index > path.length){
      index = 0;
    }
    animateObstacle(object, path, index);
  }, 10);
}

// Bind Event Handler
// Binding to onekeydown
document.body.onkeydown = checkKey;
animateObstacle(obstacle1, obstacle1Path, 0);
animateObstacle(obstacle2, obstacle2Path, 0);
animateObstacle(obstacle3, obstacle3Path, 0);
