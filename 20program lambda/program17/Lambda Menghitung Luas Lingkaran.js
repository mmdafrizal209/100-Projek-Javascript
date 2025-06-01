const calculateArea = r => Math.PI * r * r;

document.getElementById('calculateBtn').addEventListener('click', () => {
  const radius = parseFloat(document.getElementById('radiusInput').value);
  const result = document.getElementById('result');
  if (isNaN(radius) || radius < 0) {
    result.textContent = 'Mohon masukkan jari-jari yang valid.';
    result.style.color = 'red';
  } else {
    const area = calculateArea(radius).toFixed(2);
    result.textContent = `Luas lingkaran dengan jari-jari ${radius} adalah ${area}.`;
    result.style.color = '#273c75';
  }
});
