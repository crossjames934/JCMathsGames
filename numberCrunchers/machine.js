class Machine {
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.w = width * 0.2;
        this.h = height * 0.25;
        this.tube = {
          x: this.x + this.w * 0.3,
          y: this.y - this.h * 0.3,
          w: this.w * 0.4,
          h: this.h * 0.3
        };
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
        this.showTube();
        this.mainBody();
    }
  
    mainBody() {
        strokeWeight(3);
        stroke(52);
        fill(151);
        rect(this.x, this.y, this.w, this.h, 10);
        strokeWeight(1);
        fill(21);
        textSize(width * 0.15);
        text(this.symbol, this.x + this.w * 0.5, this.y + this.h * 0.5);
    }
  
    showTube() {
        stroke(0);
        fill(171);
        rect(this.tube.x + this.tube.w * 0.1, this.tube.y, this.tube.w * 0.8, this.tube.h, 5);
        rect(this.tube.x, this.tube.y + this.h * 0.1, this.tube.w, this.tube.h, 5);
    }

    update() {
        this.blockPlayer();
    }
  
    checkIfCanInsert() {
        // Check if the player is able to insert a numBox into the machine
        // Activated by space / enter keypress
        if (dist(
          player.x + player.w / 2, 
          player.y + player.h / 2, 
          this.tube.x + this.tube.w / 2,
          this.tube.y
          ) < player.w)
        {
            this.swallowBox();
            return true;
        }
    }
  
    swallowBox() {
        for (let i = 0; i < numBoxes.length; i++) {
            if (numBoxes[i].held) {
                player.holding = numBoxes[i].held = false;
                numBoxes[i].beingSwallowed = true;
                numBoxes[i].x = this.x + this.w / 2 - numBoxes[i].w / 2;
                numBoxes[i].process = this.process;
                break;
            }
        }
    }
  
    blockPlayer() {
        // New approach - keeping track of past positions
        while (collision(this, player) || collision(this.tube, player)) {
            player.pastX.shift();
            player.x = player.pastX[0];
            player.pastY.shift();
            player.y = player.pastY[0];
        }
        // if (collision(this, player)) {
            // If player is left of center, push him left
            // const pushBack = 0.01;
            // if (player.x < this.x + this.w / 2) {
            //     player.x -= width * pushBack;
            // } else {
            //     player.x += width * pushBack;
            // }
            // if (player.y < this.y + this.h / 2) {
            //     player.y -= height * pushBack;
            // } else {
            //     player.y += height * pushBack;
            // }
        // }
    }
}