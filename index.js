function render() {
    headerPage.render();
    productsPage.render();
}

let catalog = [];

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
        render();
    })
    .catch(error => console.log(error));
