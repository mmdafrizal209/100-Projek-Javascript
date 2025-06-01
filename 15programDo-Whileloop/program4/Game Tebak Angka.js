function tebakAngka() {
  const angkaBenar = Math.floor(Math.random() * 10) + 1;
  let tebakan;
  let percobaan = 0;
  let hasil = "";

  do {
    tebakan = prompt("Tebak angka antara 1 - 10:");
    if (tebakan === null) {
      hasil = "Permainan dibatalkan.";
      break;
    }

    tebakan = parseInt(tebakan);
    percobaan++;

    if (tebakan === angkaBenar) {
      hasil = `🎉 Selamat! Anda menebak dengan benar dalam ${percobaan} percobaan. Angka: ${angkaBenar}`;
    } else if (tebakan < angkaBenar) {
      alert("Terlalu rendah!");
    } else if (tebakan > angkaBenar) {
      alert("Terlalu tinggi!");
    } else {
      alert("Masukkan angka yang valid!");
    }
  } while (tebakan !== angkaBenar);

  document.getElementById("output").innerHTML = hasil;
}
