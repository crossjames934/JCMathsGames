class Machine {
    // Pass a function as 'type', it should perform the mathematical operation
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.w = width * 0.2;
        this.h = height * 0.25;
        switch (type) {
            case "add":
                this.process = add;
                this.symbol = "+";
                break;
            case "sub":
                this.process = sub;
                this.symbol = "-";
                break;
            case "divide":
                this.process = divide;
                this.symbol = "÷";
                break;
            case "mult":
                this.process = mult;
                this.symbol = "x";
                break;
        }
    }

    show() {
        strokeWeight(3);
        stroke(52);
        fill(151);
        rect(this.x, this.y, this.w, this.h, 10);
        strokeWeight(1);
        fill(21);
        textSize(width * 0.15);
        text(this.symbol, this.x + this.w * 0.5, this.y + this.h * 0.5);
    }

    update() {
        if (collision(this, player)) {
            // If player is left of center, push him left
            const pushBack = 0.01;
            if (player.x < this.x + this.w / 2) {
                player.x -= width * pushBack;
            } else {
                player.x += width * pushBack;
            }
            if (player.y < this.y + this.h / 2) {
                player.y -= height * pushBack;
            } else {
                player.y += height * pushBack;
            }
        }
    }
}