const filterEven = (arr) => arr.filter(num => num % 2 === 0);

document.getElementById('filterBtn').addEventListener('click', () => {
  const input = document.getElementById('arrayInput').value;
  const result = document.getElementById('result');
  if (!input.trim()) {
    result.textContent = 'Mohon masukkan angka.';
    result.style.color = 'red';
    return;
  }
  const arr = input.split(',').map(e => parseInt(e.trim())).filter(n => !isNaN(n));
  if (arr.length === 0) {
    result.textContent = 'Input tidak valid. Masukkan angka yang benar.';
    result.style.color = 'red';
    return;
  }
  const evenNumbers = filterEven(arr);
  result.textContent = `Angka genap: ${evenNumbers.join(', ')}`;
  result.style.color = '#eeeeee';
});
