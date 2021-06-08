import form from "./css/form.scss";

document.body.addEventListener("click", forEvent);

function forEvent() {
    return inputForm() + totalIt() + submitTry();
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
            localStorage.setItem("date", shop.value)
        }
        if (inHome.checked == true) {
            let today = new Date();
            let MyDateString;

            if (today.getDay() == 0) {
                today.setDate(today.getDate() + 15);
            } else {
                today.setDate(today.getDate() + 14);
            }

            MyDateString =
                ("0" + today.getDate()).slice(-2) +
                "." +
                ("0" + (today.getMonth() + 1)).slice(-2) +
                "." +
                today.getFullYear();

            document.getElementById("reception").innerHTML = inHome.value + MyDateString;
            localStorage.setItem("date", inHome.value + MyDateString)
        }
    }
}

function totalIt() {
    if (event.target.classList.contains("Check")) {
        let input = document.getElementsByName("product");
        let total = new Number(document.getElementById("price").innerHTML.replace(/\&nbsp;/g, ""));
        for (let i = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                total += parseFloat(input[i].value);
            }
        }

        document.getElementById("sum").innerHTML = new Intl.NumberFormat("pl-PL").format(total);
    }
}

function formValidate(e) {
    // const formSubmit = document.getElementById("finaleBuy");
    const nameInput = document.querySelector("input[name='name']");
    const emailInput = document.querySelector("input[name='email']");
    const phoneInput = document.querySelector("input[name='phone']");
    const street = document.querySelector("input[name='street']");
    const cityInput = document.querySelector("input[name='city']");
    const paychecked = document.getElementsByName("radio");
    const shopCar = document.getElementsByName("shopCar");

    const inputFields = [nameInput, emailInput, phoneInput, street, cityInput];

    nameInput.isValid = () => isValidName(nameInput.value);
    emailInput.isValid = () => isValidEmail(emailInput.value);
    phoneInput.isValid = () => isValidPhone(phoneInput.value);
    street.isValid = () => !!street.value;
    cityInput.isValid = () => !!cityInput.value;

    function validateShopCar() {
        let formValid = false;

        for (let i = 0; i < shopCar.length; i++) {
            if (shopCar[i].checked) formValid = true;
        }
        if (!formValid) {
            document.getElementById("shopCarError").classList.remove("hidden");
            e.preventDefault();
        }
        if (formValid) {
            document.getElementById("shopCarError").classList.add("hidden");
        }

        return formValid;
    }

    function validatePayChecked() {
        let formValid = false;

        for (let i = 0; i < paychecked.length; i++) {
            if (paychecked[i].checked) formValid = true;
        }
        if (!formValid) {
            document.getElementById("pagyChackedError").classList.remove("hidden");
            e.preventDefault();
        }
        if (formValid) {
            document.getElementById("pagyChackedError").classList.add("hidden");
        }
        return formValid;
    }
    inputFields.forEach((input) => {
        input.classList.remove("invalid");
        input.nextElementSibling.classList.add("hidden");
    });

    function isValidName(name) {
        return !name == "" && name.indexOf(" ") > -1 && name.slice(-1) != " ";
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function isValidPhone(phone) {
        const re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/;
        return re.test(String(phone).toLowerCase());
    }
    validateShopCar();
    validatePayChecked();
    inputFields.forEach((input) => {
        if (!input.isValid()) {
            input.nextElementSibling.classList.remove("hidden");
            input.classList.add("invalid");
            e.preventDefault();
        } else {
            if (validateShopCar() && validatePayChecked()) {
                document.getElementById("confirm").classList.remove("hidden");
            };
        }
    });
}

function submitTry() {
    let finaleBuy = document.getElementsByClassName("finaleBuy");
    if (finaleBuy.length > 0) {
        finaleBuy[0].addEventListener("submit", (e) => {
            e.preventDefault();
            // formValidate(e);
            document.getElementById("confirm").classList.remove("hidden");
        });
    }
}
