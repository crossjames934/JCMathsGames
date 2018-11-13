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
        fill(120);
        rect(0, height / 2, width, height / 2);
        // Building
        fill(50);
        rect(width / 4, height * 0.02, width / 2, height * 0.7);
        fill(90);
        rect(width * 0.3, height * 0.05, width * 0.4, height * 0.67);
        rect(width * 0.7, height * 0.52, width * 0.05, height * 0.2);
        setting.picture = get();
        setting.generated = true;
    }
}

function spikes() {
    if (spikes.progress === undefined) spikes.progress = 0;
    fill(255);
    const len = 20;
    let spikeH = spikes.progress * height / 1500;
    if (spikeH >= height * 0.67 - character.h) {
        console.log("death");
    }
    for (let i = 0; i < len; i++) {
        let x = width * 0.3 + (i / len) * (width * 0.4);
        rect(x, height * 0.05, width * 0.01, spikeH);
    }
    // Spikes stop descending when they've reached the floor
    if (spikeH < height * 0.67) {
        spikes.progress++;
    }
}