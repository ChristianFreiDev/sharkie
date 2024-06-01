class Jellyfish extends MovableObject {
    height = 150;
    width = 105.5;
    hitboxHeight = 130;
    hitboxWidth = this.width;
    offsetY = 10;
    energy = 5;
    speedY = 0;

    constructor(type, color, x, y) {
        super().loadImage(`img/2.enemies/2.jelly-fish/${type}/swim/${color}/1.png`);
        this.IMAGES_SWIM = [
            `img/2.enemies/2.jelly-fish/${type}/swim/${color}/1.png`,
            `img/2.enemies/2.jelly-fish/${type}/swim/${color}/2.png`,
            `img/2.enemies/2.jelly-fish/${type}/swim/${color}/3.png`,
            `img/2.enemies/2.jelly-fish/${type}/swim/${color}/4.png`,
        ];
        this.IMAGES_DEAD = [
            `img/2.enemies/2.jelly-fish/${type}/dead/${color}/1.png`,
            `img/2.enemies/2.jelly-fish/${type}/dead/${color}/2.png`,
            `img/2.enemies/2.jelly-fish/${type}/dead/${color}/3.png`,
            `img/2.enemies/2.jelly-fish/${type}/dead/${color}/4.png`,
        ];
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.speed = 0.15 + Math.random() * 0.5;
        this.applyGravity();
        this.animate();
    }

    die() {
        super.die();
        this.speed = 0.1;
        this.speedY = 0.3;
    }

    applyGravity() {
        setStoppableInterval(() =>  {
            this.y -= this.speedY;
        }, 1000 / 60);
    }

    animate() {
        setStoppableInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

        setStoppableInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_SWIM);
            }
        }, 200)
    }
}