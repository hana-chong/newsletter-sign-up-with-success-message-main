function validForm (event) {

    const emailInput = document.getElementById("email-input");
    const errorElement = document.getElementById("error");
    const successContent = document.querySelector(".success-content");
    const container = document.querySelector(".container");
    let isValid = true;

    if (!emailInput.value.match(/^\S+@\S+\.\S+$/)) {
        errorElement.style.display = "inline";
        emailInput.value = "";
        emailInput.style.backgroundColor = "hsl(0, 80%, 90%)";
        emailInput.style.color = "red";
        emailInput.style.border = "1px solid red";
        isValid = false;
} else {
    errorElement.style.display = "none";
    const emailPlaceholder = document.getElementById("email-placeholder");
    emailPlaceholder.textContent = emailInput.value;
    container.style.display = "none";
}
}
const submitButton = document.querySelector(".submit-btn");
submitButton.addEventListener("click", validForm);
