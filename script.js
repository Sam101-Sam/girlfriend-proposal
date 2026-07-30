// ================================
// Intro Screen
// ================================

window.onload = function () {

    setTimeout(function () {

        const intro = document.getElementById("intro");
        const main = document.getElementById("main");

        if (intro) {

            intro.style.opacity = "0";

            setTimeout(() => {

                intro.style.display = "none";

                if (main) {

                    main.style.display = "block";

                }

            }, 1000);

        }

    }, 3000);

};

// ================================
// YES BUTTON
// ================================

const yesBtn = document.getElementById("yes");

if (yesBtn) {

    yesBtn.addEventListener("click", function () {

        document.body.style.transition = "1s";
        document.body.style.opacity = "0";

        setTimeout(function () {

            window.location.href = "countdown.html";

        }, 1000);

    });

}

// ================================
// NO BUTTON RUNS AWAY
// ================================

const noBtn = document.getElementById("no");

if (noBtn) {

    function moveButton() {

        const maxX = window.innerWidth - noBtn.offsetWidth - 30;
        const maxY = window.innerHeight - noBtn.offsetHeight - 30;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

    }

    noBtn.addEventListener("mouseover", moveButton);
    noBtn.addEventListener("click", moveButton);

}

// ================================
// FLOATING HEARTS
// ================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 700);

// ================================
// CONFETTI (used after video)
// ================================

function launchConfetti() {

    const colors = [
        "#ff4d6d",
        "#ffd700",
        "#00c853",
        "#00b0ff",
        "#ffffff",
        "#ff80ab"
    ];

    for (let i = 0; i < 180; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.width = "10px";
        piece.style.height = "10px";
        piece.style.borderRadius = "50%";
        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-20px";
        piece.style.zIndex = "9999";

        document.body.appendChild(piece);

        let top = -20;

        const fall = setInterval(() => {

            top += 5;

            piece.style.top = top + "px";
            piece.style.transform = `rotate(${top * 4}deg)`;

            if (top > window.innerHeight) {

                clearInterval(fall);

                piece.remove();

            }

        }, 20);

    }

}
