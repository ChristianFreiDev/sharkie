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
    intervals.forEach(interval => {
        setStoppableInterval(interval.fn, interval.time);
    })
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

document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        let fullscreenButton = document.getElementById('fullscreen-button');
        fullscreenButton.style.display = 'block';
    }
});