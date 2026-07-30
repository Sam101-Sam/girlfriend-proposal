// =======================================
// Romantic Website Script
// =======================================

// -----------------------------
// Intro Screen
// -----------------------------
window.addEventListener("load", () => {

    const intro = document.getElementById("intro");
    const main = document.getElementById("mainPage");

    if (intro && main) {
        setTimeout(() => {
            intro.style.opacity = "0";

            setTimeout(() => {
                intro.style.display = "none";
                main.style.display = "block";
                main.style.opacity = "0";

                setTimeout(() => {
                    main.style.transition = "1s";
                    main.style.opacity = "1";
                }, 100);

            }, 1000);

        }, 3000);
    }

});

// -----------------------------
// NO Button Runs Away
// -----------------------------
const noBtn = document.getElementById("noBtn");

if (noBtn) {

    function moveButton() {

        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }

    noBtn.addEventListener("mouseenter", moveButton);
    noBtn.addEventListener("click", moveButton);
}

// -----------------------------
// YES Button
// -----------------------------
const yesBtn = document.getElementById("yesBtn");

if (yesBtn) {

    yesBtn.addEventListener("click", () => {

        for(let i=0;i<20;i++){
            createHeart();
        }

        document.body.style.transition="1.5s";
        document.body.style.opacity="0";

        setTimeout(() => {
            window.location.href="countdown.html";
        },1500);

    });

}

// -----------------------------
// Floating Hearts
// -----------------------------
function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.bottom="-30px";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    heart.style.pointerEvents="none";
    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    let pos=0;

    const animation=setInterval(()=>{

        pos+=2;

        heart.style.bottom=pos+"px";
        heart.style.transform=`translateY(-${pos}px)`;

        heart.style.opacity=1-(pos/600);

        if(pos>600){

            clearInterval(animation);

            heart.remove();

        }

    },20);

}

// Continuous hearts
setInterval(createHeart,700);

// -----------------------------
// Envelope Animation
// -----------------------------
const envelope=document.getElementById("envelope");

if(envelope){

    envelope.addEventListener("click",()=>{

        envelope.style.transform="scale(1.2) rotate(8deg)";

    });

}

// -----------------------------
// Video End
// -----------------------------
const video=document.getElementById("loveVideo");

if(video){

video.addEventListener("ended",()=>{

const ending=document.getElementById("ending");

if(ending){

ending.style.display="flex";

}

launchConfetti();

});

}

// -----------------------------
// Confetti
// -----------------------------
function launchConfetti(){

for(let i=0;i<250;i++){

const piece=document.createElement("div");

piece.style.position="fixed";
piece.style.width="10px";
piece.style.height="10px";

piece.style.left=Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.borderRadius="50%";

const colors=[
"#ff1744",
"#ff80ab",
"#ffffff",
"#ffd700",
"#00e676",
"#40c4ff"
];

piece.style.background=colors[Math.floor(Math.random()*colors.length)];

document.body.appendChild(piece);

let topPos=-20;

const fall=setInterval(()=>{

topPos+=5;

piece.style.top=topPos+"px";

piece.style.transform=`rotate(${topPos*4}deg)`;

if(topPos>window.innerHeight){

clearInterval(fall);

piece.remove();

}

},20);

}

}
