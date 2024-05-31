class Jellyfish extends MovableObject {
    height = 150;
    width = 105.5;
    hitboxHeight = 130;
    hitboxWidth = this.width;
    offsetY = 10;

    constructor(type, color, x, y) {
        super().loadImage(`img/2.enemies/2.jelly-fish/${type}/${color}/1.png`);
        this.IMAGES_SWIM = [
            `img/2.enemies/2.jelly-fish/${type}/${color}/1.png`,
            `img/2.enemies/2.jelly-fish/${type}/${color}/2.png`,
            `img/2.enemies/2.jelly-fish/${type}/${color}/3.png`,
            `img/2.enemies/2.jelly-fish/${type}/${color}/4.png`,
        ];
        this.loadImages(this.IMAGES_SWIM);
        this.x = x;
        this.y = y;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 200)
    }
}