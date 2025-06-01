const angka = [2, 4, 6, 8, 10];

function jumlahkan() {
  let total = 0;
  angka.forEach(function(num) {
    total += num;
  });
  document.getElementById('result').textContent = `Total jumlah: ${total}`;
}
