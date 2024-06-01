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