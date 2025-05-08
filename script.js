document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    // Reset error messages
    emailError.textContent = 'Email or password is incorrect';
    passwordError.textContent = 'Email or password is incorrect';
    
    // Simple validation - replace with your actual authentication logic
    if (email !== "correct@email.com" || password !== "correctpassword") {
        emailError.textContent = 'Email or password is incorrect';
        passwordError.textContent = 'Email or password is incorrect';
        emailError.classList.add('show');
        passwordError.classList.add('show');
        return;
    }

    // If validation passes, you can proceed with login
    console.log('Login successful');
});