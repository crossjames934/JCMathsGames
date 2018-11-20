let targetMultiples = 3;
let numboxes = [];
let bullets = [];
let player;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    player = player || new Player(); // Laid out like this in case window resize calls setup again
    textAlign(CENTER);
    strokeWeight(ceil(width * 0.004));
    stroke(255);
    targetMultiples = ceil(random(3, 12));
}

function draw() {
    background(0);
    if (frameCount % 50 === 0) {
        numboxes.push(new Numbox(random(width), 0, ceil(random(100))));
    }
    const obj = [numboxes, bullets];
    for (let j = 0; j < obj.length; j++) {
        for (let i = 0; i < obj[j].length; i++) {
            obj[j][i].update();
            obj[j][i].show();
            if (obj[j][i].isOffscreen() || obj[j][i].expended) {
                obj[j].splice(i, 1);
                i--;
            }
        }
    }
    player.update();
    player.show();

}


function windowResized() {
    setup();
    player.calculateSize();
    // All objects need their size and position recalculated
}

function collision(a, b) {
    return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h;
}

// function keyPressed() {
//     console.log(keyCode);
// }