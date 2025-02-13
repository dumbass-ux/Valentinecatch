document.addEventListener("DOMContentLoaded", () => {
    const images = ['❤️', '💜', '💛', '💙', '💚', '💖', '💗', '💕'];
    let gameBoard = document.querySelector(".game-board");
    let startQuizButton = document.getElementById("startQuiz");
    let cards = [...images, ...images].sort(() => Math.random() - 0.5);
    let flippedCards = [];
    
    cards.forEach(symbol => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol;
        card.innerHTML = "❓";
        card.onclick = () => flipCard(card);
        gameBoard.appendChild(card);
    });

    function flipCard(card) {
        if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
            card.innerHTML = card.dataset.symbol;
            card.classList.add("flipped");
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    }

    function checkMatch() {
        if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
            flippedCards = [];
        } else {
            flippedCards.forEach(card => {
                card.innerHTML = "❓";
                card.classList.remove("flipped");
            });
            flippedCards = [];
        }

        if (document.querySelectorAll(".flipped").length === cards.length) {
            startQuizButton.style.display = "block";
        }
    }
});