const reverseString = str => str.split('').reverse().join('');

document.getElementById('reverseBtn').addEventListener('click', () => {
  const text = document.getElementById('textInput').value.trim();
  const result = document.getElementById('result');
  if (!text) {
    result.textContent = 'Mohon masukkan teks.';
    result.style.color = 'red';
  } else {
    const reversed = reverseString(text);
    result.textContent = reversed;
    result.style.color = '#33475b';
  }
});
