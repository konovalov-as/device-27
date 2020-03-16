let openContactsMapInteractive = document.querySelector(".contacts__map-interactive");
let modalMap = document.querySelector(".modal__map");
let modalCloseMap = document.querySelector(".modal__close-map");

let openContactsWriteToUs = document.querySelector(".contacts__write-to-us");
let modalWriteToUs = document.querySelector(".modal__write-to-us");
let modalCloseWriteToUs = document.querySelector(".modal__close-form-write-to-us");

let submitFormWriteToUs = modalWriteToUs.querySelector(".modal__submit-form-write-to-us");
let yourName = modalWriteToUs.querySelector(".modal__form-your-name-input");
let yourEmail = modalWriteToUs.querySelector(".modal__form-your-email-input");

openContactsMapInteractive.addEventListener("click", function (evt) {
    modalMap.classList.add("modal--show");
});

modalCloseMap.addEventListener("click", function (evt) {
    modalMap.classList.remove("modal--show");
});

openContactsWriteToUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteToUs.classList.add("modal--show");
});

modalCloseWriteToUs.addEventListener("click", function (evt) {
    modalWriteToUs.classList.remove("modal--show");
});

modalWriteToUs.addEventListener("submit", function (evt) {
    if (!yourName.value) {
        evt.preventDefault();
        yourName.classList.add("modal__form-your-name-input--error");
    }
    if (!yourEmail.value) {
        evt.preventDefault();
        yourEmail.classList.add("modal__form-your-email-input--error");
    }
});

yourName.addEventListener("input", function () {
    yourName.classList.remove("modal__form-your-name-input--error");
});

yourEmail.addEventListener("input", function () {
    yourEmail.classList.remove("modal__form-your-email-input--error");
});
