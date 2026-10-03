const correctEmail = "admin@gmail.com";
const correctPassword = "123456";

let attempts = 0;
const maxAttempts = 3;

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("Email");
const passwordInput = document.getElementById("Password");
const loginButton = document.getElementById("loginButton");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    if (email === "" || password === "") {
        return;
    }
    if (email === correctEmail && password === correctPassword) {
        window.location.href = "landingpage.html";
    }else{
        attempts++;
        const remaining = maxAttempts - attempts;
        if (attempts >= maxAttempts) {
            message.textContent = "Too many failed attempts. Login disabled.";
            loginButton.disabled = true;
            emailInput.disabled = true;
            passwordInput.disabled = true;
        } else {
            message.textContent =
                `Invalid email or password. ${remaining} attempt(s) remaining.`;
        }
    }
});