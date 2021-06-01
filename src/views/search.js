//import { giveMeAll } from "./views/marketCar.js";

const json = require("../json/list.json");
const brandList = json.carsData;
const search = document.getElementById("brand");
//const carName = document.getElementsByClassName("car");
//const nextURL = "car.html";

function displayjson() {
    let brands = new Set();

    brands.add("<option >" + "</option>");

    for (let i = 0; i < brandList.length; i++) {
        let NewbrandList = brandList[i].brand;
        brands.add("<option value =" + NewbrandList + ">" + NewbrandList + "</option>");
    }
    return Array.from(brands).join(" ");
}

document.getElementById("brand").innerHTML = displayjson();

function filtr() {
    let car = "";
    if (search.value === "") {
        car = giveMeAll();
    }

    for (let i = 0; i < brandList.length; i++) {
        if (json.carsData[i].brand === search.value) {
            car += `<div class="car" id=${json.carsData[i].id} >
            <img class="car-photo" src="${json.carsData[i].image[0]}">
            <h2 class="car-name">${json.carsData[i].name}</h2>
            <p class="car-year">${json.carsData[i].year}</p>
            <p class="car-km">${json.carsData[i].km}</p>
            <hr/>
            <button class="car-price">${json.carsData[i].price}</button>

            </div> `;
        }
    }

     document.getElementById("carsList").innerHTML = car;

    // for (let i = 0; i < carName.length; i++) {
    //     let id = carName[i].id;
    //     console.log("ID:", id);
    //     carName[i].addEventListener("click", (e) => nextPage(e, id));
    // }
}

search.addEventListener("change", filtr);



//
// function nextPage(e, id) {
//     let carID = "";
//     for (let i = 0; i < brandList.length; i++) {
//         console.log("id loop", id);
//         console.log("brandlist loop", brandList[i].id);
//         if (id === brandList[i].id) {
//             carID += `<h2 class="car-name-chosse">${brandList[i].name}</h2>
//             <div id="content">
//            <div class="all_car_photo">
//             <div>
//            <img class="car-photo_1" src="${brandList[i].image[0]}">
//            </div>
//            <div>
//            <img class="car-photo_2" src="${brandList[i].image[1]}">
//            <img class="car-photo_3" src="${brandList[i].image[2]}">
//            <img class="car-photo_4" src="${brandList[i].image[3]}">
//            </div>
//            </div>
//            <div class="ditels">
//            <button class="car-price-1">${brandList[i].price}</button>
//            <div class="car-details">
//            <div>
//            <p> Marka:</p>
//            <p class="car-brand"> ${brandList[i].brand}</p>
//            </div>
//            <div>
//            <p>Rocznik:</p>
//            <p class="car-year">${brandList[i].year}</p>
//            </div>
//            <div>
//            <p>Przebieg:</p>
//            <p class="car-km">${brandList[i].km}</p>
//            </div>
//            </div>
//            <button id="car-buy">kup</button>
//            </div>
//            </div>
//            <div>
//            <h2 class="description">Opis</h2>
//            <p class="car-description">${brandList[i].description}</p>
//            </div>
//            `;
//             localStorage.setItem("carName", JSON.stringify(brandList[i].name));
//             localStorage.setItem("carPrice", JSON.stringify(brandList[i].price));
//         }
//     }
//     localStorage.setItem("carID", JSON.stringify(carID));
//     location.href = nextURL;
// }