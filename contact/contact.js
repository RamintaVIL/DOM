
// išspausdina elementą, kuris turi šią klasę. Šiuo atveju vienintelis div
const initialElementDOM = document.getElementById('initial_element')
console.log(initialElementDOM);

// patys sukūrėme 3 pirminius elementus, o HTML jie yra neįrašyti
initialElementDOM.innerHTML = `
<header>
  <img src="#" alt="Logo">
  <nav>NAV</nav>
</header>
<main>MAIN</main>
<Footer>FOOTER</footer>`;

// susirandame 'nav', tai yra elementas į kurį reikės įpiešti naują tekstą.
const navDOM = document.querySelector('nav');
console.log(navDOM);

const mainLinksData = [
    {
        text: 'Home',
        link: '../',
    },
    {
        text: 'About',
        link: '../about-us/',
    },
    {
        text: 'Product',
        link: '../products/',
    },
    {
        text: 'Contact',
        link: '../contact/',
    },
]; 

// išspausdina nuorodas ir jei atsirastų naujų reikėtų ranka prirašyti, kad ji atsiratų.
navDOM.innerHTML = `<a href="../">Home</a>
<a href="../about-us/">About</a>
<a href="../products/">Product</a>
<a href="../contact/">Contact</a>`;

// is masyvo, kuriame yra objektai galime gauti stringus
// let navHTML = '';
// for (linkData of mainLinksData) {
//     navHTML += `
//     <a class="link" href="${linkData.link}">${linkData.text}</a>`;
// }
// navDOM.innerHTML = navHTML;

// css faile prisitaikėme, kad esant contact puslapyje ir atsistojus ant <a> ji pasidarytų mėlyna, tai į ciklą įsirašome if.
// let navHTML = '';
// for (linkData of mainLinksData) {
//     if (linkData.text === 'Contact') {
//         navHTML += `<a class="link active" href="${linkData.link}">${linkData.text}</a>`;
//     } else {
//         navHTML += `<a class="link" href="${linkData.link}">${linkData.text}</a>`;
//     }  
// }
// navDOM.innerHTML = navHTML;

// kad visos nuorodos būtų active
// let navHTML = '';
// for (linkData of mainLinksData) {
//     if (typeof linkData.text === 'string') {
//         navHTML += `<a class="link active" href="${linkData.link}">${linkData.text}</a>`;
//     } else {
//         navHTML += `<a class="link" href="${linkData.link}">${linkData.text}</a>`;
//     }  
// }
// navDOM.innerHTML = navHTML;

// trumpesnis variantas
// let navHTML = '';
// for (linkData of mainLinksData) {
//     if (linkData.text !== 'xxxx') {
//         navHTML += `<a class="link active" href="${linkData.link}">${linkData.text}</a>`;
//     } else {
//         navHTML += `<a class="link" href="${linkData.link}">${linkData.text}</a>`;
//     }  
// }
// navDOM.innerHTML = navHTML;

// pats trumpiausias, jei būtų tuščias grąžintų else dalį. Galima rašyti true arba 1 ir visos nuorodos taptų aktyvios. 
let navHTML = '';
for (linkData of mainLinksData) {
    if ("balionai") {
        navHTML += `<a class="link active" href="${linkData.link}">${linkData.text}</a>`;
    } else {
        navHTML += `<a class="link" href="${linkData.link}">${linkData.text}</a>`;
    }  
}
navDOM.innerHTML = navHTML;


