function hills() {
    if (hills.generated) {

    } else {
        // Save picture of hills as a single image to save computing power
        const points = 100;
        let delta = 0;
        fill(34,139,34);
        for (let i = 0; i < 4; i++) {
            let yHeight = [];
            let fractionOfHeight = (4 - i) / 4;
            for (let j = 0; j < points; j++) {
                yHeight.push(noise(delta+=0.01));
            }
            beginShape();
            for (let j = 0; j < points; j++) {
                vertex(width / points * j, yHeight[j] * height + fractionOfHeight);
            }
            vertex(width, height);
            vertex(0, height);
            endShape();
            delta++;
        }
    }
}