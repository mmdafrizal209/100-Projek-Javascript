function hitung() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  let hasil;

  if (isNaN(num1) || isNaN(num2)) {
    hasil = "Masukkan angka yang valid!";
  } else {
    switch (operator) {
      case '+':
        hasil = num1 + num2;
        break;
      case '-':
        hasil = num1 - num2;
        break;
      case '*':
        hasil = num1 * num2;
        break;
      case '/':
        hasil = num2 !== 0 ? num1 / num2 : "Tidak bisa dibagi 0";
        break;
    }
  }

  document.getElementById('hasil').textContent = hasil;
}
