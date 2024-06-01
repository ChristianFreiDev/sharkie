class FinalBoss extends MovableObject {

    height = 300;
    width = this.height * 0.8560855263157895;
    hitboxHeight = 120;
    hitboxWidth = this.width - 40;
    offsetX = 20;
    offsetY = 120;
    speed = 3;
    hadFirstContact = false;

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

    IMAGES_HURT = [
        'img/2.enemies/3.final-boss/5.hurt/1.png',
        'img/2.enemies/3.final-boss/5.hurt/2.png',
        'img/2.enemies/3.final-boss/5.hurt/3.png',
        'img/2.enemies/3.final-boss/5.hurt/4.png',
    ];

    IMAGES_DEAD = [
        'img/2.enemies/3.final-boss/4.dead/1.png',
        'img/2.enemies/3.final-boss/4.dead/2.png',
        'img/2.enemies/3.final-boss/4.dead/3.png',
        'img/2.enemies/3.final-boss/4.dead/4.png',
        'img/2.enemies/3.final-boss/4.dead/5.png',
        'img/2.enemies/3.final-boss/4.dead/6.png',
    ];

    IMAGES_SPAWNING = [
        'img/2.enemies/3.final-boss/1.spawning/1.png',
        'img/2.enemies/3.final-boss/1.spawning/2.png',
        'img/2.enemies/3.final-boss/1.spawning/3.png',
        'img/2.enemies/3.final-boss/1.spawning/4.png',
        'img/2.enemies/3.final-boss/1.spawning/5.png',
        'img/2.enemies/3.final-boss/1.spawning/6.png',
        'img/2.enemies/3.final-boss/1.spawning/7.png',
        'img/2.enemies/3.final-boss/1.spawning/8.png',
        'img/2.enemies/3.final-boss/1.spawning/9.png',
        'img/2.enemies/3.final-boss/1.spawning/10.png',
    ];

    constructor() {
        super().loadImage('img/2.enemies/3.final-boss/1.spawning/1.png');
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_SPAWNING);
        this.x = 720 * 3;
        this.y = 0;
        this.animate();
    }

    isDeathAnimationPlaying() {
        return this.isDead() && this.currentImage != 6;
    }

    animate() {
        let i = 10;
        setStoppableInterval(() => {
            // this.moveLeft();
        }, 1000 / 60)

        setStoppableInterval(() => {
            if (i < 10) {
                this.playAnimation(this.IMAGES_SPAWNING);
            }
            else if (this.hadFirstContact) {
                if (this.isDeathAnimationPlaying()) {
                    this.playAnimation(this.IMAGES_DEAD);
                }
                else if (!this.isDead()) {
                    if (this.isHurt()) {
                        this.playAnimation(this.IMAGES_HURT);
                    } else {
                        this.playAnimation(this.IMAGES_FLOATING);
                    }
                }
            }
            i++;
            if (world.character.x > 1700 && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact = true;
            }
        }, 200)
    }
}