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
    intervals = [];
    tempIntervals.forEach(interval => {
        setStoppableInterval(interval.fn, interval.time);
    })
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


function showInfos() {
    pauseGame();
    let infos = document.getElementById('infos');
    infos.style.display = 'block';
}


function hideInfos() {
    resumeGame();
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


function onMuteButtonClick() {
    let muteButtonSpan = document.getElementById('mute-button-span');
    if (!world.character.AUDIO_SWIM.muted) {
        muteOrUnmuteAudio(true);
        muteButtonSpan.innerHTML = '&#x1F568';
    } else {
        muteOrUnmuteAudio(false);
        muteButtonSpan.innerHTML = '&#x1F56A';
    }
}


function muteOrUnmuteAudio(bool) {
    muted = bool;
    world.character.AUDIO_SWIM.muted = bool;
    world.character.AUDIO_BUBBLE_TRAP.muted = bool;
    world.character.AUDIO_FIN_SLAP.muted = bool;
    world.character.AUDIO_HURT.muted = bool;
    world.character.AUDIO_ELECTRIC_SHOCK.muted = bool;
    world.AUDIO_AMBIENCE.muted = bool;
    let finalBoss = world.enemies[world.enemies.length - 1];
    finalBoss.AUDIO_SPLASH.muted = bool;
    finalBoss.AUDIO_HURT.muted = bool;
    finalBoss.AUDIO_BOSS_FIGHT.muted = bool;
    finalBoss.AUDIO_BITE.muted = bool;
}


document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        let fullscreenButton = document.getElementById('fullscreen-button');
        fullscreenButton.style.display = 'inline-block';
    }
});