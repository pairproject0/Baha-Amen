function validateLogin() {
var username = document.getElementById('username').value
var password = document.getElementById('password').value
        if (username !=='' && password !=='') {
            window.location.href = 'index.html'}
else {
        alert('try again.')
        }
    }
    