function hitungLuas() {
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  const hasil = document.getElementById('hasil');

  if (isNaN(alas) || isNaN(tinggi)) {
    hasil.textContent = "Masukkan alas dan tinggi yang valid.";
    return;
  }

  const luas = 0.5 * alas * tinggi;
  hasil.textContent = `Luas segitiga: ${luas}`;
}
