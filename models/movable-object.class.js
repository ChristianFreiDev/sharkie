class MovableObject extends DrawableObject {
    x = 0;
    y = 0;
    img;
    height;
    width;
    speed;
    otherDirection = false;
    energy = 100;
    lastHit;
    hasJustDied;

    die() {
        this.energy = 0;
        if (!this.hasJustDied) {
            this.hasJustDied = true;
            this.currentImage = 0;
        }
    }

    hit(obj) {
        if (obj.energy != 0) {
            this.energy -= 5;
            if (this.energy <= 0) {
                this.die()
            } else {
                this.lastHit = new Date().getTime();
            }
        } 
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        return timePassed < 1000;
    }

    isDead() {
        return this.energy == 0;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }
}