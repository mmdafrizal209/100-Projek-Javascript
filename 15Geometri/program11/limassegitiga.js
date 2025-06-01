function hitungVolume() {
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggiAlas = parseFloat(document.getElementById('tinggiAlas').value);
  const tinggiLimas = parseFloat(document.getElementById('tinggiLimas').value);
  const hasil = document.getElementById('hasil');

  if (isNaN(alas) || isNaN(tinggiAlas) || isNaN(tinggiLimas)) {
    hasil.textContent = 'Masukkan semua nilai dengan benar!';
    return;
  }

  const luasAlas = 0.5 * alas * tinggiAlas;
  const volume = (1 / 3) * luasAlas * tinggiLimas;

  hasil.textContent = `Volume limas segitiga adalah ${volume.toFixed(2)} satuan³`;
}
