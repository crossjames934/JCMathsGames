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
        if (content.toLowerCase() === "s") {
            transitionToStart();
        } else if (content.toLowerCase() === "o") {
            transitionToOptions();
        }
        return;
    }
    if (stage === 2 && /s/gi.test(content)) {
        question.prepareOptions();
        question.newQuestion(); // Overwrite the one generated at start of app
        return transitionToStart();
    }
    // Actual game
    if (stage === 3 && question.answered < 8) {
        // Make new boolean "isCorrect" so we can do different things for division etc
        let digitMatch = content.match(/-?\d+/gi);
        if (content === "z" || (digitMatch !== null && digitMatch[0] === question.answer.toString() )) {
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