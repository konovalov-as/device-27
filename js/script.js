let openContactsMapInteractive = document.querySelector(".contacts__map-interactive");
let modalMap = document.querySelector(".modal__map");
let modalCloseMap = document.querySelector(".modal__close-map");

let openContactsWriteToUs = document.querySelector(".contacts__write-to-us");
let modalWriteToUs = document.querySelector(".modal__write-to-us");
let modalCloseWriteToUs = document.querySelector(".modal__close-form-write-to-us");

openContactsMapInteractive.addEventListener("click", function(evt) {
    modalMap.classList.add("modal--show");
})

modalCloseMap.addEventListener("click", function(evt) {
    modalMap.classList.remove("modal--show");
});


openContactsWriteToUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWriteToUs.classList.add("modal--show");
});

modalCloseWriteToUs.addEventListener("click", function(evt) {
    modalWriteToUs.classList.remove("modal--show");
})

console.log(modalCloseWriteToUs);