function tampilkanKelipatan() {
  const k = parseInt(document.getElementById("kelipatan").value);
  const batas = parseInt(document.getElementById("batas").value);
  const output = document.getElementById("output");

  if (isNaN(k) || isNaN(batas) || k <= 0 || batas <= 0) {
    output.innerHTML = "Masukkan angka valid untuk kelipatan dan batas.";
    return;
  }

  let hasil = `<strong>Bilangan kelipatan ${k} sampai ${batas}:</strong><br>`;
  let i = k;
  let total = 0;
  let count = 0;

  while (i <= batas) {
    hasil += i + " ";
    total += i;
    count++;
    i += k;
  }

  hasil += `<br><br><strong>Jumlah bilangan: ${count}</strong><br>`;
  hasil += `<strong>Total nilai: ${total}</strong>`;
  output.innerHTML = hasil;
}
