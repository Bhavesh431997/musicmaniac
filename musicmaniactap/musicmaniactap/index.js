window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#f51111",
        "#b6ff00",
        "#00ff21",
        "#0d31d9",
        "#00ff90",
        "#e21eea"
    ];


    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });
    const createBubbles = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 5s ease';
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        });
    };
});




