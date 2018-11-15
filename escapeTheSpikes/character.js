class Character {
    constructor() {
        this.render();
        let sprites = [];
        let deathSprites = [];
        for (let i = 143; i <= 151; i++) {
            sprites.push(loadImage("sprites/tile"+i+".png"));
        }
        for (let i = 260; i <= 265; i++) {
            deathSprites.push(loadImage("sprites/tile"+i+".png"));
        }
        this.sprites = sprites;
        this.deathSprites = deathSprites;
        this.victorySprite = loadImage("sprites/victory.png");
        this.frame = 0; // which sprite is showing
        this.alive = true;
        this.victorious = false;
    }

    // called when window resized;
    render() {
        this.x = width * 0.3 + (question.answered) * ((width * 0.4) / 8);
        this.y = height * 0.62;
        this.w = width * 0.05;
        this.h = height * 0.1;
        this.targetX = this.x;
    }
  
    show() {
        this.alive ? this.life() : this.death();
    }
  
    move() {
        this.targetX = width * 0.3 + (question.answered+1) * (setting.interiorWidth / 8);
    }

    life() {
        if (question.answered < 8 || this.x < this.targetX) {
            image(this.sprites[floor(this.frame)], this.x, this.y, this.w, this.h);
            if (this.x < this.targetX) {
                this.x += width * 0.002;
                this.frame+=0.5;
                if (this.frame >= this.sprites.length) this.frame = 0;
            }
        } else {
            this.victory();
        }
    }

    death() {
        image(this.deathSprites[floor(this.frame)], this.x, this.y, this.w, this.h);
        if (this.frame < this.deathSprites.length - 1) {
            this.frame += 0.25;
        }
    }

    victory() {
        image(this.victorySprite, this.x, this.y, this.w, this.h);
        if (!this.victorious) {
            calculatePoints();
            transitionToWin();
            this.victorious = true;
        }
    }
}