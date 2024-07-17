import { header } from "../js/header.js";
header();

import { renderSportTable } from "../js/sportas.js";
import { basketballData } from "./data/basketball.js";
import { footballData } from "./data/football.js";

// const data = [
//     {
//         title: 'Krepsinis',
//         date: '2024-07-04',
//     },
//     {
//         title: 'Futbolas',
//         date: '2024-07-05',
//     },
//     {
//         title: 'Kvadratas',
//         date: '2024-07-06',
//     },
//     {
//         title: 'Tinklinis',
//         date: '2024-07-07',
//     },
// ]

// internete rastume 'app' uzrasa bet destytojas pasirao DOM, kad prisiminti, kad tas elementas yra nuoroda i HTML elementa.
// const appDOM = document.getElementById('app');
// console.log(appDOM);
// išspausdino console visą turinį esantį sportas.js faile, t.y. lentelę.
// console.log(renderSportTable());
// kreipiamės į tą appDOM elementą kurį susiradome ankstesniu žinsgsniu, jo vidinis HTML bus ką grąžina tą sport lentelė
// appDOM.innerHTML = renderSportTable(data);

// įsirašius appDOM2 išsispausdino lentelė antrą kartą. 
// const appDOM2 = document.getElementById('app2');
// appDOM2.innerHTML = renderSportTable(data);

const appDOM = document.getElementById('app');
appDOM.innerHTML = renderSportTable(basketballData);

const appDOM2 = document.getElementById('app2');
appDOM2.innerHTML = renderSportTable(footballData);