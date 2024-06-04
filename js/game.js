let canvas;
let world;
let keyboard = new Keyboard();
let lastInput = new Date().getTime();
debugMode = false;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    pauseGame();
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
    resumeAllIntervals();
    let startButton = document.getElementById('start-button');
    startButton.style.display = 'none';
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