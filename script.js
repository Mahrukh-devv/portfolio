 document.addEventListener("DOMContentLoaded", () => {
    // Light/Dark Mode Toggle Script
    const modeToggle = document.getElementById("mode-toggle");
    modeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            modeToggle.textContent = "🌙 Dark Mode";
        } else {
            modeToggle.textContent = "☀️ Light Mode";
        }
    });

    // Form Submission Handler
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent standard page refresh
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Log submission object to the console (CS50 requirement check)
            console.log({ name, email, message });

            // Hide form and show success message
            contactForm.style.display = "none";
            successMessage.style.display = "block";
        });
    }
});
