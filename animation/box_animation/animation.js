var box = document.getElementsByClassName("box")[0]
box.style.position = "absolute";
box.style.width = "5em";
box.style.height = "5em";
box.style.background = "blue";
box.style.top = "50%";
box.style.left = "50%";

var pushLeft = function(object, intensity){
  var currentLeft = parseFloat(object.style.left);
  object.style.left = currentLeft + intensity + "%";
}

var pushDown = function(object, intensity){
  var currentTop = parseFloat(object.style.top);
  object.style.top = currentTop + intensity + "%"
}

