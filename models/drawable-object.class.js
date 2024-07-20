/** Class representing a drawable object. */
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

    /**
     * Draw the object.
     * @param {Object} ctx - The canvas context.
     */
    draw(ctx) {
        ctx.drawImage(this.img, Math.round(this.x), Math.round(this.y), this.width, this.height);
    }

    /**
     * Draw the image outline (for debugging only).
     * @param {Object} ctx - The canvas context.
     */
    drawOutline(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "10";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    /**
     * Swap the hitbox offsets (and slap hitbox offsets for the character) when the direction changes.
     * @param {boolean} newOtherDirection 
     */
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

    /**
     * Set the hitbox offsets (and slap hitbox offsets for the character) depending on the current direction.
     * This is so that the hitboxes are drawn correctly despite image flipping and translation.
     */
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

    /**
     * Draw the hitbox - for debugging only.
     */
    drawHitbox() {
        ctx.beginPath();
        ctx.lineWidth = "10";
        ctx.strokeStyle = "red";
        ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.left - this.offset.right, this.height - this.offset.top - this.offset.bottom);
        ctx.stroke();
    }

    /**
     * Draw the hitbox (and slap hitbox for the character) - for debugging only.
     * @param {Object} ctx - The canvas context.
     */
    drawHitboxes(ctx) {
        if (debugMode) {
            if (this instanceof Character || this instanceof PufferFish || this instanceof FinalBoss || this instanceof Bubble || this instanceof Jellyfish || this instanceof Coin || this instanceof PoisonBottle) {
                this.drawOutline(ctx);
                this.swapOffsetsForDrawingHitbox();
                if (this instanceof Character) {
                    this.drawSlapHitbox(ctx);
                }
                this.drawHitbox();
                this.swapOffsetsForDrawingHitbox();
            }
        }
    }

    /**
     * Load the initial image.
     * @param {string} imagePath - The path to the image.
     */
    loadImage(imagePath) {
        this.img = assetCache.imageCache[imagePath];
    }

    /**
     * Play an animation consisting of several images.
     * @param {Array} imagePaths - A collection of image paths.
     */
    playAnimation(imagePaths) {
        let imageIndex = this.currentImage % imagePaths.length;
        let imagePath = imagePaths[imageIndex];
        this.img = assetCache.imageCache[imagePath];
        this.currentImage++;
    }

    /**
     * Animate the object by playing an animation of its images.
     */
    animate() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 200)
    }

    /**
     * Check if this object is colliding with another object.
     * @param {Object} obj - Another object.
     * @returns {boolean} Whether this object is colliding with the other object or not.
     */
    isCollidingWith(obj) {
        return  this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
                this.y + this.height - this.offset.bottom > obj.y + obj.offset.top &&
                this.x + this.offset.left < obj.x + obj.width - obj.offset.right && 
                this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom;
    }
}