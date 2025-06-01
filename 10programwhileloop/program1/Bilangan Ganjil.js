function tampilkanBilanganGanjil() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // Reset hasil sebelumnya

  let i = 1;
  let jumlah = 0;
  let hasil = "<strong>Bilangan Ganjil antara 1 sampai 50:</strong><br>";

  while (i <= 50) {
    if (i % 2 !== 0) {
      hasil += i + " ";
      jumlah += i;
    }
    i++;
  }

  hasil += "<br><br><strong>Jumlah total semua bilangan ganjil: " + jumlah + "</strong>";
  outputDiv.innerHTML = hasil;
}
