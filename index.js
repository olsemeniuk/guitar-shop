function render() {
    headerPage.render();
    productsPage.render();
}

let catalog = [];

fetch("db.json")
    .then(response => response.json())
    .then(data => {
        catalog = data;
        render();
    })
    .catch(error => console.log(error));

