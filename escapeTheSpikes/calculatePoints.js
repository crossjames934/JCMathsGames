function calculatePoints() {
    const pointsAtDeath = 886;
    let speedBonus = pointsAtDeath - spikes.progress;
    let difficultyPoints = 100;
    docGet("pointsForDifficulty").innerText = `You've earned ${difficultyPoints} points for the difficulty of this task`;
    docGet("pointsForSpeedBonus").innerText = `Your speed bonus is ${speedBonus} points`;
    docGet("totalPoints").innerText = `Meaning you have earned a total of ${difficultyPoints + speedBonus} points this session`;
}