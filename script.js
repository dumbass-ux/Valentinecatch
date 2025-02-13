function showSection(section) {
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('final-section').style.display = 'none';

    document.getElementById(section).style.opacity = 0;
    document.getElementById(section).style.display = 'block';

    setTimeout(() => {
        document.getElementById(section).style.opacity = 1;
    }, 200); // Smooth fade-in effect
    function selectAnswer(event) {
    let correctAnswers = {
        "What’s my favorite color? 🎨": "💜 Purple",
        "How do I like my tea? 🍵": "🖤 Black Tea",
        "What’s the best way to spend a cozy evening? 🌙": "📖 Reading together",
        "What’s my go-to comfort food? 🍕": "🍫 Chocolate",
        "Which romantic gesture melts my heart the most? 💖": "💌 Love letters",
        "What’s my dream date? ✨": "🏕️ Stargazing under the stars"
    };

    let selectedAnswer = event.target.innerText;
    let questionText = event.target.parentElement.querySelector("p").innerText;

    if (correctAnswers[questionText] === selectedAnswer) {
        event.target.style.backgroundColor = "#a6eea6"; // Green for correct answer
        event.target.style.color = "#fff";
    } else {
        event.target.style.backgroundColor = "#ff6b6b"; // Red for wrong answer
        event.target.style.color = "#fff";
    }

    // Prevent multiple clicks
    event.target.parentElement.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    });
}

// Attach event listeners to quiz buttons
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("#quiz-section button").forEach(button => {
        button.addEventListener("click", selectAnswer);
    });
})
}function selectAnswer(event) {


function showSticker(choice) {
    if (choice === 'yes') {
        alert("Yay! 💖 Let's celebrate love! 🎉");
    } else {
        alert("Aww 💔 saddie hogyi?")
const cardsArray = [
    { name: "heart", img: "❤️" },
    { name: "flower", img: "🌹" },
    { name: "ring", img: "💍" },
    { name: "gift", img: "🎁" },
    { name: "heart", img: "❤️" },
    { name: "flower", img: "🌹" },
    { name: "ring", img: "💍" },
    { name: "gift", img: "🎁" }
];

let selectedCards = [];
let matchedCards = [];

function createBoard() {
    const gameBoard = document.querySelector(".game-board");
    gameBoard.innerHTML = "";

    // Shuffle cards randomly
    const shuffledCards = cardsArray.sort(() => 0.5 - Math.random());

    shuffledCards.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.name = card.name;
        cardElement.innerHTML = "❔"; // Hidden state
        cardElement.addEventListener("click", flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function flipCard() {
    if (selectedCards.length < 2 && !this.classList.contains("matched")) {
        this.innerHTML = cardsArray.find(card => card.name === this.dataset.name).img;
        selectedCards.push(this);

        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

function checkMatch() {
    if (selectedCards[0].dataset.name === selectedCards[1].dataset.name) {
        selectedCards.forEach(card => card.classList.add("matched"));
        matchedCards.push(...selectedCards);
    } else {
        selectedCards.forEach(card => card.innerHTML = "❔");
    }
    selectedCards = [];

    if (matchedCards.length === cardsArray.length) {
        setTimeout(() => alert("Congratulations! 🎉 You matched all pairs!"), 500);
    }
}

// Initialize the game
document.addEventListener("DOMContentLoaded", createBoard);
