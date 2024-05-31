class DrawableObject {
    x = 0;
    y = 0;
    offsetX = 0;
    offsetY = 0;
    img;
    height;
    width;
    imageCache = {};

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawHitbox(ctx) {
        if (this instanceof Character || this instanceof PufferFish || this instanceof FinalBoss || this instanceof Bubble || this instanceof Jellyfish) {
            ctx.beginPath();
            ctx.lineWidth = "10";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x + this.offsetX, this.y + this.offsetY, this.hitboxWidth, this.hitboxHeight);
            ctx.stroke();
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
}