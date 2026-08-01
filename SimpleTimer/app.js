// ==============================
// DOM Selection
// ==============================

const startButton = document.querySelector(".start-btn");
const pauseButton = document.querySelector(".pause-btn");
const resetButton = document.querySelector(".reset-btn");

const timerDigits = document.querySelectorAll(".timer-clock span");

// ==============================
// Variables
// ==============================

let totalSeconds = 0;
let intervalID = null;

// ==============================
// Update Timer Display
// ==============================

function updateDisplay() {

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    let minuteTens = Math.floor(minutes / 10);
    let minuteOnes = minutes % 10;

    let secondTens = Math.floor(seconds / 10);
    let secondOnes = seconds % 10;

    timerDigits[0].textContent = minuteTens;
    timerDigits[1].textContent = minuteOnes;
    timerDigits[3].textContent = secondTens;
    timerDigits[4].textContent = secondOnes;
}

// ==============================
// Start Button
// ==============================

startButton.addEventListener("click", function () {

    // Prevent multiple intervals
    if (intervalID !== null) return;

    intervalID = setInterval(function () {

        totalSeconds++;

        updateDisplay();

    }, 1000);

});

// ==============================
// Pause Button
// ==============================

pauseButton.addEventListener("click", function () {

    clearInterval(intervalID);
    intervalID = null;

});

// ==============================
// Reset Button
// ==============================

resetButton.addEventListener("click", function () {

    clearInterval(intervalID);

    intervalID = null;
    totalSeconds = 0;

    updateDisplay();

});