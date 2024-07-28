import { header } from "../js/header.js";
header();

const carsData = [
    {
        picture: 'https://scene7.toyota.eu/is/image/toyotaeurope/MIR0001a_24_WEB:Large-Landscape?ts=1702908689643&resMode=sharp2&op_usm=1.75,0.3,2,0',
        brand: 'Toyota Mirai',
        price: '73 600€',
        fuel: 'hydrogen',
    },
    {
        picture: 'https://www.usnews.com/object/image/0000018d-479e-d889-a5fd-effe13ca0000/modely-75.jpg?update-time=1706303557732&size=responsive970',
        brand: 'Tesla Model Y',
        price: '54 150€',
        fuel: 'electricity',

    },
    {
        picture: 'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/e926b6da-8e9b-4dca-bcf7-34abb971b5d8/VW_T-Roc_9.jpg',
        brand: 'Volkswagen T-Roc',
        price: '34 503€',
        fuel: 'gasoline',

    },
    {
        picture: 'https://s1.cdn.autoevolution.com/images/gallery/renault-clio-2023-7482_35.jpg',
        brand: 'Renault Clio',
        price: '26 190€',
        fuel: 'gasoline/hybrid',

    },
    {
        picture: 'https://ev-database.org/img/auto/BMW_i5_eDrive40_Sedan/BMW_i5_eDrive40_Sedan-01@2x.jpg',
        brand: 'BMW i5',
        price: '77 000€',
        fuel: 'electricity',

    },
    {
        picture: 'https://www.kia.lt/img/360view/LT/colour105693/wheel105688-226/1.jpg',
        brand: 'KIA SPORTAGE',
        price: '43 890€',
        fuel: 'gasoline/hybrid',

    },
]

const carsListDOM = document.getElementById('carsList');

let ulHTML = '';
for (let i = 0; i < carsData.length; i++) {
    ulHTML += `
    <div class="car-item">
       <img src="${carsData[i].picture}" alt="${carsData[i].brand}">
       <div class="textOverly">${carsData[i].brand}</div>
       <div class="textOverly">${carsData[i].price}</div>
       <div class="textOverly">${carsData[i].fuel}</div>
    </div>
   `;
}

carsListDOM.innerHTML = ulHTML;

let currentIndex = 0;
function slideCards() {
    const card = document.querySelector('.card');
    const totalItems = carsData.length;
    const carWidth = card.querySelector('.car-item').clientWidth;
    card.style.transform = `translateX(-${currentIndex * carWidth}px)`;
    currentIndex = (currentIndex + 1) % totalItems
}
setInterval(slideCards, 3000);