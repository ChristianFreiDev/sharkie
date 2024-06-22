class PufferFish extends MovableObject {

    height = 99;
    width = this.height * 1.217171717171717;
    hitboxHeight = 50;
    hitboxWidth = this.width - 42;
    offsetY = 15;
    offsetX = 15;
    energy = 15;
    speedY = 0;
    firstHit;

    constructor(type, x, y) {
        super().loadImage(`img/2.enemies/1.puffer-fish/1.swim/${type}.swim1.png`);
        this.IMAGES_SWIM = [
            `img/2.enemies/1.puffer-fish/1.swim/${type}.swim1.png`,
            `img/2.enemies/1.puffer-fish/1.swim/${type}.swim2.png`,
            `img/2.enemies/1.puffer-fish/1.swim/${type}.swim3.png`,
            `img/2.enemies/1.puffer-fish/1.swim/${type}.swim4.png`,
            `img/2.enemies/1.puffer-fish/1.swim/${type}.swim5.png`,
        ];
        this.IMAGES_TRANSITION = [
            `img/2.enemies/1.puffer-fish/2.transition/${type}.transition1.png`,
            `img/2.enemies/1.puffer-fish/2.transition/${type}.transition2.png`,
            `img/2.enemies/1.puffer-fish/2.transition/${type}.transition3.png`,
            `img/2.enemies/1.puffer-fish/2.transition/${type}.transition4.png`,
            `img/2.enemies/1.puffer-fish/2.transition/${type}.transition5.png`,
        ];
        this.IMAGES_BUBBLE_SWIM = [
            `img/2.enemies/1.puffer-fish/3.bubbleswim/${type}.bubbleswim2.png`,
            `img/2.enemies/1.puffer-fish/3.bubbleswim/${type}.bubbleswim3.png`,
            `img/2.enemies/1.puffer-fish/3.bubbleswim/${type}.bubbleswim4.png`,
            `img/2.enemies/1.puffer-fish/3.bubbleswim/${type}.bubbleswim1.png`,
            `img/2.enemies/1.puffer-fish/3.bubbleswim/${type}.bubbleswim5.png`,
        ];
        this.IMAGES_DEAD = [
            `img/2.enemies/1.puffer-fish/4.dead/${type}.png`
        ];
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BUBBLE_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x
        this.y = y;
        this.speed = 0.15 + Math.random() * 0.5;
        this.applyGravity();
        this.animate();
    }

    hit(obj) {
        super.hit(obj);
        if (!this.firstHit) {
            this.firstHit = new Date().getTime();
        }
    }

    hasBeenHurt() {
        if (this.firstHit) {
            let timePassed = new Date().getTime() - this.firstHit;
            if (timePassed >= 1000) {
                this.hitboxHeight = 75;
                this.offsetY = 12;
                return true;
            }
        } else {
            return false;
        }
    }

    applyGravity() {
        setStoppableInterval(() =>  {
            this.y -= this.speedY;
        }, 1000 / 60);
    }

    animate() {
        setStoppableInterval(() => {
            if (!this.isDead()) {
                this.moveLeft();
            } else {
                this.speedY = 0.3;
            }
        }, 1000 / 60)

        setStoppableInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.hasBeenHurt()) {
                this.playAnimation(this.IMAGES_BUBBLE_SWIM);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_TRANSITION);
            } else {
                this.playAnimation(this.IMAGES_SWIM);
            }
        }, 200)
    }

}