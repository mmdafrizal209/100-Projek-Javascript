const dataNilai = {
  matematika: 80,
  fisika: 75,
  kimia: 90,
  bahasa: 85
};

function jumlahkan() {
  let total = 0;
  for (const mataPelajaran in dataNilai) {
    total += dataNilai[mataPelajaran];
  }
  document.getElementById('result').textContent = `Total nilai: ${total}`;
}
