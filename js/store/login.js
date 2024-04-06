function authSubmit(event) {
    event.preventDefault();
    var username = document.getElementById('user_name').value;
    var password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', authSubmit);
});
