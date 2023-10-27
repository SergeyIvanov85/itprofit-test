import { postData } from "./postData.js";

function sendForm(url) {
    const form = document.querySelector("#signup");
    const infoMsg = document.querySelector("#text");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        infoMsg.classList.add("hidden-element");

        const spinner = document.createElement("div");
        spinner.classList.add("dark-spinner");
        form.insertAdjacentElement("beforeend", spinner);

        postData(
            url,
            JSON.stringify({
                name: document.querySelector("#name").value,
                mail: document.querySelector("#email").value,
                phone: document.querySelector("#tel").value,
                message: document.querySelector("#text").value,
            })
        )
            .then(() => {
                infoMsg.textContent = "Ваше сообщение успешно отправлено!";
                infoMsg.classList.add("success-msg");
                infoMsg.classList.remove("error-msg", "hidden-element");
                form.reset();
            })
            .catch((error) => {
                infoMsg.textContent = `Во время отправки сообщения произошла ошибка: ${error}`;
                infoMsg.classList.add("error-msg");
                infoMsg.classList.remove("success-msg", "hidden-element");
            })
            .finally(() => {
                spinner.remove();
            });
    });
}

export default sendForm;