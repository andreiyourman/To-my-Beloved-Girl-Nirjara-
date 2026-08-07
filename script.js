let text = `Dear My Beloved Girl,

Happy Birthday, my love. ❤️

On your special day, I want you to know how grateful I am to have someone like you in my life.

You are someone special who brings happiness and warmth into my days.

I hope this new chapter of your life brings you endless smiles, success, and all the happiness you deserve.

Thank you for being you. I will always cherish the moments we share.

I love you. ❤️

- Andrei`;

let index = 0;

function showMessage() {
    let message = document.getElementById("message");
    message.style.display = "block";

    let typing = document.getElementById("typing");
    typing.innerHTML = "";
    index = 0;

    typeWriter();
}

function typeWriter() {
    let typing = document.getElementById("typing");

    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
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
