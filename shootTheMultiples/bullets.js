class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = width * 0.01;
        this.h = height * 0.05;
        this.speed = height * 0.03;
        this.expended = false;
    }

    show() {
        noStroke();
        fill(200, 150, 0);
        rect(this.x, this.y, this.w, this.h);
    }

    update() {
        this.y -= this.speed;
    }

    isOffscreen() {
        return this.y + this.h < 0;
    }
}