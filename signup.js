document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            mobile: document.getElementById('mobile').value,
            password: document.getElementById('password').value
        };
        
        if (validateForm(formData)) {
            // Here you would typically make an API call to your backend
            localStorage.setItem('userData', JSON.stringify(formData));
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'index.html';
        }
    });

    function validateForm(data) {
        let isValid = true;
        
        // Reset all error states
        document.querySelectorAll('input').forEach(input => {
            input.classList.remove('error');
        });

        // Validate username (alphanumeric, 3-20 characters)
        if (!/^[a-zA-Z0-9]{3,20}$/.test(data.username)) {
            document.getElementById('username').classList.add('error');
            isValid = false;
        }

        // Validate email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            document.getElementById('email').classList.add('error');
            isValid = false;
        }

        // Validate mobile number (10 digits)
        if (!/^\d{10}$/.test(data.mobile.replace(/[^0-9]/g, ''))) {
            document.getElementById('mobile').classList.add('error');
            isValid = false;
        }

        // Validate password (min 6 characters)
        if (data.password.length < 6) {
            document.getElementById('password').classList.add('error');
            isValid = false;
        }

        return isValid;
    }
});