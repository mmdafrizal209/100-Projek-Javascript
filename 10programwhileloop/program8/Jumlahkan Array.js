function jumlahkanArray() {
  const angka = [5, 10, 15, 20, 25];
  let total = 0;
  let i = 0;
  let proses = "Proses: ";

  while (i < angka.length) {
    total += angka[i];
    proses += angka[i];
    if (i < angka.length - 1) {
      proses += " + ";
    }
    i++;
  }

  const hasil = `<strong>${proses} = ${total}</strong>`;
  document.getElementById("output").innerHTML = hasil;
}
