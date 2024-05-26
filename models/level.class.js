class Level {
    backgroundObjects;
    enemies;
    level_end_x = 720 * 3;

    constructor(backgroundObjects, enemies) {
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
    }
}