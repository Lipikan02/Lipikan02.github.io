document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            try {
                localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
            } catch (e) {
                console.error('LocalStorage is not available:', e);
            }
        });
    }

    // Check for saved dark mode preference
    try {
        if (localStorage.getItem('darkMode') === 'true') {
            body.classList.add('dark-mode');
        }
    } catch (e) {
        console.error('Error accessing localStorage:', e);
    }
});
