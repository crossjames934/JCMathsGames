class Question {
    constructor() {
        this.numX = ceil(random(12));
        this.numY = ceil(random(12));
        this.numR = this.numX * this.numY;
    }
  
    show() {
        fill(20, 150);
        rect(width * 0.4, height * 0.1, width * 0.2, height * 0.1);
        fill(255);
        let q = `${this.numX} x ${this.numY} =`;
        text(q, width / 2, height * 0.15);
    }
}