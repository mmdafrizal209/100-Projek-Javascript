(() => {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  const grid = 20;
  let count = 0;

  let snake = [{x: 160, y:160}];
  let direction = {x: grid, y: 0};
  let food = {x: 0, y: 0};

  const randomPosition = () => {
    return Math.floor(Math.random() * (canvas.width / grid)) * grid;
  };

  const placeFood = () => {
    food.x = randomPosition();
    food.y = randomPosition();
  };

  const gameLoop = () => {
    requestAnimationFrame(gameLoop);

    if (++count < 6) return;
    count = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // move snake
    const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height || snake.some(s => s.x === head.x && s.y === head.y)) {
      alert('Game over! Segarkan halaman untuk coba lagi.');
      document.location.reload();
      return;
    }

    snake.unshift(head);

    // eat food
    if (head.x === food.x && head.y === food.y) {
      placeFood();
    } else {
      snake.pop();
    }

    // draw food
    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(food.x, food.y, grid-1, grid-1);

    // draw snake
    ctx.fillStyle = '#2ecc71';
    snake.forEach((segment, i) => {
      ctx.fillRect(segment.x, segment.y, grid-1, grid-1);
    });
  };

  window.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft' && direction.x === 0) direction = {x: -grid, y: 0};
    else if (e.key === 'ArrowUp' && direction.y === 0) direction = {x: 0, y: -grid};
    else if (e.key === 'ArrowRight' && direction.x === 0) direction = {x: grid, y: 0};
    else if (e.key === 'ArrowDown' && direction.y === 0) direction = {x: 0, y: grid};
  });

  placeFood();
  requestAnimationFrame(gameLoop);
})();
