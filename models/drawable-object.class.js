class DrawableObject {
    x = 0;
    y = 0;
    offsetX = 0;
    offsetY = 0;
    img;
    height;
    width;
    hitboxHeight;
    hitboxWidth;
    imageCache = {};
    currentImage = 0;

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawHitbox(ctx) {
        if (debugMode) {
            if (this instanceof Character || this instanceof PufferFish || this instanceof FinalBoss || this instanceof Bubble || this instanceof Jellyfish || this instanceof Coin || this instanceof PoisonBottle) {
                ctx.beginPath();
                ctx.lineWidth = "10";
                ctx.strokeStyle = "blue";
                ctx.rect(this.x + this.offsetX, this.y + this.offsetY, this.hitboxWidth, this.hitboxHeight);
                ctx.stroke();
            }
        }
    }

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

    playAnimation(imagePaths) {
        let imageIndex = this.currentImage % imagePaths.length;
        let imagePath = imagePaths[imageIndex];
        this.img = this.imageCache[imagePath];
        this.currentImage++;
    }

    animate() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 200)
    }

    isCollidingWith(obj) {
        return  (this.x + this.offsetX + this.hitboxWidth) >= obj.x + obj.offsetX &&
                 this.x + this.offsetX <= (obj.x + obj.offsetX + obj.hitboxWidth) && 
                (this.y + this.offsetY + this.hitboxHeight) >= obj.y + obj.offsetY &&
                this.y + this.offsetY <= (obj.y + obj.offsetY + obj.hitboxHeight);
    }
}