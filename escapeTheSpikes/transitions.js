function transitionToMenu() {
    hide("titleScreen");
    show("menuScreen");
    gameTitle.style.animationPlayState = "running";
    document.getElementById("menuScreen").style.animationPlayState = "running";
    showInput();
    stage = 1;
}

function transitionToOptions() {
    let operationButtons = document.getElementsByClassName("operationBtn");
    for (let i = 0; i < operationButtons.length; i++) {
        // operationButtons[i]
    }
    show("optionsScreen");
    document.getElementById("optionsScreen").style.animationPlayState = "running";
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
    document.getElementById("deathScreen").style.animationPlayState = "running";
    stage = 4;
}

function transitionToWin() {
    show("victoryScreen");
    document.getElementById("victoryScreen").style.animationPlayState = "running";
    stage = 5;
}