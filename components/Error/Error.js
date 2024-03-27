class Error {
    render() {
        const html = `
            <div class="error-container">
                <div class="error-message">
                    <h3>No Access!</h3> 
                    <p>Try later.</p>
                </div> 
            </div>
        `;
        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();
