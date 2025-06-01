function tanyaLanjut() {
  let jawaban;
  let riwayat = "";
  let langkah = 1;

  do {
    jawaban = prompt("Ingin lanjut? (ya/tidak)");
    if (jawaban === null) {
      jawaban = "batal";
    } else {
      jawaban = jawaban.toLowerCase().trim();
    }

    riwayat += `Langkah ${langkah}: ${jawaban}<br>`;
    langkah++;
  } while (jawaban !== "tidak");

  riwayat += "<br><strong>Proses dihentikan karena pengguna memilih 'tidak'.</strong>";
  document.getElementById("output").innerHTML = riwayat;
}
