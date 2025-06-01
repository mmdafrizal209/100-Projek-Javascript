const factorial = n => n <= 1 ? 1 : n * factorial(n -1);

document.getElementById('calculateBtn').addEventListener('click', () => {
  const num = parseInt(document.getElementById('numInput').value);
  const result = document.getElementById('result');
  if (isNaN(num) || num < 0) {
    result.textContent = 'Mohon masukkan angka bulat >= 0.';
    result.style.color = 'red';
  } else {
    const fact = factorial(num);
    result.textContent = `Faktorial dari ${num} adalah ${fact}.`;
    result.style.color = '#744f11';
  }
});
