document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        body.classList.toggle('dark-mode');
        try {
            localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
        } catch (e) {
            console.error('Error accessing localStorage:', e);
        }
    };

    // Add event listener if the toggle button exists
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    } else {
        console.warn('Dark mode toggle button not found.');
    }

    // Apply dark mode based on saved preference
    try {
        if (localStorage.getItem('darkMode') === 'true') {
            body.classList.add('dark-mode');
        }
    } catch (e) {
        console.error('Error accessing localStorage:', e);
    }
});
