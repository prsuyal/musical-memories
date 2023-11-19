// This function checks if an element exists before adding an event listener
function safelyAddEventListener(selector, event, func) {
    const element = document.querySelector(selector);
    if (element) {
        element.addEventListener(event, func);
    }
}

// Form submission feedback for the contact form
safelyAddEventListener('#contactForm', 'submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
    e.target.reset();
});

// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (navbar) { // Check if the navbar exists
        if (window.pageYOffset > 50) {
            navbar.style.backgroundColor = '#a0b8d1'; 
        } else {
            navbar.style.backgroundColor = '#333';
        }
    }
});

// Update content when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Replace with your actual launch date
    var launchDate = new Date('2023/10/20'); // Use the format Year/Month/Day
    var currentDate = new Date();

    // Function to update text content if element exists
    function updateTextContent(id, text) {
        var element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        }
    }

    // Calculate the difference in days
    var difference = currentDate - launchDate;
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    updateTextContent('daysSinceLaunch', days + ' days since launch');

    // Update these numbers with real data or retrieve them from an API/database
    updateTextContent('membersCount', '27 members');
    updateTextContent('seniorsPerformed', '50 seniors performed for');
    updateTextContent('kidsTutored', '3 kids tutored');
    updateTextContent('statesCount', '2 states');
    updateTextContent('countriesCount', '2 countries');
});
