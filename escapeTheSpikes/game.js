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
        rect(width * 0.3, height * 0.05, setting.interiorWidth, height * 0.67);
        // Exit
        rect(width * 0.69, height * 0.52, width * 0.06, height * 0.2);
        setting.picture = get();
        setting.generated = true;
    }
}
