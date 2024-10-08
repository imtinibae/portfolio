let animationID;
const dvdText = document.getElementById("dvdText");
const loadingText = document.getElementById("loadingText");
const colors = ["red", "green", "blue", "pink", "orange", "purple"];

function loop() {
    const hRange = window.innerWidth - dvdText.clientWidth;
    const vRange = window.innerHeight - dvdText.clientHeight;
    const time = performance.now() * 0.2;

    const x = Math.abs((time % (hRange * 2)) - hRange);
    dvdText.style.left = `${x}px`;
    const y = Math.abs((time % (vRange * 2)) - vRange);
    dvdText.style.top = `${y}px`;

    const bounces = Math.floor(time / hRange) + Math.floor(time / vRange);
    dvdText.style.color = colors[bounces % colors.length];

    animationID = requestAnimationFrame(loop);
}

loop();

// Stop the animation and redirect after 10 seconds
setTimeout(() => {
    cancelAnimationFrame(animationID);
    window.location.href = "mainpage/main.html"; // Replace with your portfolio URL
}, 6500);
