// export function header() {
//     console.log('HEADER');
//     console.log('HEADER');
//     console.log('HEADER');
//     console.log('HEADER');
//     console.log('HEADER');
// }
// 3 būdai eksportuoti:
// export default header;
// ekzekiutintume funkcija šiuo atveju
// export default header();
// export { header };

// export - kitame faile naudoti aprašytą reikšmę
// const header = 'HEADER';
// vietoje function galime naudoti ir const
// export default header;

// function header() {
//     console.log('POMIDORAS...');
//     console.log('POMIDORAS...');
//     console.log('POMIDORAS...');
//     console.log('POMIDORAS...');
//     console.log('POMIDORAS...');
// }
// export default header(); 


// norint susikurti automatini headeri is visu index.html failu issitrinu 
/* <header>
<nav>
    <a href="../">Home</a>
    <a href="../product/">Product</a>
    <a href="../about-us/">About us</a>
    <a href="../contact/">Contact</a>
    <a href="../pokemon/">Pokemon</a>
    <a href="../sportas/">Sportas</a>
</nav>
</header> */

// body, form - ipatingi, kuriems galime po documents nerasyti metodu querySelelctor('body')

const data = [
    {href: '', text: 'Home'},
    {href: 'about-us', text: 'About'},
    {href: 'apartments', text: 'Apartments'},
    {href: 'cars', text: 'Cars'},
    {href: 'contact', text: 'Contact'},
    {href: 'pokemon', text: 'Pokemon'},
    {href: 'product', text: 'Product'},
    {href: 'sportas', text: 'Sportas'},
];

export function header(isHomepage = false) {
    const dot = isHomepage ? '' : '.';
    let navHTML = '';
    
    for (const item of data) {
        navHTML += `<a href="${dot}./${item.href}">${item.text}</a>`
    }
    const HTML = `
    <header>
         <img src="#" alt="Logo">
         <nav>${navHTML}</nav>
    </header>`;

    // += senasis turinys + kazkas naujo
    // document.body.innerHTML += HTML;
    // = viska ismeta lauk is atminties ir priskirk nauja reiksme.
    // document.body.innerHTML = HTML + document.body.innerHTML;

    // tam kad index.js faile prirasius header() dali, narsykleje suveiktu, reikalingas naujas metodas, nes = viska cia ir sugadina. 
    // insertAdjacentHTM - priima 2 parametrus. pries body, 
    // musu surasto elemento atzvilgiu, kas siuo metu yra "body", kur tas naujasis turinys turi buti.
    // sio metodo +, kad jis neliecia turinio, kuris jau egzistuoja.
    document.body.insertAdjacentHTML('afterbegin', HTML);

}
