const colors = ['Merah', 'Hijau', 'Biru', 'Kuning'];
const list = document.getElementById('list');

for (const index in colors) {
  const li = document.createElement('li');
  li.textContent = `Index ${index}: ${colors[index]}`;
  list.appendChild(li);
}
