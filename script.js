const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  // Toggle theme icon
  themeToggleButton.innerHTML = document.body.classList.contains('dark')
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// List of greetings in different languages and scripts
const greetings = [
    "नमस्ते", // Hindi
    "Hello",   // English
    "Hola",    // Spanish
    "Bonjour", // French
    "Hallo",   // German
    "Ciao",    // Italian
    "こんにちは", // Japanese
    "안녕하세요",   // Korean
    "你好",       // Chinese
    "Merhaba",    // Turkish
    "Olá"         // Portuguese
  ];
  
  let greetingIndex = 0;
  let charIndex = 0;
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetweenGreetings = 2000; // Delay before switching to next greeting
  const typewriterElement = document.getElementById("typewriter-text");
  
  // Function to type and erase text
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
      typewriterElement.textContent = greetings[greetingIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, erasingSpeed);
    } else {
      greetingIndex = (greetingIndex + 1) % greetings.length;
      setTimeout(typeWriter, typingSpeed);
    }
  }
  
  // Start the typewriter effect
  document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
  });
  