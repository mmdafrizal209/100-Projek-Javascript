function generatePassword() {
  const panjang = parseInt(document.getElementById("panjang").value);
  const hasilDiv = document.getElementById("hasil");

  if (isNaN(panjang) || panjang < 4 || panjang > 64) {
    hasilDiv.textContent = "Masukkan panjang password antara 4 sampai 64.";
    return;
  }

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < panjang; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  hasilDiv.textContent = password;
}
