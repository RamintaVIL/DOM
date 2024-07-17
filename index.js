// import headeris from './js/header.js';
// kai exportuojama default būdu importuojame šitaip, svarbu nurodyti tinkamai kelią. 
// headeris();

// import pomidoras from './js/header.js';
// kai exportuojama default būdu importuojame šitaip, svarbu nurodyti tinkamai kelią. 
// pomidoras();

// naudojant {} turime vardini eksportavima, nes turime konkretu pavadinima.
// 1 - importavimas, atsisiunciamas failas ir ir juo galima pradeti naudotis
import {header}  from './js/header.js';

// primityvi funkcija, kuriai veikiant paspaudi mygtuka ir console isspausdina "Valio"
// function sayValio() {
//     console.log('Valio');
// }
// buttonDom.addEventListener('click', sayValio);

// bevarde rodykline funkcija. nesuteikiame jai pavadinimo, nes niekas kitas jos issikviesti negales. 
// 2 - turinio generavimas ir jau esamo turinio radimas ir event'o registravimas. Cia yra sinchronizuotas kodas.
const buttonDom = document.querySelector('button');
buttonDom.addEventListener('click', () => {
    console.log('Valio');
});
// 4 - siuo etapu, kodas pradejo nebeveikti. ji reikia perkelti pries 2 etapa. 
header();

