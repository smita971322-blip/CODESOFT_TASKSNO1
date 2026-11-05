document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const successMsg = document.getElementById('formSuccess');

        let isValid = true;

        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required.';
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }

        if (email === '' || !email.includes('@')) {
            document.getElementById('emailError').textContent = 'Valid email is required.';
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required.';
            isValid = false;
        } else {
            document.getElementById('messageError').textContent = '';
        }

        if (isValid) {
            successMsg.textContent = 'Thank you! Your message has been sent.';
            contactForm.reset();
            setTimeout(() => successMsg.textContent = '', 4000);
        }
    });
});
