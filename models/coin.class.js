/** Class representing a coin. */
class Coin extends DrawableObject {

    height = 48;
    width = this.height * 1.064516129032258;

    IMAGES = [
        'img/4.score/1.coins/1.png',
        'img/4.score/1.coins/2.png',
        'img/4.score/1.coins/3.png',
        'img/4.score/1.coins/4.png'
    ];

    /**
     * Create a coin.
     * @param {number} x - The x location of the coin object.
     * @param {number} y - The y location of the coin object.
     */
    constructor(x, y) {
        super().loadImage('img/4.score/1.coins/1.png');
        this.x = x;
        this.y = y;
        this.animate();
    }
}