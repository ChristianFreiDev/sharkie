class PufferFish extends MovableObject {

    height = 99;
    width = this.height * 1.217171717171717;
    hitboxHeight = 60;
    hitboxWidth = this.width - 10;
    offsetY = 10;

    constructor(type, x, y) {
        super().loadImage('img/2.enemies/1.puffer-fish/1.swim/1.swim1.png');
        this.IMAGES_SWIM = [
            `img/2.enemies/1.puffer-fish/1.swim/${type}.swim1.png`,
            `img/2.enemies/1.puffer-fish/1.swim/${type}.swim2.png`,
            `img/2.enemies/1.puffer-fish/1.swim/${type}.swim3.png`,
            `img/2.enemies/1.puffer-fish/1.swim/${type}.swim4.png`,
            `img/2.enemies/1.puffer-fish/1.swim/${type}.swim5.png`,
        ];
        this.loadImages(this.IMAGES_SWIM);
        this.x = x
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