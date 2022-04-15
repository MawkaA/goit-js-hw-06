const textInput = document.querySelector("#validation-input");
let inputLength = textInput.dataset.length;

const input = document.querySelector('input');
textInput.addEventListener('change', e => {
    const text = e.target.value;

    if (text.length === +inputLength) {
        updateClassEl('valid', 'invalid');
    }else{
        updateClassEl('invalid', 'valid');
    }
});
function updateClassEl(addClass, remClass) {
   textInput.classList.remove(remClass);
   textInput.classList.add(addClass);
};