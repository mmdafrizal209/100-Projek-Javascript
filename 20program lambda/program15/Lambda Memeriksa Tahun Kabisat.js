const isLeapYear = year =>
  (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

document.getElementById('checkBtn').addEventListener('click', () => {
  const year = parseInt(document.getElementById('yearInput').value);
  const result = document.getElementById('result');
  if (isNaN(year) || year < 0) {
    result.textContent = 'Mohon masukkan tahun yang valid.';
    result.style.color = 'red';
  } else {
    const leap = isLeapYear(year);
    if (leap) {
      result.textContent = `Tahun ${year} adalah tahun kabisat.`;
      result.style.color = '#a2d72e';
    } else {
      result.textContent = `Tahun ${year} bukan tahun kabisat.`;
      result.style.color = '#e24646';
    }
  }
});
