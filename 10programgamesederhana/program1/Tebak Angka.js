(() => {
  const maxNumber = 100;
  let secretNumber = Math.floor(Math.random() * maxNumber) +1;
  const guessInput = document.getElementById('guessInput');
  const message = document.getElementById('message');
  const guessBtn = document.getElementById('guessBtn');
  const resetBtn = document.getElementById('resetBtn');

  const resetGame = () => {
    secretNumber = Math.floor(Math.random() * maxNumber) +1;
    guessInput.value = '';
    message.textContent = '';
    guessBtn.style.display = 'inline-block';
    resetBtn.style.display = 'none';
    guessInput.disabled = false;
  };

  const checkGuess = () => {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > maxNumber) {
      message.style.color = 'yellow';
      message.textContent = 'Masukkan angka valid antara 1 dan 100!';
      return;
    }

    if (guess === secretNumber) {
      message.style.color = '#2ecc71';
      message.textContent = `Selamat! Anda menebak angka ${secretNumber} dengan benar!`;
      guessBtn.style.display = 'none';
      resetBtn.style.display = 'inline-block';
      guessInput.disabled = true;
    } else if (guess < secretNumber) {
      message.style.color = '#e67e22';
      message.textContent = 'Tebakan terlalu rendah, coba lagi.';
    } else {
      message.style.color = '#e67e22';
      message.textContent = 'Tebakan terlalu tinggi, coba lagi.';
    }
  };

  guessBtn.addEventListener('click', checkGuess);
  guessInput.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
      checkGuess();
    }
  });
  resetBtn.addEventListener('click', resetGame);
})();
