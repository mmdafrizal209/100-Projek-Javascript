const people = [
  { nama: 'Andi' },
  { nama: 'Budi' },
  { nama: 'Citra' },
  { nama: 'Dewi' }
];

const list = document.getElementById('list');

people.forEach(function(person) {
  const li = document.createElement('li');
  li.textContent = `${person.nama} - Panjang: ${person.nama.length}`;
  list.appendChild(li);
});
