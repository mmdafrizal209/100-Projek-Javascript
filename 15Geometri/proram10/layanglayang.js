function hitungLuas() {
  const d1 = parseFloat(document.getElementById("d1").value);
  const d2 = parseFloat(document.getElementById("d2").value);
  if (isNaN(d1) || isNaN(d2)) {
    document.getElementById("hasil").textContent = "Masukkan nilai diagonal yang valid.";
    return;
  }
  const luas = 0.5 * d1 * d2;
  document.getElementById("hasil").textContent = `Luas layang-layang adalah ${luas}`;
}
