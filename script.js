document.getElementById('signup-btn').addEventListener('click', function() {
    document.querySelector('.login-container').style.transform = 'translateX(-50%)';
    document.querySelector('.login-container').style.opacity = '0';
    document.querySelector('.signup-container').style.transform = 'translateX(0)';
    document.querySelector('.signup-container').style.opacity = '1';
});

document.getElementById('login-btn').addEventListener('click', function() {
    document.querySelector('.signup-container').style.transform = 'translateX(50%)';
    document.querySelector('.signup-container').style.opacity = '0';
    document.querySelector('.login-container').style.transform = 'translateX(0)';
    document.querySelector('.login-container').style.opacity = '1';
});

// Form submission handling (just basic validation here for demo purposes)
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Logging in...');
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Signed up successfully!');
    }
});
