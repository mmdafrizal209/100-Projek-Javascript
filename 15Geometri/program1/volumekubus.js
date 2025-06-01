function volumeKubus() {
  const sisi = parseFloat(document.getElementById('sisi').value);
  const hasil = document.getElementById('hasil');

  if (isNaN(sisi) || sisi < 0) {
    hasil.textContent = "Masukkan panjang sisi yang valid.";
    return;
  }

  const volume = sisi ** 3;
  hasil.textContent = `Volume kubus: ${volume}`;
}
