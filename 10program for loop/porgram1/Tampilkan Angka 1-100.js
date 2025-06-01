function tampilkanAngka() {
  const output = document.getElementById("output");
  let hasil = "";
  for (let i = 1; i <= 100; i++) {
    hasil += i + (i % 10 === 0 ? "\n" : ", ");
  }
  output.textContent = hasil;
}
