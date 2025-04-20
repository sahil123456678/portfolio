// script.js
const roles = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer"
];

let index = 0;
let charIndex = 0;
let currentText = '';
const animatedText = document.getElementById("animated-text");

function typeEffect() {
  if (charIndex < roles[index].length) {
    currentText += roles[index][charIndex];
    animatedText.textContent = currentText + '|';
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    currentText = currentText.slice(0, -1);
    animatedText.textContent = currentText + '|';
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});