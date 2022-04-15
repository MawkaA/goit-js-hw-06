
let inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);

let outputEl = document.querySelector('#name-output');

function onInputChange(event) {
  inputEl = event.currentTarget.value.trim();
  console.log(inputEl);
  if (inputEl) {
    outputEl.innerText = inputEl.trim();
  } else { outputEl.innerText = 'Anonymous'; }
}