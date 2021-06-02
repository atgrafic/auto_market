import view from "./view.js";
import car_style from "../css/car.scss";

const json = require("../json/list.json");
const brandList = json.carsData;

export default class extends view {

    constructor(params) {
        super(params);
        this.setTitle("Kup");
    }

    async getHtml() {
    return  searchForm() +
    "<div id='carsList'>" +
    json.carsData.map(carTemplate).join("") +
    "</div>";
}

}
function carTemplate(car) {

    return `
    <div class="car" id=${car.id}>
    <a href="/kup/${car.id}" data-link>
    <img class="car-photo" src="${car.image[0]}">
    <h2 class="car-name">${car.name}</h2>
    <p class="car-year">${car.year}</p>
    <p class="car-km">${car.km}</p>
    <hr/>
    <button class="car-price">${car.price}</button></a>
    </div>
    `;
}

function searchForm() {
    return `<div class='carSearch'>
    <form type='text'>
    <span class='placeholder'>Wybierz marke samochodu:</span>
    <select id='brand'> ${displayjson()}</select>
    </form>
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
            <img class="car-photo" src="${brandList[i].image[0]}">
            <h2 class="car-name">${brandList[i].name}</h2>
            <p class="car-year">${brandList[i].year}</p>
            <p class="car-km">${brandList[i].km}</p>
            <hr/>
            <button class="car-price">${brandList[i].price}</button>

            </div> `;
        }
    }

    document.getElementById("carsList").innerHTML = car;

    // for (let i = 0; i < carName.length; i++) {
    //     let id = carName[i].id;
    //     //console.log("ID:", id);
    //     carName[i].addEventListener("click", (e) => nextPage(e, id));
    // }
}

document.addEventListener("change", filtr);
