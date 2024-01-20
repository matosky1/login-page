function validatePassword() {
    var passwordInput = document.getElementById('password');
    var messageElement = document.getElementById('message');

    if (passwordInput.value.length < 6) {
        messageElement.textContent = 'Password not valid. It should be at least 6 characters.';
        passwordInput.style.border = '1px solid red';
    } else {
        messageElement.textContent = 'Success!';
        passwordInput.style.border = '1px solid #ccc';
    }
}
