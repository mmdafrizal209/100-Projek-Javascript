const list = document.getElementById('list');
const words = ['satu', 'dua', 'tiga', 'empat', 'lima'];

words.forEach(function(word) {
  const li = document.createElement('li');
  li.textContent = word.toUpperCase();
  list.appendChild(li);
});
