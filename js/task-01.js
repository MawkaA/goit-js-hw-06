const liRef =  document.querySelectorAll('li.item');
// console.log('Number of categories:'+ liRef.length);
// const hRef = document.querySelectorAll('h2');
// console.log('Category:' + hRef[0].textContent);
// console.log('Elements: ' + liRef[0].querySelectorAll('li').length);
// console.log('Category:' + hRef[1].textContent);
// console.log('Elements: ' + liRef[1].querySelectorAll('li').length);
// console.log('Category:' + hRef[2].textContent);
// console.log('Elements: ' + liRef[2].querySelectorAll('li').length);

liRef.forEach(element => {
    console.log(`Number of categories: ${liRef.length}`);
    console.log(`Category:${element.firstElementChild.textContent}`);
    console.log(`Elements:${element.lastElementChild.children.length}`)
});