class World {
    canvas;
    ctx;
    keyboard;
    level;
    backgroundObjects;
    character = new Character();
    enemies;
    bubbles = [];
    coins;
    collectedCoins = 0;
    poisonBottles;
    collectedPoisonBottles = 0;
    confetti = [];
    confettiAmount = 200;
    lights = [
        new Light('img/3.background/layers/1.light/1.png', 0),
        new Light('img/3.background/layers/1.light/2.png', 719),
    ];
    AUDIO_AMBIENCE = new Audio('audio/ambience/ambience.mp3');
    AUDIO_COLLECT = new Audio('audio/collect/collect.wav');
    AUDIO_ENEMY_HURT = new Audio('audio/hurt/enemy-hurt.wav');
    AUDIO_GAME_OVER = new Audio('audio/game-over/game-over.mp3');
    AUDIO_YAY = new Audio('audio/win/yay.wav');
    AUDIO_POP = new Audio('audio/win/pop.wav');
    camera_x = 0;
    statusBar = new StatusBar();
    debugMode = true;

    constructor(canvas, keyboard, level) {
        this.level = level;
        this.backgroundObjects = level.backgroundObjects;
        this.enemies = level.enemies;
        this.coins = level.coins;
        this.poisonBottles = level.poisonBottles;
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.AUDIO_ENEMY_HURT.volume = 0.3;
        this.setWorld();
        this.draw();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        this.statusBar.world = this;
    }

    fillConfetti() {
        for (let i = 0; i < this.confettiAmount; i++) {
            this.confetti.push(new Confetto(360, 640));
        }
    }

    isGameOver() {
        return this.character.energy <= 0;
    }

    isGameWon() {
        return this.enemies[this.enemies.length - 1].energy <= 0;
    }

    run() {
        setStoppableInterval(() => {
            this.detectCollisions();
            if (!gameHasEnded) {
                if (this.isGameOver()) {
                    gameOver();
                    gameHasEnded = true;
                }
                if (this.isGameWon()) {
                    youWin();
                    gameHasEnded = true;
                }
            }
        }, 200);
    }

    playCollectSound() {
        if (!muted) {
            let sound = this.AUDIO_COLLECT.cloneNode();
            sound.volume = 0.15;
            sound.play();
        }
    }

    checkEnemyCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof FinalBoss) {
                enemy.isBiting = false;
            }
            if (this.character.isSlapping() && this.character.isSlapHitting(enemy) && enemy instanceof PufferFish) {
                enemy.hit(this.character);
            }
            if (this.character.isCollidingWith(enemy)) {
                if (!(this.character.isSlapping() && enemy instanceof PufferFish)) {
                    this.character.hit(enemy);
                    this.statusBar.setHealthPercentage(this.character.energy);
                }
                if (enemy instanceof FinalBoss) {
                    enemy.isBiting = true;
                }
            }
            this.bubbles.forEach((bubble) => {
                if (bubble.isCollidingWith(enemy)) {
                    if (enemy.energy > 0) {
                        enemy.hit(bubble);
                        if (enemy instanceof PufferFish) {
                            this.AUDIO_ENEMY_HURT.play();
                        }
                        this.bubbles.splice(this.bubbles.indexOf(bubble), 1);
                        if (!muted) {
                            bubble.AUDIO_BUBBLE_POP.play();
                        }
                    }
                }
            })
        });
    }

    checkCoinCollisions() {
        this.level.coins.forEach((coin) => {
            if (coin.isCollidingWith(this.character)) {
                this.coins.splice(this.coins.indexOf(coin), 1);
                this.collectedCoins++;
                this.playCollectSound();
            }
        });
    }

    checkPoisonBottleCollisions() {
        this.level.poisonBottles.forEach((poisonBottle) => {
            if (poisonBottle.isCollidingWith(this.character)) {
                this.poisonBottles.splice(this.poisonBottles.indexOf(poisonBottle), 1);
                this.collectedPoisonBottles++;
                this.playCollectSound();
            }
        });
    }

    detectCollisions() {
        this.checkEnemyCollisions();
        this.checkCoinCollisions();
        this.checkPoisonBottleCollisions();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisonBottles);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.bubbles);

        this.ctx.translate(this.camera_x / 12, 0);
        this.addObjectsToMap(this.lights);
        this.ctx.translate(-this.camera_x / 12, 0);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addObjectsToMap(this.confetti);
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