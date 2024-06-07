document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector(".change-color");
  const colorSpan = document.querySelector(".color");
  button.addEventListener("click", () => {
    const getRandomHexColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    document.body.style.backgroundColor = getRandomHexColor;
    colorSpan.textContent = getRandomHexColor;
  });
});