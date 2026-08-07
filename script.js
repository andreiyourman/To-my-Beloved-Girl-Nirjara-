function showMessage() {
    document.getElementById("message").style.display = "block";
}

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 4 + 4) + "s";
    heart.style.fontSize = (Math.random() * 25 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 250);
