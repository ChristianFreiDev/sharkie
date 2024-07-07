class Bubble extends MovableObject {
    speedX = 8;
    speedY = 2;
    height = 40;
    width = 40;
    energy = 10;
    isPoisoned = false;
    AUDIO_BUBBLE_POP = new Audio('audio/bubble-pop/bubble-pop.wav');

    constructor(x, y, isPoisoned, otherDirection) {
        if (isPoisoned) {
            super().loadImage('img/1.sharkie/4.attack/bubble-trap/poisoned-bubble.png');
            this.isPoisoned = true;
        } else {
            super().loadImage('img/1.sharkie/4.attack/bubble-trap/bubble.png');
        }
        this.x = x;
        this.y = y;
        if (otherDirection) {
            this.speedX = this.speedX * -1;
            this.x = this.x - 193;
        }
        this.blow();
        this.AUDIO_BUBBLE_POP.volume = 0.9;
    }

    blow() {
        setStoppableInterval(() => {
            this.x += this.speedX;
            this.y -= this.speedY;
        }, 50);
    }
}