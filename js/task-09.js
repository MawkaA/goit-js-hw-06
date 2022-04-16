function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const btnEl = document.querySelector('button.change-color');
btnEl.addEventListener("click", function onClick(event) {
  const bgColor = document.body.style.backgroundColor = getRandomHexColor();
  document.querySelector('span.color').textContent = bgColor;
  
});