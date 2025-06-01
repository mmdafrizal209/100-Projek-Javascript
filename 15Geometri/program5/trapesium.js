function hitungKeliling() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const d = parseFloat(document.getElementById("d").value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
    document.getElementById("hasil").textContent = "Masukkan semua sisi yang valid.";
    return;
  }

  const keliling = a + b + c + d;
  document.getElementById("hasil").textContent = `Keliling trapesium adalah ${keliling}`;
}
