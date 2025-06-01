function tampilkanPangkatDua() {
  let n = parseInt(document.getElementById('n').value);
  const output = document.getElementById('output');

  if (isNaN(n) || n < 1) {
    output.innerHTML = "Masukkan angka minimal 1.";
    return;
  }

  let i = 1;
  let hasil = [];

  do {
    hasil.push(i * i);
    i++;
  } while (i <= n);

  output.innerHTML = `Deret pangkat dua (1² hingga ${n}²): ${hasil.join(', ')}`;
}
