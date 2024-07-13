class FinalBoss extends MovableObject {

    height;
    width;
    speed = 1.5;
    speedY = 0;
    hadFirstContact = false;
    energy;
    shouldSwimLeft = false;
    shouldSwimRight = false;
    shouldSwimUp = false;
    shouldSwimDown = false;
    isBiting = false;
    AUDIO_SPLASH = assetCache.audioCache['splash'].file;
    AUDIO_HURT = assetCache.audioCache['final-boss-hurt'].file;
    AUDIO_BOSS_FIGHT = assetCache.audioCache['boss-fight'].file;
    AUDIO_BITE = assetCache.audioCache['bite'].file;
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

    IMAGES_BITE = [
        'img/2.enemies/3.final-boss/3.attack/1.png',
        'img/2.enemies/3.final-boss/3.attack/2.png',
        'img/2.enemies/3.final-boss/3.attack/3.png',
        'img/2.enemies/3.final-boss/3.attack/4.png',
        'img/2.enemies/3.final-boss/3.attack/5.png',
        'img/2.enemies/3.final-boss/3.attack/6.png'
    ];

    constructor(energy, size) {
        super().loadImage('img/2.enemies/3.final-boss/1.spawning/1.png');
        this.energy = energy;
        this.height = 300 * size;
        this.width = this.height * 0.8560855263157895 * size;
        this.offset =  {
            top: this.height * 0.52,
            bottom: this.height * 0.24,
            right: this.width * 0.22,
            left: this.width * 0.15,
        }
        this.x = 720 * 3;
        this.y = 0;
        this.applyGravity();
        this.animate();
    }

    die() {
        super.die();
        setTimeout(() => this.speedY = 0.3, 1200);
    }

    isDeathAnimationPlaying() {
        return this.isDead() && this.currentImage != 6;
    }

    applyGravity() {
        setStoppableInterval(() =>  {
            this.y -= this.speedY;
        }, 1000 / 60);
    }

    hit(obj) {
        if (obj.isPoisoned) {
            super.hit(obj);
        } 
    }

    swimLeft() {
        this.moveLeft();
        this.swapOffsets(false);
        this.otherDirection = false;
    }

    swimRight() {
        this.moveRight();
        this.swapOffsets(true);
        this.otherDirection = true;
    }

    swimUp() {
        this.speedY = -0.3;
    }

    swimDown() {
        this.speedY = 0.3;
    }

    updateMovementTargets() {
        if (world && this.x > world.character.x) {
            this.shouldSwimLeft = true;
            this.shouldSwimRight = false;
        } else {
            this.shouldSwimLeft = false;
            this.shouldSwimRight = true;
        }
        if (world && this.y > world.character.y) {
            this.shouldSwimUp = false;
            this.shouldSwimDown = true;
        } else {
            this.shouldSwimUp = true;
            this.shouldSwimDown = false;
        }
    }

    moveFinalBoss(i) {
        if (i > 15 && this.hadFirstContact) {
            if (this.shouldSwimLeft) {
                this.swimLeft();
            } else if (this.shouldSwimRight) {
                this.swimRight();
            }
            if (this.shouldSwimUp) {
                this.swimUp();
            } else if (this.shouldSwimDown) {
                this.swimDown();
            }
        }
    }

    animate() {
        let i = 10;
        setStoppableInterval(() => {
            this.updateMovementTargets();
        }, 800)

        setStoppableInterval(() => {
            if (!this.isDead()) {
                this.moveFinalBoss(i);
            }
        }, 1000 / 60)

        setStoppableInterval(() => {
            if (i < 10) {
                this.playAnimation(this.IMAGES_SPAWNING);
            }
            else if (this.hadFirstContact) {
                if (this.isDeathAnimationPlaying()) {
                    this.playAnimation(this.IMAGES_DEAD);
                    this.AUDIO_HURT.play();
                }
                else if (!this.isDead()) {
                    if (this.isHurt()) {
                        this.playAnimation(this.IMAGES_HURT);
                        this.AUDIO_HURT.play();
                    } else if (this.isBiting) {
                        this.playAnimation(this.IMAGES_BITE);
                        this.AUDIO_BITE.play();
                    } else {
                        this.playAnimation(this.IMAGES_FLOATING);
                    }
                }
            }
            i++;
            if (world && world.character.x > 1700 && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact = true;
                this.AUDIO_SPLASH.play();
                this.AUDIO_BOSS_FIGHT.play();
                this.AUDIO_BOSS_FIGHT.loop = true;
            }
        }, 200)
    }
}