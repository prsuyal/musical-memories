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
    var membersCounter = 27;
    var seniorsPerformedCounter = 80;
    var kidsTutoredCounter = 3;
    var statesCounter = 3;
    var countriesCounter = 2;
    updateTextContent('membersCount', membersCounter + ' members');
    updateTextContent('seniorsPerformed', seniorsPerformedCounter + ' seniors impacted');
    updateTextContent('kidsTutored', kidsTutoredCounter + ' students tutored');
    updateTextContent('statesCount', statesCounter + ' states');
    updateTextContent('countriesCount', countriesCounter + ' countries');
});

const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
let activated = false; // Variable that tracks if the counters have been activated

// Scroll event
window.addEventListener("scroll", () =>  { 
    // If the page is scrolled to the containers element and the counters are not activated
    if(
        pageYOffset > container.offsetTop && activated === false
    ) {
        console.log("test");
        // Select all counters
        counters.forEach(counter => {
            // Set counter values to 0
            counter.innerText = 0;
            // Set count variable to track the count
            let count = 0;

            // Update count function
            function updateCount() {
                // Gets counter target number to count to
                const target = 100; // this somehow has to be a different variable for
                // each stat i'm using membersCounter as a placeholder
                // As long as the count is below the target number
                if (count < target) {
                    count++;
                    counter.innerText = count; // Set the counter text to count
                    // Repeat every 10 ms
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
            activated = true;
        });
    }
}) 
