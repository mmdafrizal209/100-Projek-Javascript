function jumlahkan() {
  const input = document.getElementById("angka").value;
  let n = parseInt(input);
  const output = document.getElementById("output");

  if (isNaN(n) || n < 1) {
    output.innerHTML = "Masukkan angka n yang valid (minimal 1).";
    return;
  }

  let total = 0;
  let i = 1;

  do {
    total += i;
    i++;
  } while (i <= n);

  output.innerHTML = `Jumlah dari 1 sampai ${n} adalah: ${total}`;
}
