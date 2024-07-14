/** Class representing a bubble. */
class Bubble extends MovableObject {
    speedX = 8;
    speedY = 2;
    height = 40;
    width = 40;
    energy = 10;
    isPoisoned = false;
    AUDIO_BUBBLE_POP = assetCache.audioCache['bubble-pop'].file;

    /**
     * Create a bubble.
     * @param {number} x - The x location of the bubble.
     * @param {number} y - The y location of the bubble.
     * @param {boolean} isPoisoned - Whether the bubble is poisoned or not.
     * @param {boolean} otherDirection - Whether the direction is different from the default direction.
     */
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
    }

    /**
     * Move the bubble based on an interval and according to its x and y speeds.
     */
    blow() {
        setStoppableInterval(() => {
            this.x += this.speedX;
            this.y -= this.speedY;
        }, 50);
    }
}