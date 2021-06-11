import focarListrm from "../css/carList.scss";

import view from "./view.js";

const json = require("../json/list.json");
const brandList = json.carsData;

export default class extends view {
    constructor(params) {
        super(params);
        this.carId = params.id;
        this.setTitle("Market Car | Kup");
    }

    async getHtml() {
        console.log("ID: ", this.params.id);
        return carList(this.params.id);
    }
}

function carList(carId) {
    localStorage.setItem("formCarId", carId);

    for (let i = 0; i < brandList.length; i++) {
        if (carId === brandList[i].id) {
            return `<div class="listCar">
            <h2 class="car-name-chosse">${brandList[i].name}</h2>
            <div id="content">
                <div class="all_car_photo">
                <div>
                <img id="expandedImg"  src="${brandList[i].image[0]}">
                </div>
                <div class="ditels">
                <div>
                    <button class="car-price-1 ">${brandList[i].price}</button>
                    <div class="car-details">
                        <div>
                        <p> Marka: </p>
                        <p class="car-brand"> ${brandList[i].brand}</p>
                        </div>
                        <div>
                        <p>Rocznik: </p>
                        <p class="car-year"> ${brandList[i].year}</p>
                        </div>
                        <div>
                        <p>Przebieg: </p>
                        <p class="car-km"> ${brandList[i].km}</p>
                        </div>
                    </div>
                    </div>
                    <a href="/form" id="car-buy" data-link>kupuję</a>
                </div>
                </div>


            <div class="sumPhoto">
            <div class="overlay">
            <img id="carPhoto1" src="${brandList[i].image[0]}">
            </div>
            <div  class="overlay">
            <img id="carPhoto2" src="${brandList[i].image[1]}">
            </div>
            <div  class="overlay">
            <img id="carPhoto3" src="${brandList[i].image[2]}">
            </div>
            <div  class="overlay">
            <img id="carPhoto4" src="${brandList[i].image[3]}">
            </div>
            </div>
            </div>
            <div class="destription_all">
            <div >
            <h2 class="description">Opis</h2>
            <p class="car-description">${brandList[i].description}</p>
            </div>

            <div class="back">
            <a href="/kup" class="back" data-link><< Powrót</a>
            </div>`;
        }
    }
}

document.addEventListener("click", imageEvent);

function imageEvent() {
    let expandImg = document.getElementById("expandedImg");

    let carPhoto1 = document.getElementById("carPhoto1");
    let carPhoto1Src = carPhoto1.src;

    let carPhoto2 = document.getElementById("carPhoto2");
    let carPhoto2Src = carPhoto2.src;

    let carPhoto3 = document.getElementById("carPhoto3");
    let carPhoto3Src = carPhoto3.src;

    let carPhoto4 = document.getElementById("carPhoto4");
    let carPhoto4Src = carPhoto4.src;

    carPhoto1.addEventListener("click", function () {
        expandImg.src = carPhoto1Src;
    });
    carPhoto2.addEventListener("click", function () {
        expandImg.src = carPhoto2Src;
    });

    carPhoto3.addEventListener("click", function () {
        expandImg.src = carPhoto3Src;
    });
    carPhoto4.addEventListener("click", function () {
        expandImg.src = carPhoto4Src;
    });
}
