let catalogGoodsOpen = document.querySelector(".main-navigation__catalog-goods");
let catalogGoodsList = document.querySelector(".main-header__catalog-goods");

let flag = true;
catalogGoodsOpen.addEventListener("click", function(evt) {
    if (flag) {
        evt.preventDefault();
        catalogGoodsList.classList.toggle("main-header__catalog-goods--show");
        flag = false;
    }
});

