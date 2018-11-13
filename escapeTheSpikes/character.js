class Character {
    constructor() {
        this.render();
    }

    // called when window resized;
    render() {
        this.x = width * 0.3;
        this.y = height * 0.62;
        this.w = width * 0.05;
        this.h = height * 0.1;
        this.targetX = this.x;
    }
  
    show() {
        fill(0, 255, 0);
        rect(this.x, this.y, this.w, this.h);
        if (this.x < this.targetX) {
            this.x += width * 0.01;
        }
    }
  
    move() {
        this.targetX += width * 0.05;
    }
}