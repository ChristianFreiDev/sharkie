/** Class repesenting the player character. */
class Character extends MovableObject {

    height = 300;
    width = this.height * 0.815;
    defaultOffset =  {
        top: this.height * 0.55,
        bottom: this.height * 0.3,
        right: this.width * 0.26,
        left: this.width * 0.25
    }
    offset =  {
        top: this.defaultOffset.top,
        bottom: this.defaultOffset.bottom,
        right: this.defaultOffset.right,
        left: this.defaultOffset.left,
        slap: {
            right: this.width * 0.05,
            left: this.width * 0.2
        }
    }
    speed = 3;
    speedY = 0;
    maxSpeedY = -1;
    acceleration = 0.004;
    bubbleTimeouts = [];
    lastBubble = 0;
    lastBubbleIsPoisoned = false;
    lastSlap = 0;
    wasLastHitElectricShock = false;
    AUDIO_SWIM = assetCache.audioCache['swim'].file;
    AUDIO_BUBBLE_TRAP = assetCache.audioCache['blow'].file;
    AUDIO_FIN_SLAP = assetCache.audioCache['slap'].file;
    AUDIO_HURT = assetCache.audioCache['character-hurt'].file;
    AUDIO_ELECTRIC_SHOCK = assetCache.audioCache['electric-shock'].file;
    AUDIO_SNORING = assetCache.audioCache['snoring'].file;
    AUDIO_YAWN = assetCache.audioCache['yawn'].file;
    IMAGES_IDLE = [
        'img/1.sharkie/1.idle/1.webp',
        'img/1.sharkie/1.idle/2.webp',
        'img/1.sharkie/1.idle/3.webp',
        'img/1.sharkie/1.idle/4.webp',
        'img/1.sharkie/1.idle/5.webp',
        'img/1.sharkie/1.idle/6.webp',
        'img/1.sharkie/1.idle/7.webp',
        'img/1.sharkie/1.idle/8.webp',
        'img/1.sharkie/1.idle/9.webp',
        'img/1.sharkie/1.idle/10.webp',
        'img/1.sharkie/1.idle/11.webp',
        'img/1.sharkie/1.idle/12.webp',
        'img/1.sharkie/1.idle/13.webp',
        'img/1.sharkie/1.idle/14.webp',
        'img/1.sharkie/1.idle/15.webp',
        'img/1.sharkie/1.idle/16.webp',
        'img/1.sharkie/1.idle/17.webp',
        'img/1.sharkie/1.idle/18.webp'
    ];
    IMAGES_LONG_IDLE = [
        'img/1.sharkie/2.long-idle/1.webp',
        'img/1.sharkie/2.long-idle/2.webp',
        'img/1.sharkie/2.long-idle/3.webp',
        'img/1.sharkie/2.long-idle/4.webp',
        'img/1.sharkie/2.long-idle/5.webp',
        'img/1.sharkie/2.long-idle/6.webp',
        'img/1.sharkie/2.long-idle/7.webp',
        'img/1.sharkie/2.long-idle/8.webp',
        'img/1.sharkie/2.long-idle/9.webp',
        'img/1.sharkie/2.long-idle/10.webp',
        'img/1.sharkie/2.long-idle/11.webp',
        'img/1.sharkie/2.long-idle/12.webp',
        'img/1.sharkie/2.long-idle/13.webp',
        'img/1.sharkie/2.long-idle/14.webp'
    ];
    IMAGES_SLEEPING = [
        'img/1.sharkie/2.long-idle/11.webp',
        'img/1.sharkie/2.long-idle/12.webp',
        'img/1.sharkie/2.long-idle/13.webp',
        'img/1.sharkie/2.long-idle/14.webp'
    ];
    IMAGES_SWIM = [
        'img/1.sharkie/3.swim/1.webp',
        'img/1.sharkie/3.swim/2.webp',
        'img/1.sharkie/3.swim/3.webp',
        'img/1.sharkie/3.swim/4.webp',
        'img/1.sharkie/3.swim/5.webp',
        'img/1.sharkie/3.swim/6.webp',
    ];
    IMAGES_DEAD_POISONED = [
        'img/1.sharkie/6.dead/1.poisoned/1.webp',
        'img/1.sharkie/6.dead/1.poisoned/2.webp',
        'img/1.sharkie/6.dead/1.poisoned/3.webp',
        'img/1.sharkie/6.dead/1.poisoned/4.webp',
        'img/1.sharkie/6.dead/1.poisoned/5.webp',
        'img/1.sharkie/6.dead/1.poisoned/6.webp',
        'img/1.sharkie/6.dead/1.poisoned/7.webp',
        'img/1.sharkie/6.dead/1.poisoned/8.webp',
        'img/1.sharkie/6.dead/1.poisoned/9.webp',
        'img/1.sharkie/6.dead/1.poisoned/10.webp',
        'img/1.sharkie/6.dead/1.poisoned/11.webp',
        'img/1.sharkie/6.dead/1.poisoned/12.webp'
    ];
    IMAGES_HURT_POISONED = [
        'img/1.sharkie/5.hurt/1.poisoned/1.webp',
        'img/1.sharkie/5.hurt/1.poisoned/2.webp',
        'img/1.sharkie/5.hurt/1.poisoned/3.webp',
        'img/1.sharkie/5.hurt/1.poisoned/4.webp'
    ];
    IMAGES_HURT_ELECTRIC_SHOCK = [
        'img/1.sharkie/5.hurt/2.electric-shock/1.webp',
        'img/1.sharkie/5.hurt/2.electric-shock/2.webp'
    ];
    IMAGES_BUBBLE_TRAP = [
        'img/1.sharkie/4.attack/bubble-trap/op1/1.webp',
        'img/1.sharkie/4.attack/bubble-trap/op1/2.webp',
        'img/1.sharkie/4.attack/bubble-trap/op1/3.webp',
        'img/1.sharkie/4.attack/bubble-trap/op1/4.webp',
        'img/1.sharkie/4.attack/bubble-trap/op1/5.webp',
        'img/1.sharkie/4.attack/bubble-trap/op1/6.webp',
        'img/1.sharkie/4.attack/bubble-trap/op1/7.webp',
        'img/1.sharkie/4.attack/bubble-trap/op1/8.webp'
    ];
    IMAGES_BUBBLE_TRAP_POISONED = [
        'img/1.sharkie/4.attack/bubble-trap/poisoned/1.webp',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/2.webp',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/3.webp',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/4.webp',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/5.webp',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/6.webp',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/7.webp',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/8.webp'
    ];
    IMAGES_FIN_SLAP = [
        'img/1.sharkie/4.attack/fin-slap/1.webp',
        'img/1.sharkie/4.attack/fin-slap/2.webp',
        'img/1.sharkie/4.attack/fin-slap/3.webp',
        'img/1.sharkie/4.attack/fin-slap/4.webp',
        'img/1.sharkie/4.attack/fin-slap/5.webp',
        'img/1.sharkie/4.attack/fin-slap/6.webp',
    ];
    world;

