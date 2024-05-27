class PufferFish extends MovableObject {

    height = 99;
    width = this.height * 1.217171717171717;
    hitboxHeight = 60;
    hitboxWidth = this.width - 10;
    offsetY = 10;
    IMAGES_SWIM = [
        'img/2.enemies/1.puffer-fish/1.swim/1.swim1.png',
        'img/2.enemies/1.puffer-fish/1.swim/1.swim2.png',
        'img/2.enemies/1.puffer-fish/1.swim/1.swim3.png',
        'img/2.enemies/1.puffer-fish/1.swim/1.swim4.png',
        'img/2.enemies/1.puffer-fish/1.swim/1.swim5.png'
    ];

    constructor() {
        super().loadImage('img/2.enemies/1.puffer-fish/1.swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.x = 200 + Math.random() * 500;
        this.y = Math.random() * 420;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 200)
    }

}