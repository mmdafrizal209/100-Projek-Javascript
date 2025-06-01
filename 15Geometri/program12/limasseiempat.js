function hitungVolume() {
  const p = parseFloat(document.getElementById('panjang').value);
  const l = parseFloat(document.getElementById('lebar').value);
  const t = parseFloat(document.getElementById('tinggi').value);
  const hasil = document.getElementById('hasil');

  if (isNaN(p) || isNaN(l) || isNaN(t)) {
    hasil.textContent = 'Masukkan semua nilai dengan benar!';
    return;
  }

  const volume = (1 / 3) * p * l * t;
  hasil.textContent = `Volume limas segiempat adalah ${volume.toFixed(2)} satuan³`;
}
