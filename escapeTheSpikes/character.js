class Character {
    constructor() {
        this.x = width * 0.3;
        this.y = height * 0.6;
        this.w = width * 0.05;
        this.h = height * 0.1;
    }
  
    show() {
        fill(255);
        rect(this.x, this.y, this.w, this.h);
    }
  
    move() {
        this.x += width * 0.05;
    }
}