function selectOption(option) {
    addSelectedClass(option, false);
    switch (option) {
        case "additionBtn":
            show("additionOptions");
            hide("subtractionOptions");
            hide("multiplicationOptions");
            question.operation = "+";
            break;
        case "subtractionBtn":
            show("additionOptions");
            show("subtractionOptions");
            hide("multiplicationOptions");
            question.operation = "-";
            break;
        case "multiplicationBtn":
            show("multiplicationOptions");
            hide("additionOptions");
            hide("subtractionOptions");
            question.operation = "*";
            break;
        case "divisionBtn":
            show("multiplicationOptions");
            hide("additionOptions");
            hide("subtractionOptions");
            question.operation = "/";
            break;
    }
}

function selectDifficulty(difficulty) {
    addSelectedClass(difficulty, true);
    switch (difficulty) {
        case "easy":
            question.difficulty = 3;
            break;
        case "medium":
            question.difficulty = 2;
            break;
        case "hard":
            question.difficulty = 1;
            break;
    }
}

function addSelectedClass(element, isDifficulty) {
    let operationButtons = document.getElementsByClassName("operationBtn");
    let init = isDifficulty ? 0 : 3;
    let limit = isDifficulty ? 3 : operationButtons.length;
    for (let i = init; i < limit; i++) {
        operationButtons[i].classList.remove("selected");
    }
    docGet(element).classList.add("selected");
}

function chooseTimesTable() {
    if (docGet("specificTimesTableCheck").checked) {
        show("timesTable");
        show("timesTableLabel");
        hide("limitY");
        hide("limitYLabel");
        // question.timesTable = Number(docGet("timesTable").value);
    } else {
        hide("timesTable");
        hide("timesTableLabel");
        show("limitY");
        show("limitYLabel");
        // question.timesTable = null;
    }
}

function negcheck(isTick = false) {
    // will check if second number has more digits than first, which will tick negative numbers allowed
    let checkState = docGet("negativeAllowed").checked;
    let x = Number(docGet("digitsX").value);
    let y = Number(docGet("digitsY").value);
    if (y > x) {
        docGet("negativeAllowed").checked = true;
    } else if (y < x) {
        docGet("negativeAllowed").checked = false;
    }
    if (checkState !== docGet("negativeAllowed").checked && isTick) {
        notPossible();
    }
}

function notPossible() {
    clearTimeout(notPossible.timeout);
    hide("notPossibleMessage");
    requestAnimationFrame(() => {show("notPossibleMessage")});
    notPossible.timeout = setTimeout(() => {
        hide("notPossibleMessage");
    }, 2200);
}