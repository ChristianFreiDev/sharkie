class MovableObject {
    x = 0;
    y = 0;
    offsetX = 0;
    offsetY = 0;
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

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(imagePaths) {
        imagePaths.forEach(imagePath => {
            let img = new Image();
            img.src = imagePath;
            this.imageCache[imagePath] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawHitbox(ctx) {
        if (this instanceof Character || this instanceof PufferFish || this instanceof FinalBoss) {
            ctx.beginPath();
            ctx.lineWidth = "10";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x + this.offsetX, this.y + this.offsetY, this.hitboxWidth, this.hitboxHeight);
            ctx.stroke();
        }
    }

    isCollidingWith(obj) {
        return  (this.x + this.offsetX + this.hitboxWidth) >= obj.x + obj.offsetX && this.x + this.offsetX <= (obj.x + obj.offsetX + obj.hitboxWidth) && 
                (this.y + this.offsetY + this.hitboxHeight) >= obj.y + obj.offsetY && this.y + this.offsetY <= (obj.y + obj.offsetY + obj.hitboxHeight);
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
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