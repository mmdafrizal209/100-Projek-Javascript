const greet = (name) => `Halo, ${name}! Selamat datang di proyek lambda sederhana.`;

document.getElementById('greetBtn').addEventListener('click', () => {
  const nameInput = document.getElementById('nameInput').value.trim();
  const result = document.getElementById('result');
  if (nameInput.length === 0) {
    result.textContent = 'Mohon masukkan nama Anda terlebih dahulu.';
    result.style.color = 'red';
  } else {
    const greeting = greet(nameInput);
    result.textContent = greeting;
    result.style.color = '#333';
  }
});
