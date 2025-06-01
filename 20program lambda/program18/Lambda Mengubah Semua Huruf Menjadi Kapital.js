const toUpperCase = str => str.toUpperCase();

document.getElementById('uppercaseBtn').addEventListener('click', () => {
  const text = document.getElementById('textInput').value.trim();
  const result = document.getElementById('result');
  if (!text) {
    result.textContent = 'Mohon masukkan teks.';
    result.style.color = 'red';
  } else {
    const upper = toUpperCase(text);
    result.textContent = upper;
    result.style.color = '#4fadff';
  }
});
