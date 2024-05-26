class World {
    canvas;
    ctx;
    keyboard;
    backgroundObjects = [
        new BackgroundObject('img/3.background/layers/5.water/d1.png', 0),
        new BackgroundObject('img/3.background/layers/4.layer2/d1.png', 0),
        new BackgroundObject('img/3.background/layers/3.layer1/d1.png', 0),
        new BackgroundObject('img/3.background/layers/2.floor/d1.png', 0)
    ];
    character = new Character();
    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish()
    ];
    lights = [
        new Light()
    ];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        console.log(this.character);
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.lights);
        
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        }
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
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