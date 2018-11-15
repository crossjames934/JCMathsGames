function spikes() {
    spikes.progress = spikes.progress || 0;
    fill(255);
    const len = 20;
    let spikeH = spikes.progress * height / 1500;
    // Death to player - only if spikes reach player's height, player is alive, and not all questions are answered
    if (
        spikeH >= height * 0.67 - (character.h * 0.8)
        && character.alive
        && question.answered < 8
    )
    {
        character.alive = false;
        character.frame = 0;
        transitionToDeath();
    }
    const tipHeight = height * 0.1;
    let tipY = height * 0.05 + spikeH - tipHeight;
    for (let i = 0; i < len; i++) {
        let x = width * 0.3 + (i / len) * (width * 0.4);
        rect(x, height * 0.05, width * 0.01, spikeH - tipHeight + 1);
        triangle(x, tipY, x + width * 0.01, tipY, x + width * 0.005, tipY + tipHeight);
    }
    // Spikes stop descending when they've reached the floor
    if (spikeH < height * 0.67) {
        spikes.progress++;
    }
}