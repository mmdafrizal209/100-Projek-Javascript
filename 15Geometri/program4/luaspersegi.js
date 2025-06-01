function hitungLuas() {
  const r = parseFloat(document.getElementById('jari').value);
  const hasil = document.getElementById('hasil');
  if (isNaN(r) || r <= 0) {
    hasil.textContent = "Masukkan jari-jari yang valid.";
    return;
  }
  const luas = Math.PI * r * r;
  hasil.textContent = `Luas lingkaran: ${luas.toFixed(2)} cm²`;
}