    /**
     * Create a character.
     */
    constructor() {
        super().loadImage('img/1.sharkie/1.idle/1.webp');
        this.applyGravity();
        this.animate();
    }

    /**
     * Draw the slap hitbox. Enemies within this hitbox will be slapped if they can be hurt by slaps.
     * @param {Object} ctx - The canvas context.
     */
    drawSlapHitbox(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "10";
        ctx.strokeStyle = "yellow";
        ctx.rect(this.x + this.offset.slap.left, this.y + this.offset.top, this.width - this.offset.left - this.offset.slap.right, this.height - this.offset.top - this.offset.bottom);
        ctx.stroke();
    }

    /**
     * Get whether the character is above a certain point on the screen or not.
     * @returns {boolean} Whether the character is above the ocean floor or not.
     */
    isAboveOceanFloor() {
        return this.y < 220;
    }

    /**
     * Get whether there is enough room for the character to move up on the screen.
     * @returns {boolean} Whether there is room for moving upwards or not.
     */
    isRoomForMovingUp() {
        return (this.y - this.speedY) > -150;
    }

    /**
     * Apply gravity to the player character.
     */
    applyGravity() {
        setStoppableInterval(() =>  {
            if (this.isRoomForMovingUp()) {
                this.y -= this.speedY;
            }
            if (this.isAboveOceanFloor() && this.isRoomForMovingUp()) {
                if (this.speedY > this.maxSpeedY) {
                    this.speedY -= this.acceleration;
                }
            } else {
                this.speedY = 0;
            }
        }, 1000 / 60);
    }

