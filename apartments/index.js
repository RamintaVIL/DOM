import { header } from "../js/header.js";
header();

const ApartmentsInBali = [
    {
        picture: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/323453651.jpg?k=a7e11add6818da7df27cd8b34f9f52bd666e9164313e205e07e81a91d274252a&o=&hp=1',
        name: 'Royal Samaja VillasOpens',
        address:' Jalan Kayu Cendana No. 7A, Oberoi, 80361 Seminyak, Indonesia',
        price: '4265€',
        time: '24.11.01 - 24.11.30',
        nights: '29 nights',
        person: '2 adults',
        breakfast: 'included',
        beach: 'Petitenget Beach - 650 m',
        nature: ''
    },
    {
        picture: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/140422904.jpg?k=4eb6ea6ff12c9d57456f4b761e17bbeaee4afcbc1241830f0447c9dd31c5652e&o=&hp=1',
        name: 'Nau Villa UbudOpens',
        address: 'Bajar Sebatu, Desa Sebatu, Tegalallang, 80561 Tegalalang, Indonesia',
        price: '5583€',
        time: '24.11.01 - 24.11.30',
        nights: '29 nights',
        person: '2 adults',
        breakfast: 'included',
        beach: '',
        nature: 'WaterfallTaro Village Experience - 2.5 km'
    },
    {
        picture: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/504072153.jpg?k=39a07af5024d350a74dc58ec526326c09d5a304bd5177300ddfdcc8576d53534&o=&hp=1',
        name: 'Manca Villa Canggu by Ini Vie Hospitality',
        address: 'Jl. Pantai Berawa, Gang Kresna No. 8, 80361 Canggu, Indonesia',
        price: '3783€',
        time: '24.11.01 - 24.11.30',
        nights: '29 nights',
        person: '2 adults',
        breakfast: 'included',
        beach: 'Berawa Beach - 2.1 km',
        nature: ''
    },
    {
        picture: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/435060427.jpg?k=af9e87d1799a2e31ba84b49430ce9bd586122c9cee955c64f189f8290efe2672&o=&hp=1',
        name: 'Kubu Bali Baik Villa & Resort - CHSE Certified',
        address: 'Br. Umahanyar Ds. Pejeng Kaja, 80552 Ubud, Indonesia',
        price: '2322€',
        time: '24.11.01 - 24.11.30',
        nights: '29 nights',
        person: '2 adults',
        breakfast: '5€ for person ',
        beach: '',
        nature: 'WaterfallAir Terjun Kanto Lampo - 1.8 km'
    },
];
const divDOM = document.querySelector('div');
console.groupCollapsed(divDOM);

let divHTML = '';
for (let i = 0; i < ApartmentsInBali.length; i++) {
  divHTML += `
    <div class='allInfo'>
    <img src="${ApartmentsInBali[i].picture}" alt="">
    <div class='apartment'>
    <h2>${ApartmentsInBali[i].name}</h2>
    <div>${ApartmentsInBali[i].address}</div>
    <div>${ApartmentsInBali[i].price}</div>
    <div>${ApartmentsInBali[i].time}</div>
    <div>${ApartmentsInBali[i].nights}</div>
    <div>${ApartmentsInBali[i].person}</div>
    <div>${ApartmentsInBali[i].breakfast}</div>
    <div>${ApartmentsInBali[i].beach}</div>
    <div>${ApartmentsInBali[i].nature}</div>
    </div>
    </di>`
};
divDOM.innerHTML = divHTML;