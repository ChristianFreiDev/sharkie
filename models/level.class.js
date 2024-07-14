/** Class representing a level. */
class Level {
    backgroundObjects;
    enemies;
    level_end_x = 720 * 3;

    /**
     * Create a level.
     * @param {Array} backgroundObjects - The background objects of the level.
     * @param {Array} enemies - The enemies in the level.
     */
    constructor(backgroundObjects, enemies) {
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
    }
}