class DrawableObject {
    x = 0;
    y = 0;
    offsetX = 0;
    offsetY = 0;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
    img;
    height;
    width;
    imageCache = {};
    currentImage = 0;

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawOutline(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "10";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    drawSlapHitbox(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "10";
        ctx.strokeStyle = "yellow";
        ctx.rect(this.x + this.offset.slap.left, this.y + this.offset.top, this.width - this.offset.left - this.offset.slap.right, this.height - this.offset.top - this.offset.bottom);
        ctx.stroke();
    }

    swapOffsets(newOtherDirection) {
        if (newOtherDirection != this.otherDirection) {
            let tempOffsetLeft = this.offset.left;
            this.offset.left = this.offset.right;
            this.offset.right = tempOffsetLeft;
            if (this instanceof Character) {
                let tempSlapOffsetLeft = this.offset.slap.left;
                this.offset.slap.left = this.offset.slap.right;
                this.offset.slap.right = tempSlapOffsetLeft;
            }
        }
    }

    swapOffsetsForDrawingHitbox() {
        if (this.otherDirection) {
            let tempOffsetLeft = this.offset.left;
            this.offset.left = this.offset.right;
            this.offset.right = tempOffsetLeft;
            if (this instanceof Character) {
                let tempSlapOffsetLeft = this.offset.slap.left;
                this.offset.slap.left = this.offset.slap.right;
                this.offset.slap.right = tempSlapOffsetLeft;
            }
        }
    }

    drawHitbox(ctx) {
        if (debugMode) {
            if (this instanceof Character || this instanceof PufferFish || this instanceof FinalBoss || this instanceof Bubble || this instanceof Jellyfish || this instanceof Coin || this instanceof PoisonBottle) {
                this.drawOutline(ctx);
                this.swapOffsetsForDrawingHitbox();
                if (this instanceof Character) {
                    this.drawSlapHitbox(ctx);
                }
                ctx.beginPath();
                ctx.lineWidth = "10";
                ctx.strokeStyle = "red";
                ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.left - this.offset.right, this.height - this.offset.top - this.offset.bottom);
                ctx.stroke();
                this.swapOffsetsForDrawingHitbox();
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
        return  this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
                this.y + this.height - this.offset.bottom > obj.y + obj.offset.top &&
                this.x + this.offset.left < obj.x + obj.width - obj.offset.right && 
                this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom;
    }
}