class MovableObject extends DrawableObject {
    x = 0;
    y = 0;
    img;
    height;
    width;
    hitboxHeight;
    hitboxWidth;
    speed;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
    energy = 100;
    lastHit;
    hasJustDied;

    isCollidingWith(obj) {
        return  (this.x + this.offsetX + this.hitboxWidth) >= obj.x + obj.offsetX &&
                 this.x + this.offsetX <= (obj.x + obj.offsetX + obj.hitboxWidth) && 
                (this.y + this.offsetY + this.hitboxHeight) >= obj.y + obj.offsetY &&
                this.y + this.offsetY <= (obj.y + obj.offsetY + obj.hitboxHeight);
    }

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

    playAnimation(imagePaths) {
        let imageIndex = this.currentImage % imagePaths.length;
        let imagePath = imagePaths[imageIndex];
        this.img = this.imageCache[imagePath];
        this.currentImage++;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }
}