/** Class representing a background object. */
class BackgroundObject extends MovableObject {

    height = 480;
    width = 720;
    /**
     * Create a background object.
     * @param {string} imagePath - The path to the image.
     * @param {number} x - The x location of the background object.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}