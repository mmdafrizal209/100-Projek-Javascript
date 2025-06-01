(() => {
  const button = document.getElementById('clickBtn');
  const scoreEl = document.getElementById('score');
  let score = 0;
  let timeLeft = 10; // detik
  let timerId = null;

  const endGame = () => {
    button.disabled = true;
    alert(`Waktu habis! Skor Anda: ${score}`);
  };

  const startTimer = () => {
    timerId = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(timerId);
        endGame();
      }
    }, 1000);
  };

  button.addEventListener('click', () => {
    if (score === 0) startTimer();
    score++;
    scoreEl.textContent = score;
  });
})();
