const flipCoin = () => Math.random() < 0.5 ? 'Kepala (Heads)' : 'Ekor (Tails)';

document.getElementById('flipBtn').addEventListener('click', () => {
  const result = flipCoin();
  const resultEl = document.getElementById('result');
  resultEl.textContent = result;
});
