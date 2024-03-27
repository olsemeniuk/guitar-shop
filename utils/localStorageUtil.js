class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProducts(id) {
        const products = this.getProducts();
        let pushProduct = false;
        const elemIndex = products.indexOf(id);

        if (elemIndex === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(elemIndex, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));
        return { pushProduct, products };
    }
}
