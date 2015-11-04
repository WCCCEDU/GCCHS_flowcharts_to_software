var box = document.getElementsByClassName("box")[0]
box.style.position = "absolute";
box.style.width = "5em";
box.style.height = "5em";
box.style.background = "blue";
box.style.top = "50%";
box.style.left = "50%";

var box2 = document.getElementsByClassName("box2")[0]
box2.style.position = "absolute";
box2.style.width = "2em";
box2.style.height = "2em";
box2.style.background = "red";
box2.style.top = "60%";
box2.style.left = "50%";

var pushLeft = function(object, intensity){
  var currentLeft = parseFloat(object.style.left); // 50
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

var checkKey = function(e) {
    if(e.keyCode == '38'){
        // up arrow
    }
    else if(e.keyCode == '40'){
        // down arrow
    }
    else if(e.keyCode == '37'){
       // left arrow
    }
    else if(e.keyCode == '39'){
       // right arrow
    }
}

// Bind Event Handler
// Binding to onkeydown
document.body.onkeydown = checkKey;
