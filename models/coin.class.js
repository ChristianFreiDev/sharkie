class Coin extends DrawableObject {

    height = 48;
    width = this.height * 1.064516129032258;
    hitboxHeight = 48;
    hitboxWidth = this.width;

    IMAGES = [
        'img/4.score/1.coins/1.png',
        'img/4.score/1.coins/2.png',
        'img/4.score/1.coins/3.png',
        'img/4.score/1.coins/4.png'
    ];

    constructor(x, y) {
        super().loadImage('img/4.score/1.coins/1.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }
}