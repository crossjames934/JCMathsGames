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
        this.n = n;
        this.x = x;
        this.y = y;
        this.w = width * 0.05;
        this.h = height * 0.05;
        this.held = false;
        this.moveToEmpty();
        this.beingSwallowed = false;
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
        // Size and positioning of text changes depending on number of digits
        textSize(width * (this.n < 10 ? 0.03 : this.n < 100 ? 0.022 : 0.018));
        let textY = this.y + this.h * (this.n < 10 ? 0.75 : this.n < 100 ? 0.68 : 0.6)
        text(this.n, this.x + this.w / 2, textY);
    }

    update() {
        if (this.held) {
            this.x = player.x;
            this.y = player.y;
        }
        if (this.beingSwallowed) {
            this.y += width / 600;
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
}