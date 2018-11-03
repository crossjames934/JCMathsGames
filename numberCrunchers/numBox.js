class NumBox {
    constructor(n, x, y) {
        this.n = n;
        this.x = x;
        this.y = y;
        this.w = width * 0.05;
        this.h = height * 0.05;
        this.held = false;
        this.moveToEmpty();
    }

    show() {
        let alpha = this.held ? 150 : 255;
        fill(120, 113, 170, alpha);
        stroke(255);
        strokeWeight(3);
        rect(this.x, this.y, this.w, this.h, 10);
        fill(255);
        strokeWeight(1);
        textSize(width * 0.03);
        text(this.n, this.x + this.w / 2, this.y + this.h * 0.75);
    }

    update() {
        if (this.held) {
            this.x = player.x;
            this.y = player.y;
        }
    }

    grab() {
        this.held = !this.held;
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