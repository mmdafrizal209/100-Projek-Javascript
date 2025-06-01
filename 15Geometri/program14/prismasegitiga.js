function hitungVolume() {
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggiSegitiga = parseFloat(document.getElementById('tinggiSegitiga').value);
  const tinggiPrisma = parseFloat(document.getElementById('tinggiPrisma').value);
  const hasil = document.getElementById('hasil');

  if (isNaN(alas) || isNaN(tinggiSegitiga) || isNaN(tinggiPrisma)) {
    hasil.textContent = 'Masukkan semua nilai dengan benar!';
    return;
  }

  const luasAlas = 0.5 * alas * tinggiSegitiga;
  const volume = luasAlas * tinggiPrisma;

  hasil.textContent = `Volume prisma segitiga adalah ${volume.toFixed(2)} satuan³`;
}
