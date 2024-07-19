/** Class representing the game world. */
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
        new Light('img/3.background/layers/1.light/1.webp', 0),
        new Light('img/3.background/layers/1.light/2.webp', 719),
    ];
    AUDIO_AMBIENCE = assetCache.audioCache['ambience'].file;
    AUDIO_COLLECT = assetCache.audioCache['collect'].file;
    AUDIO_ENEMY_HURT = assetCache.audioCache['enemy-hurt'].file;
    AUDIO_GAME_OVER = assetCache.audioCache['game-over'].file;
    AUDIO_YAY = assetCache.audioCache['yay'].file;
    AUDIO_POP = assetCache.audioCache['pop'].file;
    camera_x = 0;
    statusBar = new StatusBar();
    debugMode = true;

    /**
     * Create a world.
     * @param {Object} canvas - The canvas object.
     * @param {Object} keyboard - The keyboard object.
     * @param {Object} level - The level object.
     */
    constructor(canvas, keyboard, level) {
        this.level = level;
        this.backgroundObjects = level.backgroundObjects;
        this.enemies = level.enemies;
        this.coins = level.coins;
        this.poisonBottles = level.poisonBottles;
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
    }

    /**
     * Set the world by adding the world to the character and the status bar.
     */
    setWorld() {
        this.character.world = this;
        this.statusBar.world = this;
    }

    /**
     * Create a certain amount of confetti.
     */
    fillConfetti() {
        for (let i = 0; i < this.confettiAmount; i++) {
            this.confetti.push(new Confetto(360, 640));
        }
    }

    /**
     * Check if the game is over because the character has no energy left.
     * @returns {boolean} Whether the game is over or not.
     */
    isGameOver() {
        return this.character.energy <= 0;
    }

    /**
     * Check if the game has been won because the final boss has no energy left.
     * @returns {boolean} Whether the game has been won.
     */
    isGameWon() {
        return this.enemies[this.enemies.length - 1].energy <= 0;
    }

    /**
     * Run the world.
     */
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

    /**
     * Play the appropriate sound when a coin or a poison bottle is collected.
     */
    playCollectSound() {
        if (!muted) {
            let sound = this.AUDIO_COLLECT.cloneNode();
            sound.volume = assetCache.audioCache['collect'].volume;
            sound.play();
        }
    }

    /**
     * Check for collisions (of the player character) with enemies.
     */
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

    /**
     * Check for collisions (of the player character) with coins.
     */
    checkCoinCollisions() {
        this.level.coins.forEach((coin) => {
            if (coin.isCollidingWith(this.character)) {
                this.coins.splice(this.coins.indexOf(coin), 1);
                this.collectedCoins++;
                this.playCollectSound();
            }
        });
    }

    /**
     * Check for collisions (of the player character) with poison bottles.
     */
    checkPoisonBottleCollisions() {
        this.level.poisonBottles.forEach((poisonBottle) => {
            if (poisonBottle.isCollidingWith(this.character)) {
                this.poisonBottles.splice(this.poisonBottles.indexOf(poisonBottle), 1);
                this.collectedPoisonBottles++;
                this.playCollectSound();
            }
        });
    }

    /**
     * Check for any collisions.
     */
    detectCollisions() {
        this.checkEnemyCollisions();
        this.checkCoinCollisions();
        this.checkPoisonBottleCollisions();
    }

    /**
     * Draw the world.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(Math.round(this.camera_x), 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisonBottles);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.bubbles);

        this.ctx.translate(Math.round(this.camera_x) / 12, 0);
        this.addObjectsToMap(this.lights);
        this.ctx.translate(Math.round(-this.camera_x) / 12, 0);

        this.ctx.translate(Math.round(-this.camera_x), 0);
        this.addToMap(this.statusBar);
        this.addObjectsToMap(this.confetti);
        this.ctx.translate(Math.round(this.camera_x), 0);
        
        this.ctx.translate(Math.round(-this.camera_x), 0);
        
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    /**
     * Add an object to the game map.
     * @param {Object} movableObject - An object.
     */
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

    /**
     * Add multiple objects to the game map.
     * @param {Array} objects 
     */
    addObjectsToMap(objects) {
        objects.forEach(object =>  {
            this.addToMap(object);
        })
    }

    /**
     * Flip an image (required when an object faces a different direction).
     * @param {Object} movableObject - An object.
     */
    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }

    /**
     * Flip an image back (required when an object faces a different direction and has just been drawn).
     * @param {Object} movableObject 
     */
    flipImageBack(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }
}