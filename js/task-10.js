function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const inputEl = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
let boxes = document.getElementById('boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
  amount = +inputEl.value;
  let fragment = document.createDocumentFragment()
  fragment.forEach(function (element) {
    let div = document.createElement('div');
    let basicSize = 30;
    let size = basicSize + element * 10;
    let textInp = `width: ${size}px; height: ${size}px; background-color: rgba( ${getRandomHexColor()})`;
    div.textContent = textInp;
});
  return fragment.append(...div);
  // for (let i = 0; i <= amount; i++) {
  //   let basicSize = 30;
  //   let size = basicSize + i * 10;
  //   let div = document.createElement('div');
  //   div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${getRandomHexColor()})`;
  // };
  // return fragment;
  return boxes.append(fragment);
};
function destroyBoxes() {
  boxes.innerHTML = '';
}