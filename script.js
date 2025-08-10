const words = ["Undergrad Student","Programmer", "Web Developer"];
let index = 0;
const fadeWord = document.getElementById("fadeWord");

function changeWord() {
    fadeWord.classList.add("fade-out");
    setTimeout(() => {
        index = (index + 1) % words.length;
        fadeWord.textContent = words[index];
        fadeWord.classList.remove("fade-out");
        fadeWord.classList.add("fade-in");
        setTimeout(() => fadeWord.classList.remove("fade-in"), 500);
    }, 500);
}

// Change every 2 seconds
setInterval(changeWord, 2000);
