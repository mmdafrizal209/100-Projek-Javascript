const sortArray = arr => arr.sort((a, b) => a - b);

document.getElementById('sortBtn').addEventListener('click', () => {
  const input = document.getElementById('arrayInput').value;
  const result = document.getElementById('result');
  if (!input.trim()) {
    result.textContent = 'Mohon masukkan angka.';
    result.style.color = 'red';
    return;
  }
  const arr = input.split(',').map(e => parseFloat(e.trim())).filter(n => !isNaN(n));
  if (arr.length === 0) {
    result.textContent = 'Input tidak valid, masukkan angka yang benar.';
    result.style.color = 'red';
    return;
  }
  const sorted = sortArray(arr);
  result.textContent = `Array yang diurutkan: ${sorted.join(', ')}`;
  result.style.color = '#f9fafb';
});
