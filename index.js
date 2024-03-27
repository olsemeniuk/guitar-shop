function render() {
    headerPage.render();
    productsPage.render();
}

let catalog = [];
spinnerPage.render();

const response = fetch(URL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "X-Master-Key": MASTER_KEY
    }
});

response
    .then(result => result.json())
    .then(data => {
        catalog = data.record;
        if (!catalog) throw new Error;
        render();
    })
    .catch(error => {
        errorPage.render();
    })
    .finally(spinnerPage.handleClear);
