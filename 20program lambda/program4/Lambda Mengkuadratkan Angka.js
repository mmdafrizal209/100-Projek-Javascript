const square = (num) => num * num;

document.getElementById('squareBtn').addEventListener('click', () => {
  const num = parseFloat(document.getElementById('numberInput').value);
  const result = document.getElementById('result');
  if (isNaN(num)) {
    result.textContent = 'Mohon masukkan angka yang valid.';
    result.style.color = 'red';
  } else {
    const squared = square(num);
    result.textContent = `Hasil kuadrat dari ${num} adalah ${squared}.`;
    result.style.color = '#4e2575';
  }
});
