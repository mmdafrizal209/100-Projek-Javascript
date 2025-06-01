const sum = (a, b) => a + b;

document.getElementById('sumBtn').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = document.getElementById('result');
  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = 'Mohon masukkan dua angka yang valid.';
    result.style.color = 'red';
  } else {
    const total = sum(num1, num2);
    result.textContent = `Hasil penjumlahan: ${total}`;
    result.style.color = '#222';
  }
});
