import modalWindow from "./scripts/modalWindow.js";
import PhoneMask from "./scripts/phoneMask.js";
import { getRequest, postRequest } from './scripts/sendForm.js'
import Validator from "./scripts/validator.js";

const form = document.querySelector('#signup');


document.addEventListener("DOMContentLoaded", () => {
    Validator();
    PhoneMask();
    modalWindow();
});


getRequest();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    postRequest();
})


