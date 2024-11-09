const themeToggleButton = document.getElementById("theme-toggle");
themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Toggle theme icon
  themeToggleButton.innerHTML = document.body.classList.contains("dark")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Typewriter Effect
const greetings = [
  "नमस्ते",
  "Hello",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Merhaba",
  "Olá",
];
let greetingIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenGreetings = 2500;
const typewriterElement = document.getElementById("typewriter-text");

function typeWriter() {
  if (charIndex < greetings[greetingIndex].length) {
    typewriterElement.textContent += greetings[greetingIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(eraseText, delayBetweenGreetings);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typewriterElement.textContent = greetings[greetingIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    greetingIndex = (greetingIndex + 1) % greetings.length;
    setTimeout(typeWriter, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});

// Custom Cursor
const customCursor = document.getElementById("custom-cursor");
const clickEffect = document.getElementById("click-effect");

// Update Cursor Position
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  customCursor.style.left = `${x}px`;
  customCursor.style.top = `${y}px`;
});

// Click Animation
document.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Set click effect position
  clickEffect.style.left = `${x}px`;
  clickEffect.style.top = `${y}px`;

  // Trigger ripple animation
  clickEffect.style.animation = "none";
  void clickEffect.offsetWidth; // Trigger reflow
  clickEffect.style.animation = "click-ripple 0.4s ease-out";
});
