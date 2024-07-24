/** Class representing a movable object. */
class MovableObject extends DrawableObject {
    x = 0;
    y = 0;
    img;
    height;
    width;
    speed;
    otherDirection = false;
    energy = 100;
    lastHit;
    hasJustDied;

    /**
     * Kill the movable object.
     */
    die() {
        this.energy = 0;
        if (!this.hasJustDied) {
            this.hasJustDied = true;
            this.currentImage = 0;
        }
    }

    /**
     * Decrease this object's energy if it takes a hit from another object.
     * @param {Object} obj - Another object.
     */
    hit(obj) {
        if (obj.energy != 0) {
            this.energy -= 5;
            if (this.energy <= 0) {
                this.die()
            } else {
                this.lastHit = new Date().getTime();
            }
        } 
    }

    /**
     * Check if the movable object is currently hurt.
     * @returns {boolean} Whether the movable object is hurt or not.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        return timePassed < this.animationIntervalLength * 5;
    }

    /**
     * Check if the movable object is dead.
     * @returns {boolean} Whether the movable object is dead or not.
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Move to the left.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Move to the right.
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Play a sound.
     * @param {HTMLAudioElement} sound - The sound.
     */
    playSound(sound) {
        if (isAudioEnabled) {
            sound.play();
        }
    }
    
    /**
     * Pause a sound.
     * @param {HTMLAudioElement} sound - The sound.
     */
    pauseSound(sound) {
        if (isAudioEnabled) {
            sound.pause();
        }
    }
}