"use strict";

import normalize from "./css/normalize.scss";
import style from "./css/index.scss";
import header_style from "./css/header.scss";
import footer from "./css/footer.scss";
import form from "./css/form.scss";

import header from "./views/header.js";
import car from "./views/marketCar.js";
import buy from "./views/buy.js";
import carList from "./views/carList.js";
import formCar from "./views/form.js";

import forEvent from "./forEvent.js";
import contact from "./views/contact.js";
// import about from "./views/about";
// import sale from "./views/sale";

const pathToRegex = (path) =>
    new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);

    return Object.fromEntries(
        keys.map((key, i) => {
            return [key, values[i]];
        })
    );
};

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: car },
        { path: "/kup", view: buy },
        { path: "/kup/:id", view: carList },
        { path: "/form", view: formCar },
        // { path: "/sprzedaj", view:sale},
        // { path: "/onas", view: about },
        { path: "/kontakt", view: contact },
        // { path: "/index", view: car},
    ];

    // Test each route for potential match
    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path)),
        };
    });

    let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

    if (!match) {
        console.log("routes[0]: ", routes[0]);
        match = {
            route: routes[0],
            result: [location.pathname],
        };
    }

    const view = new match.route.view(getParams(match));
    
    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});

document.body.addEventListener("click", inputRadio);

function inputRadio() {
    if (event.target.classList.contains("buyForm")) {
        console.log("in 1 if");
        if (leasing.checked == true) {
            document.getElementById("pay").innerHTML = leasing.value;
        }
        if (cash.checked == true) {
            document.getElementById("pay").innerHTML = cash.value;
        }
        if (shop.checked == true) {
            document.getElementById("reception").innerHTML = shop.value;
        }
        if (inHome.checked == true) {
            document.getElementById("reception").innerHTML = inHome.value;
        }
    }
    // let element = event.target;
    // console.log(element.classList.contains("leasing"));
    // if (element.target.values.contains("leasing")) {
    //     if (document.getElementById("leasing") != null) {
    //         console.log("HERE2");

    //         document.addEventListener("click", inputRadio);

    //         let leasing = document.getElementById("leasing");
    //         let cash = document.getElementById("cash");
    //         console.log("klik");
    //         if (leasing == this.checked) {
    //             document.getElementById("pay").innerHTML = leasing.value;
    //         }
    //         if (cash == this.checked) {
    //             document.getElementById("pay").innerHTML = cash.value;
    //         }
    //     }
    // }
}
