class Light extends MovableObject {
    height = 480;
    width = 720;
    constructor() {
        super().loadImage('img/3.background/layers/1.light/1.png');
        this.x = 0;
        this.y = 0;
    }
}