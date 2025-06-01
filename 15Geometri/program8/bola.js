function hitungVolumeBola(r) {
  if (typeof r !== 'number' || r < 0 || isNaN(r)) {
    return null;
  }
  return (4/3) * Math.PI * Math.pow(r, 3);
}

document.getElementById('hitungBtn').addEventListener('click', () => {
  const rInput = document.getElementById('jariJari').value;
  const r = parseFloat(rInput);
  const hasilDiv = document.getElementById('hasil');

  if (rInput === '' || isNaN(r) || r < 0) {
    hasilDiv.textContent = 'Mohon masukkan angka jari-jari yang valid dan tidak negatif.';
    return;
  }

  const volume = hitungVolumeBola(r);
  hasilDiv.textContent = `Volume Bola = ${volume.toFixed(4)}`;
});
