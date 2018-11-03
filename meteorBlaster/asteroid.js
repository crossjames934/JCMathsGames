class Asteroid {
    constructor() {
        const rnd = Math.floor(Math.random() * 3) + 1;
        this.img = loadImage("ast"+rnd+".png");
        this.w = Math.floor(width * 0.2);
        this.h = Math.floor(height * 0.2);
        this.x = Math.floor(Math.random() * (width - this.w * 2)) + this.w;
        this.y = -this.h;
        this.deg = 0;
        this.speed = 0.01;
        this.active = gameStarted;
        this.expended = false;
    }

    show() {
        push();
        translate(this.x, this.y);
        rotate(this.deg);
        image(this.img, 0, 0, this.w, this.h);
        pop();
    }

    update() {
        this.y += height * this.speed;
        this.deg += 10;
        if (this.deg >= 360) this.deg = 0;
        // Menu asteroids disappear when offscreen
        if (!this.active && this.y > height + this.h) {
            this.expended = true;
        }
        // Lose some health if asteroid hits bottom of screen.
        if (this.active && this.y >= height) {
            console.log("Lose Health");
            this.expended = true;
        }
    }
}