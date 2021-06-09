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
            localStorage.setItem("date", shop.value);
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
            localStorage.setItem("date", inHome.value + MyDateString);
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
    const nameInput = { path: document.querySelector("input[name='name']"), status: false };
    const emailInput = { path: document.querySelector("input[name='email']"), status: false };
    const phoneInput = { path: document.querySelector("input[name='phone']"), status: false };
    const street = { path: document.querySelector("input[name='street']"), status: false };
    const cityInput = { path: document.querySelector("input[name='city']"), status: false };
    const paychecked = document.getElementsByName("radio");
    const shopCar = document.getElementsByName("shopCar");

    const inputFields = [nameInput, emailInput, phoneInput, street, cityInput];

    nameInput.path.isValid = () => isValidName(nameInput.path.value);
    emailInput.path.isValid = () => isValidEmail(emailInput.path.value);
    phoneInput.path.isValid = () => isValidPhone(phoneInput.path.value);
    street.path.isValid = () => !!street.path.value;
    cityInput.path.isValid = () => !!cityInput.path.value;

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

    inputFields.forEach((input) => {
        if (!input.path.isValid()) {
            input.path.nextElementSibling.classList.remove("hidden");
            input.path.classList.add("invalid");
            document.getElementById("confirm").classList.add("hidden");
            e.preventDefault();
        } else {
            input.path.classList.remove("invalid");
            input.path.nextElementSibling.classList.add("hidden");
            input.status = true;
        }
    });

    let isContactDetailsValid = inputFields.some(function (input) {
        return input.status === false;
    });

    let isShopCarValid = validateShopCar();
    let isPaycheckedValid = validatePayChecked();

    if (isShopCarValid && isPaycheckedValid && !isContactDetailsValid) {
        document.getElementById("confirm").classList.remove("hidden");
    }
}

function submitTry() {
    let finaleBuy = document.getElementsByClassName("finaleBuy");
    if (finaleBuy.length > 0) {
        finaleBuy[0].addEventListener("submit", (e) => {
            e.preventDefault();
            formValidate(e);
        });
    }
}
