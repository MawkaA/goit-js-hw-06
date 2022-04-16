let slider = document.querySelector('input#font-size-control');
const spanEl = document.querySelector('span#text');
slider.addEventListener('input', function() {
    let size = slider.value;
    spanEl.style.fontSize = size + "px";
});