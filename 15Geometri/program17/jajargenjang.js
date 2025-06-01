function hitungLuas() {
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  const hasil = document.getElementById('hasil');

  if (isNaN(alas) || isNaN(tinggi)) {
    hasil.textContent = 'Masukkan nilai alas dan tinggi yang valid!';
    return;
  }

  const luas = alas * tinggi;
  hasil.textContent = `Luas jajar genjang adalah ${luas.toFixed(2)} satuan²`;
}
