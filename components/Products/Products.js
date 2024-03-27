class Products {
    render() {
        let htmlCatalog = '';
        CATALOG.forEach(({ id, name, price, img }) => {
            htmlCatalog += `
                <li class="products-element">
                    <b class="products-element__name">${name}</b> 
                    <img class="products-element__img" src=${img} alt="">
                    <i class="products-element__price">⚡️ ${price.toLocaleString('ru')} USD</i>
                    <button class="products-element__btn" type="button">Add to cart</button>
                </li> 
            `;
        });

        const html = `<ul class="products-container">${htmlCatalog}</ul>`;
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();
