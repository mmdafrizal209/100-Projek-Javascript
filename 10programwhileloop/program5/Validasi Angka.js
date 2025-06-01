function mintaAngka() {
  let angka = 0;
  let percobaan = 0;
  let log = "";

  while (angka <= 100) {
    angka = parseInt(prompt("Masukkan angka lebih dari 100:"));
    percobaan++;

    if (isNaN(angka)) {
      log += `Percobaan ${percobaan}: Bukan angka!<br>`;
    } else if (angka <= 100) {
      log += `Percobaan ${percobaan}: ${angka} tidak valid<br>`;
    } else {
      log += `Percobaan ${percobaan}: ${angka} diterima 🎉<br>`;
    }
  }

  document.getElementById("output").innerHTML = log + `<br><strong>Berhasil dalam ${percobaan} percobaan!</strong>`;
}
