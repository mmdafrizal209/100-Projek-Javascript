(() => {
  const boardEl = document.getElementById('board');
  const statusEl = document.getElementById('status');
  const resetBtn = document.getElementById('resetBtn');
  let board = Array(9).fill(null);
  let currentPlayer = 'X';
  let gameActive = true;

  // Create 9 buttons for cells
  for(let i=0; i<9; i++) {
    const btn = document.createElement('button');
    btn.className = 'cell';
    btn.setAttribute('data-index', i);
    btn.addEventListener('click', cellClick);
    boardEl.appendChild(btn);
  }

  function cellClick(e) {
    const index = +e.target.getAttribute('data-index');
    if (!gameActive || board[index]) return;
    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWin()) {
      statusEl.textContent = `Pemain ${currentPlayer} menang!`;
      gameActive = false;
      return;
    }

    if (board.every(cell => cell !== null)) {
      statusEl.textContent = 'Permainan seri!';
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusEl.textContent = `Giliran pemain ${currentPlayer}`;
  }

  function checkWin() {
    const winningConditions = [
      [0,1,2],[3,4,5],[6,7,8], // rows
      [0,3,6],[1,4,7],[2,5,8], // columns
      [0,4,8],[2,4,6]          // diagonals
    ];
    return winningConditions.some(condition => 
      condition.every(index => board[index] === currentPlayer)
    );
  }

  resetBtn.addEventListener('click', () => {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    gameActive = true;
    statusEl.textContent = `Giliran pemain ${currentPlayer}`;
    Array.from(boardEl.children).forEach(cell => cell.textContent = '');
  });

  statusEl.textContent = `Giliran pemain ${currentPlayer}`;
})();
