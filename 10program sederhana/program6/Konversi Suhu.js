function konversiSuhu() {
  const nilai = parseFloat(document.getElementById("nilaiSuhu").value);
  const dari = document.getElementById("dari").value;
  const ke = document.getElementById("ke").value;
  const hasilDiv = document.getElementById("hasil");

  if (isNaN(nilai)) {
    hasilDiv.textContent = "Masukkan suhu yang valid!";
    return;
  }

  let suhuC;

  // Konversi ke Celsius dulu
  switch (dari) {
    case "c":
      suhuC = nilai;
      break;
    case "f":
      suhuC = (nilai - 32) * 5 / 9;
      break;
    case "k":
      suhuC = nilai - 273.15;
      break;
  }

  let hasil;

  // Konversi dari Celsius ke target
  switch (ke) {
    case "c":
      hasil = suhuC;
      break;
    case "f":
      hasil = (suhuC * 9 / 5) + 32;
      break;
    case "k":
      hasil = suhuC + 273.15;
      break;
  }

  hasilDiv.textContent = `Hasil: ${hasil.toFixed(2)}° ${ke.toUpperCase()}`;
}
