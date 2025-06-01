function tampilkanHari() {
  const hariIndo = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const hari = new Date().getDay();
  document.getElementById('hari').textContent = `Hari ini adalah ${hariIndo[hari]}`;
}
