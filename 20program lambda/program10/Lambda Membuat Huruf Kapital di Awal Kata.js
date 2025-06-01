const capitalizeFirstLetter = sentence =>
  sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

document.getElementById('capitalizeBtn').addEventListener('click', () => {
  const sentence = document.getElementById('sentenceInput').value.trim();
  const result = document.getElementById('result');
  if (!sentence) {
    result.textContent = 'Mohon masukkan kalimat.';
    result.style.color = 'red';
  } else {
    const capitalized = capitalizeFirstLetter(sentence);
    result.textContent = capitalized;
    result.style.color = '#ff7043';
  }
});
