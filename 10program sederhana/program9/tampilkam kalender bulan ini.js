function buatKalender() {
  const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const sekarang = new Date();
  const tahun = sekarang.getFullYear();
  const bulanIni = sekarang.getMonth();

  const hariPertama = new Date(tahun, bulanIni, 1).getDay();
  const jumlahHari = new Date(tahun, bulanIni + 1, 0).getDate();

  let html = `<table><tr><th colspan="7">${bulan[bulanIni]} ${tahun}</th></tr>`;
  html += '<tr><th>Ming</th><th>Sen</th><th>Sel</th><th>Rab</th><th>Kam</th><th>Jum</th><th>Sab</th></tr><tr>';

  let hari = 0;
  for(let i=0; i<hariPertama; i++) {
    html += '<td></td>';
    hari++;
  }

  for(let tanggal=1; tanggal<=jumlahHari; tanggal++) {
    html += `<td>${tanggal}</td>`;
    hari++;
    if(hari % 7 === 0 && tanggal !== jumlahHari) {
      html += '</tr><tr>';
    }
  }
  while(hari % 7 !== 0) {
    html += '<td></td>';
    hari++;
  }
  html += '</tr></table>';

  document.getElementById('kalender').innerHTML = html;
}

buatKalender();
