function showSection(section) {
    // Hide all sections
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('final-section').style.display = 'none';

    // Apply smooth fade-in effect
    document.getElementById(section).style.opacity = 0;
    document.getElementById(section).style.display = 'block';

    setTimeout(() => {
        document.getElementById(section).style.opacity = 1;
    }, 200);
}
function showSticker(answer) {
    let sticker = document.createElement("img");
    sticker.src = answer === 'yes' ? "https://i.imgur.com/happy-sticker.png" : "https://i.imgur.com/sad-sticker.png";
    sticker.style.width = "150px";
    sticker.style.position = "absolute";
    sticker.style.top = "50%";
    sticker.style.left = "50%";
    sticker.style.transform = "translate(-50%, -50%) scale(0.5)";
    sticker.style.transition = "transform 0.5s ease-in-out";
    document.body.appendChild(sticker);

    setTimeout(() => {
        sticker.style.transform = "translate(-50%, -50%) scale(1)";
    }, 100);
}
