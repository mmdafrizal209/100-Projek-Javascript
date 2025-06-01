const list = document.getElementById('list');
const fruits = ['Apel', 'Jeruk', 'Mangga', 'Pisang', 'Anggur'];

fruits.forEach(function(item) {
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
});
