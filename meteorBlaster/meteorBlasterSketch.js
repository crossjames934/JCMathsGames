let q;
let gameStarted = false;
let asteroids = [];

function setup() {
    const smallerDim = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
    const cnv = createCanvas(smallerDim, smallerDim);
    cnv.parent("canvasContainer");
    imageMode(CENTER);
    textAlign(CENTER);
    angleMode(DEGREES);
    textSize(30);
    q = new Question("/");
}

function draw() {
    background(0);
    for (let i = asteroids.length-1; i >= 0; i--) {
        asteroids[i].show();
        asteroids[i].update();
        if (asteroids[i].expended) asteroids.splice(i, 1);
    }
    gameStarted ? game() : menu();
}

function menu() {
    fill(255);
    text("PRESS ENTER TO START", width/2, height/2);
    if (frameCount % 50 === 0) {
        asteroids.push(new Asteroid());
    }
    if (keyIsDown(13)) {
        asteroids = [];
        q.stopSpam();
        gameStarted = true;
    }
}

function keyPressed() {
    console.log(keyCode);
}

function game() {
    q.show();
    q.do();
}