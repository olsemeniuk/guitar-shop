class Products {
    constructor() {
        this.activeButtonClass = "products-element__btn--active";
        this.addText = "Add to cart";
        this.removeText = "Remove from cart";
    }

    handleSetLocationStorage(elem, id) {
        const {pushProduct, products} = localStorageUtil.putProducts(id);
        if (pushProduct) {
            elem.classList.add(this.activeButtonClass);
            elem.textContent = this.removeText;
        } else {
            elem.classList.remove(this.activeButtonClass);
            elem.textContent = this.addText;
        }
        headerPage.refreshProductsAmount(products.length)
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = "";
        catalog.forEach(({id, name, price, img}) => {
            const buttonText = productsStore.includes(id) ? this.removeText : this.addText;
            const activeClass = productsStore.includes(id) ? ` ${this.activeButtonClass}` : '';

            htmlCatalog += `
                <li class="products-element">
                    <b class="products-element__name">${name}</b> 
                    <img class="products-element__img" src="${img}" alt="">
                    <i class="products-element__price">⚡️ ${price.toLocaleString("ru")} USD</i>
                    <button 
                        class="products-element__btn${activeClass}" 
                        type="button" 
                        onclick="productsPage.handleSetLocationStorage(this, '${id}')">
                        ${buttonText}
                    </button>
                </li> 
            `;
        });

        const html = `<ul class="products-container">${htmlCatalog}</ul>`;
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