    /**
     * Perform certain actions (save whether last hit was electric shock or not) when the player is hit.
     * @param {Object} obj - Object that hits the player character.
     */
    hit(obj) {
        super.hit(obj);
        if (obj instanceof Jellyfish && obj.type === 'super-dangerous') {
            this.wasLastHitElectricShock = true;
        } else {
            this.wasLastHitElectricShock = false;
        }
    }

    /**
     * Check if the player has been idling for a long time
     * and then set the current image index for the long idle animation to 0 at a certain point.
     */
    checkLongIdle() {
        let now = new Date().getTime();
        if (now - lastInput > 15000 && now - lastInput < 15017) {
            this.currentImage = 0;
        }
    }

    /**
     * Animate the player character.
     */
    animate() {
        setStoppableInterval(() => {
            this.checkLongIdle();
            this.moveCharacter();
            this.world.camera_x = Math.round(-this.x) + 64;
        }, 1000 / 60)

        setStoppableInterval(() => this.playCharacterAnimations(), 200);
    }

    /**
     * Swim to the left.
     */
    swimLeft() {
        this.moveLeft();
        this.speedY = 0;
        this.swapOffsets(true);
        this.otherDirection = true;
    }

    /**
     * Swim to the right.
     */
    swimRight() {
        this.moveRight();
        this.speedY = 0;
        this.swapOffsets(false);
        this.otherDirection = false;
    }

    /**
     * Swim upwards.
     */
    swimUp() {
        this.speedY = 1.2;
    }

    /**
     * Swim towards the bottom of the screen.
     */
    swimDown() {
        this.speedY = -1.2;
    }

    /**
     * Check if character is currently blowing a bubble.
     * @returns {boolean} Whether the character is blowing a bubble or not.
     */
    isBlowingBubble() {
        let timePassed = new Date().getTime() - this.lastBubble;
        return timePassed < 1600;
    }

    /**
     * Check if the character is currently slapping.
     * @returns {boolean} Whether the character is slapping or not.
     */
    isSlapping() {
        let timePassed = new Date().getTime() - this.lastSlap;
        return timePassed < 1200;
    }

    /**
     * Check if the slap cooldown is currently active.
     * @returns {boolean} Whether the slap cooldown is active or not.
     */
    isSlapCooldown() {
        let timePassed = new Date().getTime() - this.lastSlap;
        return timePassed < 2000;
    }

    /**
     * Check if the player can see the final boss.
     * @returns {boolean} Whether the player can see the boss or not.
     */
    canSeeFinalBoss() {
        return Math.abs(this.x - this.world.enemies[this.world.enemies.length - 1].x) < 720;
    }

    /**
     * Check if the player is currently fighting the final boss.
     * @returns {boolean} Whether the player is fighting the boss.
     */
    isFightingFinalBoss() {
        return this.world.enemies[this.world.enemies.length - 1].hadFirstContact && this.canSeeFinalBoss();
    }

    /**
     * Remove all existing bubble timeouts.
     */
    clearBubbleTimeouts() {
        this.bubbleTimeouts.forEach(bubbleTimeout => clearTimeout(bubbleTimeout));
        this.bubbleTimeouts = [];
    }

    /**
     * Produce a bubble.
     */
    shootBubble() {
        let bubbleTimeout = setTimeout(() => {
            this.world.bubbles.push(new Bubble(this.x + this.width - this.offset.right + 8, this.y + this.height - this.offset.bottom - 52, this.lastBubbleIsPoisoned, this.otherDirection));
        }, 1600)
        this.bubbleTimeouts.push(bubbleTimeout);
    }

    /**
     * Activate bubble attack if possible.
     */
    bubbleTrap() {
        if (!this.isBlowingBubble()) {
            this.currentImage = 0;
            this.lastBubble = new Date().getTime();
            this.lastBubbleIsPoisoned = false;
            if (this.isFightingFinalBoss() && this.world.collectedPoisonBottles > 0) {
                this.lastBubbleIsPoisoned = true;
                this.world.collectedPoisonBottles--;
            }
            this.shootBubble();
            if (!muted) {
                let sound = this.AUDIO_BUBBLE_TRAP.cloneNode();
                sound.volume = assetCache.audioCache['blow'].volume;
                sound.play();
            }
        }
    }

    /**
     * Activate fin slap attack.
     */
    finSlap() {
        this.currentImage = 0;
        this.lastSlap = new Date().getTime();
        setTimeout(() => this.AUDIO_FIN_SLAP.play(), 400);
    }

