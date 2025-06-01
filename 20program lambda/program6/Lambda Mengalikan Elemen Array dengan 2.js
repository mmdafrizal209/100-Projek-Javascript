const multiplyByTwo = arr => arr.map(num => num * 2);

document.getElementById('multiplyBtn').addEventListener('click', () => {
  const input = document.getElementById('arrayInput').value;
  const result = document.getElementById('result');
  if (!input.trim()) {
    result.textContent = 'Mohon masukkan angka.';
    result.style.color = 'red';
    return;
  }
  const arr = input.split(',').map(e => parseFloat(e.trim())).filter(n => !isNaN(n));
  if (arr.length === 0) {
    result.textContent = 'Input tidak valid. Masukkan angka yang benar.';
    result.style.color = 'red';
    return;
  }
  const multiplied = multiplyByTwo(arr);
  result.textContent = `Hasil perkalian: ${multiplied.join(', ')}`;
  result.style.color = '#81cfe0';
});
