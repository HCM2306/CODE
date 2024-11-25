// Example login form handling
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      alert(`Welcome, ${username}!`);
      // Here you can add the logic for actual login or API calls
    } else {
      alert('Please fill in both fields.');
    }
  });
  