class Character extends MovableObject {

    height = 300;
    width = this.height * 0.815;
    hitboxHeight = 70;
    hitboxWidth = this.width - 110;
    offsetX = 55;
    offsetY = 150;
    speed = 3;
    speedY = 0;
    maxSpeedY = -1;
    acceleration = 0.01;
    lastBubble = 0;
    lastBubbleIsPoisoned = false;
    lastSlap = 0;
    wasLastHitElectricShock = false;
    IMAGES_IDLE = [
        'img/1.sharkie/1.idle/1.png',
        'img/1.sharkie/1.idle/2.png',
        'img/1.sharkie/1.idle/3.png',
        'img/1.sharkie/1.idle/4.png',
        'img/1.sharkie/1.idle/5.png',
        'img/1.sharkie/1.idle/6.png',
        'img/1.sharkie/1.idle/7.png',
        'img/1.sharkie/1.idle/8.png',
        'img/1.sharkie/1.idle/9.png',
        'img/1.sharkie/1.idle/10.png',
        'img/1.sharkie/1.idle/11.png',
        'img/1.sharkie/1.idle/12.png',
        'img/1.sharkie/1.idle/13.png',
        'img/1.sharkie/1.idle/14.png',
        'img/1.sharkie/1.idle/15.png',
        'img/1.sharkie/1.idle/16.png',
        'img/1.sharkie/1.idle/17.png',
        'img/1.sharkie/1.idle/18.png'
    ];
    IMAGES_LONG_IDLE = [
        'img/1.sharkie/2.long-idle/1.png',
        'img/1.sharkie/2.long-idle/2.png',
        'img/1.sharkie/2.long-idle/3.png',
        'img/1.sharkie/2.long-idle/4.png',
        'img/1.sharkie/2.long-idle/5.png',
        'img/1.sharkie/2.long-idle/6.png',
        'img/1.sharkie/2.long-idle/7.png',
        'img/1.sharkie/2.long-idle/8.png',
        'img/1.sharkie/2.long-idle/9.png',
        'img/1.sharkie/2.long-idle/10.png',
        'img/1.sharkie/2.long-idle/11.png',
        'img/1.sharkie/2.long-idle/12.png',
        'img/1.sharkie/2.long-idle/13.png',
        'img/1.sharkie/2.long-idle/14.png'
    ];
    IMAGES_SLEEPING = [
        'img/1.sharkie/2.long-idle/11.png',
        'img/1.sharkie/2.long-idle/12.png',
        'img/1.sharkie/2.long-idle/13.png',
        'img/1.sharkie/2.long-idle/14.png'
    ];
    IMAGES_SWIM = [
        'img/1.sharkie/3.swim/1.png',
        'img/1.sharkie/3.swim/2.png',
        'img/1.sharkie/3.swim/3.png',
        'img/1.sharkie/3.swim/4.png',
        'img/1.sharkie/3.swim/5.png',
        'img/1.sharkie/3.swim/6.png',
    ];
    IMAGES_DEAD_POISONED = [
        'img/1.sharkie/6.dead/1.poisoned/1.png',
        'img/1.sharkie/6.dead/1.poisoned/2.png',
        'img/1.sharkie/6.dead/1.poisoned/3.png',
        'img/1.sharkie/6.dead/1.poisoned/4.png',
        'img/1.sharkie/6.dead/1.poisoned/5.png',
        'img/1.sharkie/6.dead/1.poisoned/6.png',
        'img/1.sharkie/6.dead/1.poisoned/7.png',
        'img/1.sharkie/6.dead/1.poisoned/8.png',
        'img/1.sharkie/6.dead/1.poisoned/9.png',
        'img/1.sharkie/6.dead/1.poisoned/10.png',
        'img/1.sharkie/6.dead/1.poisoned/11.png',
        'img/1.sharkie/6.dead/1.poisoned/12.png'
    ];
    IMAGES_HURT_POISONED = [
        'img/1.sharkie/5.hurt/1.poisoned/1.png',
        'img/1.sharkie/5.hurt/1.poisoned/2.png',
        'img/1.sharkie/5.hurt/1.poisoned/3.png',
        'img/1.sharkie/5.hurt/1.poisoned/4.png'
    ];
    IMAGES_HURT_ELECTRIC_SHOCK = [
        'img/1.sharkie/5.hurt/2.electric-shock/1.png',
        'img/1.sharkie/5.hurt/2.electric-shock/2.png'
    ];
    IMAGES_BUBBLE_TRAP = [
        'img/1.sharkie/4.attack/bubble-trap/op1/1.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/2.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/3.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/4.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/5.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/6.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/7.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/8.png'
    ];
    IMAGES_BUBBLE_TRAP_POISONED = [
        'img/1.sharkie/4.attack/bubble-trap/poisoned/1.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/2.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/3.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/4.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/5.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/6.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/7.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/8.png'
    ];
    IMAGES_FIN_SLAP = [
        'img/1.sharkie/4.attack/fin-slap/1.png',
        'img/1.sharkie/4.attack/fin-slap/2.png',
        'img/1.sharkie/4.attack/fin-slap/3.png',
        'img/1.sharkie/4.attack/fin-slap/4.png',
        'img/1.sharkie/4.attack/fin-slap/5.png',
        'img/1.sharkie/4.attack/fin-slap/6.png',
    ];
    world;

