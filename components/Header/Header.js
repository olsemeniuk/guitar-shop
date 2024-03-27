class Header {
    render() {
        const products = localStorageUtil.getProducts();
        const productsAmount = products.length;
        const html = `
            <div class="header-container">
                <div class="header-counter">🔥 ${productsAmount}</div> 
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }

    refreshProductsAmount(n) {
        const counter = document.querySelector('.header-counter');
        counter.textContent = `🔥 ${n}`;
    }
}

const headerPage = new Header();
headerPage.render();
