import style from "../css/index.scss";
import header_style from "../css/header.scss";
  

const navResponse =document.getElementById("topNav");
function menu() {
    //alert("Hello! I am an alert box!!")
 if (navResponse.className === "nav_item") {
    navResponse.className += " responsive";
    } else {
        navResponse.className = "nav_item";
    }
 }


navResponse.addEventListener("click", () => menu());


