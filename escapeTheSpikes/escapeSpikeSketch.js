const inputBox = document.getElementById("userInput");
const gameTitle = document.getElementById("gameTitle");
const hide = id => { document.getElementById(id).style.display = "none" };
const show = id => { document.getElementById(id).style.display = "block" };
const hideInput = () => { hide("userInput") };
const showInput = () => { show("userInput") };

let stage = 0;
let character;
let question;
let operation = "*";

/*

STAGES

0 - title screen
1 - instruction screen
2 - menu screen
3 - game
4 - death
5 - victory

==========FLAMETHROWERS=========

 */

function setup() {
    const cnv = createCanvas(window.innerWidth, window.innerHeight);
    cnv.parent("canvasContainer");
    hills.generated = false;
    setting.interiorWidth = width * 0.4;
    setting.img = loadImage("sprites/stoneBricks.jpg");
    question = question || new Question();
    character = character || new Character();
    textSize(30); // change to proportion of window size
    textAlign(CENTER);
    transitionToOptions();
}

function draw() {
    background(158, 216, 247);
    hills();
    if (stage >= 3) game();
}

function windowResized() {
    hills.generated = false;
    setup();
    character.render();
}

function keyPressed() {
    // ENTER IS HIT
    if (keyCode === 13) {
        userSubmit();
    }
}
