class Spinner {
    handleClear() {
        ROOT_SPINNER.innerHTML = "";
    }

    render() {
        const html = `
            <div class="spinner-container">
                <img class="spinner-img" src="components/Spinner/images/spinner.svg" alt=""> 
            </div> 
        `;
        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();
