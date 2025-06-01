(() => {
  const canvas = document.getElementById('maze');
  const ctx = canvas.getContext('2d');
  const tileSize = 40;
  const rows = 10;
  const cols = 10;
  
  // Maze grid: 1 = wall, 0 = path
  const maze = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1],
    [1,0,1,1,1,0,1,0,1,1],
    [1,0,1,0,1,0,0,0,0,1],
    [1,0,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,1,0,1,0,1],
    [1,0,1,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]
  ];
  
  let player = { x: 1, y: 1 };
  const goal = { x: 8, y: 8 };

  const drawCell = (x, y, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
  };

  const drawMaze = () => {
    for(let y=0; y<rows; y++) {
      for(let x=0; x<cols; x++) {
        if (maze[y][x] === 1) {
          drawCell(x, y, '#222');
        } else {
          drawCell(x, y, '#fff');
        }
      }
    }
    drawCell(goal.x, goal.y, '#2ecc71');
    drawCell(player.x, player.y, '#3498db');
  };

  const canMoveTo = (x, y) => {
    return x >=0 && y >=0 && x < cols && y < rows && maze[y][x] === 0;
  };

  const movePlayer = (dx, dy) => {
    const newX = player.x + dx;
    const newY = player.y + dy;
    if (canMoveTo(newX, newY)) {
      player.x = newX;
      player.y = newY;
      drawMaze();
      if (player.x === goal.x && player.y === goal.y) {
        setTimeout(() => {
          alert('Selamat! Anda berhasil keluar dari labirin!');
          player = { x: 1, y: 1 };
          drawMaze();
        }, 100);
      }
    }
  };

  window.addEventListener('keydown', e => {
    switch(e.key) {
      case 'ArrowUp': movePlayer(0,-1); break;
      case 'ArrowDown': movePlayer(0,1); break;
      case 'ArrowLeft': movePlayer(-1,0); break;
      case 'ArrowRight': movePlayer(1,0); break;
    }
  });

  drawMaze();
})();
