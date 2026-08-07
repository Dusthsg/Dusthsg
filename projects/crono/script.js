const stopwatch = document.getElementById("stopwatch");
const clock = document.getElementById("clock");

const clockBtn = document.getElementById("btn-clock");
const stopwatchBtn = document.getElementById("btn-stopwatch");
const initiator = document.getElementById("init");

const time = document.getElementById("time");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

const hourTime = document.getElementById("date");

let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;
let interval;

clockBtn.addEventListener("click", switchClock);
initiator.addEventListener("click", startStopwatch);
stopwatchBtn.addEventListener("click", switchStopwatch);
pause.addEventListener("click", pauseStopwatch);
reset.addEventListener("click", resetStopwatch);

function switchClock() {
  stopwatch.classList.remove("active");
  clock.classList.add("active");
  resetStopwatch();
}

function switchStopwatch() {
  clock.classList.remove("active");
  stopwatch.classList.add("active");
}

/*=================================================================
========= Tela de cronômetro
=================================================================*/
function updateDisplay() {
  time.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startStopwatch() {
  if (running) return;

  running = true;

  interval = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(interval);
  running = false;
}

function resetStopwatch() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  clearInterval(interval);
  updateDisplay()
  running = false;
}

/*=================================================================
========= Tela de Horário
=================================================================*/

function getHour() {
    const now = new Date();
    updateHour(now.getHours(), now.getMinutes(), now.getSeconds());
  }

  setInterval(getHour, 1000)

function updateHour(hours, minutes, seconds) {
  hourTime.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

getHour();
