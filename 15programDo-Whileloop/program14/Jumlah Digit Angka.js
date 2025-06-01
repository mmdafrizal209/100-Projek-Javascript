function hitungDigit() {
  let input = document.getElementById('angka').value.trim();
  const output = document.getElementById('output');

  if (input === '' || isNaN(input)) {
    output.innerHTML = "Masukkan angka yang valid.";
    return;
  }

  let angka = Math.abs(parseInt(input));
  let count = 0;

  if (angka === 0) {
    count = 1;
  } else {
    do {
      angka = Math.floor(angka / 10);
      count++;
    } while (angka > 0);
  }

  output.innerHTML = `Jumlah digit angka adalah: ${count}`;
}
