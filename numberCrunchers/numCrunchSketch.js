let player;
let numBoxes = [];
let machines = [];

function setup() {
    const smallerDim = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
    const cnv = createCanvas(smallerDim, smallerDim);
    cnv.parent("canvasContainer");
    textAlign(CENTER);
    player = new Player();
    machines.push(new Machine("add", width * 0.2, height / 2));
    machines.push(new Machine("divide", width * 0.6, height / 2));
    for (let i = 0; i < 10; i++) {
        numBoxes.push(new NumBox(i, random(width * 0.95), random(height * 0.95)));
    }
}

function draw() {
    background(173,255,47);
    showBoxes(false);
    for (let i = 0; i < machines.length; i++) {
        machines[i].show();
        machines[i].update();
    }
    player.update();
    player.show();
    showBoxes(true);
}

function keyPressed() {
    if (keyCode === 32 || keyCode === 13) {
        for (let i = 0; i < numBoxes.length; i++) {
            if (dist(numBoxes[i].x, numBoxes[i].y, player.x, player.y) <= numBoxes[i].w) {
                numBoxes[i].grab();
                break; // Saves computing power - stop counting if you've found the one that is near player
            }
        }
    }
}

// Illusion of Z-index, player holds box over head, otherwise walks over it
function showBoxes(isHeld) {
    for (let i = 0; i < numBoxes.length; i++) {
        if (numBoxes[i].held === isHeld) {
            numBoxes[i].show();
            numBoxes[i].update();
        }
    }
}

function collision(a, b) {
    return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h;
}