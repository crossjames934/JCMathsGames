let player;
let bg;
let numBoxes = [];
let machines = [];
let past = [];
let pastFrame = 0;

function setup() {
    const smallerDim = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
    const cnv = createCanvas(smallerDim, smallerDim);
    cnv.parent("canvasContainer");
    textAlign(CENTER);
    player = new Player();
    noSmooth();
    bg = loadImage("rpgSprites/grass.jpg");
    machines.push(new Machine("add", width * 0.2, height / 2));
    machines.push(new Machine("divide", width * 0.6, height / 2));
    // For loop for pushing NumBoxes to the array
    for (let i = 0; i < 20; i++) {
        // Choose random place for them
        let rndX;
        let rndY;
        let notColliding = 0;
        // Check to see that it doesn't collide with any of the machines
        while (notColliding < machines.length) {
            notColliding = 0;
            rndX = random(width * 0.95);
            rndY = random(height * 0.95);
            let prospectiveBox = {x: rndX, y: rndY, w: width * 0.05, h: height * 0.05};
            for (let i = 0; i < machines.length; i++) {
                if (!collision(prospectiveBox, machines[i])) {
                    notColliding++;
                }
            }
            // Check to see if it collides with any NumBoxes, if so - while loop will repeat
            for (let i = 0; i < numBoxes.length; i++) {
                if (collision(prospectiveBox, numBoxes[i])) {
                    notColliding = 0;
                }
            }
        }
        numBoxes.push(new NumBox(i, rndX, rndY));
    }
}

function draw() {
    if (!keyIsDown(82)) {
        image(bg, 0, 0, width/2, height/2); // BG
        image(bg, width/2, 0, width/2, height/2); // BG
        image(bg, 0, height/2, width/2, height/2); // BG
        image(bg, width/2, height/2, width/2, height/2); // BG
        showBoxes(false); // show first ones-not held
        for (let i = 0; i < machines.length; i++) {
            machines[i].show();
            machines[i].update();
        }
        player.update();
        player.show();
        showBoxes(true); // show last the one being held
        past.push(get());
    } else {
        image(past[pastFrame], 0, 0);
        pastFrame++;
    }


}

function keyPressed() {
    if (keyCode === 32 || keyCode === 13) {
        // Check first if player is able to insert numBox into machine if it's holding one
        if (player.holding) {
          for (let i = 0; i < machines.length; i++) {
            if (machines[i].checkIfCanInsert()) return;
          }
        }
        // Needs fix - player can place box on top of another box if the number being held is lower than one on floor
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