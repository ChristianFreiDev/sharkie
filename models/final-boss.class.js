/** Class representing the final boss. */
class FinalBoss extends MovableObject {
    height;
    width;
    speed;
    speedY = 0;
    hadFirstContact = false;
    energy;
    shouldSwimLeft = false;
    shouldSwimRight = false;
    shouldSwimUp = false;
    shouldSwimDown = false;
    isBiting = false;
    difficulty;
    AUDIO_SPLASH = assetCache.audioCache['splash'].file;
    AUDIO_HURT = assetCache.audioCache['final-boss-hurt'].file;
    AUDIO_BOSS_FIGHT = assetCache.audioCache['boss-fight'].file;
    AUDIO_BITE = assetCache.audioCache['bite'].file;
    IMAGES_FLOATING = [
        'img/2.enemies/3.final-boss/2.floating/1.webp',
        'img/2.enemies/3.final-boss/2.floating/2.webp',
        'img/2.enemies/3.final-boss/2.floating/3.webp',
        'img/2.enemies/3.final-boss/2.floating/4.webp',
        'img/2.enemies/3.final-boss/2.floating/5.webp',
        'img/2.enemies/3.final-boss/2.floating/6.webp',
        'img/2.enemies/3.final-boss/2.floating/7.webp',
        'img/2.enemies/3.final-boss/2.floating/8.webp',
        'img/2.enemies/3.final-boss/2.floating/9.webp',
        'img/2.enemies/3.final-boss/2.floating/10.webp',
        'img/2.enemies/3.final-boss/2.floating/11.webp',
        'img/2.enemies/3.final-boss/2.floating/12.webp',
        'img/2.enemies/3.final-boss/2.floating/13.webp',
    ];
    IMAGES_HURT = [
        'img/2.enemies/3.final-boss/5.hurt/1.webp',
        'img/2.enemies/3.final-boss/5.hurt/2.webp',
        'img/2.enemies/3.final-boss/5.hurt/3.webp',
        'img/2.enemies/3.final-boss/5.hurt/4.webp',
    ];
    IMAGES_DEAD = [
        'img/2.enemies/3.final-boss/4.dead/1.webp',
        'img/2.enemies/3.final-boss/4.dead/2.webp',
        'img/2.enemies/3.final-boss/4.dead/3.webp',
        'img/2.enemies/3.final-boss/4.dead/4.webp',
        'img/2.enemies/3.final-boss/4.dead/5.webp',
        'img/2.enemies/3.final-boss/4.dead/6.webp',
    ];
    IMAGES_SPAWNING = [
        'img/2.enemies/3.final-boss/1.spawning/1.webp',
        'img/2.enemies/3.final-boss/1.spawning/2.webp',
        'img/2.enemies/3.final-boss/1.spawning/3.webp',
        'img/2.enemies/3.final-boss/1.spawning/4.webp',
        'img/2.enemies/3.final-boss/1.spawning/5.webp',
        'img/2.enemies/3.final-boss/1.spawning/6.webp',
        'img/2.enemies/3.final-boss/1.spawning/7.webp',
        'img/2.enemies/3.final-boss/1.spawning/8.webp',
        'img/2.enemies/3.final-boss/1.spawning/9.webp',
        'img/2.enemies/3.final-boss/1.spawning/10.webp',
    ];
    IMAGES_BITE = [
        'img/2.enemies/3.final-boss/3.attack/1.webp',
        'img/2.enemies/3.final-boss/3.attack/2.webp',
        'img/2.enemies/3.final-boss/3.attack/3.webp',
        'img/2.enemies/3.final-boss/3.attack/4.webp',
        'img/2.enemies/3.final-boss/3.attack/5.webp',
        'img/2.enemies/3.final-boss/3.attack/6.webp'
    ];

