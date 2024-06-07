document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");
    form.addEventListener("submit", (event) => {
        const email = form.elements.email.value.trim();
        const password = form.elements.password.value.trim();
        if (!email || !password) {
            return alert(`All form fields must be filled in`)
        }
        const formInputs = {
            email: email,
            password: password
        };
        console.log(formInputs);
        form.reset();
    });
});