class Confetto extends DrawableObject {
    height = 8;
    width = 4;
    colors = ['red', 'green', 'yellow', 'orange', 'purple', 'blue', 'pink'];
    speed = Math.random() * 3.5 * (Math.round(Math.random()) ? 1 : -1);
    minSpeedY = 20;
    maxSpeedY = 32;
    speedY = Math.random() * (this.minSpeedY - this.maxSpeedY) + this.minSpeedY;
    acceleration = 0.3;

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.color = this.colors[Math.floor(Math.random() * (this.colors.length - 1))];
        this.applyGravity();
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    applyGravity() {
        setStoppableInterval(() => {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            this.x -= this.speed;
        }, 1000 / 60);
    }
}