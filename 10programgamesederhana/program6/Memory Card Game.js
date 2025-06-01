(() => {
  const cardsArray = ['🦊','🐸','🐵','🦄','🐯','🐼','🐨','🐰'];
  let cards = [...cardsArray, ...cardsArray];
  const grid = document.getElementById('grid');
  const status = document.getElementById('status');
  const reset = document.getElementById('resetBtn');

  let flippedCards = [];
  let matchedCount = 0;

  const shuffle = arr => arr.sort(() => 0.5 - Math.random());

  const createGrid = () => {
    grid.innerHTML = '';
    cards = shuffle(cards);
    matchedCount = 0;
    flippedCards = [];
    status.textContent = '';
    cards.forEach((emoji, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.emoji = emoji;
      card.dataset.index = index;
      card.addEventListener('click', cardClicked);
      card.innerHTML = '<div></div>';
      grid.appendChild(card);
    });
  };

  const cardClicked = e => {
    const card = e.currentTarget;
    if (flippedCards.length >= 2 || card.classList.contains('flipped') || card.classList.contains('matched')) return;

    card.classList.add('flipped');
    card.querySelector('div').textContent = card.dataset.emoji;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 800);
    }
  };

  const checkMatch = () => {
    const [card1, card2] = flippedCards;
    if (card1.dataset.emoji === card2.dataset.emoji) {
      card1.classList.add('matched');
      card2.classList.add('matched');
      matchedCount += 2;
      if (matchedCount === cards.length) {
        status.textContent = 'Selamat! Anda memenangkan permainan.';
      }
    } else {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      card1.querySelector('div').textContent = '';
      card2.querySelector('div').textContent = '';
    }
    flippedCards = [];
  };

  reset.addEventListener('click', createGrid);

  createGrid();
})();
