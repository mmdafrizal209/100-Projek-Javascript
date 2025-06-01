function hitungFaktorial() {
  const input = document.getElementById("angka").value;
  let n = parseInt(input);
  const output = document.getElementById("output");

  if (isNaN(n) || n < 0) {
    output.innerHTML = "Masukkan angka bulat ≥ 0.";
    return;
  }

  let hasil = 1;
  let i = 1;

  do {
    hasil *= i;
    i++;
  } while (i <= n);

  output.innerHTML = `Faktorial dari ${n} adalah: ${hasil}`;
}
