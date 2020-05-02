const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);


function validateForm(e) {
    e.preventDefault();

    const name = document.querySelector("#name");
    const nameError = document.querySelector("#nameError");
    const nameValue = name.value;


    const answer = document.querySelector("#answer");
    const answerError = document.querySelector("#answerError");
    const answerValue = answer.value;


    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");
    const emailValue = email.value;


    const address = document.querySelector("#address");
    const addressError = document.querySelector("#addressError");
    const addressValue = address.value;


    validateName(nameValue, nameError);
    validateEmailInput(emailValue, emailError);


    if (validateEmail(emailValue) === true) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }


    if (checkInputLength(answerValue) && answerValue.length >= 10) {
        answerError.style.display = "none";
    } else {
        answerError.style.display = "block";
    }


    if (checkInputLength(addressValue) && addressValue.length >= 15) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

}


function checkInputLength(value) {
    const trimmedValue = value.trim();
    return trimmedValue.length > 0;
}


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}


function validateName(name, answer) {
    if (checkInputLength(name)) {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}



function validateEmailInput(name, answer) {
    if (checkInputLength(name)) {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}


function validateName(name, address) {
    if (checkInputLength(name)) {
        address.style.display = "none";
    } else {
        address.style.display = "block";
    }
}



function validateEmailInput(name, address) {
    if (checkInputLength(name)) {
        address.style.display = "none";
    } else {
        address.style.display = "block";
    }
}