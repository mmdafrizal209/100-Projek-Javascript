function balikString() {
  const text = document.getElementById('inputText').value;
  const output = document.getElementById('output');

  if (text.trim() === '') {
    output.textContent = 'Masukkan teks terlebih dahulu!';
    return;
  }

  let reversed = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  output.textContent = reversed;
}
