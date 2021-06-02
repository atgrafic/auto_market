import view from "./view.js";

const json = require("../json/list.json");
const brandList = json.carsData;
//const carName = document.getElementsByClassName("car");
//const carId =  params.id;

export default class extends view {
    constructor(params) {
        super(params);
        this.carId = params.id;
        this.setTitle("market Car 2");
    }

    async getHtml() {
        for (let i = 0; i < brandList.length; i++)
            if (this.carId === brandList[i].id) {
                return `<h2 class="car-name-chosse">${brandList[i].name}</h2>`;
            }
    }
}

// function carList(){
//     for (let i = 0; i < brandList.length; i++)
//     // console.log("id loop", id);
//     if ( this.carId === brandList[i].id) {
//         return `<h2 class="car-name-chosse">${brandList[i].name}</h2>
//              <div id="content">
//             <div class="all_car_photo">
//              <div>
//             <img class="car-photo_1" src="${brandList[i].image[0]}">
//             </div>
//             <div>
//             <img class="car-photo_2" src="${brandList[i].image[1]}">
//             <img class="car-photo_3" src="${brandList[i].image[2]}">
//             <img class="car-photo_4" src="${brandList[i].image[3]}">
//             </div>
//             </div>
//             <div class="ditels">
//             <button class="car-price-1">${brandList[i].price}</button>
//             <div class="car-details">
//             <div>
//             <p> Marka:</p>
//             <p class="car-brand"> ${brandList[i].brand}</p>
//             </div>
//             <div>
//             <p>Rocznik:</p>
//             <p class="car-year">${brandList[i].year}</p>
//             </div>
//             <div>
//             <p>Przebieg:</p>
//             <p class="car-km">${brandList[i].km}</p>
//             </div>
//             </div>
//             <button id="car-buy">kup</button>
//             </div>
//             </div>
//             <div>
//             <h2 class="description">Opis</h2>
//             <p class="car-description">${brandList[i].description}</p>
//             </div>
//             `;
// }
// }
