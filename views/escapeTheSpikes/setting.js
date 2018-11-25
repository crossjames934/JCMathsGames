function setting() {
    if (setting.generated) {
        image(setting.picture, 0, 0, width, height);
    } else {
        // Ground
        fill(30);
        rect(0, height / 2, width, height / 2);
        // Shadow
        fill(20);
        beginShape();
        vertex(width / 4, height / 2);
        vertex(width / 4, height * 0.8);
        vertex(width / 8, height / 2);
        endShape(CLOSE);
        // Building
        fill(50);
        rect(width / 4, height * 0.02, width / 2, height * 0.7);
        const tiles = 10;
        const xScl = (width / 2) / tiles;
        const yScl = (height * 0.7) / tiles;
        for (let i = 0; i < tiles; i++) {
            for (let j = 0; j < tiles; j++) {
                image(setting.img, width / 4 + i * xScl, height * 0.02 + j * yScl, xScl, yScl);
            }
        }
        // Interior
        fill(90);
        rect(width * 0.3, height * 0.05, setting.interiorWidth, height * 0.67);
        // Exit
        rect(width * 0.69, height * 0.52, width * 0.06, height * 0.2);
        // Carpet
        fill(40, 0, 0);
        rect(width * 0.3, height * 0.67, width * 0.45, height * 0.05);
        setting.picture = get();
        setting.generated = true;
    }
}

function roof() {
    fill(100, 120, 30);
    rect(width / 4, 0, width / 2, height * 0.05);
    const limit = 7;
    for (let i = 0; i < limit; i++) {
        image(roof.img, width / 4 + i * (width / 2 / limit), 0, (width / 2 / limit), height * 0.05);
    }
}