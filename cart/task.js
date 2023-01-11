function productAddToCart() {
    const prodAdd = document.querySelectorAll('.product__add');
    const cart = document.querySelector('.cart__products');

    prodAdd.forEach(el => {
        el.addEventListener('click', (e) => {
        e.preventDefault();
        product = e.target.closest('.product');
        productId = product.getAttribute('data-id');
        productImage = product.querySelector(`.product__image`);
        productValue = product.querySelector(`.product__quantity-value`);

        let productInCart = Array.from(document.querySelectorAll('.cart__product')).find(el => el.dataset.id === product.dataset.id);

        if (productInCart) {
            const cartList = Array.from(document.querySelectorAll('.cart__product'));
            cartList.forEach(el => {
                if (product.dataset.id === el.dataset.id) {
                   let cartValue = el.querySelector('.cart__product-count').textContent;
                   let newCartValue = el.querySelector('.cart__product-count');
                   newCartValue.textContent = Number(cartValue) + Number(productValue.textContent);
                };

            });
        };

        if(!productInCart) {
            cart.insertAdjacentHTML(`beforeEnd`, `<div class="cart__product" data-id="${productId}">
              <img class="cart__product-image" src="${productImage.src}">
              <div class="cart__product-count">${productValue.textContent}</div>
              </div>`);
        }

    });
});
}

function control() {
    const controls = document.querySelectorAll('.product__quantity-controls');

    controls.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            productValue = e.currentTarget.querySelector('.product__quantity-value');
            if (e.target.classList.contains('product__quantity-control_dec')) {
                if (Number(productValue.textContent) === 1) {
                    return null;
                } else {
                    productValue.textContent --;
                }
            } else {
                productValue.textContent ++;
            } ;  
        });
    });
}

control();
productAddToCart();
