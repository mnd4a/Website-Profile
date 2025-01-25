// Validate Login
function validateLogin() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const correctUsername = "amanda";
    const correctEmail = "ftriamandaaa@gmail.com";
    const correctPassword = "ndanda";

    if (username === correctUsername && email === correctEmail && password === correctPassword) {
        // Redirect to profile page if login is successful
        window.location.href = "profile.html";
        return false;  // Prevent form submission
    } else {
        // Show error message if login is invalid
        errorMessage.textContent = "Username/email/password anda salah!";
        errorMessage.style.color = "red";
        return false;  // Prevent form submission
    }
}
