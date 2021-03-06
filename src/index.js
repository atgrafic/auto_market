"use strict";

import normalize from "./css/normalize.scss";
import style from "./css/index.scss";
import header_style from "./css/header.scss";
import footer from "./css/footer.scss";
import form from "./css/form.scss";
import focarListrm from "./css/carList.scss";

import header from "./views/header.js";
import buy from "./views/buy.js";
import carList from "./views/carList.js";
import formCar from "./views/form.js";
import carNew from "./views/newCar.js";

import forEvent from "./forEvent.js";


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
        { path: "/kup", view: buy },
        { path: "/kup/:id", view: carList },
        { path: "/form", view: formCar },
        { path: "/newCar", view: carNew },
    ];

    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path)),
        };
    });

    let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname],
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
    styleAll();
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

function styleAll() {
    let stylePrices = document.getElementsByClassName("styledCurrency");

    if (stylePrices.length > 0) {
        for (let i = 0; i < stylePrices.length; i++) {
            let price = new Number(document.getElementsByClassName("styledCurrency")[i].innerHTML);

            let stylePrice = new Intl.NumberFormat("pl-PL").format(price);

            document.getElementsByClassName("styledCurrency")[i].innerHTML = stylePrice;
        }
    }
}

function imageEvent() {
    let imageTab = document.getElementsByClassName("imageTab");
    let expandImg = document.getElementById("expandedImg");

    expandImg.src = imageTab[i].src;
    expandImg.parentElement.style.display = "block";
}
