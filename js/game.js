let canvas;
let world;
let lastInput;
let keyboard = new Keyboard();
debugMode = false;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
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
    startButton.style.display = 'block';
}

function pauseGame() {
    stopAllIntervals();
}

function startGame() {
    lastInput = new Date().getTime();
    resumeAllIntervals();
    let startButton = document.getElementById('start-button');
    startButton.style.display = 'none';
    if (isTouchscreen()) {
        showTouchscreenButtons();
    };
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