function showSection(section) {
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('final-section').style.display = 'none';

    document.getElementById(section).style.opacity = 0;
    document.getElementById(section).style.display = 'block';

    setTimeout(() => {
        document.getElementById(section).style.opacity = 1;
    }, 200); // Smooth fade-in effect
}
function showSticker(choice) {
    if (choice === 'yes') {
        alert("Yay! 💖 Let's celebrate love! 🎉");
    } else {
        alert("Aww 💔 Maybe next time? 🥺");
    }
}
