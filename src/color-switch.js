const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};

let intervalId = null;

refs.startBtn.addEventListener('click', startColorChange);
refs.stopBtn.addEventListener('click', stopColorChange);

const randomIntegerFormInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function startColorChange() {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFormInterval(0, colors.length - 1)];
    }, 2000);
    refs.startBtn.removeEventListener('click', startColorChange);
};

function stopColorChange() {
    clearInterval(intervalId);
    refs.startBtn.addEventListener('click', startColorChange);
};