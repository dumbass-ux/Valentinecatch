document.addEventListener("DOMContentLoaded", function () {
    const memoryGame = document.getElementById("memory-game");
    const quizContainer = document.querySelector(".quiz-container");
    const resultContainer = document.querySelector(".result-container");
    const startQuizBtn = document.getElementById("start-quiz");
    const submitQuizBtn = document.getElementById("submit-quiz");
    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("no");
    const sticker = document.getElementById("sticker");

    // Memory Game Setup
    const images = ["❤️", "💖", "💘", "💕", "🌹", "🍫", "🎁", "💌"];
    let cards = [...images, ...images].sort(() => Math.random() - 0.5);
    let firstCard, secondCard, flippedCards = 0;

    cards.forEach((emoji, index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.emoji = emoji;
        card.addEventListener("click", flipCard);
        memoryGame.appendChild(card);
    });

    function flipCard() {
        if (this === firstCard || this.classList.contains("flipped")) return;
        this.innerHTML = this.dataset.emoji;
        this.classList.add("flipped");

        if (!firstCard) {
            firstCard = this;
        } else {
            secondCard = this;
            checkMatch();
        }
    }

    function checkMatch() {
        if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
            flippedCards += 2;
            resetCards();
            if (flippedCards === cards.length) startQuizBtn.classList.remove("hidden");
        } else {
            setTimeout(() => {
                firstCard.innerHTML = "";
                secondCard.innerHTML = "";
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                resetCards();
            }, 800);
        }
    }

    function resetCards() {
        firstCard = null;
        secondCard = null;
    }

    // Quiz Setup
    startQuizBtn.addEventListener("click", () => {
        document.querySelector(".game-container").classList.add("hidden");
        quizContainer.classList.remove("hidden");
        displayQuiz();
    });

    const questions = [
        { question: "What's my fav colour?", options: ["Blue", "Red", "Pink", "Purple"], answer: "Pink" },
        { question: "What's something I love the most?", options: ["Food", "Social media", "Travelling", "Socialising"], answer: "Travelling" },
        { question: "Growing up, what did I want to become?", options: ["Doctor", "Singer", "Teacher", "Air hostess"], answer: "Singer" },
        { question: "What was my first pet's name?", options: ["Robin", "Jimmy", "Dabbu", "Tiger"], answer: "Jimmy" },
        { question: "What would I prefer more?", options: ["Burger", "Pizza", "Pasta", "Tacos"], answer: "Pizza" }
    ];

    function displayQuiz() {
        const quizDiv = document.getElementById("quiz");
        quizDiv.innerHTML = "";
        questions.forEach((q, index) => {
            let qDiv = document.createElement("div");
            qDiv.innerHTML = `<p>${q.question}</p>`;
            q.options.forEach(option => {
                qDiv.innerHTML += `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`;
            });
            quizDiv.appendChild(qDiv);
        });
    }

    submitQuizBtn.addEventListener("click", () => {
        let score = 0;
        questions.forEach((q, index) => {
            let selected = document.querySelector(`input[name="q${index}"]:checked`);
            if (selected && selected.value === q.answer) score++;
        });

        quizContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");

        let message = score === 5 ? "cwazzyy krdiya" : score >= 3 ? "revision ki zrurat hai" : "aap Mumbai nhi aarhe hain(mere saath)";
        alert(message);
    });

    // Valentine Proposal
    yesBtn.addEventListener("click", () => {
        sticker.innerHTML = "😊💖 Yayyy!";
    });

    noBtn.addEventListener("click", () => {
        sticker.innerHTML = "😢💔 Oh no...";
    });
});