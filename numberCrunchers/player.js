// CREDIT: Curt - cjc83486 https://opengameart.org/content/rpg-character

class Player {
    constructor() {
        let sprites = [];
        for (let i = 0; i <= 11; i++) {
            let num = i < 10 ? "00" + i : "0" + i;
            sprites.push(loadImage("./rpgSprites/tile"+num+".png"));
        }
        this.x = width / 2;
        this.y = height / 2;
        this.w = width * 0.05;
        this.h = height * 0.05;
        this.sprites = sprites;
        this.walkPos = 0;
        this.dir = 0;
        this.speed = width * 0.005;
        this.frame = 0;
    }

    show() {
        // Determines sprite based on direction and walking position
        image(this.sprites[this.dir * 3 + this.walkPos], this.x, this.y, this.w, this.h);
    }

    update() {
        this.move();
        this.walkAnim();
        this.boxIn();
    }

    move() {
        if (keyIsDown(37)) {
            this.dir = 3;
            this.x -= this.speed;
        }
        if (keyIsDown(38)) {
            this.dir = 2;
            this.y -= this.speed;
        }
        if (keyIsDown(39)) {
            this.dir = 1;
            this.x += this.speed;
        }
        if (keyIsDown(40)) {
            this.dir = 0;
            this.y += this.speed;
        }
    }

    walkAnim() {
        let anyDown = false;
        for (let i = 37; i <= 40; i++) {
            if (keyIsDown(i)) {
                anyDown = true;
                this.frame++;
                if (this.frame >= 16) {
                    this.frame = 0;
                }
                if (this.frame < 4) {
                    this.walkPos = 0;
                } else if (this.frame < 8) {
                    this.walkPos = 1;
                } else if (this.frame < 12) {
                    this.walkPos = 2;
                } else {
                    this.walkPos = 1;
                }
            }
        }
        if (!anyDown) {
            this.frame = 0;
            this.walkPos = 1;
        }

        // const _this = this;
        // let anyDown = false;
        // for (let i = 37; i <= 40; i++) {
        //     if (keyIsDown(i) && this.intervals.walk === null) {
        //         anyDown = true;
        //         this.intervals.walk = setInterval(() => {
        //             _this.walkPos++;
        //             if (_this.walkPos >= 3) _this.walkPos = 0;
        //         }, 200);
        //     }
        // }
        // if (!anyDown) clearInterval(this.intervals.walk);
        // this.intervals.walk = null; // Try removing after if this works
        // this.walkPos = 0;
    }

    boxIn() {
        this.x = constrain(this.x, 0, width - this.w);
        this.y = constrain(this.y, 0, height - this.h);
    }
}