function tampilkanFibonacci() {
  let n = parseInt(document.getElementById('jumlah').value);
  const output = document.getElementById('output');

  if (isNaN(n) || n < 1) {
    output.innerHTML = "Masukkan angka minimal 1.";
    return;
  }

  let fib = [0, 1];
  let i = 2;

  if (n === 1) {
    output.innerHTML = "Deret Fibonacci: 0";
    return;
  }

  do {
    fib[i] = fib[i - 1] + fib[i - 2];
    i++;
  } while (i < n);

  output.innerHTML = `Deret Fibonacci (${n} elemen): ${fib.slice(0, n).join(', ')}`;
}
