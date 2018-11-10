const inputBox = document.getElementById("userInput");
const gameTitle = document.getElementById("gameTitle");
const hide = id => { document.getElementById(id).style.display = "none" };
const show = id => { document.getElementById(id).style.display = "block" };
const hideInput = () => { hide("userInput") };
const showInput = () => { show("userInput") };

let stage = 0;

/*

STAGES

0 - title screen
1 - instruction screen
2 - menu screen
3 - game

 */

function setup() {
    const cnv = createCanvas(window.innerWidth, window.innerHeight);
    cnv.parent("canvasContainer");
    hideInput();
    hills.generated = false;
}

function draw() {
    background(158, 216, 247);
    // hills();
}

function keyPressed() {
    // ENTER IS HIT
    if (keyCode === 13) {
        stage === 0 ? transitionToMenu() : userSubmit();
    }
}
