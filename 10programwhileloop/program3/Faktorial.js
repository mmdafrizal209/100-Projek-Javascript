function hitungFaktorial() {
  const input = document.getElementById("angka").value;
  const output = document.getElementById("output");
  let n = parseInt(input);

  if (isNaN(n) || n < 0) {
    output.innerHTML = "Masukkan angka bulat positif!";
    return;
  }

  let hasil = 1;
  let i = n;
  let proses = `${n}! = `;

  while (i > 0) {
    hasil *= i;
    proses += (i === 1) ? "1" : i + " × ";
    i--;
  }

  output.innerHTML = `<strong>${proses} = ${hasil}</strong>`;
}
