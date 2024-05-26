class MovableObject {
    x = 0;
    y = 200;
    img;
    height;
    width;
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

    playAnimation(imagePaths) {
        let imageIndex = this.currentImage % imagePaths.length;
        let imagePath = imagePaths[imageIndex];
        this.img = this.imageCache[imagePath];
        this.currentImage++;
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    moveRight() {
        console.log('moving right');
    }
}