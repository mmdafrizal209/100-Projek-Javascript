function hitungDigit() {
  const input = document.getElementById("angka").value;
  let angka = parseInt(input);
  const output = document.getElementById("output");

  if (isNaN(angka) || angka < 0) {
    output.innerHTML = "Masukkan angka positif yang valid.";
    return;
  }

  let jumlahDigit = 0;

  do {
    angka = Math.floor(angka / 10);
    jumlahDigit++;
  } while (angka > 0);

  output.innerHTML = `Jumlah digit: ${jumlahDigit}`;
}
