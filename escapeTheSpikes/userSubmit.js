function userSubmit() {
    let content = inputBox.value;
    inputBox.value = "";
    if (stage === 1) {
        if (/start/gi.test(content)) {
            transitionToStart();
        } else if (/option/gi.test(content)) {
            transitionToOptions();
        }
    }
}