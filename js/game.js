let canvas;
let world;
let lastInput;
let keyboard = new Keyboard();
let debugMode = false;
let muted = false;
let gameHasEnded = true;
let levels = [level1, level2, level3];
let currentLevelIndex = 0;
let currentLevel = level1;
let assetCache = new AssetCache();
let progress = 0;
let animationIntervalLength = 150;

/**
 * This function initializes the game by loading the assets and setting up the game.
 */
async function init() {
    await assetCache.loadAssets();
    disableContextmenu();
    changeInstructionSize();
    setupGame();
}

/**
 * This function sets up the game by loading the level, creating the world,
 * pausing the game after that (thus creating a start screen) and binding button events.
 */
function setupGame() {
    canvas = document.getElementById('canvas');
    loadCurrentLevel();
    world = new World(canvas, keyboard, currentLevel);
    pauseGame();
    bindButtonEvents();
}

/**
 * This function shows the start button (and hides the instructions).
 */
function showStartButton() {
    changeMultipleDisplayProperties(['instructions', 'instructions-button'], 'none');
    changeDisplayProperty('start-button', 'flex');
}

/**
 * This function pauses the game.
 */
function pauseGame() {
    muteOrUnmuteGameAudio(true);
    stopAllIntervals();
}

/**
 * This function hides the footer links container if it overlaps with the canvas and the game is running.
 */
function hideOrShowFooterLinksContainer() {
    let footerLinksContainer = document.getElementById('game-footer-links-container');
    if (isFooterLinksContainerOverlapping() && gameHasEnded == false) {
        footerLinksContainer.style.visibility = 'hidden';
    } else {
        footerLinksContainer.style.visibility = 'visible';
    }
}

/**
 * This function starts the game.
 */
function startGame() {
    lastInput = new Date().getTime();
    resumeAllIntervals();
    changeDisplayProperty('start-button', 'none');
    changeDisplayProperty('credits-button', 'none');
    changeDisplayProperty('info-button', 'flex');
    gameHasEnded = false;
    hideOrShowFooterLinksContainer();
    if (isTouchscreen()) {
        showTouchscreenButtons();
    };
    if (!muted) {
        muteOrUnmuteGameAudio(false);
    }
    resumeAmbienceSound();
}

/**
 * This function resumes the game.
 */
function resumeGame() {
    lastInput = new Date().getTime();
    if (!muted) {
        muteOrUnmuteGameAudio(false);
        if (!gameHasEnded) {
            resumeAmbienceSound();
        }
    }
    resumeAllIntervals();
}

/**
 * This function displays the "Game Over" screen.
 */
function gameOver() {
    gameHasEnded = true;
    setTimeout(() => {
        world.AUDIO_GAME_OVER.play();
    }, animationIntervalLength * 3)
    setTimeout(() => {
        pauseGame();
        changeDisplayProperty('game-over-screen', 'block');
        hideTouchscreenButtons();
        hideOrShowFooterLinksContainer();
    }, animationIntervalLength * 8);
}

/**
 * This function plays the corresponding sounds when the player wins.
 */
function playWinSounds() {
    world.AUDIO_YAY.play();
    world.AUDIO_POP.play();
}

/**
 * This function performs the corresponding actions when the player wins.
 */
function youWin() {
    gameHasEnded = true;
    setTimeout(() => {
        playWinSounds();
        pauseGame();
        world.fillConfetti();
        changeDisplayProperty('you-win-screen', 'block');
        let keepPlayingButton = document.getElementById('keep-playing-button');
        if (currentLevelIndex === levels.length - 1) {
            keepPlayingButton.innerText = 'Play again';
        } else {
            keepPlayingButton.innerText = 'Next level';
        }
        hideTouchscreenButtons();
        hideOrShowFooterLinksContainer();
    }, animationIntervalLength * 9);
}

/**
 * This functions hides the screens displayed at the end of a game so that a new game can start.
 */
function hideEndOfGameScreen() {
    changeMultipleDisplayProperties(['game-over-screen', 'you-win-screen'], 'none');
}

/**
 * This function starts a new game.
 */
function playAgain() {
    gameHasEnded = false;
    lastInput = new Date().getTime();
    stopAllIntervals();
    intervals = [];
    confetti = [];
    loadCurrentLevel();
    world = new World(canvas, keyboard, currentLevel);
    resumeAmbienceSound();
    if (!muted) {
        muteOrUnmuteGameAudio(false);
    } else {
        muteOrUnmuteAllAudio(true);
    }
    muteFinalBossSound();
    hideEndOfGameScreen();
    if (isTouchscreen()) {
        showTouchscreenButtons();
    };
    hideOrShowFooterLinksContainer();
}

/**
 * This function changes the level to the next level.
 */