    constructor() {
        super().loadImage('img/1.sharkie/1.idle/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD_POISONED);
        this.loadImages(this.IMAGES_HURT_POISONED);
        this.loadImages(this.IMAGES_HURT_ELECTRIC_SHOCK);
        this.loadImages(this.IMAGES_BUBBLE_TRAP);
        this.loadImages(this.IMAGES_BUBBLE_TRAP_POISONED);
        this.loadImages(this.IMAGES_FIN_SLAP);
        this.applyGravity();
        this.animate();
    }

    isAboveOceanFloor() {
        return this.y < 220;
    }

    isRoomForMovingUp() {
        return (this.y - this.speedY) > -150;
    }

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

    hit(obj) {
        super.hit(obj);
        if (obj instanceof Jellyfish && obj.type === 'super-dangerous') {
            this.wasLastHitElectricShock = true;
        } else {
            this.wasLastHitElectricShock = false;
        }
    }

    checkLongIdle() {
        let now = new Date().getTime();
        if (now - lastInput > 15000 && now - lastInput < 15017) {
            this.currentImage = 0;
        }
    }

    animate() {
        setStoppableInterval(() => {
            this.checkLongIdle();
            this.moveCharacter();
            this.world.camera_x = -this.x + 64;
        }, 1000 / 60)

        setStoppableInterval(() => this.playCharacterAnimations(), 200);
    }

    swimLeft() {
        this.moveLeft();
        this.speedY = 0;
        this.otherDirection = true;
    }

    swimRight() {
        this.moveRight();
        this.speedY = 0;
        this.otherDirection = false;
    }

    swimUp() {
        this.speedY = 1;
    }

    swimDown() {
        this.speedY = -1;
    }

    isBlowingBubble() {
        let timePassed = new Date().getTime() - this.lastBubble;
        return timePassed < 1600;
    }

    isSlapping() {
        let timePassed = new Date().getTime() - this.lastSlap;
        return timePassed < 1200;
    }

    isSlapCooldown() {
        let timePassed = new Date().getTime() - this.lastSlap;
        return timePassed < 2000;
    }

    canSeeFinalBoss() {
        return Math.abs(this.x - this.world.enemies[this.world.enemies.length - 1].x) < 720;
    }

    isFightingFinalBoss() {
        return this.world.enemies[this.world.enemies.length - 1].hadFirstContact && this.canSeeFinalBoss();
    }

    shootBubble(isPoisoned) {
        setTimeout(() => {
            this.world.bubbles.push(new Bubble(this.x + this.offsetX + this.hitboxWidth + 5, this.y + + this.offsetY + this.hitboxHeight / 2 - 20, isPoisoned));
        }, 1600)
    }

    bubbleTrap() {
        if (!this.isBlowingBubble()) {
            this.currentImage = 0;
            this.lastBubble = new Date().getTime();
            this.lastBubbleIsPoisoned = false;
            if (this.isFightingFinalBoss() && this.world.collectedPoisonBottles > 0) {
                this.lastBubbleIsPoisoned = true;
                this.world.collectedPoisonBottles--;
            }
            this.shootBubble(this.lastBubbleIsPoisoned);
        }
    }

    finSlap() {
        this.currentImage = 0;
        this.lastSlap = new Date().getTime();
    }

    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > 0;
    }

    canMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
    }

    canMoveUp() {
        return this.world.keyboard.UP && this.isRoomForMovingUp();
    }

    moveCharacter() {
        if (this.isHurt()) {
            this.speed = 1.5;
        } else {
            this.speed = 3;
        }
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
        if (this.world.keyboard.D && !this.isHurt() && !this.isDead()) {
            this.bubbleTrap();
        }
        if (this.world.keyboard.SPACE && !this.isHurt() && !this.isDead() && !this.isSlapCooldown()) {
            this.finSlap();
        }
    }

    playCharacterAnimations() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD_POISONED);
        }
        else if (this.isHurt()) {
            if (this.wasLastHitElectricShock) {
                this.playAnimation(this.IMAGES_HURT_ELECTRIC_SHOCK);
            } else {
                this.playAnimation(this.IMAGES_HURT_POISONED);
            }
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
            this.playAnimation(this.IMAGES_SWIM);
        } else if (new Date().getTime() - lastInput > 15000 && new Date().getTime() - lastInput < 17000) {
            this.playAnimation(this.IMAGES_LONG_IDLE);
        } else if (new Date().getTime() - lastInput >= 17000) {
            this.playAnimation(this.IMAGES_SLEEPING);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }
}