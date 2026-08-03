document.addEventListener("DOMContentLoaded", function () { 
  
    // Get the theme toggle button
    const toggleBtn = document.getElementById("theme-toggle"); 
    
    // Function to apply the selected theme
    function applyTheme(theme) { 
        document.body.setAttribute("data-theme", theme); 

        if (theme === "dark") {
            toggleBtn.textContent = "Switch to Light Mode";
        } else {
            toggleBtn.textContent = "Switch to Dark Mode";
        } 

        // TODO: Save the selected theme to localStorage 
        localStorage.setItem("theme", theme); 
    } 
    
    // Load the saved theme from localStorage on page load
    function loadSavedTheme() {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            applyTheme("light");
        }
    }

    // On click, toggle between light and dark themes
    toggleBtn.addEventListener("click", function () {
        const currentTheme = document.body.getAttribute("data-theme");

        let newTheme;
        if (currentTheme === "dark") {
            newTheme = "light";
        } else {
            newTheme = "dark";
        }

        applyTheme(newTheme);
    });
    
    loadSavedTheme(); // Run on every page load 
    
}); 