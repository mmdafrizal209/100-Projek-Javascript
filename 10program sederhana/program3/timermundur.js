let countdown;
let timeLeft = 0;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

function updateTimerDisplay(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerDisplay.textContent = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

function startCountdown() {
  const minutes = parseInt(minutesInput.value, 10);
  const seconds = parseInt(secondsInput.value, 10);
  
  if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0 || seconds > 59) {
    alert('Masukkan waktu yang valid!');
    return;
  }

  timeLeft = minutes * 60 + seconds;
  if (timeLeft <= 0) {
    alert('Waktu harus lebih dari 0!');
    return;
  }

  startBtn.disabled = true;
  resetBtn.disabled = false;
  minutesInput.disabled = true;
  secondsInput.disabled = true;

  updateTimerDisplay(timeLeft);

  countdown = setInterval(() => {
    timeLeft--;
    updateTimerDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert('Waktu Habis!');
      startBtn.disabled = false;
      resetBtn.disabled = true;
      minutesInput.disabled = false;
      secondsInput.disabled = false;
    }
  }, 1000);
}

function resetCountdown() {
  clearInterval(countdown);
  timeLeft = 0;
  updateTimerDisplay(timeLeft);
  startBtn.disabled = false;
  resetBtn.disabled = true;
  minutesInput.disabled = false;
  secondsInput.disabled = false;
}

startBtn.addEventListener('click', startCountdown);
resetBtn.addEventListener('click', resetCountdown);

// Inisialisasi tampilan timer awal
updateTimerDisplay(0);
