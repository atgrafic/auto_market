import car_style from "../css/car.scss";

import view from "./view.js";

// const json = require("../json/list.json");
// const brandList = json.carsData;
// const carName = document.getElementsByClassName("car");
// const nextURL = "carList";

export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Market Car");
    }

    async getHtml() {
        return `  <div>
        <h2>Dlaczego warto kupować u nas samochód online?</h2>
        <ul>
        <li>14 dni na zwrot auta</li>
        <li>Gwarancja dożywotniego pochodzenia</li>
        <li>Auto z sprwdzoną historią serwisową</li>
        </ul>
        </div>`;
    }
}

// function carTemplate(car) {

//     return `
//     <div class="car" id=${car.id}>
//     <a href="/kup/${car.id}" data-link>
//     <img class="car-photo" src="${car.image[0]}">
//     <h2 class="car-name">${car.name}</h2>
//     <p class="car-year">${car.year}</p>
//     <p class="car-km">${car.km}</p>
//     <hr/>
//     <button class="car-price">${car.price}</button></a>
//     </div>
//     `;
// }

// function searchForm() {
//     return `<div class='carSearch'>
//     <form type='text'>
//     <span class='placeholder'>Wybierz marke samochodu:</span>
//     <select id='brand'> ${displayjson()}</select>
//     </form>
//     </div>`;
// }

// function displayjson() {
//     let brands = new Set();

//     brands.add("<option >" + "</option>");

//     for (let i = 0; i < brandList.length; i++) {
//         let NewbrandList = brandList[i].brand;
//         brands.add("<option value =" + NewbrandList + ">" + NewbrandList + "</option>");
//     }
//     return Array.from(brands).join(" ");
// }

// function filtr() {
//     let car = "";
//     let search = document.getElementById("brand");
//     if (search.value === "") {
//         car = json.carsData.map(carTemplate).join("");
//     }

//     for (let i = 0; i < brandList.length; i++) {
//         if (brandList[i].brand === search.value) {
//             car += `<div class="car" id=${brandList[i].id} >
//             <img class="car-photo" src="${brandList[i].image[0]}">
//             <h2 class="car-name">${brandList[i].name}</h2>
//             <p class="car-year">${brandList[i].year}</p>
//             <p class="car-km">${brandList[i].km}</p>
//             <hr/>
//             <button class="car-price">${brandList[i].price}</button>

//             </div> `;
//         }
//     }

//     document.getElementById("carsList").innerHTML = car;

//     // for (let i = 0; i < carName.length; i++) {
//     //     let id = carName[i].id;
//     //     //console.log("ID:", id);
//     //     carName[i].addEventListener("click", (e) => nextPage(e, id));
//     // }
// }

// document.addEventListener("change", filtr);

// function carNameList(){
//        for (let i = 0; i < carName.length; i++) {
//         let id = carName[i].id;
//         //console.log("ID:", id);
//         carName[i].addEventListener("click", (e) => nextPage(e, id));
//     }
// }
// carNameList()
// document.addEventListener("click", (e)=>nextPage())
// document.addEventListener("click", (e) => giveMeId(e));

// function giveMeId(e){
//     console.log("E: ", e);
// }

// function nextPage() {
//     for (let i = 0; i < brandList.length; i++) {
//                  let id = carName[i].id;
//                 console.log("ID:", brandList[i].id);
//              if (id === brandList[i].id) {
//                 localStorage.setItem("carID", JSON.stringify(carID));
//         }
//         console.log("ID2:", brandList[i].id);
//     }




    // let carID= document.getElementById("id");
    // console.log("id loop", carName[i].id);
    // localStorage.setItem("carID", JSON.stringify(carID));
    // let carID = "";
    // for (let i = 0; i < brandList.length; i++) {

        // console.log("brandlist loop", brandList[i].id);
        // if (id === brandList[i].id) {
        //     carID += `<h2 class="car-name-chosse">${brandList[i].name}</h2>
        //     <div id="content">
        //    <div class="all_car_photo">
        //     <div>
        //    <img class="car-photo_1" src="${brandList[i].image[0]}">
        //    </div>
        //    <div>
        //    <img class="car-photo_2" src="${brandList[i].image[1]}">
        //    <img class="car-photo_3" src="${brandList[i].image[2]}">
        //    <img class="car-photo_4" src="${brandList[i].image[3]}">
        //    </div>
        //    </div>
        //    <div class="ditels">
        //    <button class="car-price-1">${brandList[i].price}</button>
        //    <div class="car-details">
        //    <div>
        //    <p> Marka:</p>
        //    <p class="car-brand"> ${brandList[i].brand}</p>
        //    </div>
        //    <div>
        //    <p>Rocznik:</p>
        //    <p class="car-year">${brandList[i].year}</p>
        //    </div>
        //    <div>
        //    <p>Przebieg:</p>
        //    <p class="car-km">${brandList[i].km}</p>
        //    </div>
        //    </div>
        //    <button id="car-buy">kup</button>
        //    </div>
        //    </div>
        //    <div>
        //    <h2 class="description">Opis</h2>
        //    <p class="car-description">${brandList[i].description}</p>
        //    </div>
        //    `;
        //     localStorage.setItem("carName", JSON.stringify(brandList[i].name));
        //     localStorage.setItem("carPrice", JSON.stringify(brandList[i].price));
        // }
    // }
    // localStorage.setItem("carID", JSON.stringify(carID));
    // localStorage.setItem("carName", JSON.stringify(brandList[i].name));
    // localStorage.setItem("carPrice", JSON.stringify(brandList[i].price));
    // location.href = nextURL;
// }
