function hitungVolume() {
  const panjang = parseFloat(document.getElementById('panjang').value);
  const lebar = parseFloat(document.getElementById('lebar').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  const hasil = document.getElementById('hasil');

  if (isNaN(panjang) || isNaN(lebar) || isNaN(tinggi)) {
    hasil.textContent = 'Masukkan semua nilai dengan benar!';
    return;
  }

  const volume = panjang * lebar * tinggi;
  hasil.textContent = `Volume prisma segiempat adalah ${volume.toFixed(2)} satuan³`;
}
