function showCart() {
    const elBtn = document.querySelector(".btn-cart");
    const el = document.querySelector(".products-cart");
    const elWrapper = document.querySelector(".main");
    const elprod = document.querySelector(".products");

    elBtn.addEventListener('click', () => {
        el.style.opacity = 1
        elprod.style.opacity = 0.5
    });
    elWrapper.addEventListener('click', () => {
        el.style.opacity = 0
        elprod.style.opacity = 1
    });

}


showCart();

