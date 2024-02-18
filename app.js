let isPalette1 = false;

function changeColorPalette() {
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const h2Elements = document.querySelectorAll('.section h2');
    const buttons = document.querySelectorAll('button');
    const links = document.querySelectorAll('a');

    if (isPalette1) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }

    isPalette1 = !isPalette1;
}

// Function to apply stored theme preference
function applyStoredTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

// Apply stored theme preference when the page loads
window.addEventListener('DOMContentLoaded', applyStoredTheme);

// Function to toggle between themes
function changeColorPalette() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}
