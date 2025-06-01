function hitungJumlahDigit() {
  const angka = document.getElementById('inputAngka').value.trim();
  const output = document.getElementById('output');

  if (angka === '' || isNaN(angka)) {
    output.textContent = 'Masukkan angka yang valid!';
    return;
  }

  // Menghilangkan tanda minus jika ada
  const angkaBersih = angka.startsWith('-') ? angka.slice(1) : angka;
  const jumlahDigit = angkaBersih.length;

  output.textContent = `Jumlah digit dari angka ${angka} adalah ${jumlahDigit}`;
}
