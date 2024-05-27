class FinalBoss extends MovableObject {

    height = 300;
    width = this.height * 0.8560855263157895;
    hitboxHeight = 120;
    hitboxWidth = this.width - 40;
    offsetX = 20;
    offsetY = 120;
    speed = 3;

    IMAGES_FLOATING = [
        'img/2.enemies/3.final-boss/2.floating/1.png',
        'img/2.enemies/3.final-boss/2.floating/2.png',
        'img/2.enemies/3.final-boss/2.floating/3.png',
        'img/2.enemies/3.final-boss/2.floating/4.png',
        'img/2.enemies/3.final-boss/2.floating/5.png',
        'img/2.enemies/3.final-boss/2.floating/6.png',
        'img/2.enemies/3.final-boss/2.floating/7.png',
        'img/2.enemies/3.final-boss/2.floating/8.png',
        'img/2.enemies/3.final-boss/2.floating/9.png',
        'img/2.enemies/3.final-boss/2.floating/10.png',
        'img/2.enemies/3.final-boss/2.floating/11.png',
        'img/2.enemies/3.final-boss/2.floating/12.png',
        'img/2.enemies/3.final-boss/2.floating/13.png',
    ];

    constructor() {
        super().loadImage('img/2.enemies/3.final-boss/2.floating/1.png');
        this.loadImages(this.IMAGES_FLOATING);
        this.x = 720 * 3;
        this.y = -100 + Math.random() * 220;;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

        setInterval(() => {
            this.playAnimation(this.IMAGES_FLOATING);
        }, 200)
    }

}