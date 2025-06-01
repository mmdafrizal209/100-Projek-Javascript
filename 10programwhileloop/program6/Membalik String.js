function balikkanString() {
  const input = document.getElementById("inputString").value;
  const output = document.getElementById("output");

  if (input.trim() === "") {
    output.innerHTML = "Masukkan teks terlebih dahulu!";
    return;
  }

  let hasil = "";
  let i = input.length - 1;

  while (i >= 0) {
    hasil += input[i];
    i--;
  }

  output.innerHTML = `<strong>Teks dibalik:</strong> ${hasil}`;
}