    /**
     * Determine if the player is hitting an object with a slap.
     * @param {Object} obj The enemy object.
     * @returns {boolean} Whether the slap is hitting or not.
     */
    isSlapHitting(obj) {
        return  this.x + this.width - this.offset.slap.right > obj.x + obj.offset.left &&
                this.y + this.height - this.offset.bottom > obj.y + obj.offset.top &&
                this.x + this.offset.slap.left < obj.x + obj.width - obj.offset.right && 
                this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom;
    }

    /**
     * Check if the player can move to the left.
     * @returns {boolean} Whether the player can move the left or not.
     */
    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > 0;
    }

    /**
     * Check if the player can move to the right.
     * @returns {boolean} Whether the player can move the right or not.
     */
    canMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
    }

    /**
     * Check if the player can move upwards.
     * @returns {boolean} Whether the player can move upwards or not.
     */
    canMoveUp() {
        return this.world.keyboard.UP && this.isRoomForMovingUp();
    }

    /**
     * Change the hitbox when an electric shock occurred
     * because the space taken up by the player image changes significantly.
     */
    setElectricShockHitbox() {
        this.offset.top = this.height * 0.44;
        this.offset.bottom  = this.height * 0.26;
        this.offset.right = this.width * 0.4;
        this.offset.left = this.width * 0.38;
    }

    /**
     * Reset the offset to the default values.
     */
    resetOffset() {
        this.offset.top = this.defaultOffset.top;
        this.offset.bottom = this.defaultOffset.bottom;
        this.offset.right = this.defaultOffset.right;
        this.offset.left = this.defaultOffset.left;
    }

    /**
     * This function plays a snoring sound when approriate.
     */
    playSnoringSoundIfNecessary() {
        if (new Date().getTime() - lastInput >= 17000) {
            this.AUDIO_SNORING.play();
        } else {
            this.AUDIO_SNORING.pause();
        }
    }

    /**
     * Move the character depending on the current states of the player and the game.
     */
    moveCharacter() {
        if (this.isHurt()) {
            this.speed = 2;
            this.clearBubbleTimeouts();
            if (this.wasLastHitElectricShock) {
                this.setElectricShockHitbox()
            } else {
                this.resetOffset();
            }
        } else {
            this.speed = 3;
            this.resetOffset();
        }
        if (!gameHasEnded) {
            if (this.canMoveLeft()) {
                this.swimLeft();
            }
            if (this.canMoveRight()) {
               this.swimRight();
            }
            if (this.canMoveUp()) {
                this.swimUp();
            }
            if (this.world.keyboard.DOWN && this.isAboveOceanFloor()) {
                this.swimDown();
            }
            if (this.world.keyboard.D && !this.isHurt() && !this.isDead() && !this.isSlapping()) {
                this.bubbleTrap();
            } else if (this.world.keyboard.SPACE && !this.isHurt() && !this.isDead() && !this.isBlowingBubble() && !this.isSlapCooldown()) {
                this.finSlap();
            }
        }
    }

    /**
     * Play the character animations depending on the current states of the player and the game.
     */
    playCharacterAnimations() {
        this.AUDIO_SWIM.pause();
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD_POISONED);
        }
        else if (this.isHurt()) {
            if (this.wasLastHitElectricShock) {
                this.playAnimation(this.IMAGES_HURT_ELECTRIC_SHOCK);
                this.AUDIO_ELECTRIC_SHOCK.play();
            } else {
                this.playAnimation(this.IMAGES_HURT_POISONED);
            }
            this.AUDIO_HURT.play();
        }
        else if (this.isBlowingBubble()) {
            if (this.lastBubbleIsPoisoned) {
                this.playAnimation(this.IMAGES_BUBBLE_TRAP_POISONED);
            } else {
                this.playAnimation(this.IMAGES_BUBBLE_TRAP);
            }
        } else if (this.isSlapping()) {
            this.playAnimation(this.IMAGES_FIN_SLAP);
        }
        else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP) {
            if (!gameHasEnded) {
                this.playAnimation(this.IMAGES_SWIM);
                this.AUDIO_SWIM.play();
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        } else if (new Date().getTime() - lastInput > 15000 && new Date().getTime() - lastInput < 17000) {
            this.playAnimation(this.IMAGES_LONG_IDLE);
            this.AUDIO_YAWN.play();
        } else if (new Date().getTime() - lastInput >= 17000) {
            this.playAnimation(this.IMAGES_SLEEPING);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
        this.playSnoringSoundIfNecessary();
    }
}