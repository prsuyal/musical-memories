// Form submission feedback for the contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
    document.getElementById('contactForm').reset();
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.pageYOffset > 50) {
        navbar.style.backgroundColor = '#a0b8d1'; 
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

