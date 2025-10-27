document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // 1. Check for saved preference or system preference
    const savedMode = localStorage.getItem('darkMode');
    
    // Check for system preference only if no saved preference exists
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial mode based on saved preference, then system preference
    if (savedMode === 'true' || (savedMode === null && prefersDark)) {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'MODE: DARK 🌙';
    }

    // 2. Add event listener to the button
    toggleButton.addEventListener('click', () => {
        // Toggle the class on the body element
        body.classList.toggle('dark-mode');

        // Update button text and save preference
        const isDarkMode = body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            toggleButton.textContent = 'MODE: DARK 🌙';
            localStorage.setItem('darkMode', 'true');
        } else {
            toggleButton.textContent = 'MODE: LIGHT 💡';
            localStorage.setItem('darkMode', 'false');
        }
    });
});