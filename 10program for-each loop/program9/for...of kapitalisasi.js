const kalimat = "belajar javascript sangat mudah";
const list = document.getElementById('list');
const kataArray = kalimat.split(' ');

for (const kata of kataArray) {
  const li = document.createElement('li');
  li.textContent = kata.charAt(0).toUpperCase() + kata.slice(1);
  list.appendChild(li);
}
