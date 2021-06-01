'use strict'

import normalize from "./css/normalize.scss";
import style from "./css/index.scss";
import header_style from "./css/header.scss";
import footer from "./css/footer.scss";



import header from "./views/header.js";
import car from "./views/marketCar.js";
import contact from "./views/contact";


//import search from "./views/search.js";

// import car_html from "./car.html";
// import car_js from "./car.js";

// import form_html from "./form.html";
// import form from "./form.js";



const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: car},
        // { path: "/sprzedaj", view:sprzedaj},
        // { path: "/onas", view: onas },
         { path: "/kontakt", view: contact }
    ];

     // Test each route for potential match
     const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }
    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
};
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded",()=>{
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
})


