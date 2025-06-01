function cetakPola() {
  const tinggi = parseInt(document.getElementById('inputTinggi').value);
  const output = document.getElementById('output');

  if (isNaN(tinggi) || tinggi <= 0) {
    output.textContent = 'Masukkan angka bulat positif!';
    return;
  }

  let pola = "";
  for (let i = 1; i <= tinggi; i++) {
    pola += "*".repeat(i) + "\n";
  }

  output.textContent = pola;
}
