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
    var membersCounter = 51;
    var seniorsPerformedCounter = 80;
    var kidsTutoredCounter = 9;
    var statesCounter = 3;
    var countriesCounter = 2;
    updateTextContent('membersCount', membersCounter + ' members');
    updateTextContent('seniorsPerformed', seniorsPerformedCounter + ' seniors impacted');
    updateTextContent('kidsTutored', kidsTutoredCounter + ' students tutored');
    updateTextContent('statesCount', statesCounter + ' states');
    updateTextContent('countriesCount', countriesCounter + ' countries');

    counterValues = {
        daysSinceLaunch: days,
        membersCount: membersCounter,
        seniorsPerformed: seniorsPerformedCounter,
        kidsTutored: kidsTutoredCounter,
        statesCount: statesCounter,
        countriesCount: countriesCounter
    };

    for (var id in counterValues) {
        updateTextContent(id, counterValues[id] + (id === 'daysSinceLaunch' ? ' days since launch' : ''));
    }
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
            // Set count variable to track the count
            let count = 0;

            // Update count function
            function updateCount() {
                // Gets counter target number to count to
                const countId = counter.getAttribute("data-count");
                const target = counterValues[countId];
                // As long as the count is below the target number
                if (count < target) {
                    count++;
                    counter.innerText = count; // Set the counter text to count
                    // Repeat every 10 ms
                    setTimeout(updateCount, 3000/target); // each one should take 3 seconds
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
            activated = true;
        });
    }
}) 

// Function to type out text like a typewriter
function typeWriter(text, i, callback) {
    
    const typingElement = document.getElementById('typing');
    
    
    if (i < text.length) {
        // Append next character to the typing element
        typingElement.innerHTML = text.substring(0, i+1) + '<span class="typing-cursor"></span>';

        
        setTimeout(function() {
            typeWriter(text, i + 1, callback);
        }, 40); // The speed of typing, in milliseconds
    } else {
        
        if (callback) {
            callback();
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    const textToType = 'Providing students with an exciting and engaging way to develop their skills in the world of music';

    
    typeWriter(textToType, 0);
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

function toggleNav() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggles a class that shows or hides the menu
  }
  