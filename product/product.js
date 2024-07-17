import { header } from "../js/header.js";
header();

// <button type="button">Click me</button>
const allFormsDOM = document.getElementsByTagName('form');
console.log(allFormsDOM);

// isspausdina form esancia informacija + prideda mygtuka. Jei noretume, kad mygtukas eitu pirmas, tai reiketu naudoti formDOM1.innerHTML = '<button type="button">Click me</button>' + formDOM1.innerHTML;
const formDOM1 = allFormsDOM[0]; // allFormsDOM[0], tas pats kaip document.getElementsByTagName('form')[0];
formDOM1.innerHTML += '<button type="button">Click me</button>';

const formDOM2 = allFormsDOM[1];
formDOM2.innerHTML += '<button type="button">Click me 2</button>'

// isspaudina visas form
// const allFormsDOM = document.getElementsByTagName('form');

// // isspausdina click me mygtuka
const formDOM = document.getElementsByTagName('form')[0];
formDOM.innerHTML = '<button type="button">Click me</button>';

const contentDOM = document.getElementById('content');
const ulDOM = contentDOM.querySelector('.product-list');
  
// const product = [
//     {
//         title: 'Grietine',
//         count: 4,
//     },
//     {
//         title: 'Duona',
//         count: 1,
//     },
//     {
//         title: 'Sviestas',
//         count: 1,
//     },
//     {
//         title: 'Pomidoru',
//         count: 3,
//     },
//    {
//         title: 'Kiausiniai',
//         count: 3,
//     },
//     {
//         title: 'Arbata',
//         count: 1,
//     }
// ];

// let HTML = '';

// for (let i = 0; i < product.length; i++) {
//     HTML += `
//         <li>
//             <p class="title">${product[i].title}</p>
//             <p class="count">${product[i].count}</p> 
//         </li>`;
//     }
//  ulDOM.innerHTML = HTML;

// Rado p elementus ir isspausdino console ir jei p butu ne main,tai ju nerastu.
const allParsDOM = document.querySelectorAll('main > p');
console.log(allParsDOM);

// zodi antras is didziuju radziu.
allParsDOM[1].innerText = allParsDOM[1].innerText.toUpperCase();

// norint uzdeti background reiketu naudotis css faile prie main.

// nurodo console red class
const redElementsDom = document.querySelectorAll('red')
console.log(redElementsDom)
// ant elementu uzsideda realiai raudonas fonas, kai panaudojame inline style
for (const redDom of redElementsDOM) {
  redDom.style.backgroundColor = 'red';
  redDom.style.fontSize = '2rem';
}