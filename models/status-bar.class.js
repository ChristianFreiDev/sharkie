/** Class representing the status bar. */
class StatusBar extends DrawableObject {
    IMAGES = [
        'img/4.score/2.elements/coin.webp',
        'img/4.score/2.elements/heart.webp',
        'img/4.score/2.elements/poison.webp',
    ];
    world;

    /**
     * Create a status bar.
     */
    constructor() {
        super().loadImage('img/4.score/2.elements/heart.webp');
        this.x = 20;
        this.y = 10;
        this.width = 50;
        this.height = 50;
        this.setHealthPercentage(100);
    }

    /**
     * Draw the status bar.
     * @param {Object} ctx - The canvas context.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        ctx.font = "24px luckiestguy";
        ctx.fillStyle = "hsl(239, 50%, 27%)";
        ctx.fillText(this.world.character.energy.toString(), this.x + 46, this.y + 38);
        ctx.drawImage(assetCache.imageCache['img/4.score/2.elements/coin.webp'], this.x + 90, this.y + 5, this.width, this.height);
        ctx.fillText(this.world.collectedCoins.toString(), this.x + 138, this.y + 38);
        ctx.drawImage(assetCache.imageCache['img/4.score/2.elements/poison.webp'], this.x + 160, this.y, this.width, this.height);
        ctx.fillText(this.world.collectedPoisonBottles.toString(), this.x + 200, this.y + 38);
    }

    /**
     * Update the health percentage (hitpoints) in the status bar.
     * @param {number} percentage 
     */
    setHealthPercentage(percentage) {
        this.percentage = Math.ceil(percentage);
    }
}