function mintaNama() {
  let nama = "";
  let percobaan = 0;
  let log = "";

  while (nama.trim() === "") {
    nama = prompt("Masukkan nama Anda:");
    percobaan++;

    if (nama === null) {
      log += `Percobaan ${percobaan}: Dibatalkan (null)<br>`;
    } else if (nama.trim() === "") {
      log += `Percobaan ${percobaan}: Tidak boleh kosong!<br>`;
    } else {
      log += `Percobaan ${percobaan}: Nama diterima - ${nama}<br>`;
    }
  }

  document.getElementById("output").innerHTML = log + `<br><strong>Selamat datang, ${nama}!</strong>`;
}
