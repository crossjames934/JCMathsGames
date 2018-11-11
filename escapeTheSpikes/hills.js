function hills() {
    if (hills.generated) {
        image(hills.picture, 0, 0, width, height);
    } else {
        // Save picture of hills as a single image to save computing power
        const points = 100;
        let delta = 0;
        const colors = [
            [32,178,170],
            [46,139,87],
            [50,205,50],
            [34,139,34]
        ];
        noStroke();
        for (let i = 0; i < 4; i++) {
            fill(...colors[i]);
            let yHeight = [];
            let fractionOfHeight = i / 4;
            for (let j = 0; j < points; j++) {
                yHeight.push(noise(delta+=0.01));
            }
            beginShape();
            for (let j = 0; j < points; j++) {
                vertex(width / points * j, yHeight[j] * (height / 2) + fractionOfHeight * height);
            }
            vertex(width, height);
            vertex(0, height);
            endShape();
            delta++;
        }
        hills.picture = get();
        hills.generated = true;
    }
}