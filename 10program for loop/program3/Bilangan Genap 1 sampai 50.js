function tampilkanGenap() {
  const output = document.getElementById('output');
  let hasil = "";

  for (let i = 2; i <= 50; i += 2) {
    hasil += i + (i % 10 === 0 ? "\n" : ", ");
  }

  output.textContent = hasil;
}
