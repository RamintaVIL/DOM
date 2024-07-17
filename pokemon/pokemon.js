import { header } from "../js/header.js";
header();

const pokemonsInfo = [
    {
     name: 'Pikachu',
     color: 'Geltona',
     animal: 'Pelė',
     element: 'Elektros',
     power: 'Thunderbolt',
     picture: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Pokémon_Pikachu_art.png',
 
    },
    {
    name: 'Bulbasaur',
    color: 'Žalia',
    animal: 'Suo',
    element: 'Žolės / Nuodų',
    power: 'Vine', 
    picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
    },
    {
    name: 'Charmander',
    color: 'Oranžinė',
    animal: 'Drakonas',
    element: 'Ugnies',
    power: 'Flamethrower',
    picture: 'https://img.pokemondb.net/artwork/avif/charmander.avif',
    },
    {
    name: 'Squirtle', 
    color: 'Mėlyna',
    animal: 'Vėžlys',
    element: 'Vandens',
    power: 'Water',
    picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
    },
    {
    name: 'Jigglypuff', 
    color: 'Rožinė',
    animal: 'Balionas',
    element: 'Normali / Fėja',
    power: 'String',
    picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/039.png',
    },
    {
    name: 'Meowth',
    color: 'Kreminė',
    animal: 'Katinas',
    element: 'Tamsos',
    power: 'Bite',
    picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/052.png',
    },
    {
    name: 'Psyduck',
    color: 'Geltona',
    animal: 'Antis',
    element: 'Vandens',
    power: 'WaterGun',
    picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/054.png',
    },
    {
    name: 'Snorlax',
    color: 'Melyna',
    animal: 'Meska',
    element: 'Normali',
    power: 'Slam',
    picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/143.png',
    },
    {
    name: 'Eevee',
    color:'Ruda',
    animal: 'Lape',
    element: 'Normali',
    power: 'Bite',
    picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png',
    },
    {
    name: 'Charizard',
    color: 'Oranžinė',
    animal: 'Drakonas',
    element: 'Ugnies-Skraidymo',
    power: 'fly', 
    picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png',
    },
];

const pokemonListDOM = document.getElementById('pokemonList');
console.log(pokemonListDOM);

const navDOM = document.querySelector('nav');
console.log(navDOM);

let pokemonHTML = '';
for (let i = 0; i < pokemonsInfo.length; i++) {
    pokemonHTML += `
    <div class='gridItems'>
    <img src="${pokemonsInfo[i].picture}" alt="${pokemonsInfo[i].picture}">
    <p>${pokemonsInfo[i].name}</p>
    <p>${pokemonsInfo[i].color}<p>
    <p>${pokemonsInfo[i].animal}<p>
    <p>${pokemonsInfo[i].element}<p>
    <p>${pokemonsInfo[i].power}</p>
    </div>   
 `
};
pokemonListDOM.innerHTML = pokemonHTML;

// pokemonListDOM.innerHTML = `
// <aside>Pokemonu saras</aside>
// <nav>NAV<nav>
// <p>${pokemonsInfo[0].name}</p>
// <p>${pokemonsInfo[0].color}</p>
// <p>${pokemonsInfo[0].animal}</p>
// <p>${pokemonsInfo[0].element}</p>
// <p>${pokemonsInfo[0].power}</p>
// <img scr="${pokemonsInfo..picture} alt="${pokemonsInfo.picture}>
// `;
























// const imgDOM = document.querySelector('img');
// imgDOM.innerHTML = "<img scr='https://en.wikipedia.org/wiki/Pikachu' alt='Pikachu'>";


// let pokemonListHTML = '';

// for (pokemon of pokemonListDOM) {
//     pokemonListHTML += `
//     <article>
//       <img scr=${pokemon,img}" alt="${pokemon.name}">
//       <p>name: ${pokemon.name}</p>
//       <p>color: ${pokemon.color}</p>
//       <p>animal: ${pokemon.animal}</p>
//       <p>element: ${pokemon.element}</p>
//       <p>power: ${pokemon.power}</p>
//       `; 
       
// };

// pokemonListDOM.innerHTML = pokemonListHTML;






