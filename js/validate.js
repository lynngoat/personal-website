document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");


    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorElement = field.nextElementSibling;

        errorElement.textContent = message;
        errorElement.style.display = "block";
    }

    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorElement = field.nextElementSibling;

        errorElement.textContent = "";
        errorElement.style.display = "none";
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Name validation
        if (name === "") {

            showError("name", "Name is required.");

            isValid = false;
        }

        // Email validation
        if (email === "") {

            showError("email", "Email is required.");
            isValid = false;
        } 
        
        else if (!validateEmail(email)) {

            showError("email", "Please enter a valid email.");
            isValid = false;

        }

        // Message validation
        if (message.length < 20) {

            showError(
                "message",
                "Message must be at least 20 characters."
            );

            isValid = false;

        }

        // Successful message sent
        if (isValid) {

            form.style.display = "none";

            document.getElementById("success-message").textContent =
                "Thank you. Your message has been sent.";

        }

    });

    // Clear errors while typing
    ["name", "email", "message"].forEach(function (id) {

        document.getElementById(id).addEventListener("input", function () {

            clearError(id);

        });
    });


});