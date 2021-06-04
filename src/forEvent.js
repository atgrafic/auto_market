document.body.addEventListener("click", forEvent);

function forEvent() {
    return inputForm() + checkboxForm();
}

function inputForm() {
    if (event.target.classList.contains("buyForm")) {
        if (leasing.checked == true) {
            document.getElementById("pay").innerHTML = leasing.value;
        }
        if (cash.checked == true) {
            document.getElementById("pay").innerHTML = cash.value;
        }
        if (shop.checked == true) {
            document.getElementById("reception").innerHTML = shop.value;
            document.getElementById("carData").style.display = "none";
        }
        if (inHome.checked == true) {
            document.getElementById("reception").innerHTML = inHome.value;
            document.getElementById("carData").style.display = "block";
        }
    }
}

function checkboxForm() {
    if (event.target.classList.contains("Check")) {
        let price =  new Number(document.getElementById("price").innerHTML);

        if (car1.checked == true) {
            document.getElementById("sum").innerHTML = price + new Number(car1.value);
        }
        if (car1.checked == false) {
            document.getElementById("sum").innerHTML = (price + new Number(car1.value)) - new Number(car1.value);
        }
       
    }
}
