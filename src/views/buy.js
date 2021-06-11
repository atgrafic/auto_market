import view from "./view.js";
import car_style from "../css/car.scss";

const json = require("../json/list.json");
const brandList = json.carsData;

export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Market Car");
    }

    async getHtml() {
        return (
            `<div class="baner">
    <div class="slogan">
    <h2>Znajdź swój wymarzony<br/>samochód!</h2>
    <p>Wybierz Auto z pośród najlepszych!</p>
    </div>
    </div>` +
            searchForm() +
            "<div id='carsList'>" +
            json.carsData.map(carTemplate).join("") +
            "</div>"
        );
    }
}
function carTemplate(car) {
    return `
    <div class="car" id=${car.id}>
    <a class="tabCar" href="/kup/${car.id}" data-link></a>
    <img class="car-photo" src="${car.image[0]}">
    <h2 class="car-name">${car.name}</h2>
    <p class="car-year">${car.year}</p>
    <p class="car-km">${car.km}</p>
    <hr/>
    <a href="/kup/${car.id}" data-link class="car-price">${car.price}</a>
    </div>
    `;
}

function searchForm() {
    return `<div class='carSearch'>

    <span class='placeholder'>Wybierz marke samochodu:</span>
    <select id='brand'> ${displayjson()}</select>

    </div>`;
}

function displayjson() {
    let brands = new Set();

    brands.add("<option >" + "</option>");

    for (let i = 0; i < brandList.length; i++) {
        let NewbrandList = brandList[i].brand;
        brands.add("<option value =" + NewbrandList + ">" + NewbrandList + "</option>");
    }
    return Array.from(brands).join(" ");
}

function filtr() {
    let car = "";
    let search = document.getElementById("brand");
    if (search.value === "") {
        car = json.carsData.map(carTemplate).join("");
    }

    for (let i = 0; i < brandList.length; i++) {
        if (brandList[i].brand === search.value) {
            car += `<div class="car" id=${brandList[i].id} >
            <a class="tabCar" href="/kup/${brandList[i].id}" data-link></a>
            <img class="car-photo" src="${brandList[i].image[0]}">
            <h2 class="car-name">${brandList[i].name}</h2>
            <p class="car-year">${brandList[i].year}</p>
            <p class="car-km">${brandList[i].km}</p>
            <hr/>
            <a href="/kup/${brandList[i].id}" data-link class="car-price">${brandList[i].price}</a>

            </div> `;
        }
    }

    document.getElementById("carsList").innerHTML = car;
}

document.addEventListener("change", filtr);
