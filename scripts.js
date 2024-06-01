// Initialize the carousel
$('.carousel').carousel({
    interval: 2000
});

// Initialize Bootstrap validation
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    document.getElementById('formResponse').innerHTML = '<div class="alert alert-success">Thank you for your message. We will get back to you soon.</div>';
                    form.reset();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
});
