function render() {
    headerPage.render();
    productsPage.render();
}

let catalog = [];

fetch("https://my-json-server.typicode.com/olsemeniuk/guitar-shop")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        catalog = data;
        render();
    })
    .catch(error => console.log(error));

