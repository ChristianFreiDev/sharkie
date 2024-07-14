/** Class representing a light. */
class Light extends MovableObject {
    height = 480;
    width = 720;
    /**
     * Create a light.
     * @param {string} imagePath - The path to the image.
     * @param {*} x - The x location of the light.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 0;
    }
}