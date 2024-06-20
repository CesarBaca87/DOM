// El styles lo importamos aquí para que se encargue Vite de compilar todo
import { list } from 'postcss';
import '../scss/styles.scss';

//const titleElement = document.getElementById('title');
//console.dir(titleElement);
//console.dir(titleElement.nextElementSibling);

const startPointElement = document.getElementById('start-point');

console.log(
  `Soy un ${startPointElement.tagName} con el id ${startPointElement.id} y la clase ${startPointElement.className} mi padre es un ${startPointElement.parentElement.tagName} con la clase ${startPointElement.parentElement.id} mi hermano es un ${startPointElement.previousElementSibling.previousElementSibling.tagName} con el  id ${startPointElement.previousElementSibling.previousElementSibling.id} y el texto ${startPointElement.previousElementSibling.previousElementSibling.textContent}.`
);

const firstListElement = document.getElementById('first-list');
const secondListElement = document.getElementById('second-list');

const firstListElementContent = firstListElement.textContent;
const secondListElementContent = secondListElement.textContent;

firstListElement.textContent = secondListElementContent;
secondListElement.textContent = firstListElementContent;

// const header = document.querySelectorAll('header');
// console.log(`- Hay ${header.querySelectorAll.header} Header
//   - Hay 1 h1
//   - Hay 2 nav`);
