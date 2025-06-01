const isEven = n => n % 2 === 0;

document.getElementById('checkBtn').addEventListener('click', () => {
  const num = parseInt(document.getElementById('numInput').value);
  const result = document.getElementById('result');
  if (isNaN(num)) {
    result.textContent = 'Mohon masukkan angka yang valid.';
    result.style.color = 'red';
  } else {
    if (isEven(num)) {
      result.textContent = `${num} adalah bilangan genap.`;
      result.style.color = '#336600';
    } else {
      result.textContent = `${num} adalah bilangan ganjil.`;
      result.style.color = '#cc3300';
    }
  }
});
