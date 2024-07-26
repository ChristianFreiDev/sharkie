let intervals = [];

/**
 * This function sets an interval that can be stopped later.
 * @param {Function} fn - Function to be executed.
 * @param {number} time - Interval period.
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervals.push({
        id: id,
        fn: fn,
        time: time
    })
}

/**
 * This function stops all intervals.
 */
function stopAllIntervals() {
    intervals.forEach(interval => {
        clearInterval(interval.id);
    });
}

/**
 * This function resumes all intervals.
 */
function resumeAllIntervals() {
    let tempIntervals = [...intervals];
    stopAllIntervals();
    intervals = [];
    tempIntervals.forEach(interval => {
        setStoppableInterval(interval.fn, interval.time);
    })
}

/**
 * This function changes the display property of the style of an HTML element.
 * @param {string} htmlElementId
 * @param {string} displayProperty 
 */
function changeDisplayProperty(htmlElementId, displayProperty) {
    let selectedElement = document.getElementById(htmlElementId);
    selectedElement.style.display = displayProperty;
}

/**
 * This function changes the display property of multiple HTML elements.
 * @param {Array} htmlElementIds 
 * @param {string} displayProperty 
 */
function changeMultipleDisplayProperties(htmlElementIds, displayProperty) {
    htmlElementIds.forEach(htmlElementId => {
        changeDisplayProperty(htmlElementId, displayProperty);
    })
}

/**
 * This function creates an array of image paths for images named 1.webp, 2.webp etc., for example.
 * @param {string} basePath - The base path.
 * @param {number} start - The starting number.
 * @param {number} end - The last number.
 * @returns {Array} Image paths.
 */
function createImagePaths(basePath, start, end) {
    let imagePaths = [];
    for (let i = start; i <= end; i++) {
        let imagePath = `${basePath}${i}.webp`;
        imagePaths.push(imagePath);
    }
    return imagePaths;
}

/**
 * This functions loads the current level.
 */
function loadCurrentLevel() {
    let loadLevelFunctions = [loadLevel1, loadLevel2, loadLevel3];
    loadLevelFunctions[currentLevelIndex]();
}

/**
 * This functions determines if the device has a touchscreen.
 * @returns {boolean} Whether the screen is a touchscreen or not.
 */
function isTouchscreen() {
    return window.matchMedia("(pointer: coarse)").matches;
}

/**
 * This functions shows the buttons that are required for controlling the player character on touchscreen devices.
 */
function showTouchscreenButtons() {
    let ids = ['left-and-right-arrow-buttons', 'up-and-down-arrow-and-attack-buttons'];
    changeMultipleDisplayProperties(ids, 'flex');
}

/**
 * This functions hides the buttons that are required for controlling the player character on touchscreen devices.
 */
function hideTouchscreenButtons() {
    let ids = ['left-and-right-arrow-buttons', 'up-and-down-arrow-and-attack-buttons'];
    changeMultipleDisplayProperties(ids, 'none');
}

/**
 * This function shows the information screen.
 */
function showInfos() {
    if (!gameHasEnded) {
        pauseGame();
    }
    changeDisplayProperty('infos', 'block');
}

/**
 * This function hides the information screen.
 */
function hideInfos() {
    if (!gameHasEnded) {
        resumeGame();
    }
    changeDisplayProperty('infos', 'none');
}

/**
 * This function opens an element in fullscreen mode.
 * @param {string} elementId - HTML element
 */
function openFullScreen(elementId) {
    let element = document.getElementById(elementId);
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    changeDisplayProperty('fullscreen-button', 'none');
    changeInstructionSize();
}

/**
 * This function changes the brightness of the background image.
 */
function darkenBackground() {
    let body = document.querySelector('body');
    body.style.backdropFilter = 'brightness(0.83)';
}

/**
 * This function checks if the footer links container and the canvas overlap to determine if the footer links container should be shown.
 * @returns {boolean} Whether the footer links container and the canvas overlap.
 */
function isFooterLinksContainerOverlapping() {
    let footerLinksContainer = document.getElementById('game-footer-links-container');
    let canvas = document.getElementById('canvas');
    let footerLinksContainerRect = footerLinksContainer.getBoundingClientRect();
    let canvasRect = canvas.getBoundingClientRect();
    if (footerLinksContainerRect.right > canvasRect.left &&
        footerLinksContainerRect.left < canvasRect.right &&
        footerLinksContainerRect.bottom > canvasRect.top &&
        footerLinksContainerRect.top < canvasRect.bottom) {
            return true;
        } else {
            return false;
        }
}

/**
 * This event listener detects when fullscreen mode is exited and then shows the fullscreen button again.
 */
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        changeDisplayProperty('fullscreen-button', 'flex');
    }
});

/**
 * This function disables the context menu on touchscreen devices to prevent the context menu from appearing on long touches.
 */
function disableContextmenu() {
    if (isTouchscreen()) {
        window.oncontextmenu = function(event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
}

let platform = navigator.userAgentData?.platform || navigator.platform;
/**
 * This variable detects if the browser is Safari.
 */
let isSafari = platform &&
               platform.indexOf('iPhone') > -1 ||
               platform.indexOf('iPad') > -1 ||
               platform.indexOf('iPod') > -1 ||
               platform.indexOf('Mac') > -1;


function printToDebugDiv(toBePrinted) {
    let debugDiv = document.getElementById('debug-div');
    debugDiv.innerHTML += toBePrinted + '<br>';
}

function printSafariStatus() {
    printToDebugDiv(`isSafari: ${isSafari}`);
    printToDebugDiv(`isAudioEnabled: ${isAudioEnabled}`);
    printToDebugDiv(`userAgent: ${navigator.userAgent}`);
    printToDebugDiv(`platform: ${platform}`);
}