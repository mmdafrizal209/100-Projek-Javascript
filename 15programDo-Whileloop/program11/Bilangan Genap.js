function tampilkanGenap() {
  let n = parseInt(document.getElementById('n').value);
  const output = document.getElementById('output');

  if (isNaN(n) || n < 1) {
    output.innerHTML = "Masukkan angka positif minimal 1.";
    return;
  }

  let i = 2;
  let hasil = [];

  do {
    if (i <= n) {
      hasil.push(i);
    }
    i += 2;
  } while (i <= n);

  output.innerHTML = `Bilangan genap hingga ${n}: ${hasil.join(', ')}`;
}
