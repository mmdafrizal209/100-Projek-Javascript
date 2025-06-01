function keliling() {
  const jari = parseFloat(document.getElementById('jari').value);
  const hasil = document.getElementById('hasil');

  if (isNaN(jari) || jari < 0) {
    hasil.textContent = "Masukkan jari-jari yang valid.";
    return;
  }

  const kelilingLingkaran = 2 * Math.PI * jari;
  hasil.textContent = `Keliling lingkaran: ${kelilingLingkaran.toFixed(2)}`;
}
