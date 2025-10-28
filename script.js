document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const vibeToggle = document.getElementById('vibeToggle');
    const body = document.body;

    // --- DARK MODE LOGIC ---

    const savedDarkMode = localStorage.getItem('darkMode');
    // Check for system preference only if no saved preference exists
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial dark mode state
    const isInitialDark = savedDarkMode === 'true' || (savedDarkMode === null && prefersDark);
    if (isInitialDark) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'MODE: DARK 🌙';
    }

    // Dark Mode Event Listener
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            darkModeToggle.textContent = 'MODE: DARK 🌙';
            localStorage.setItem('darkMode', 'true');
        } else {
            darkModeToggle.textContent = 'MODE: LIGHT 💡';
            localStorage.setItem('darkMode', 'false');
        }
    });


    // --- VIBE TOGGLE LOGIC ---

    const savedVibe = localStorage.getItem('minimalVibe');
    
    // Set initial vibe state
    const isInitialMinimal = savedVibe === 'true';
    if (isInitialMinimal) {
        body.classList.add('minimal-vibe');
        vibeToggle.textContent = 'VIBE: MINIMAL ✨';
    }

    // Vibe Toggle Event Listener
    vibeToggle.addEventListener('click', () => {
        body.classList.toggle('minimal-vibe');

        const isMinimalVibe = body.classList.contains('minimal-vibe');
        
        if (isMinimalVibe) {
            vibeToggle.textContent = 'VIBE: MINIMAL ✨';
            localStorage.setItem('minimalVibe', 'true');
        } else {
            vibeToggle.textContent = 'VIBE: BRUTAL 💥';
            localStorage.setItem('minimalVibe', 'false');
        }
    });
});
