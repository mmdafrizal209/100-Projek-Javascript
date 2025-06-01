function mintaPassword() {
  const passwordBenar = "rahasia123";
  let input = "";
  let percobaan = 0;
  let log = "";

  while (input !== passwordBenar) {
    input = prompt("Masukkan password:");
    percobaan++;

    if (input === null) {
      log += `❌ Percobaan ${percobaan}: Batal (ditekan Cancel)<br>`;
    } else if (input === passwordBenar) {
      log += `✅ Percobaan ${percobaan}: Password benar!<br>`;
    } else {
      log += `❌ Percobaan ${percobaan}: Salah (${input})<br>`;
    }
  }

  log += `<br><strong>Berhasil login dalam ${percobaan} percobaan!</strong>`;
  document.getElementById("output").innerHTML = log;
}
