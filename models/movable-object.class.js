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
        return  (this.x + this.hitboxWidth + this.offsetX) >= obj.x && this.x <= (obj.x + obj.hitboxWidth + this.offsetX) && 
                (this.y + this.offsetY + this.hitboxHeight) >= obj.y &&
                (this.y + this.offsetY) <= (obj.y + obj.hitboxHeight);
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