const celsiusToFahrenheit = c => (c * 9/5) + 32;

document.getElementById('convertBtn').addEventListener('click', () => {
  const celsius = parseFloat(document.getElementById('celsiusInput').value);
  const result = document.getElementById('result');
  if (isNaN(celsius)) {
    result.textContent = 'Mohon masukkan angka suhu yang valid.';
    result.style.color = 'red';
  } else {
    const fahrenheit = celsiusToFahrenheit(celsius).toFixed(2);
    result.textContent = `${celsius}°C = ${fahrenheit}°F`;
    result.style.color = '#a94444';
  }
});
