function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const inputEl = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
let boxes = document.getElementById('boxes');

btnCreate.addEventListener('click', getBoxes);
btnDestroy.addEventListener('click', destroyBoxes);


function getBoxes() {
  parseInt(+inputEl.value);
  assign();
}

function assign() {
  const basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i <  parseInt(+inputEl.value); i++) {
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    div.insertAdjacentHTML("afterbegin", `width: ${size}px; height: ${size}px; background-color:${getRandomHexColor()}`);
    fragment.append(div);
  }
  boxes.append(fragment);
};

function destroyBoxes() {
  boxes.innerHTML = '';
};



//не получается пофиксить. что не так ?