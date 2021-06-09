import form from "../css/form.scss";
import view from "./view.js";

const json = require("../json/list.json");
const brandList = json.carsData;

export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Market Car | Formularz");
    }

    async getHtml() {
        return  getForm() +formRadio() +  backForm();
    }
}

function getForm() {
    let formCarId = localStorage.getItem("formCarId");
    for (let i = 0; i < brandList.length; i++) {
        if (formCarId === brandList[i].id) {
            return `<div class="stylrForm">
            <div class="rightSite carForm">
            <img class="car-photo" src="${brandList[i].image[0]}">
                     <p class="chooseCar">  ${brandList[i].name}</p>
                     <p>Cena samochodu:  <br/><span class="styledCurrency" id="price">${brandList[i].priceNumber}</span> PLN</p>
                     <p >Łączna wartość samochodu:<br/><span class="styledCurrency lastSum" id="sum">${brandList[i].priceNumber} </span> PLN  </p>
                     <p>Sposób płatności:<span id="pay"> </span></p>
                     <p>Sposób odbioru:<br/> <span id="reception"></span></p>
                     </div>`;
        }
    }
}

function formRadio() {
    return `
    <div class="leftSite">
    <div class="formCheckedbox">
        <form >
        <p> Wybierz, sposób zapłaty za samochód.</p>
        <div>
        <input type="radio" name="radio" class="buyForm" id ="leasing" value="Raty" />
        <label>Na raty</label>
        </div>
        <div>
        <input type="radio" name="radio" class="buyForm" id="cash" value="Gotówka"/>
        <label>Za gotówkę</label>
        </div>
        <div id="pagyChackedError" class="error-hint hidden">To pole jest obowiąskowe</div>
        </form>
    </div>
    <div class="formCheckedbox">
        <form >
        <p> Gdzie ma nastąpić przekazanie pojazdu?</p>
        <div>
        <input type="radio" name="shopCar" class="buyForm" id="shop" value="Odbiór w salonie Market Car" />
        <label>Samochód odbiorę w Salonie Market Car</label>
        </div>
        <div>
        <input type="radio" name="shopCar" class="buyForm" id="inHome" value="Samochód zostanie dostarczony w dniu " />
        <label>Chcę, żeby samochód dostarczono do domu</label>
        </div>
        <div id="shopCarError" class="error-hint hidden">To pole jest obowiąskowe</div>
        </form>
    </div>
    <div class="formCheckedbox Ekstra">
        <form>
        <p>Ekstra wyposażenie i dbałość o Twój pojazd </p>
        <div>
        <input type="checkbox" class="Check"  name="product"  value="1999">
        <label for="myCheck">Opony na zmiane</label>
        <span> 1 999 PLN</span>
        </div>
        <div>
        <input type="checkbox" class="Check"  name="product" value="699">
        <label for="myCheck">Digital Video Recorder</label>
        <span> 699 PLN</span>
        </div>
        <div>
        <input type="checkbox" class="Check"  name="product" value="1499">
        <label for="myCheck">Lokalizator GPS</label>
        <span>  1 499 PLN</span>
        </div>
        <div>
        <input type="checkbox" class="Check"  name="product" value="199">
        <label for="myCheck">Obowiązkowe wyposazenie</label>
        <span>  199 PLN</span>
        </div>
        <div>
        <input type="checkbox" class="Check"  name="product" value="40">
        <label for="myCheck">Dywank samchodowy</label>
        <span>  40 PLN</span>
        </div>
        <div>
        <input type="checkbox"  name="product" class="Check"  value="698">
        <label for="myCheck">Kosmetyki samochodowe Professional
        </label>
        <span>  698 PLN</span>
        </div>
        </form>
    </div>
    <div>
        <form class="finaleBuy">
            <p>Dane kontaktowe</p>
            <label>Imię i Nazwisko</label>
            <input type="text" name="name" class="contact" id="name" placeholder="Imie i nazwisko"/>
            <div class="error-hint hidden">Twoje imie i nazwisko jest obowiąskowe</div>
            <label>Email</label>
            <input type="text" name="email"  class="contact" placeholder="Adres email"  />
            <div class="error-hint hidden">Twój email jest nie prawidłowy</div>
            <label>Numer telefonu</label>
            <input type="text" name="phone"  class="contact" placeholder="Numer telefonu"/>
            <div class="error-hint hidden">Twój telefon jest nie prawidłowy</div>
            <label>Ulica</label>
            <input type="text" name="street"  class="contact" placeholder="Adres"/>
            <div class="error-hint hidden">Wprowadź poprawny adres</div>
            <label>Miasto</label>
            <input type="text" name="city"  class="contact" placeholder="Miasto"/>
            <div class="error-hint hidden">To pole jest obowiąskowe</div>
            <button type="submit">kupuję</button>
            <a href="/newCar" class="hidden" id="confirm" data-link>Potwierdzam zakup samochodu</a>
            </form>
    </div>
</div>
</div>`;
}

function backForm() {
    let formCarId = localStorage.getItem("formCarId");
    for (let i = 0; i < brandList.length; i++) {
        if (formCarId === brandList[i].id) {
            return `<div class="back listCar">
            <a href="/kup/${brandList[i].id}" class="back " data-link><< Powrót</a>
            </div>`;
        }
    }
}
