function tampilkanTabel() {
  const angka = parseInt(document.getElementById('inputAngka').value);
  const output = document.getElementById('output');

  if (isNaN(angka) || angka <= 0) {
    output.innerHTML = 'Masukkan angka bulat positif!';
    return;
  }

  let tabel = '<table><thead><tr><th>Perkalian</th><th>Hasil</th></tr></thead><tbody>';
  for (let i = 1; i <= 10; i++) {
    tabel += `<tr><td>${angka} x ${i}</td><td>${angka * i}</td></tr>`;
  }
  tabel += '</tbody></table>';

  output.innerHTML = tabel;
}
