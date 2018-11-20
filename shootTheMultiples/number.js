class Numbox {
    constructor(x, y, num) {
        this.x = x;
        this.y = y;
        this.w = width * 0.05;
        this.h = height * 0.06;
        this.num = num;
        this.speed = height * 0.002;
        this.expended = false;
    }

    recalculatePosition() {
        // Make x y w h proportionate to new window dimensions
    }

    show() {
        stroke(255);
        fill(0, 200, 200);
        rect(this.x, this.y, this.w, this.h);
        noStroke();
        fill(0);
        let textHeight = ceil(height * 0.03);
        textSize(textHeight);
        text(this.num, this.x + this.w / 2, this.y + this.h / 2 + textHeight / 2);
    }

    update() {
        for (let i = 0; i < bullets.length; i++) {
            if (collision(bullets[i], this)) {
                this.expended = true;
                bullets[i].expended = true;
            }
        }
        this.y += this.speed;
    }

    isOffscreen() {
        return this.y > height;
    }
}