let canvas;
let world;
let lastInput;
let keyboard = new Keyboard();
let debugMode = false;
let muted = false;
let gameHasEnded = false;
let levels = [level1, level2, level3];
let currentLevelIndex = 0;
let currentLevel = level1;
let assetCache = new AssetCache();
let progress = 0;

/**
 * This function initializes the game by loading the assets and setting up the game.
 */
async function init() {
    await assetCache.loadAssets();
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
 * This function opens the second set of instructions on how to play the game.
 */
function openInstructions2() {
    let instructionsImage = document.getElementById('instructions-image');
    instructionsImage.src = 'img/6.buttons/instructions2.png';
    let instructionsButton = document.getElementById('instructions-button');
    instructionsButton.innerText = 'OK';
    instructionsButton.setAttribute('onclick', 'showStartButton()');
}

/**
 * This function shows the start button (and hides the instructions).
 */
function showStartButton() {
    let instructionsImage = document.getElementById('instructions-image');
    instructionsImage.style.display = 'none';
    let instructionsButton = document.getElementById('instructions-button');
    instructionsButton.style.display = 'none';
    let startButton = document.getElementById('start-button');
    startButton.style.display = 'flex';
}

/**
 * This function pauses the game.
 */
function pauseGame() {
    muteOrUnmuteGameAudio(true);
    stopAllIntervals();
}

/**
 * This function starts the game.
 */
function startGame() {
    lastInput = new Date().getTime();
    resumeAllIntervals();
    let startButton = document.getElementById('start-button');
    startButton.style.display = 'none';
    let creditsButton = document.getElementById('credits-button');
    creditsButton.style.display = 'none';
    let infoButton = document.getElementById('info-button');
    infoButton.style.display = 'flex';
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
    setTimeout(() => {
        world.AUDIO_GAME_OVER.play();
    }, 600)
    setTimeout(() => {
        pauseGame();
        let gameOverScreen = document.getElementById('game-over-screen');
        gameOverScreen.style.display = 'block';
        hideTouchscreenButtons();
    }, 1600);
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
    setTimeout(() => {
        playWinSounds();
        pauseGame();
        world.fillConfetti();
        let youWinScreen = document.getElementById('you-win-screen');
        youWinScreen.style.display = 'block';
        let keepPlayingButton = document.getElementById('keep-playing-button');
        if (currentLevelIndex === levels.length - 1) {
            keepPlayingButton.innerText = 'Play again';
        } else {
            keepPlayingButton.innerText = 'Next level';
        }
        hideTouchscreenButtons();
    }, 1800);
}

/**
 * This functions hides the screens displayed at the end of a game so that a new game can start.
 */
function hideEndOfGameScreen() {
    let gameOverScreen = document.getElementById('game-over-screen');
    gameOverScreen.style.display = 'none';
    let youWinScreen = document.getElementById('you-win-screen');
    youWinScreen.style.display = 'none';
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