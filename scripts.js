document.querySelectorAll('.switch-btn').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');

        document.getElementById('login-section').classList.add('hidden');
        document.getElementById('signup-section').classList.add('hidden');

        if (target === 'login') {
            document.getElementById('login-section').classList.remove('hidden');
        } else if (target === 'signup') {
            document.getElementById('signup-section').classList.remove('hidden');
        }
    });
});

// Optional: Check Password Matching (if needed)
const signupForm = document.querySelector('#signup-section .auth-form');
signupForm.addEventListener('submit', (event) => {
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        event.preventDefault();
        alert("Passwords do not match. Please try again.");
    }
});
