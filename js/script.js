// noJS
let noJS = document.querySelector("html");
noJS.classList.remove("no-js");

let contactsMap = document.querySelector(".contacts__map");
contactsMap.classList.add("visually-hidden");

let modalMapBig = document.querySelector(".modal__map-big");
modalMapBig.classList.add("visually-hidden");

let contactsMapInteractive = document.querySelector(".contacts__map-interactive");
contactsMapInteractive.classList.remove("visually-hidden");

let modalMmapBigInteractive = document.querySelector(".modal__map-big-interactive");
modalMmapBigInteractive.classList.remove("visually-hidden");
// noJS

let modalWriteToUs = document.querySelector(".modal__write-to-us");
modalWriteToUs.classList.remove("hidden");

let modalMap = document.querySelector(".modal__map");
modalMap.classList.remove("hidden");

let openContactsMapInteractive = document.querySelector(".contacts__map-interactive");
let modalCloseMap = document.querySelector(".modal__close-map");

let openContactsWriteToUs = document.querySelector(".contacts__write-to-us");
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
