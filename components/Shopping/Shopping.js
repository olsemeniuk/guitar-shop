class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = "";
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = "";
        let total = 0;

        catalog.forEach(({id, name, price}) => {
            if (productsStore.includes(id)) {
                htmlCatalog += `
                    <tr class="shopping-element">
                        <td class="shopping-element__name">⚡️ ${name}</td> 
                        <td class="shopping-element__price">${price.toLocaleString("ru")} USD</td> 
                    </tr> 
                `;

                total += price;
            }
        })

        htmlCatalog += `
            <tr class="shopping-element">
                <td class="shopping-element__name">💥 Total:</tld> 
                <td class="shopping-element__price">${total.toLocaleString("ru")} USD</td> 
            </tr> 
        `;

        const html = `
            <div class="shopping-container">
                <button class="shopping-container__close" type="button" onclick="shoppingPage.handleClear()"></button>
                <table>${htmlCatalog}</table> 
            </div> 
        `;

        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();