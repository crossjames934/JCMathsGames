function game() {
    setting();
    character.show();
    spikes();
    question.show();
}

function setting() {
    if (setting.generated) {
        image(setting.picture, 0, 0, width, height);
    } else {
        // Ground
        fill(30);
        rect(0, height / 2, width, height / 2);
        // Building
        fill(50);
        rect(width / 4, height * 0.02, width / 2, height * 0.7);
        const tiles = 10;
        const scl = (width / 2) / tiles;
        for (let i = 0; i < tiles; i++) {
            for (let j = 0; j < tiles - 2; j++) {
                image(setting.img, width / 4 + i * scl, height * 0.02 + j * scl, scl, scl);
            }
        }
        fill(90);
        // Interior
        setting.interiorWidth = width * 0.4;
        rect(width * 0.3, height * 0.05, setting.interiorWidth, height * 0.67);
        // Exit
        rect(width * 0.69, height * 0.52, width * 0.06, height * 0.2);
        setting.picture = get();
        setting.generated = true;
    }
}

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