document.body.addEventListener("click", forEvent);

function forEvent() {
    return inputForm() + totalIt();
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
        }
        if (inHome.checked == true) {
            let today = new Date();
                let dd = String(today.getDate()).padStart(2, "0");
                let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
                let yyyy = today.getFullYear();



            //    let today  = new Date();
                let todayAdd = today.setDate(today.getDate()+14);
                todayAdd = dd + "." + mm + "." + yyyy;

            document.getElementById("reception").innerHTML = inHome.value +todayAdd;
        }
    }
}

function totalIt() {
    if (event.target.classList.contains("Check")) {
        let input = document.getElementsByName("product");
        let total = new Number(document.getElementById("price").innerHTML);
        for (let i = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                total += parseFloat(input[i].value);
            }
        }
        document.getElementById("sum").innerHTML = total;
    }
}
////

    const form = document.querySelector("car-buy");
    const nameInput = document.querySelector("input[name='name']");
    // const emailInput = document.querySelector("input[name='email']");
    // const phoneInput = document.querySelector("input[name='phone']");
    // const messageInput = document.querySelector("textarea[name='message']");

    // nameInput.isValid = () => !!nameInput.value;
    // emailInput.isValid = () => isValidEmail(emailInput.value);
    // phoneInput.isValid = () => isValidPhone(phoneInput.value);
    // messageInput.isValid = () => !!messageInput.value;

    // const inputFields = [nameInput, emailInput, phoneInput, messageInput];

    // const isValidEmail = (email) => {
    //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(String(email).toLowerCase());
    // };

    // const isValidPhone = (phone) => {
    //   const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    //   return re.test(String(phone).toLowerCase());
    // };

    // let shouldValidate = false;
    // let isFormValid = false;

    // const validateInputs = () => {
    //   console.log("we are here");
    //   if (!shouldValidate) return;

    //   isFormValid = true;
    //   inputFields.forEach((input) => {
    //     input.classList.remove("invalid");
    //     input.nextElementSibling.classList.add("hide");

    //     if (!input.isValid()) {
    //       input.classList.add("invalid");
    //       isFormValid = false;
    //       input.nextElementSibling.classList.remove("hide");
    //     }
    //   });
    // };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      shouldValidate = true;
      validateInputs();
      if (isFormValid) {

      }
    });

    // inputFields.forEach((input) => input.addEventListener("input", validateInputs));

