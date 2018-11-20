function calculatePoints() {
    // Speed Bonus
    const spikeStart = height * 0.05;
    let spikeH = spikes.progress * height / (1500 * question.difficulty);
    let charHead = character.y + character.h * 0.2;
    let speedBonus = floor(dist(0, spikeStart + spikeH, 0, charHead)) * (4 - question.difficulty);
    // Difficulty Bonus
    // Operations
    const operationPoints = [100, 150, 200, 300];
    let sessionOperationPoints = operationPoints[["+", "-", "*", "/"].indexOf(question.operation)];
    // Number Limits
    let numberLimits = 0;
    if (["*", "/"].indexOf(question.operation) > -1) {
        // Multiplication or Division
        const easyTables = [2, 5, 10];
        numberLimits = easyTables.indexOf(question.timesTable) > -1 ? 20 : question.timesTable ? 50 : 100;
        if ((question.xLimit > 12 || question.yLimit > 12)) {
            // If you're using times tables above 12
            numberLimits = 200;
        } else if ((question.xLimit < 12 || question.yLimit < 12)) {
            numberLimits = 20;
        }
    } else {
        // Addition or Subtraction
        // numberLimits += question.xLimit * 50 + question.yLimit * 50;
        const limits = [question.xLimit, question.yLimit].slice();
        let digits = 0;
        limits.forEach(e => {
            while (e > 1) {
                e /= 10;
                digits++
            }
        });
        numberLimits += digits * 50;
    }
    let finalDifficultBonus = question.difficulty * 100; // Based on actual difficulty selection
    let difficultyPoints = sessionOperationPoints + numberLimits + finalDifficultBonus;
    docGet("pointsForDifficulty").innerText = `You've earned ${difficultyPoints} points for the difficulty of this task`;
    docGet("pointsForSpeedBonus").innerText = `Your speed bonus is ${speedBonus} points`;
    docGet("totalPoints").innerText = `Meaning you have earned a total of ${difficultyPoints + speedBonus} points this session`;
}