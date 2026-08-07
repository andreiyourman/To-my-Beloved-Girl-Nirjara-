let text = `Dear My Beloved Girl,

Happy Birthday, my love. ❤️

I hope your day is filled with happiness, smiles, and beautiful moments.

You are someone special to me, and I hope you always remember how much you mean to me.

I love you.

- Andrei ❤️`;

let index = 0;

function showMessage() {
    let message = document.getElementById("message");
    message.style.display = "block";

    let content = document.getElementById("typing");
    content.innerHTML = "";
    index = 0;

    typeWriter();
}

function typeWriter() {
    let content = document.getElementById("typing");

    if (index < text.length) {
        content.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 700);
