function modalWindow() {
    const btnOpenModal = document.querySelector(".modal__btn");
    const modalWindowWrapper = document.querySelector(".modal-window-wrapper");
    const closeBtn = document.querySelector(".modal-window-wrapper__close-btn");
    const okBtn = document.querySelector(".modal-window-wrapper__btn-ok");

    function calcScroll() {
        const div = document.createElement("div");

        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";

        document.body.appendChild(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    btnOpenModal.addEventListener("click", () => {
        modalWindowWrapper.classList.remove("hidden-element");
        document.body.classList.add("modal-open");
        document.body.style.marginRight = `${calcScroll()}px`;
    });

    function closeModal() {
        modalWindowWrapper.classList.add("hidden-element");
        document.body.classList.remove("modal-open");
        document.body.style.marginRight = "0px";
    }

    modalWindowWrapper.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-window-wrapper")) {
            closeModal();
        }
    });

    closeBtn.addEventListener("click", () => {
        closeModal();
    });

    okBtn.addEventListener("click", () => {
        closeModal();
    });
}

export default modalWindow;