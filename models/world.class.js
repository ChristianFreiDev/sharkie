class World {
    canvas;
    ctx;
    keyboard;
    level = level1;
    backgroundObjects = level1.backgroundObjects;
    character = new Character();
    enemies = level1.enemies;
    bubbles = [];
    lights = [
        new Light('img/3.background/layers/1.light/1.png', 0),
        new Light('img/3.background/layers/1.light/2.png', 720),
    ];
    camera_x = 0;
    statusBar = new StatusBar();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setStoppableInterval(() => {
            this.detectCollisions();
        }, 200);
    }

    detectCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isCollidingWith(enemy)) {
                if (this.character.isSlapping()) {
                    enemy.hit(this.character);
                } else {
                    this.character.hit(enemy);
                    this.statusBar.setHealthPercentage(this.character.energy);
                }
            }
            this.bubbles.forEach((bubble) => {
                if (bubble.isCollidingWith(enemy)) {
                    enemy.hit(bubble);
                }
            })
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.bubbles);

        this.ctx.translate(this.camera_x / 12, 0);
        this.addObjectsToMap(this.lights);
        this.ctx.translate(-this.camera_x / 12, 0);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);
        
        this.ctx.translate(-this.camera_x, 0);
        
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        }
        movableObject.draw(this.ctx);
        movableObject.drawHitbox(this.ctx);
        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }

    addObjectsToMap(objects) {
        objects.forEach(object =>  {
            this.addToMap(object);
        })
    }

    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }

    flipImageBack(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }
}