document.querySelector("#subscribe").addEventListener('click', function () {
    if (this.checked) {
        document.querySelector('#emailDiv').style.display = 'block';
    }
    else {
        document.querySelector('#emailDiv').style.display = 'none';
    }
} );

//Challenge 1 - Part 2
document.addEventListener("click", function () {
    let currentTime = new Date();
    alert("The current time is: " + currentTime);
});

//Challenge 2
document.addEventListener("DOMContentLoaded", function () {
    var SameAddressCheckbox = document.querySelector("#sameAddress");
    var billingAddress = document.querySelector("#billingAddress");
    var homeAddress = document.querySelector("#homeAddress");   

    SameAddressCheckbox.addEventListener('click', function () {
        if(this.checked) {
            homeAddress.value = billingAddress.value;
            homeAddress.setAttribute("readonly", true);

        } else {
            homeAddress.removeAttribute("readonly");
        }
        });
});

//Challenge 3
document.getElementById("ch3form").addEventListener("submit", function (event) {
    event.preventDefault();

    const standingSelected = document.querySelector('input[name="standing"]:checked');
    const gradDateSelected = document.querySelector('input[name="gradDate"]:checked');

    if (!standingSelected || !gradDateSelected) {
        alert("Please select a standing and graduation date.");
    } else {
        this.submit();
    }
});