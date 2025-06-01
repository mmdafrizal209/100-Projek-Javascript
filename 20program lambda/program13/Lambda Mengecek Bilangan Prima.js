const isPrime = n => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

document.getElementById('checkBtn').addEventListener('click', () => {
  const num = parseInt(document.getElementById('numInput').value);
  const result = document.getElementById('result');
  if (isNaN(num) || num < 2) {
    result.textContent = 'Mohon masukkan angka bulat >= 2.';
    result.style.color = 'red';
  } else {
    const prime = isPrime(num);
    if(prime){
      result.textContent = `${num} adalah bilangan prima.`;
      result.style.color = '#72ff72';
    } else {
      result.textContent = `${num} bukan bilangan prima.`;
      result.style.color = '#ff6868';
    }
  }
});