    /**
     * Create a final boss.
     * @param {number} energy - Life energy (hitpoints) of the final boss. Greater in higher levels.
     * @param {number} size - Size of the final boss. Larger in higher levels.
     */
    constructor(energy, size, difficulty, speed) {
        super().loadImage('img/2.enemies/3.final-boss/1.spawning/1.webp');
        this.energy = energy;
        this.height = 300 * size;
        this.difficulty = difficulty;
        this.speed = speed;
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

    /**
     * Kill final boss.
     */
    die() {
        super.die();
        setTimeout(() => this.speedY = 0.3, 1200);
    }

    /**
     * Check if death animation is currently playing.
     * @returns {boolean} Whether the death animation is playing or not.
     */
    isDeathAnimationPlaying() {
        return this.isDead() && this.currentImage != 6;
    }

    /**
     * Apply gravity to final boss object.
     */
    applyGravity() {
        setStoppableInterval(() =>  {
            this.y -= this.speedY;
        }, 1000 / 60);
    }

    /**
     * Call hit from superordinate class if final boss is hit by a poisoned bubble.
     * @param {Object} obj - Another object.
     */
    hit(obj) {
        if (obj.isPoisoned) {
            super.hit(obj);
        } 
    }

    /**
     * Swim to the left.
     */
    swimLeft() {
        this.moveLeft();
        this.swapOffsets(false);
        this.otherDirection = false;
    }

    /**
     * Swim to the right.
     */
    swimRight() {
        this.moveRight();
        this.swapOffsets(true);
        this.otherDirection = true;
    }

    /**
     * Swim upwards.
     */
    swimUp() {
        this.speedY = -0.3;
    }

    /**
     * Swim towards the bottom of the screen.
     */
    swimDown() {
        this.speedY = 0.3;
    }

    /**
     * Update where the final boss should move.
     */
    updateMovementTargets(target) {
        if (world && this.x > target.x) {
            this.shouldSwimLeft = true;
            this.shouldSwimRight = false;
        } else {
            this.shouldSwimLeft = false;
            this.shouldSwimRight = true;
        }
        if (world && this.y > target.y) {
            this.shouldSwimUp = false;
            this.shouldSwimDown = true;
        } else {
            this.shouldSwimUp = true;
            this.shouldSwimDown = false;
        }
    }

    /**
     * Steer final boss in a particular direction, either towards player or towards spawn point.
     */
    steer(j) {
        if (j % 4 == 0 && this.difficulty == 'easy') {
            this.updateMovementTargets({x: 2100, y: 120});
        } else {
            this.updateMovementTargets(world.character);
        }
    }

    /**
     * Move final boss after it has been seen for some time.
     * @param {number} i - Number of intervals after the final boss has been seen.
     */
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

    /**
     * Set an interval for steering the final boss towards a target.
     * @param {Object} counters - Index object.
     */
    setSteeringInterval(counters) {
        setStoppableInterval(() => {
            this.steer(counters.j);
            counters.j++
        }, 1000)
    }

    /**
     * Set an interval for the movement of the final boss.
     * @param {Object} counters - Index object.
     */
    setMovementInterval(counters) {
        setStoppableInterval(() => {
            if (!this.isDead()) {
                this.moveFinalBoss(counters.i);
            }
        }, 1000 / 60)
    }

    /**
     * Play dying animation (and corresponding sound).
     */
    playDeathAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        this.AUDIO_HURT.play();
    }

    /**
     * Play corresponding sounds when the final boss enters the screen and set variables accordingly.
     * @param {Object} counters 
     */
    onFirstContact(counters) {
        counters.i = 0;
        this.hadFirstContact = true;
        this.AUDIO_SPLASH.play();
        this.AUDIO_BOSS_FIGHT.play();
        this.AUDIO_BOSS_FIGHT.loop = true;
    }

    /**
     * Play corresponding animation (and sound) when the final boss is hurt.
     */
    playHurtAnimation() {
        this.playAnimation(this.IMAGES_HURT);
        this.AUDIO_HURT.play();
    }

    /**
     * Play corresponding animation (and sound) when the final boss is biting.
     */
    playBiteAnimation() {
        this.playAnimation(this.IMAGES_BITE);
        this.AUDIO_BITE.play();
    }

    /**
     * Play the corresponding animations when the final boss is neither spawning or dead.
     */
    playRegularAnimations() {
        if (this.isHurt()) {
            this.playHurtAnimation();
        } else if (this.isBiting) {
            this.playBiteAnimation();
        } else {
            this.playAnimation(this.IMAGES_FLOATING);
        }
    }

    /**
     * Set an interval for the animation of the final boss.
     * @param {Object} counters - Index object.
     */
    setAnimationInterval(counters) {
        setStoppableInterval(() => {
            if (counters.i < 10) {
                this.playAnimation(this.IMAGES_SPAWNING);
            }
            else if (this.hadFirstContact) {
                if (this.isDeathAnimationPlaying()) {
                    this.playDeathAnimation();
                }
                else if (!this.isDead()) {
                    this.playRegularAnimations();
                }
            }
            counters.i++;
            if (world && world.character.x > 1700 && !this.hadFirstContact) {
                this.onFirstContact(counters);
            }
        }, 200)
    }

    /**
     * Animate final boss.
     */
    animate() {
        let counters = {i: 10, j: 0};
        this.setSteeringInterval(counters);
        this.setMovementInterval(counters);
        this.setAnimationInterval(counters);
    }
}