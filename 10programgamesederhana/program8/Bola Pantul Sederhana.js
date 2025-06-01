(() => {
  const canvas = document.getElementById('ballGame');
  const ctx = canvas.getContext('2d');

  const ball = {
    x: 50,
    y: 50,
    radius: 15,
    dx: 3,
    dy: 3,
    color: '#00adb5'
  };

  const drawBall = () => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
  };

  const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();

    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
      ball.dx = -ball.dx;
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      ball.dy = -ball.dy;
    }

    requestAnimationFrame(update);
  };

  update();
})();
