const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i++) {
  const element = document.createElement('li');
  element.innerHTML = ingredients[i];
  element.classList.add('#ingredients');
     ulEl.appendChild(element);
};

console.log(ulEl);