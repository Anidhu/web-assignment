document.addEventListener('DOMContentLoaded', function () {
    // Get all buttons with class "toggle-answer"
    var toggleButtons = document.querySelectorAll('.toggle-answer');

    // Loop through each button and add a click event listener
    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Find the corresponding answer element
            var answer = this.nextElementSibling;

            // Toggle the visibility of the answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                this.textContent = '+';
            } else {
                answer.style.display = 'block';
                this.textContent = '-';
            }
        });
    });
});
function validateForm() {
    var customerName = document.getElementById('customerName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Basic validation for customerName and phoneNumber
    if (customerName.trim() === '') {
        alert('Please enter your name.');
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(customerName)) {
        alert('Name should not contain numbers or special characters.');
        return false;
    }

    if (phoneNumber.trim() === '' || !/^(07[0-9]{8})$/.test(phoneNumber)) {
        alert('Please enter a valid phone number starting with 07 and containing 10 digits.');
        return false;
    }

    // Email validation
    if (email.trim() === '') {
        alert('Please enter your email address.');
        return false;
    } else if (!/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|email\.com)$/.test(email)) {
        alert('Please enter a valid email address from Gmail, E-mail, Outlook or Yahoo.');
        return false;
    }

    // Message validation
    if (message.trim().split(/\s+/).length < 20) {
        alert('Please enter a message with at least 20 words.');
        return false;
    }

    // If all validations pass, the form will be submitted
    return true;
}


