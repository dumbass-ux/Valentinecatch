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
    function showSticker(answer) {
    let sticker = document.createElement("img");
    if (answer === 'yes') {
        sticker.src = "https://i.imgur.com/happy-sticker.png"; // Replace with a cute happy sticker
    } else {
        sticker.src = "https://i.imgur.com/sad-sticker.png"; // Replace with a sad sticker
    }
    sticker.style.width = "150px";
    sticker.style.position = "absolute";
    sticker.style.top = "50%";
    sticker.style.left = "50%";
    sticker.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(sticker);
    }
    function showSticker(answer) {
    let sticker = document.createElement("img");
    sticker.src = answer === 'yes' ? "https://i.imgur.com/happy-sticker.png" : "https://i.imgur.com/sad-sticker.png";
    sticker.style.width = "150px";
    sticker.style.position = "absolute";
    sticker.style.top = "50%";
    sticker.style.left = "50%";
    sticker.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(sticker);
}function showSticker(answer) {
    let sticker = document.createElement("img");
    sticker.src = answer === 'yes' ? "https://i.imgur.com/happy-sticker.png" : "https://i.imgur.com/sad-sticker.png";
    sticker.style.width = "150px";
    sticker.style.position = "absolute";
    sticker.style.top = "50%";
    sticker.style.left = "50%";
    sticker.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(sticker);
    }
    function showSection(section) {
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('final-section').style.display = 'none';
    
    document.getElementById(section).style.display = 'block';
    }
});
function showSection(section) {
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('final-section').style.display = 'none';

    document.getElementById(section).style.display = 'block';
}function showSection(section) {
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('final-section').style.display = 'none';

    document.getElementById(section).style.display = 'block';
                            }
