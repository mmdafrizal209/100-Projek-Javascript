function mintaAngka() {
  let angka;
  let pesan = "";
  let percobaan = 0;

  do {
    angka = prompt("Masukkan angka positif:");
    percobaan++;
    if (angka === null) {
      pesan = "Dibatalkan oleh pengguna.";
      break;
    }
    angka = parseFloat(angka);
    if (isNaN(angka) || angka <= 0) {
      alert("Input tidak valid. Harap masukkan angka lebih dari 0.");
    }
  } while (isNaN(angka) || angka <= 0);

  if (angka > 0) {
    pesan = `✅ Angka valid: ${angka} (percobaan ke-${percobaan})`;
  }

  document.getElementById("output").innerHTML = pesan;
}
