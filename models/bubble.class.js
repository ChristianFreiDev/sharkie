class Bubble extends MovableObject {
    speedX = 8;
    speedY = 2;
    height = 40;
    width = 40;
    hitboxHeight = 40;
    hitboxWidth = 40;

    constructor(x, y) {
        super().loadImage('img/1.sharkie/4.attack/bubble-trap/bubble.png');
        this.x = x;
        this.y = y;
        this.blow();
    }

    blow() {
        setInterval(() => {
            this.x += this.speedX;
            this.y -= this.speedY;
        }, 50);
    }
}