const textInput = document.querySelector("#validation-input");
let inputLength = textInput.dataset.length;

const input = document.querySelector('input');
textInput.addEventListener('change', e => {
  const text = e.target.value;

  if (text.length === +inputLength) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
});