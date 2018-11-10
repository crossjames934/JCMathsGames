class NumBox {
    constructor(n, x, y) {
        const colors = [
          [120, 113, 170],
          [145, 196, 242],
          [140, 160, 215],
          [157, 121, 188],
          [161, 77, 160],
          [126, 31, 134]
        ];
        // N is the number which should be an integer
        this.n = n;
        // Numerator and Denominator should be null by default, if not this will affect the display
        this.numerator = null;
        this.denominator = null;
        this.x = x;
        this.y = y;
        this.w = width * 0.05;
        this.h = height * 0.05;
        this.held = false;
        this.moveToEmpty();
        this.beingSwallowed = false;
        this.swallowFrame = 0;
        this.swallowSpeed = 1;
        this.process = null; // Will be changed by the machine it's inserted into, set back to null when done
        this.color = colors[floor(random(colors.length))];
    }

    show() {
        let alpha = this.held ? 150 : 255;
        // fill(120, 113, 170, alpha);
        fill(...this.color, alpha);
        stroke(255);
        strokeWeight(3);
        rect(this.x, this.y, this.w, this.h, 10);
        fill(255);
        strokeWeight(1);
        let nSize = this.n < 10 ? 0.03 : this.n < 100 ? 0.022 : 0.018;
        let textY = this.y + this.h * (this.n < 10 ? 0.75 : this.n < 100 ? 0.68 : 0.6);
        // If it's not a fraction
        if (this.numerator === null) {
            // Size and positioning of text changes depending on number of digits
            textSize(width * nSize);
            text(this.n, this.x + this.w / 2, textY);
        } else {
            // If it is a fraction
            nSize *= 1.3;
            textSize(width * nSize);
            // n is the actual number, floor it because other variables include the fractions
            text(Math.floor(this.n), this.x + this.w * 0.25, textY);
            textSize(width * nSize * 0.6);
            text(this.numerator, this.x + this.w * 0.75, textY * 0.985);
            text(this.denominator, this.x + this.w * 0.75, textY * 1.01);
        }
    }

    update() {
        if (this.held) {
            this.x = player.x;
            this.y = player.y;
        }
        // MACHINE SWALLOWING NUMBERS
        if (this.beingSwallowed) {
            this.enterMachine();
        }
    }

    grab() {
        if (this.held) {
          player.holding = this.held = false;
        } else if (!player.holding) {
          player.holding = this.held = true;
        }
    }

    // Move to an empty area on the map
    moveToEmpty() {
        for (let i = 0; i < machines.length; i++) {
            while (collision(this, machines[i])) {
                this.x = random(width - this.w);
                this.y = random(height - this.h);
            }
        }
    }

    // Change the 5 to the number stored in the machine. 5 for testing purposes
    enterMachine() {
        const test = 3;
        this.y += width / 600 * this.swallowSpeed;
        this.swallowFrame++;
        if (this.swallowFrame > 20 && this.process !== null) {
            // Checks if this.process returns number or object, if it's an object (array) it will have a fraction
            console.log(this.n);
            let result = this.process(this.n, test);
            if (typeof result === "number") {
                this.n = result;
            } else {
                this.n = result[0] + result[1] / result[2];
                this.numerator = result[1];
                this.denominator = result[2];
            }
            this.process = null;
        }
        if (this.swallowFrame > 60) {
            this.swallowSpeed = 4;
        }
        if (this.swallowFrame > 110) {
            this.beingSwallowed = false;
            this.swallowFrame = 0;
            this.swallowSpeed = 1;
        }
    }
}