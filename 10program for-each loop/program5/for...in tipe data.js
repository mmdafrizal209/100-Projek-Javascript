const obj = {
  nama: "Sari",
  umur: 30,
  menikah: true,
  pekerjaan: null
};

const list = document.getElementById('list');

for (const key in obj) {
  const li = document.createElement('li');
  li.textContent = `${key}: ${obj[key]} (tipe: ${typeof obj[key]})`;
  list.appendChild(li);
}
