class Question {
    constructor(operand, constant, limit = 12) {
        // Numbers used in question, may be switched around depending on operand
        this.x = Math.ceil(Math.random() * limit);
        this.y = constant || Math.ceil(Math.random() * limit);
        this.r = this.x * this.y;
        // This will prepare a multiplication task, will be changed if parameters are provided
        let task = "";
        let answer = this.r;
        if (operand === "/") {
            task = `${this.r} ÷ ${this.y} =`;
            answer = this.x;
        } else {
            // Multiplication by default
            task = `${this.x} X ${this.y} =`;
            answer = this.r;
        }
        this.task = task;
        this.answer = answer.toString();
        this.userInput = "";
        this.canType = true;
    }

    show() {
        fill(255);
        text(this.task, width / 2, height * 0.1);
        fill(50, 255, 50);
        text(this.userInput, width / 2, height * 0.9);
    }

    do() {
        if (this.canType) {
            for (let i = 48; i <= 57; i++) {
                if (keyIsDown(i)) {
                    this.userInput += (i-48).toString();
                    this.stopSpam();
                }
            }
            if (keyIsDown(8)) {
                this.userInput = this.userInput.substr(0, this.userInput.length - 2);
            }
            if (keyIsDown(13)) {
                if (this.userInput === this.answer) {
                    console.log("Correct!");
                    q = new Question();
                } else {
                    console.log("Incorrect!");
                }
                this.userInput = "";
            }
        }
    }

    stopSpam() {
        console.log("block");
        this.canType = false;
        let _this = this;
        setTimeout(() => {_this.canType = true}, 100);
    }
}