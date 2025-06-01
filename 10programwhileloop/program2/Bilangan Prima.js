function cariBilanganPrima() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // Kosongkan hasil sebelumnya

  let angka = 2;
  let hasil = "<strong>Bilangan prima antara 1 sampai 100:</strong><br>";
  let jumlah = 0;

  while (angka <= 100) {
    let pembagi = 2;
    let prima = true;

    while (pembagi < angka) {
      if (angka % pembagi === 0) {
        prima = false;
        break;
      }
      pembagi++;
    }

    if (prima) {
      hasil += angka + " ";
      jumlah++;
    }

    angka++;
  }

  hasil += "<br><br><strong>Total bilangan prima ditemukan: " + jumlah + "</strong>";
  outputDiv.innerHTML = hasil;
}
