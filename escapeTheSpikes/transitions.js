function transitionToMenu() {
    hide("titleScreen");
    show("menuScreen");
    gameTitle.style.animationPlayState = "running";
    document.getElementById("menuScreen").style.animationPlayState = "running";
    showInput();
    stage = 1;
}

function transitionToOptions() {

}

function transitionToStart() {
    hide("menuScreen");
    hide("titleScreen");
    hide("gameTitle");
    stage = 3;
}