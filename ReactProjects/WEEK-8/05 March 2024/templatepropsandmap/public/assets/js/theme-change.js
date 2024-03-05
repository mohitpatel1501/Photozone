const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    try {
        if (e.target.checked) {
            // Set the document theme to dark
            document.documentElement.setAttribute('data-theme', 'dark');
            // Set the local storage theme to dark
            localStorage.setItem('theme', 'dark');
        } else {
            // Set the document theme to light
            document.documentElement.setAttribute('data-theme', 'light');
            // Set the local storage theme to light
            localStorage.setItem('theme', 'light');
        }
    } catch (error) {
        console.error('Error setting theme:', error);
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);