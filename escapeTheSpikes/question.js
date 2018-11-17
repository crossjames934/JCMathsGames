class Question {
    constructor() {
        this.newQuestion();
        this.answered = 0;
        this.operation = "*";
    }

    newQuestion() {
        this.numX = ceil(random(12));
        this.numY = ceil(random(12));
        this.numR = this.numX * this.numY;
    }
  
    show() {
        fill(20, 150);
        rect(width * 0.4, height * 0.1, width * 0.2, height * 0.1);
        fill(255);
        let q = `${this.numX} x ${this.numY} =`;
        if (this.answered === 8) q = "YAY!";
        text(q, width / 2, height * 0.15);
    }

    correct() {
        character.move();
        this.answered++;
        this.newQuestion();
    }
}