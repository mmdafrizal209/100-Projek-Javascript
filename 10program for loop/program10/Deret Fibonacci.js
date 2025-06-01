function cetakFibonacci() {
  const n = parseInt(document.getElementById('inputN').value);
  const output = document.getElementById('output');

  if (isNaN(n) || n <= 0) {
    output.textContent = 'Masukkan angka bulat positif!';
    return;
  }

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  output.textContent = fib.slice(0, n).join(', ');
}
