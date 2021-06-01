import car_style from "../css/car.scss";


import view from "./view.js";


const json = require("../json/list.json");

export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Market Car");
    }

    async getHtml() {
        return searchForm() + "<div id='carsList'>" + json.carsData.map(carTemplate).join("") + "</div>";
    }
}
//car list

function carTemplate(car) {
    return `
    <div class="car" id=${car.id}>
    <img class="car-photo" src="${car.image[0]}">
    <h2 class="car-name">${car.name}</h2>
    <p class="car-year">${car.year}</p>
    <p class="car-km">${car.km}</p>
    <hr/>
    <button class="car-price">${car.price}</button>
    </div>
    `;
}

function searchForm() {
return`<div class="carSearch">
<form type="text">
<span class="placeholder">Wybierz marke samochodu:</span>
<select id="brand"></select>
</form>
</div>`
}




export function giveMeAll() {
    return json.carsData.map(carTemplate).join("");
}
