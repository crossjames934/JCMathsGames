class Player {
    constructor() {
        this.x = width / 2;
        this.y = height * 0.9;
        this.calculateSize();
        this.speed = width * 0.01;
        this.reloadTime = 0;
    }

    calculateSize() {
        this.w = width * 0.1;
        this.h = height * 0.05;
    }

    show() {
        fill(255, 0, 0);
        stroke(255);
        rect(this.x, this.y, this.w, this.h);
    }

    update() {
        this.move();
        this.constrain();
        if (this.reloadTime > 0) this.reloadTime--;
    }

    move() {
        if (keyIsDown(37)) {
            this.x -= this.speed;
        }
        if (keyIsDown(39)) {
            this.x += this.speed;
        }
        if (keyIsDown(16)) {
            this.speed = width * 0.02;
        } else {
            this.speed = width * 0.01;
        }
        if (keyIsDown(32)) {
            this.shoot();
        }
    }

    constrain() {
        this.x = constrain(this.x, 0, width - this.w);
    }

    shoot() {
        if (this.reloadTime === 0) {
            bullets.push(new Bullet(this.x + this.w / 2, this.y));
            this.reloadTime = 10;
        }
    }
}