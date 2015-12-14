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
    raceTrackSection = new RaceTrack(0,100),
    raceTrackSection2 = new RaceTrack(500, 100),
    raceShip = new Ship(50, canvasHeight/2),
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
    raceTrackSection.update()
    raceTrackSection2.update()
    raceShip.update();
    clearCtx(ctxBg);
    clearCtx(ctxEntities);
}

function draw() {
    raceTrackSection.draw();
    raceTrackSection2.draw();
    raceShip.draw();
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

Ship.prototype.draw = function(){
    ctxEntities.drawImage(imgSprite, this.drawX, this.drawY, this.height, this.width);
}
Ship.prototype.update = function(){
    if(this.isMovingLeft){
        this.drawY -= 5;
    }
    if(this.isMovingRight){
        this.drawY += 5;
    }
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

RaceTrack.prototype.changeSpeed = function(speed){
    this.speed = speed;
}

RaceTrack.prototype.currentSpeed = function(){
    return this.speed;
}

RaceTrack.prototype.draw = function(){
    ctxBg.fillRect(this.drawX, this.drawY, this.width, this.height);
}

RaceTrack.prototype.update = function(){
    this.drawX -= this.speed
    if(this.drawX + this.width < 0){
        this.drawX = canvasWidth;
    }
    if(this.isDecelerating){
        if(this.speed > 0){
            this.speed -= 1;
        }
    }
    if(this.isAccelerating){
        this.speed += 1;
    }
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
        raceShip.isMovingLeft = value;
        e.preventDefault();
    }
    if (keyID === 39) { // Right arrow
        raceTrackSection.isAccelerating = value;
        raceTrackSection2.isAccelerating = value;
        e.preventDefault();
    }
    if (keyID === 40) { // Down arrow
        raceShip.isMovingRight = value;
        e.preventDefault();
    }
    if (keyID === 37) { // Left arrow
        raceTrackSection.isDecelerating = value
        raceTrackSection2.isDecelerating = value
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
