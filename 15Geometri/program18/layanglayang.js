function hitungLuas() {
  const d1 = parseFloat(document.getElementById('diagonal1').value);
  const d2 = parseFloat(document.getElementById('diagonal2').value);
  const hasil = document.getElementById('hasil');

  if (isNaN(d1) || isNaN(d2)) {
    hasil.textContent = 'Masukkan panjang kedua diagonal!';
    return;
  }

  const luas = 0.5 * d1 * d2;
  hasil.textContent = `Luas layang-layang = ${luas.toFixed(2)} satuan²`;
}

function hitungKeliling() {
  const s1 = parseFloat(document.getElementById('sisi1').value);
  const s2 = parseFloat(document.getElementById('sisi2').value);
  const hasil = document.getElementById('hasil');

  if (isNaN(s1) || isNaN(s2)) {
    hasil.textContent = 'Masukkan panjang kedua sisi!';
    return;
  }

  const keliling = 2 * (s1 + s2);
  hasil.textContent = `Keliling layang-layang = ${keliling.toFixed(2)} satuan`;
}
