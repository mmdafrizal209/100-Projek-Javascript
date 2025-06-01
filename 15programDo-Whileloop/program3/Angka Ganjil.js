function tampilkanGanjil() {
  const batas = parseInt(document.getElementById("batas").value);
  const output = document.getElementById("output");

  if (isNaN(batas) || batas < 1) {
    output.innerHTML = "Masukkan nilai n yang valid (minimal 1).";
    return;
  }

  let i = 1;
  let hasil = `<strong>Angka ganjil dari 1 hingga ${batas}:</strong><br>`;

  do {
    if (i % 2 === 1) {
      hasil += `${i} `;
    }
    i++;
  } while (i <= batas);

  output.innerHTML = hasil;
}
