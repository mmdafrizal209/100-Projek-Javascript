function hitungVolumeTabung(r, t) {
  if (
    typeof r !== 'number' || r < 0 || isNaN(r) ||
    typeof t !== 'number' || t < 0 || isNaN(t)
  ) {
    return null;
  }
  return Math.PI * r * r * t;
}

document.getElementById('hitungBtn').addEventListener('click', () => {
  const rInput = document.getElementById('jariJari').value;
  const tInput = document.getElementById('tinggi').value;
  const r = parseFloat(rInput);
  const t = parseFloat(tInput);
  const hasilDiv = document.getElementById('hasil');

  if (
    rInput === '' || isNaN(r) || r < 0 ||
    tInput === '' || isNaN(t) || t < 0
  ) {
    hasilDiv.textContent = 'Mohon masukkan angka jari-jari dan tinggi yang valid dan tidak negatif.';
    return;
  }

  const volume = hitungVolumeTabung(r, t);
  hasilDiv.textContent = `Volume Tabung = ${volume.toFixed(4)}`;
});
