let divOne = document.querySelector('.one');
let divTwo = document.querySelector('.two');

let tempTitle = divOne.title;
let tempContent = divOne.textContent;

// تبديل العناوين (title)
divOne.title = divTwo.title;
divTwo.title = tempTitle;

// تبديل المحتوى
divOne.textContent = divTwo.textContent;
divTwo.textContent = divOne.textContent;
divTwo.textContent = tempContent;

