function hitungMundur() {
  const input = parseInt(document.getElementById("angka").value);
  const output = document.getElementById("output");

  if (isNaN(input) || input < 1) {
    output.innerHTML = "Masukkan angka bulat ≥ 1";
    return;
  }

  let i = input;
  let hasil = `<strong>Hitung mundur dari ${input}:</strong><br>`;

  while (i >= 0) {
    hasil += i + (i > 0 ? " ⏳<br>" : " 🚀<br>");
    i--;
  }

  output.innerHTML = hasil;
}
