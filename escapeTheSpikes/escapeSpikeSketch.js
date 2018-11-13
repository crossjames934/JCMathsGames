const inputBox = document.getElementById("userInput");
const gameTitle = document.getElementById("gameTitle");
const hide = id => { document.getElementById(id).style.display = "none" };
const show = id => { document.getElementById(id).style.display = "block" };
const hideInput = () => { hide("userInput") };
const showInput = () => { show("userInput") };

let stage = 0;
let character;
let question;

/*

STAGES

0 - title screen
1 - instruction screen
2 - menu screen
3 - game
4 - death

 */

function setup() {
    const cnv = createCanvas(window.innerWidth, window.innerHeight);
    cnv.parent("canvasContainer");
    hills.generated = false;
    character = character || new Character();
    question = question || new Question();
    textSize(30); // change to proportion of window size
    textAlign(CENTER);
    setting.img = loadImage("sprites/stoneBricks.jpg");
}

function draw() {
    background(158, 216, 247);
    hills();
    if (stage === 3 || stage === 4) game();
}

function windowResized() {
    // location.reload(); // Refreshes page on window change size, temporary solution
    hills.generated = false;
    character.render();
    setup();
}

function keyPressed() {
    // ENTER IS HIT
    if (keyCode === 13) {
        stage === 0 ? transitionToMenu() : userSubmit();
    }
}
