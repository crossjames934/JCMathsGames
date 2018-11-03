class NumBox {
    constructor(n, x, y) {
        this.n = n;
        this.x = x;
        this.y = y;
        this.w = width * 0.05;
        this.h = height * 0.05;
        this.held = false;
    }

    show() {
        let alpha = this.held ? 150 : 255;
        fill(120, 113, 170, alpha);
        rect(this.x, this.y, this.w, this.h, 10);
        fill(255);
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
}