function nextLevel() {
    if (currentLevelIndex === levels.length - 1) {
        currentLevelIndex = 0;
    } else {
        currentLevelIndex++;
    }
    currentLevel = levels[currentLevelIndex];
    playAgain();
}

/**
 * This event listener sets the keyboard values when a key is pressed down.
 */
document.addEventListener('keydown', (event) => {
    lastInput = new Date().getTime();
    if (event.key === 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if (event.key === 'ArrowRight') {
        keyboard.RIGHT = true;
    }
    if (event.key === 'ArrowUp') {
        keyboard.UP = true;
    }
    if (event.key === 'ArrowDown') {
        keyboard.DOWN = true;
    }
    if (event.key === ' ') {
        keyboard.SPACE = true;
    }
    if (event.code === 'KeyD') {
        keyboard.D = true;
    }
    if (event.code === 'KeyO') {
        keyboard.D = true;
    }
})

/**
 * This event listener sets the keyboard values when a key is released.
 */
document.addEventListener('keyup', (event) => {
    lastInput = new Date().getTime();
    if (event.key === 'ArrowLeft') {
        keyboard.LEFT = false;
    }
    if (event.key === 'ArrowRight') {
        keyboard.RIGHT = false;
    }
    if (event.key === 'ArrowUp') {
        keyboard.UP = false;
    }
    if (event.key === 'ArrowDown') {
        keyboard.DOWN = false;
    }
    if (event.key === ' ') {
        keyboard.SPACE = false;
    }
    if (event.code === 'KeyD') {
        keyboard.D = false;
    }
    if (event.code === 'KeyO') {
        keyboard.D = false;
    }
})

/**
 * This function is executed on every touch.
 * @param {*} event 
 */
function onTouch(event) {
    if (event.cancelable) {
        event.preventDefault();
    }
    lastInput = new Date().getTime();
}

/**
 * This event listener prevents actions from continuing in the event that a touch is cancelled.
 */
window.addEventListener('touchcancel', () => {
    keyboard.reset();
});

/**
 * This function binds the corresponding touch events to the keyboard buttons using event listeners.
 */
function bindButtonEvents() {
    document.getElementById('left-button').addEventListener('touchstart', (event) => {
        onTouch(event);
        keyboard.LEFT = true;
    });
    document.getElementById('left-button').addEventListener('touchend', (event) => {
        onTouch(event);
        keyboard.LEFT = false;
    });
    document.getElementById('right-button').addEventListener('touchstart', (event) => {
        onTouch(event);
        keyboard.RIGHT = true;
    });
    document.getElementById('right-button').addEventListener('touchend', (event) => {
        onTouch(event);
        keyboard.RIGHT = false;
    });
    document.getElementById('bubble-trap-button').addEventListener('touchstart', (event) => {
        onTouch(event);
        keyboard.D = true;
    });
    document.getElementById('bubble-trap-button').addEventListener('touchend', (event) => {
        onTouch(event);
        keyboard.D = false;
    });
    document.getElementById('fin-slap-button').addEventListener('touchstart', (event) => {
        onTouch(event);
        keyboard.SPACE = true;
    });
    document.getElementById('fin-slap-button').addEventListener('touchend', (event) => {
        onTouch(event);
        keyboard.SPACE = false;
    });
    document.getElementById('up-button').addEventListener('touchstart', (event) => {
        onTouch(event);
        keyboard.UP = true;
    });
    document.getElementById('up-button').addEventListener('touchend', (event) => {
        onTouch(event);
        keyboard.UP = false;
    });
    document.getElementById('down-button').addEventListener('touchstart', (event) => {
        onTouch(event);
        keyboard.DOWN = true;
    });
    document.getElementById('down-button').addEventListener('touchend', (event) => {
        onTouch(event);
        keyboard.DOWN = false;
    });
}

/**
 * This function changes the size of the instructions container.
 */
function changeInstructionSize() {
    let canvas = document.getElementById('canvas');
    let max = 2;
    let yScale = Math.min(max, canvas.clientHeight / 480);
    let xScale = Math.min(max, canvas.clientWidth / 720);
    let newScale = Math.min(yScale, xScale);
    let instructions = document.getElementById('instructions');
    instructions.style.transform = `scale(${newScale})`;
    instructions.style.visibility = 'visible';
}

/**
 * This event listener shows the footer links container if the game is running and it should be visible or hides it.
 */
window.addEventListener('resize', () => {
    hideOrShowFooterLinksContainer();
    changeInstructionSize();
})

/**
 * This event listener changes the size of the instructions when the device is rotated.
 * The page is reloaded on touchscreen devices using location.href so that the changes from changeInstructionSize() will definitely be applied.
 */
screen.orientation.addEventListener("change", () => {
    changeInstructionSize();
    if (isTouchscreen()) {
        location.href = location.href;
    }
});