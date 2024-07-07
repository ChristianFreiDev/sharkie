let intervals = [];

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervals.push({
        id: id,
        fn: fn,
        time: time
    })
}


function stopAllIntervals() {
    intervals.forEach(interval => {
        clearInterval(interval.id);
    });
}


function resumeAllIntervals() {
    let tempIntervals = [...intervals];
    stopAllIntervals();
    intervals = [];
    tempIntervals.forEach(interval => {
        setStoppableInterval(interval.fn, interval.time);
    })
}


function loadCurrentLevel() {
    let loadLevelFunctions = [loadLevel1, loadLevel2, loadLevel3];
    loadLevelFunctions[currentLevelIndex]();
}


function isTouchscreen() {
    return window.matchMedia("(pointer: coarse)").matches;
}


function showTouchscreenButtons() {
    let ids = ['left-and-right-arrow-buttons', 'up-and-down-arrow-and-attack-buttons'];
    ids.forEach(id => {
        let element = document.getElementById(id);
        element.style.display = 'flex';
    })
}


function hideTouchscreenButtons() {
    let ids = ['left-and-right-arrow-buttons', 'up-and-down-arrow-and-attack-buttons'];
    ids.forEach(id => {
        let element = document.getElementById(id);
        element.style.display = 'none';
    })
}


function showInfos() {
    if (!gameHasEnded) {
        pauseGame();
    }
    let infos = document.getElementById('infos');
    infos.style.display = 'block';
}


function hideInfos() {
    if (!gameHasEnded) {
        resumeGame();
    }
    let infos = document.getElementById('infos');
    infos.style.display = 'none';
}


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


function resumeAmbienceSound() {
    world.AUDIO_AMBIENCE.play();
    world.AUDIO_AMBIENCE.loop = true;
}


function muteOrUnmuteGameAudio(bool) {
    world.character.AUDIO_SWIM.muted = bool;
    world.character.AUDIO_BUBBLE_TRAP.muted = bool;
    world.character.AUDIO_FIN_SLAP.muted = bool;
    world.character.AUDIO_HURT.muted = bool;
    world.character.AUDIO_ELECTRIC_SHOCK.muted = bool;
    world.AUDIO_AMBIENCE.muted = bool;
    world.AUDIO_ENEMY_HURT.muted = bool;
    let finalBoss = world.enemies[world.enemies.length - 1];
    finalBoss.AUDIO_SPLASH.muted = bool;
    finalBoss.AUDIO_HURT.muted = bool;
    finalBoss.AUDIO_BOSS_FIGHT.muted = bool;
    finalBoss.AUDIO_BITE.muted = bool;
}


function muteOrUnmuteAllAudio(bool) {
    muted = bool;
    muteOrUnmuteGameAudio(bool);
    world.AUDIO_YAY.muted = bool;
    world.AUDIO_POP.muted = bool;
    world.AUDIO_GAME_OVER.muted = bool;
 }

document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        let fullscreenButton = document.getElementById('fullscreen-button');
        fullscreenButton.style.display = 'flex';
    }
});