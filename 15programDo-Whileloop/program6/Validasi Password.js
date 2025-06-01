function validasiPassword() {
  let password;
  let percobaan = 0;
  let hasil = "";

  do {
    password = prompt("Masukkan password (minimal 8 karakter):");
    percobaan++;

    if (password === null) {
      hasil = "🚫 Aksi dibatalkan oleh pengguna.";
      break;
    }

    if (password.length < 8) {
      alert("❗ Password terlalu pendek. Minimal 8 karakter.");
    }

  } while (!password || password.length < 8);

  if (password && password.length >= 8) {
    hasil = `✅ Password valid setelah ${percobaan} percobaan.`;
  }

  document.getElementById("output").innerHTML = hasil;
}
