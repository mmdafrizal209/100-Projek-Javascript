function tampilkanPola() {
  let tinggi = parseInt(document.getElementById('tinggi').value);
  const output = document.getElementById('output');

  if (isNaN(tinggi) || tinggi < 1) {
    output.innerHTML = "Masukkan angka positif minimal 1.";
    return;
  }

  let baris = 1;
  let hasil = "";

  do {
    let kolom = 1;
    do {
      hasil += "* ";
      kolom++;
    } while (kolom <= baris);
    hasil += "\n";
    baris++;
  } while (baris <= tinggi);

  output.innerText = hasil;
}
