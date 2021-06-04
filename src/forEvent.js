function inputRadio() {
    // alert("sfsdfsdf");
    console.log("HERE");
    if (document.getElementById("leasing") != null) {
        console.log("HERE2");

        document.addEventListener("click", inputRadio)

        let leasing = document.getElementById("leasing");
        let cash = document.getElementById("cash");
        console.log("klik");
        if (leasing == this.checked) {
            document.getElementById("pay").innerHTML = leasing.value;
        }
        if (cash == this.checked) {
            document.getElementById("pay").innerHTML = cash.value;
        }
    }
}
