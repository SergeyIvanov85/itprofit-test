import modalWindow from "./scripts/modalWindow.js";
import PhoneMask from "./scripts/phoneMask.js";
import sendForm from "./scripts/sendForm.js";
import Validator from "./scripts/validator.js";


document.addEventListener("DOMContentLoaded", () => {
    Validator();
    PhoneMask();
    modalWindow();
    sendForm("http://localhost:8080/requests");
});



