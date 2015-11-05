var box = document.getElementsByClassName("box")[0]
box.style.position = "absolute";
box.style.width = "5em";
box.style.height = "5em";
box.style.background = "blue";
box.style.top = "20%";
box.style.left = "20%";

var box2 = document.getElementsByClassName("box2")[0]
box2.style.position = "absolute";
box2.style.width = "2em";
box2.style.height = "2em";
box2.style.background = "red";
box2.style.top = "70%";
box2.style.left = "50%";

var obstaclePath = ['r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r',
                    'd','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d','d',
                    'l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l',
                    'u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u','u'];
var obstaclePosition = 0;

var pushLeft = function(object, intensity){
  var currentLeft = parseFloat(object.style.left);
  object.style.left = currentLeft - intensity + "%";
}

var pushDown = function(object, intensity){
  var currentTop = parseFloat(object.style.top);
  object.style.top = currentTop + intensity + "%"
}

var pushRight = function(object, intensity){
  var currentLeft = parseFloat(object.style.left); // 50
  object.style.left = currentLeft + intensity + "%";
}

var pushUp = function(object, intensity){
  var currentTop = parseFloat(object.style.top);
  object.style.top = currentTop - intensity + "%"
}

// Event Handler
// e => Event
var whatKey = function(e){
  console.log(e.keyCode);
}

var colliiding = function(object1, object2){
  var rect1 = object1.getBoundingClientRect()
  var rect2 = object2.getBoundingClientRect()
  var collides = !(rect1.right < rect2.left ||
           rect1.left > rect2.right ||
           rect1.bottom < rect2.top ||
           rect1.top > rect2.bottom)
  console.log(collides);
  return collides;
}

var checkKey = function(e) {
  if(e.keyCode == '38'){
    pushUp(box, 1);
    if(colliiding(box, box2)){
      pushDown(box, 1);
    }
  }
  else if(e.keyCode == '40'){
    pushDown(box, 1);
    if(colliiding(box, box2)){
      pushUp(box, 1);
    }
  }
  else if(e.keyCode == '37'){
    pushLeft(box, 1);
    if(colliiding(box, box2)){
      pushRight(box, 1);
    }
  }
  else if(e.keyCode == '39'){
    pushRight(box, 1);
    if(colliiding(box, box2)){
      pushLeft(box, 1);
    }
  }
  else if(e.keyCode == '87'){
    pushUp(box2, 1);
    if(colliiding(box2, box)){
      pushDown(box2, 1);
    }
  }
  else if(e.keyCode == '83'){
    pushDown(box2, 1);
    if(colliiding(box2, box)){
      pushUp(box2, 1);
    }
  }
  else if(e.keyCode == '65'){
    pushLeft(box2, 1);
    if(colliiding(box2, box)){
      pushRight(box2, 1);
    }
  }
  else if(e.keyCode == '68'){
    pushRight(box2, 1);
    if(colliiding(box2, box)){
      pushLeft(box2, 1);
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
      pushUp(box, 1);
    }else if(direction == 'd'){
      pushDown(box, 1);
    }
    obstaclePosition++;
    if(obstaclePosition > obstaclePath.length){
      obstaclePosition = 0;
    }
    animateObstacle();
  }, 1);
}

// Bind Event Handler
// Binding to onkeydown
document.body.onkeydown = checkKey;
animateObstacle();
