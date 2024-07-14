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
    ids.forEach(id => {
        let element = document.getElementById(id);
        element.style.display = 'flex';
    })
}

/**
 * This functions hides the buttons that are required for controlling the player character on touchscreen devices.
 */
function hideTouchscreenButtons() {
    let ids = ['left-and-right-arrow-buttons', 'up-and-down-arrow-and-attack-buttons'];
    ids.forEach(id => {
        let element = document.getElementById(id);
        element.style.display = 'none';
    })
}

/**
 * This function shows the information screen.
 */
function showInfos() {
    if (!gameHasEnded) {
        pauseGame();
    }
    let infos = document.getElementById('infos');
    infos.style.display = 'block';
}

/**
 * This function hides the information screen.
 */
function hideInfos() {
    if (!gameHasEnded) {
        resumeGame();
    }
    let infos = document.getElementById('infos');
    infos.style.display = 'none';
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
    let fullscreenButton = document.getElementById('fullscreen-button');
    fullscreenButton.style.display = 'none';
}

/**
 * This function mutes the audio when the mute button is clicked.
 * @param {Event} event - Button click event
 */
function onMuteButtonClick(event) {
    let muteButtonImage = document.getElementById('mute-button-image');
    if (event.pointerType !== '') {
        if (!muted) {
            muteOrUnmuteAllAudio(true);
            muteButtonImage.src = 'img/7.icons/no_sound_24dp_FILL1_wght400_GRAD0_opsz24.svg';
        } else {
            muteOrUnmuteAllAudio(false);
            muteButtonImage.src = 'img/7.icons/volume_up_24dp_FILL1_wght400_GRAD0_opsz24.svg';
        }
    }
}

/**
 * This function resumes the ambience sound.
 */
function resumeAmbienceSound() {
    world.AUDIO_AMBIENCE.play();
    world.AUDIO_AMBIENCE.loop = true;
}

/**
 * This function mutes or unmutes a specific set of sounds.
 * @param {boolean} bool - Whether audio should be muted or not.
 */
function muteOrUnmuteGameAudio(bool) {
    world.character.AUDIO_SWIM.muted = bool;
    world.character.AUDIO_BUBBLE_TRAP.muted = bool;
    world.character.AUDIO_FIN_SLAP.muted = bool;
    world.character.AUDIO_HURT.muted = bool;
    world.character.AUDIO_ELECTRIC_SHOCK.muted = bool;
    world.character.AUDIO_SNORING.muted = bool;
    world.character.AUDIO_YAWN.muted = bool;
    world.AUDIO_AMBIENCE.muted = bool;
    world.AUDIO_ENEMY_HURT.muted = bool;
    let finalBoss = world.enemies[world.enemies.length - 1];
    finalBoss.AUDIO_SPLASH.muted = bool;
    finalBoss.AUDIO_HURT.muted = bool;
    finalBoss.AUDIO_BOSS_FIGHT.muted = bool;
    finalBoss.AUDIO_BITE.muted = bool;
}

/**
 * This function mutes or unmutes all audio.
 * @param {boolean} bool - Whether audio should be muted or not.
 */
function muteOrUnmuteAllAudio(bool) {
    muted = bool;
    muteOrUnmuteGameAudio(bool);
    world.AUDIO_YAY.muted = bool;
    world.AUDIO_POP.muted = bool;
    world.AUDIO_GAME_OVER.muted = bool;
}

/**
 * This functions mutes the boss fight music.
 */
function muteFinalBossSound() {
    let finalBoss = world.enemies[world.enemies.length - 1];
    finalBoss.AUDIO_BOSS_FIGHT.pause();
}

/**
 * This event listener detects when fullscreen mode is exited and then shows the fullscreen button again.
 */
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        let fullscreenButton = document.getElementById('fullscreen-button');
        fullscreenButton.style.display = 'flex';
    }
});