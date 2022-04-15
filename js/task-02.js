const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('#ingredients');
const markup = ingredients.map((element) => {
  let listRef = document.createElement('li');
  listRef.textContent = element;
  listRef.classList.add('item');
  return listRef;
});
ulEl.append(...markup);
console.log(ulEl);