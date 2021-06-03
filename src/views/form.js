import view from "./view.js";

const json = require("../json/list.json");
const brandList = json.carsData;

export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Market Car | Formularz");
    }

    async getHtml() {
        return getForm() + formRadio() +backForm();
    }
}

function getForm() {
    let formCarId = localStorage.getItem("formCarId");
    for (let i = 0; i < brandList.length; i++) {
        if (formCarId === brandList[i].id) {
            return ` <img class="car-photo_1" src="${brandList[i].image[0]}">
                     <p>Wybrany samochód: ${brandList[i].name}</p>
                     <p>Cena pojazgu: ${brandList[i].price}</p>
                     <p>Łącznie zapłacisz: ?????</p>
                     <p>Sposób płatności: ?????</p>
                     <p>sposób odbioru: ?????</p>
                     <div>
                     <h2>Dlaczego warto kupować u nas samochód online?</h2>
                     <ul>
                     <li>14 dni na zwrot auta</li>
                     <li>Gwarancja dożywotniego pochodzenia</li>
                     <li>Auto z sprwdzoną historią serwisową</li>
                     </ul>
                     </div>`;
        }
    }
}

function formRadio() {
    return `<form >
    <p> wybierz, w jaki sposób chcesz zapłacić za samochód.</p>
    <input type="radio" name="radio" value="leasing" />
    <label>Na raty</label>
    <input type="radio" name="radio" value="cash" />
    <label>Za gotówkę</label>
    </form>
    <form >
    <p> Gdzie ma nastąpić przekazanie pojazdu?</p>
    <input type="radio" name="radio" value="salon" />
    <label>Samochód odbiorę w Salonie Market Car</label>
    <input type="radio" name="radio" value="home" />
    <label>Chcę, żeby samochód dostarczono do domu</label>
    <label>Data odbioru</label>
    <select name="select">
    <option>data</option>
    </select>
    </form>

    <form>
    <p>Ekstra wyposażenie i dbałość o Twój pojazd </p>
    <div>
    <input type="checkbox" id="Check"">
    <label for="myCheck">Opony na zmiane</label>
    <span> 1 999 zł</span>
    </div>
    <div>
    <input type="checkbox" id="Check"">
    <label for="myCheck">Digital Video Recorder</label>
    <span> 699 zł</span>
    </div>
    <div>
    <input type="checkbox" id="Check"">
    <label for="myCheck">Lokalizator GPS</label>
    <span>  1 499 zł</span>
    </div>
    <div>
    <input type="checkbox" id="Check"">
    <label for="myCheck">Obowiązkowe wyposazenie</label>
    <span>  199 zł</span>
    </div>
    <div>
    <input type="checkbox" id="Check"">
    <label for="myCheck">Dywank samchodowy</label>
    <span>  40 zł</span>
    </div>
    <div>
    <input type="checkbox" id="Check"">
    <label for="myCheck">Kosmetyki samochodowe Professional
    </label>
    <span>  698 zł</span>
    </div>
    </form>


    <form >
    <p>Dane kontaktowe</p>
    <label>Imię i Nazwisko</label>
    <input type="text" name="name"  id="nameForm" />
    <label>Numer telefonu</label>
    <input type="text" name="phone" id="phoneForm" />


    <p>Adres dostawy pojazdu</p>
    <label>Ulica</label>
    <input type="text" name="street"id="street" />
    <label>Miasto</label>
    <input type="text" name="city"id="city" />
    </form>

    <a href="/" id="car-buy" data-link>kupję</a>

    `;
}

function backForm() {
    let formCarId = localStorage.getItem("formCarId");
    for (let i = 0; i < brandList.length; i++) {
        if (formCarId === brandList[i].id) {
            return `<div>
            <a href="/kup/${brandList[i].id}" clasa="back" data-link><< Powrót</a>
            </div>`;
        }
    }
}
