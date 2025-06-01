function hitungJumlah() {
  const n = parseInt(document.getElementById('inputN').value);
  const output = document.getElementById('output');

  if (isNaN(n) || n <= 0) {
    output.textContent = 'Masukkan angka bulat positif!';
    return;
  }

  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  output.textContent = `Jumlah deret angka 1 sampai ${n} adalah ${total}`;
}
