var canvasBg = document.getElementById("canvasBg"),
    ctxBg = canvasBg.getContext("2d"),
    canvasEntities = document.getElementById("canvasEntities"),
    ctxEntities = canvasEntities.getContext("2d"),
    canvasWidth = canvasBg.width,
    canvasHeight = canvasBg.height,
    enemies = [],
    obstacles = [],
    isPlaying = false,
    raceSpeed = 6,
    requestAnimFrame =  window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        function(callback) {
                            window.setTimeout(callback, 1000 / 60);
                        },
    imgSprite = new Image();
imgSprite.src = "images/blueship.png";
imgSprite.addEventListener("load", init, false);

function init() {
    document.addEventListener("keydown", function(e) {checkKey(e, true);}, false);
    document.addEventListener("keyup", function(e) {checkKey(e, false);}, false);
    begin();
}

function begin() {
    isPlaying = true;
    requestAnimFrame(loop);
}

function update() {
    clearCtx(ctxBg);
    clearCtx(ctxEntities);
}

function draw() {
    ctxEntities.drawImage(imgSprite, 50, canvasHeight/2, 100, 130);
}

function loop() {
    if (isPlaying) {
        update();
        draw();
        requestAnimFrame(loop);
    }
}

function Ship(x,y){
    this.drawX = x;
    this.drawY = y;
    this.height = 130;
    this.width = 100;
    this.isMovingLeft = false;
    this.isMovingRight = false;
}

function RaceTrack(x,y){
    this.drawX = x;
    this.drawY = y;
    this.height = canvasHeight-200;
    this.width = 100;
    this.speed = raceSpeed;
    this.isAccelerating = false;
    this.isDecelerating = false;
}

function clearCtx(ctx) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function randomRange (min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function checkKey(e, value) {
    var keyID = e.keyCode || e.which;
    if (keyID === 38) { // Up arrow
        e.preventDefault();
    }
    if (keyID === 39) { // Right arrow
        e.preventDefault();
    }
    if (keyID === 40) { // Down arrow
        e.preventDefault();
    }
    if (keyID === 37) { // Left arrow
        e.preventDefault();
    }
    if (keyID === 32) { // Spacebar
        e.preventDefault();
    }
}

function outOfBounds(a, x, y) {
    var newBottomY = y + a.height,
        newTopY = y,
        newRightX = x + a.width,
        newLeftX = x,
        treeLineTop = 5,
        treeLineBottom = 570,
        treeLineRight = 750,
        treeLineLeft = 65;
    return newBottomY > treeLineBottom ||
        newTopY < treeLineTop ||
        newRightX > treeLineRight ||
        newLeftX < treeLineLeft;
}

function collision(a, b) {
    return a.drawX <= b.drawX + b.width &&
        a.drawX >= b.drawX &&
        a.drawY <= b.drawY + b.height &&
        a.drawY >= b.drawY;
}
