const kalimat = "Pemrograman JavaScript";
const vokal = ['a', 'i', 'u', 'e', 'o'];
const list = document.getElementById('list');

for (const char of kalimat.toLowerCase()) {
  if (vokal.includes(char)) {
    const li = document.createElement('li');
    li.textContent = char;
    list.appendChild(li);
  }
}
