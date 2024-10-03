let animationID;

const dvdText = document.getElementById("dvdText");
/* document.body.style.backgroundColor = "black";   */
const colors = ["red", "green", "blue", "pink", "orange", "purple"];

function loop() {
const hRange = window.innerWidth - dvdText.clientWidth;
const vRange = window.innerHeight - dvdText.clientHeight;
const time = performance.now() * 0.2;

const x = Math.abs((time % (hRange * 2)) - hRange);
dvdText.style.left = `${x}px`;
const y = Math.abs((time % (vRange * 2)) - vRange);
dvdText.style.top = `${y}px`;

const bounces = Math.floor(time / hRange) + Math.floor(time / vRange)
   dvdText.style.color = colors[bounces % colors.length]

animationID = requestAnimationFrame(loop);
}  

loop();

// Arrêter l'animation et rediriger après 10 secondes
setTimeout(() => {
    cancelAnimationFrame(animationID);
    window.location.href = "mainpage/main.html";
    ; // Remplace par l'URL de ton portfolio
}, 6500);
