function tampilkanPerkalian() {
  const angka = parseInt(document.getElementById("angka").value);
  const output = document.getElementById("output");

  if (isNaN(angka)) {
    output.innerHTML = "❗ Masukkan angka yang valid.";
    return;
  }

  let i = 1;
  let hasil = `<strong>Tabel perkalian dari ${angka}:</strong><br>`;

  do {
    hasil += `${angka} × ${i} = ${angka * i}<br>`;
    i++;
  } while (i <= 10);

  output.innerHTML = hasil;
}

