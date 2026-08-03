function setupThemeToggle() {

    const toggleBtn = document.getElementById("theme-toggle");

    function applyTheme(theme) {
        document.body.setAttribute("data-theme", theme);

        if (theme === "dark") {
            toggleBtn.textContent = "Switch to Light Mode";
        } else {
            toggleBtn.textContent = "Switch to Dark Mode";
        }

        localStorage.setItem("theme", theme);
    }

    function loadSavedTheme() {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            applyTheme("light");
        }
    }

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

    loadSavedTheme();

}