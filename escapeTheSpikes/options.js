function selectOption(option) {
    addSelectedClass(option);
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

function addSelectedClass(element) {
    let operationButtons = document.getElementsByClassName("operationBtn");
    for (let i = 0; i < operationButtons.length; i++) {
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
    } else {
        hide("timesTable");
        hide("timesTableLabel");
        show("limitY");
        show("limitYLabel");
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