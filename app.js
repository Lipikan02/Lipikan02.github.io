// JavaScript for toggling sections

// Get references to the buttons and sections
const resumeButton = document.getElementById('resumeButton');
const aboutButton = document.getElementById('aboutButton');
const resumeButton2 = document.getElementById('resumeButton2');
const aboutButton2 = document.getElementById('aboutButton2');
const resumeSection = document.getElementById('resume');
const aboutSection = document.getElementById('about');

// JavaScript for detecting mobile devices and adding a class to the body

// Function to check if the device is a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Add a class to the body if the device is a mobile device
if (isMobileDevice()) {
    document.body.classList.add('mobile-device');
}

// Function to toggle visibility of sections
function toggleSections(showResume) {
    if (showResume) {
        resumeSection.style.display = 'block';
        aboutSection.style.display = 'none';
        updateHeader("Resume"); // Change the header to "Resume"
    } else {
        resumeSection.style.display = 'none';
        aboutSection.style.display = 'block';
        updateHeader("About Me"); // Change the header to "About Me"
    }
}

// Initial state: show resume, hide about
toggleSections(false);

// Add event listeners to the buttons
resumeButton.addEventListener('click', function() {
    toggleSections(true);
});

aboutButton.addEventListener('click', function() {
    toggleSections(false);
});

resumeButton2.addEventListener('click', function() {
    toggleSections(true);
});

aboutButton2.addEventListener('click', function() {
    toggleSections(false);
});


// Function to update the header text based on the current section's title
function updateHeader(title) {
    const header = document.getElementById('pageTitle');
    header.textContent = title;
}

//HEADER
// JavaScript for changing the header dynamically
// Initial update: Set the header to "My Portfolio"
updateHeader("About Me");


// COLORS
let isPalette1 = true;

function changeColorPalette() {
  const body = document.body;
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const h2Elements = document.querySelectorAll('.section h2'); // Select all h2 elements inside sections
  const buttons = document.querySelectorAll('button');

  if (isPalette1) {
    // Apply color palette 2
    body.style.backgroundColor = '#1F1F1F';
    body.style.color = '#eae0d5';
    header.style.backgroundColor = '#22333b'; // Header background color from palette 2
    footer.style.backgroundColor = '#22333b'; // Footer background color from palette 2
    h2Elements.forEach(h2 => {
        h2.style.color = '#283618'; // Text color from palette 1
    });
    buttons.forEach(button => {
        button.style.backgroundColor = '#5e503f'; // Button background color from palette 2
        button.style.color = '#eae0d5'; // Button text color from palette 2
    });
} else {
    // Apply color palette 1
    body.style.backgroundColor = '#fefae0';
    body.style.color = '#283618';
    header.style.backgroundColor = '#22333b'; // Header background color from palette 2
    footer.style.backgroundColor = '#22333b'; // Footer background color from palette 2
    h2Elements.forEach(h2 => {
        h2.style.color = '#283618'; // Text color from palette 1
    });
    buttons.forEach(button => {
        button.style.backgroundColor = '#5e503f'; // Button background color from palette 2
        button.style.color = '#eae0d5'; // Button text color from palette 2
    });
}


  isPalette1 = !isPalette1; // Toggle the palette
}
