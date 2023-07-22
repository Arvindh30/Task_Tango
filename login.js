function handleSubmit(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const validUsername = 'Arvindh';
    const validPassword = 'test@123';

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleSubmit);