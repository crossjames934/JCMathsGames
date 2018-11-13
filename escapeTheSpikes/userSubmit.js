function userSubmit() {
    let content = inputBox.value;
    inputBox.value = "";
    // Menu options etc
    if (stage === 1) {
        if (/start/gi.test(content)) {
            transitionToStart();
        } else if (/option/gi.test(content)) {
            transitionToOptions();
        }
    }
    // Actual game
    if (stage === 3) {
        // Make new boolean "isCorrect" so we can do different things for division etc
        if (content.match(/\d+/gi)[0] === question.numR.toString()) {
            // Correct answer
            // PING!
            question.correct();
        } else {
            // Incorrect answer
            // Bzzzz!
        }
    }
    // Death
    if (stage === 4) {
        hide("deathScreen");
        hideInput();
        show("titleScreen");
        show("gameTitle");
        gameTitle.style.animationPlayState = "paused";
        stage = 0;
    }
}