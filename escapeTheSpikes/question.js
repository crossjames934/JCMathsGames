class Question {
    constructor() {
        this.answered = 0;
        this.operation = "*";
        this.xLimit = 12;
        this.yLimit = 12;
        this.timesTable = null;
        this.newQuestion();
        this.difficulty = 2;
    }

    newQuestion() {
        this.numX = ceil(random(this.xLimit / 10, this.xLimit));
        this.numY = this.timesTable || ceil(random(this.yLimit / 10, this.yLimit));
        this.numR = ["*", "/"].indexOf(this.operation) > -1 ? this.numX * this.numY : this.operation === "+" ? this.numX + this.numY : this.numX - this.numY;
        this.answer = this.operation === "/" ? this.numX : this.numR;
    }
  
    show() {
        fill(20, 150);
        rect(width * 0.4, height * 0.1, width * 0.2, height * 0.1);
        fill(255);
        let q = "";
        if (this.answered === 8) {
            q = "YAY!";
        } else {
            switch(this.operation) {
                case "+":
                    q = `${this.numX} + ${this.numY} =`;
                    break;
                case "-":
                    q = `${this.numX} - ${this.numY} =`;
                    break;
                case "*":
                    q = `${this.numX} x ${this.numY} =`;
                    break;
                case "/":
                    q = `${this.numR} ÷ ${this.numY} =`;
                    break;
            }
        }
        text(q, width / 2, height * 0.15);
    }

    correct() {
        character.move();
        this.answered++;
        this.newQuestion();
    }

    prepareOptions() {
        if (docGet("specificTimesTableCheck").checked) {
            question.timesTable = Number(docGet("timesTable").value);
        } else {
            this.timesTable = null;
        }
        if (["*", "/"].indexOf(this.operation) > -1) {
            this.xLimit = docGet("limitX").value;
            this.yLimit = docGet("limitY").value;
        } else {
            this.xLimit = Math.pow(10, docGet("digitsX").value);
            this.yLimit = Math.pow(10, docGet("digitsY").value);
            this.timesTable = null; // Called in case someone ticks, then changes to subtraction or addition
        }
    }
}