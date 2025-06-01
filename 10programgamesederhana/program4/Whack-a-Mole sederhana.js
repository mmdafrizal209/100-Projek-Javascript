(() => {
  const gameContainer = document.getElementById('gameContainer');
  const scoreEl = document.getElementById('score');
  const startBtn = document.getElementById('startBtn');
  let score = 0;
  let activeMole = null;
  let intervalId = null;

  // Setup holes
  for(let i=0; i<9; i++){
    const hole = document.createElement('div');
    hole.classList.add('hole');
    const mole = document.createElement('div');
    mole.classList.add('mole');
    hole.appendChild(mole);
    gameContainer.appendChild(hole);

    hole.addEventListener('click', () => {
      if (mole.classList.contains('active')){
        score++;
        scoreEl.textContent = `Skor: ${score}`;
        mole.classList.remove('active');
      }
    });
  }

  const holes = [...gameContainer.children];

  const showMole = () => {
    holes.forEach(hole => hole.firstChild.classList.remove('active'));
    const index = Math.floor(Math.random() * holes.length);
    holes[index].firstChild.classList.add('active');
    activeMole = holes[index].firstChild;
  };

  const startGame = () => {
    score = 0;
    scoreEl.textContent = `Skor: ${score}`;
    startBtn.disabled = true;
    showMole();
    intervalId = setInterval(showMole, 1000);
    setTimeout(() => {
      clearInterval(intervalId);
      startBtn.disabled = false;
      alert(`Game selesai! Skor Anda: ${score}`);
      holes.forEach(h => h.firstChild.classList.remove('active'));
    }, 30000);
  };

  startBtn.addEventListener('click', startGame);
})();
