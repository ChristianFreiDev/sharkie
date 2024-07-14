/** Class representing a poison bottle. */
class PoisonBottle extends DrawableObject {
    height = 72;
    width = this.height * 0.7325102880658436;

    IMAGES = [
        'img/4.score/3.poison/animated/1.png',
        'img/4.score/3.poison/animated/2.png',
        'img/4.score/3.poison/animated/3.png',
        'img/4.score/3.poison/animated/4.png',
        'img/4.score/3.poison/animated/5.png',
        'img/4.score/3.poison/animated/6.png',
        'img/4.score/3.poison/animated/7.png',
        'img/4.score/3.poison/animated/8.png'
    ];

    /**
     * Create a poison bottle.
     * @param {number} x - The x location of the poison bottle.
     * @param {number} y - The y location of the poison bottle.
     */
    constructor(x, y) {
        super().loadImage('img/4.score/3.poison/animated/1.png');
        this.x = x;
        this.y = y;
        this.animate();
    }
}