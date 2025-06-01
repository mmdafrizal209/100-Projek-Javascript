const getLength = str => str.length;

document.getElementById('lengthBtn').addEventListener('click', () => {
  const str = document.getElementById('textInput').value;
  const result = document.getElementById('result');
  if (!str.trim()) {
    result.textContent = 'Mohon masukkan teks.';
    result.style.color = 'red';
  } else {
    const length = getLength(str);
    result.textContent = `Panjang teks: ${length} karakter.`;
    result.style.color = '#4e342e';
  }
});
