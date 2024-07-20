/** Class representing a coin. */
class Coin extends DrawableObject {
    height = 48;
    width = this.height * 1.064516129032258;
    IMAGES = createImagePaths('img/4.score/1.coins/', 1, 4);

    /**
     * Create a coin.
     * @param {number} x - The x location of the coin object.
     * @param {number} y - The y location of the coin object.
     */
    constructor(x, y) {
        super().loadImage('img/4.score/1.coins/1.webp');
        this.x = x;
        this.y = y;
        this.animate();
    }
}