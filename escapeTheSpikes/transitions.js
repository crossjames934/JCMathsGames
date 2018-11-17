function transitionToMenu() {
    hide("titleScreen");
    show("menuScreen");
    gameTitle.style.animationPlayState = "running";
    docGet("menuScreen").style.animationPlayState = "running";
    showInput();
    stage = 1;
}

function transitionToOptions() {
    show("optionsScreen");
    hide("gameTitle");
    docGet("optionsScreen").style.animationPlayState = "running";
    stage = 2;
}

function transitionToStart() {
    hide("menuScreen");
    hide("titleScreen");
    hide("gameTitle");
    stage = 3;
}

function transitionToDeath() {
    show("deathScreen");
    docGet("deathScreen").style.animationPlayState = "running";
    stage = 4;
}

function transitionToWin() {
    show("victoryScreen");
    docGet("victoryScreen").style.animationPlayState = "running";
    stage = 5;
}