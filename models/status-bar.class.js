class StatusBar extends DrawableObject {
    IMAGES = [
        'img/4.score/2.elements/coin.png',
        'img/4.score/2.elements/heart.png',
        'img/4.score/2.elements/poison.png',
    ];

    constructor() {
        super().loadImage('img/4.score/2.elements/heart.png');
        this.loadImages(this.IMAGES);
        this.x = 20;
        this.y = 10;
        this.width = 50;
        this.height = 50;
        this.setHealthPercentage(100);
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.imageCache['img/4.score/2.elements/coin.png'], this.x + 80, this.y + 5, this.width, this.height);
        ctx.drawImage(this.imageCache['img/4.score/2.elements/poison.png'], this.x + 160, this.y, this.width, this.height);
    }

    setHealthPercentage(percentage) {
        this.percentage = Math.ceil(percentage);
    }
}