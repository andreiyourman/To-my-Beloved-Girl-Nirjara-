function startSurprise() {
    document.getElementById("opening").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    let music = document.getElementById("bgMusic");
    music.play();
}
let text = `Dear My Beloved Girl,

Happy Birthday, my love. ❤️

Today is a special day because it celebrates the day someone as wonderful as you was born.

I want you to know how grateful I am to have you in my life. Your smile, your kindness, and the little moments we share mean so much to me.

I hope this new chapter of your life brings you endless happiness, success, and all the beautiful things you deserve.

Thank you for being someone who makes my days brighter. I will always treasure the memories we create together.

I love you so much. ❤️

Happy Birthday, Nirjara.

Forever yours,

- Andrei ❤️`;

let index = 0;

function showMessage() {
    let message = document.getElementById("message");
    message.style.display = "block";

    let music = document.getElementById("bgMusic");
    music.play();

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

// Floating hearts
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

// Stars effect
setInterval(() => {
    let star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 70 + "vh";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 3000);

}, 500);
