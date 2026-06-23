document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = loginForm.email.value.trim(); // Trim whitespace
            const password = loginForm.password.value.trim(); // Trim whitespace

            // Retrieve user credentials from localStorage (or wherever you store them)
            const storedEmail = localStorage.getItem("userEmail");
            const storedPassword = localStorage.getItem("userPassword");

            // Check if email and password match the stored credentials
            if (email === storedEmail && password === storedPassword) {
                // Simulate storing user session (replace with actual session management)
                localStorage.setItem("isLoggedIn", true);
                window.location.href = "index.html"; // Redirect to index page
            } else {
                alert("Invalid email or password");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = signupForm.email.value.trim(); // Trim whitespace
            const password = signupForm.password.value.trim(); // Trim whitespace

            // Store user credentials in localStorage (or wherever you want to store them)
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

            // Simulate user registration (replace with actual registration logic)
            alert("User registered successfully");
            signupForm.reset();
        });
    }
});
// review//
// Add this to your script.js file or create a new one
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for form submission
    const form = document.getElementById('review-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Get values from form fields
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const reviewText = document.getElementById('review-text').value;
        // Create new review element
        const review = document.createElement('div');
        review.classList.add('review');
        review.innerHTML = `
            <div class="reviewer-info">
                <h3>${name}</h3>
                <p>${rating} stars</p>
            </div>
            <p class="review-text">${reviewText}</p>
        `;
        // Append new review to the reviews section
        const reviewsSection = document.querySelector('.reviews .container');
        reviewsSection.appendChild(review);
        // Reset form fields
        form.reset();
    });
});
