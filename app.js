// JavaScript for toggling sections

// Get references to the buttons and sections
const resumeButton = document.getElementById('resumeButton');
const aboutButton = document.getElementById('aboutButton');
const resumeButton2 = document.getElementById('resumeButton2');
const aboutButton2 = document.getElementById('aboutButton2');
const resumeSection = document.getElementById('resume');
const aboutSection = document.getElementById('about');

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
    body.style.backgroundColor = '#0a0908';
    body.style.color = '#eae0d5';
    header.style.backgroundColor = '#22333b'; // Color from palette 2 for header
    footer.style.backgroundColor = '#22333b'; // Color from palette 2 for footer
    h2Elements.forEach(h2 => {
      h2.style.color = '#283618'; // Color from palette 1 for text
    });
    buttons.forEach(button => {
      button.style.backgroundColor = '#5e503f'; // Color from palette 2 for buttons
      button.style.color = '#eae0d5'; // Color from palette 2 for button text
    });
  } else {
    // Apply color palette 1
    body.style.backgroundColor = '#fefae0';
    body.style.color = '#283618';
    header.style.backgroundColor = '#606c38'; // Color from palette 1 for header
    footer.style.backgroundColor = '#606c38'; // Color from palette 1 for footer
    h2Elements.forEach(h2 => {
      h2.style.color = '#283618'; // Color from palette 1 for text
    });
    buttons.forEach(button => {
      button.style.backgroundColor = '#bc6c25'; // Color from palette 1 for buttons
      button.style.color = '#fefae0'; // Color from palette 1 for button text
    });
  }

  isPalette1 = !isPalette1; // Toggle the palette
}
