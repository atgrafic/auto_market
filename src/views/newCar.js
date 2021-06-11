import view from "./view.js";


const json = require("../json/list.json");
const brandList = json.carsData;
export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Market Car | Gratulacje");
    }

    async getHtml() {
     return carBuy() ;
    }
}
function carBuy() {
    let formCarId = localStorage.getItem("formCarId");
    for (let i = 0; i < brandList.length; i++) {
        if (formCarId === brandList[i].id) {
            return `<div class="listCar"> <h2 class="chooseCar"> Dziękujemy za zakup ${brandList[i].name} !</h2>
            <div class="newCarReception" id="receive">${localStorage.getItem("date")}</div>
            <img class="car-photoNew" src="${brandList[i].image[0]}"></div>`;

        }
    }


}