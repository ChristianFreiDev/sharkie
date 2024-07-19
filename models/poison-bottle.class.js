/** Class representing a poison bottle. */
class PoisonBottle extends DrawableObject {
    height = 72;
    width = this.height * 0.7325102880658436;

    IMAGES = [
        'img/4.score/3.poison/animated/1.webp',
        'img/4.score/3.poison/animated/2.webp',
        'img/4.score/3.poison/animated/3.webp',
        'img/4.score/3.poison/animated/4.webp',
        'img/4.score/3.poison/animated/5.webp',
        'img/4.score/3.poison/animated/6.webp',
        'img/4.score/3.poison/animated/7.webp',
        'img/4.score/3.poison/animated/8.webp'
    ];

    /**
     * Create a poison bottle.
     * @param {number} x - The x location of the poison bottle.
     * @param {number} y - The y location of the poison bottle.
     */
    constructor(x, y) {
        super().loadImage('img/4.score/3.poison/animated/1.webp');
        this.x = x;
        this.y = y;
        this.animate();
    }
}