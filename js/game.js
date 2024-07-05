let canvas;
let world;
let lastInput;
let keyboard = new Keyboard();
let debugMode = true;
let muted = false;
let gameHasEnded = false;
let levels = [level1, level2, level3];
let currentLevelIndex = 0;
let currentLevel = level1;

function init() {
    canvas = document.getElementById('canvas');
    loadCurrentLevel();
    world = new World(canvas, keyboard, currentLevel);
    pauseGame();
    bindButtonEvents();
}

function openInstructions2() {
    let instructionsImage = document.getElementById('instructions-image');
    instructionsImage.src = 'img/6.buttons/instructions2.png';
    let instructionsButton = document.getElementById('instructions-button');
    instructionsButton.innerText = 'OK';
    instructionsButton.setAttribute('onclick', 'showStartButton()');
}

function showStartButton() {
    let instructionsImage = document.getElementById('instructions-image');
    instructionsImage.style.display = 'none';
    let instructionsButton = document.getElementById('instructions-button');
    instructionsButton.style.display = 'none';
    let startButton = document.getElementById('start-button');
    startButton.style.display = 'flex';
}

function pauseGame() {
    muteOrUnmuteGameAudio(true);
    stopAllIntervals();
}

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

function gameOver() {
    setTimeout(() => {
        world.AUDIO_GAME_OVER.play();
    }, 600)
    setTimeout(() => {
        pauseGame();
        let gameOverScreen = document.getElementById('game-over-screen');
        gameOverScreen.style.display = 'block';
    }, 1600);
}

function playWinSounds() {
    world.AUDIO_YAY.play();
    world.AUDIO_POP.play();
}

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
    }, 1800);
}


function hideEndOfGameScreen() {
    let gameOverScreen = document.getElementById('game-over-screen');
    gameOverScreen.style.display = 'none';
    let youWinScreen = document.getElementById('you-win-screen');
    youWinScreen.style.display = 'none';
}


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
    hideEndOfGameScreen();
}


function nextLevel() {
    if (currentLevelIndex === levels.length - 1) {
        currentLevelIndex = 0;
    } else {
        currentLevelIndex++;
    }
    currentLevel = levels[currentLevelIndex];
    playAgain();
}


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

function onTouch(event) {
    if (event.cancelable) {
        event.preventDefault();
    }
    lastInput = new Date().getTime();
}

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