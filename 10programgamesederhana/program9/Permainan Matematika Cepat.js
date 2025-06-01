(() => {
  const questionEl = document.getElementById('question');
  const input = document.getElementById('answerInput');
  const submitBtn = document.getElementById('submitBtn');
  const message = document.getElementById('message');

  let currentQ = {};
  const generateQuestion = () => {
    const a = Math.floor(Math.random() * 20) + 1;
    const b = Math.floor(Math.random() * 20) + 1;
    const op = Math.random() > 0.5 ? '+' : '-';
    return {
      text: `${a} ${op} ${b} = ?`,
      answer: op === '+' ? a + b : a - b
    };
  };

  const displayQuestion = () => {
    currentQ = generateQuestion();
    questionEl.textContent = currentQ.text;
    message.textContent = '';
    input.value = '';
    input.focus();
  };

  submitBtn.addEventListener('click', () => {
    const answer = parseInt(input.value);
    if (isNaN(answer)) {
      message.textContent = 'Masukkan jawaban yang valid!';
      message.style.color = 'red';
      return;
    }
    if (answer === currentQ.answer) {
      message.textContent = 'Benar! 👍';
      message.style.color = 'green';
      setTimeout(displayQuestion, 1000);
    } else {
      message.textContent = `Salah! Jawaban benar: ${currentQ.answer}`;
      message.style.color = 'red';
      setTimeout(displayQuestion, 2000);
    }
  });

  displayQuestion();
})();
