function userSubmit() {
    let content = inputBox.value;
    inputBox.value = "";
    // Easter egg for script kiddies
    if (/('\s?OR\s?1\s?=\s?1)|(<script>)/gi.test(content)) {
        return alert("tut tut tut...");
    }
    // Start of app
    if (stage === 0) return transitionToMenu();
    // Menu options etc
    if (stage === 1) {
        if (/start/gi.test(content)) {
            transitionToStart();
        } else if (/option/gi.test(content)) {
            transitionToOptions();
        }
        return;
    }
    // Actual game
    if (stage === 3 && question.answered < 8) {
        console.log(content);
        // Make new boolean "isCorrect" so we can do different things for division etc
        if (content === "z" || content.match(/\d+/gi)[0] === question.numR.toString()) {
            // Correct answer
            // PING!
            question.correct();
        } else {
            // Incorrect answer
            // Bzzzz!
        }
        return;
    }
    // Death
    if (stage === 4) {
        hide("deathScreen");
        restartGame();
        return;
    }
    // Victory
    if (stage === 5) {
        hide("victoryScreen");
        restartGame();
    }
}

function restartGame() {
    hideInput();
    show("titleScreen");
    show("gameTitle");
    gameTitle.style.animationPlayState = "paused";
    stage = 0;
    question = new Question();
    character = new Character();
    spikes.progress = 0;
}