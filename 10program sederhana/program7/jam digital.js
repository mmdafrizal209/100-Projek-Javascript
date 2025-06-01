function tampilkanJam() {
  const now = new Date();
  const jam = String(now.getHours()).padStart(2, '0');
  const menit = String(now.getMinutes()).padStart(2, '0');
  const detik = String(now.getSeconds()).padStart(2, '0');

  document.getElementById("clock").textContent = `${jam}:${menit}:${detik}`;
}

setInterval(tampilkanJam, 1000);
tampilkanJam(); // panggil sekali agar langsung tampil
