function isPrima(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function tampilkanPrima() {
  const n = parseInt(document.getElementById('inputN').value);
  const output = document.getElementById('output');

  if (isNaN(n) || n <= 1) {
    output.textContent = 'Masukkan angka bulat lebih dari 1!';
    return;
  }

  let hasil = '';
  for (let i = 2; i <= n; i++) {
    if (isPrima(i)) {
      hasil += i + ', ';
    }
  }

  output.textContent = hasil.slice(0, -2);
}
