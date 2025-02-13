     <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Memory Game</title>
  <style>
    .game-board {
      display: grid;
      grid-template-columns: repeat(4, 100px);
      gap: 10px;
    }
    .card {
      width: 100px;
      height: 100px;
      background-color: #f1f1f1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2em;
      cursor: pointer;
      border-radius: 10px;
    }
    .flipped {
      background-color: #fff;
    }
  </style>
</head>
<body>
  <div class="game-board" id="game-board"></div>

  <script>
    const emojis = ['❤️', '💌', '💘', '💝', '💖', '💗', '💓', '💋'];
    let cards = [...emojis, ...emojis];
    let flippedCards = [];
    let matchedCards = [];

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function createBoard() {
      const gameBoard = document.getElementById('game-board');
      shuffle(cards).forEach((emoji, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.textContent = '';
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
      });
    }

    function flipCard(e) {
      const card = e.target;
      if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card)) {
        card.textContent = cards[card.dataset.index];
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
          checkMatch();
        }
      }
    }

    function checkMatch() {
      if (flippedCards[0].textContent === flippedCards[1].textContent) {
        matchedCards.push(...flippedCards);
      } else {
        setTimeout(() => {
          flippedCards.forEach(card => {
            card.textContent = '';
            card.classList.remove('flipped');
          });
        }, 1000);
      }
      flippedCards = [];
    }

    createBoard();
  </script>
</body>
</html>
