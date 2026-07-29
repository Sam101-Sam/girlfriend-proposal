// ================================
// NO BUTTON RUNS AWAY
// ================================

const noBtn = document.getElementById("noBtn");

if (noBtn) {

    noBtn.addEventListener("mouseover", () => {

        const x = Math.random() * (window.innerWidth - 150);

        const y = Math.random() * (window.innerHeight - 80);

        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

    });

}

// ================================
// YES BUTTON TRANSITION
// ================================

const yesBtn = document.querySelector(".yesBtn");

if (yesBtn) {

    yesBtn.addEventListener("click", function (e) {

        e.preventDefault();

        // Glow animation
        yesBtn.style.boxShadow = "0 0 60px white";
        yesBtn.style.transform = "scale(1.2)";

        // Fade screen
        document.body.style.transition = "1.5s";
        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location = "countdown.html";

        }, 1500);

    });

}

// ================================
// HEART BURST
// ================================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.top = window.innerHeight + "px";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.opacity = "0.8";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let position = window.innerHeight;

    const move = setInterval(() => {

        position -= 3;

        heart.style.top = position + "px";

        if (position < -50) {

            clearInterval(move);

            heart.remove();

        }

    }, 20);

}

// Create hearts every 600ms
setInterval(createHeart, 600);

// ================================
// VIDEO END MESSAGE
// ================================

const video = document.getElementById("loveVideo");

if (video) {

    video.addEventListener("ended", () => {

        document.querySelector(".videoContainer").style.display = "none";

        const ending = document.getElementById("ending");

        ending.style.display = "flex";

        launchConfetti();

    });

}

// ================================
// SIMPLE CONFETTI
// ================================

function launchConfetti() {

    for (let i = 0; i < 150; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * window.innerWidth + "px";

        confetti.style.top = "-20px";

        confetti.style.width = "10px";

        confetti.style.height = "10px";

        confetti.style.background =
            ["red", "pink", "gold", "white", "hotpink"][Math.floor(Math.random() * 5)];

        confetti.style.borderRadius = "50%";

        document.body.appendChild(confetti);

        let topPos = -20;

        const fall = setInterval(() => {

            topPos += 5;

            confetti.style.top = topPos + "px";

            if (topPos > window.innerHeight) {

                clearInterval(fall);

                confetti.remove();

            }

        }, 20);

    }

}
