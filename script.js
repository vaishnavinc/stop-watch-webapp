let startStopBtn = document.getElementById('startStop');
let resetBtn = document.getElementById('reset');
let display = document.getElementById('display');

let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(updateDisplay, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    [hours, minutes, seconds] = [0, 0, 0];
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
});

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = `${h}:${m}:${s}`;
}
