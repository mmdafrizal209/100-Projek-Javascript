const angka = [5, 10, 15, 20, 25];

function hitungJumlah() {
  let total = 0;
  for (const num of angka) {
    total += num;
  }
  document.getElementById('result').textContent = `Total: ${total}`;
}
