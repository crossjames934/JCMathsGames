function addSelectedClass(element) {
    let operationButtons = document.getElementsByClassName("operationBtn");
    console.log(operationButtons);
    for (let i = 0; i < operationButtons.length; i++) {
        operationButtons[i].classList.remove("selected");
    }
    document.getElementById(element).classList.add("selected");
}

function selectOption(option) {
    addSelectedClass(option);
}