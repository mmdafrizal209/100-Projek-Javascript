function hitungFaktorial() {
  const angka = parseInt(document.getElementById('inputAngka').value);
  const output = document.getElementById('output');

  if (isNaN(angka) || angka < 0) {
    output.textContent = 'Masukkan angka bulat positif!';
    return;
  }

  let faktorial = 1;
  for (let i = 1; i <= angka; i++) {
    faktorial *= i;
  }

  output.textContent = `Faktorial dari ${angka} adalah ${faktorial}`;
}
