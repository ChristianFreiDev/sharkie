/** Class representing the keyboard. */
class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;

    /**
    * This function resets the keyboard by setting all keyboard keys to false.
    */
    reset() {
        this.LEFT = false;
        this.RIGHT = false;
        this.UP = false;
        this.DOWN = false;
        this.SPACE = false;
        this.D = false;
    }
}