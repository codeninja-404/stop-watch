const secondField = document.getElementById("secondId");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let counter;
let seconds = 0;
let isRuning = false;

function updateDisplay() {
  secondField.innerText = seconds;
}

function updateButtonState() {
  startButton.disabled = isRuning;
  stopButton.disabled = !isRuning;
  resetButton.disabled = isRuning;
}

function startCount() {
  if (!isRuning) {
    counter = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
    
  }
  isRuning = true;
  updateButtonState();
}

function stopCount() {
  clearInterval(counter);
  isRuning = false;
  updateButtonState();
}

function resetCount() {
  clearInterval(counter);
  seconds = 0;
  updateDisplay();
  isRuning = false;
  updateButtonState();
}

updateDisplay();
updateButtonState();
