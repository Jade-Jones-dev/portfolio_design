const themeChangeIcon = document.getElementById("themeChangeIcon");
const isDarkTheme = localStorage.getItem('dark-theme') === 'true';

if (isDarkTheme) {
    document.body.classList.add('dark-theme');
    themeChangeIcon.classList.add('fa-sun');
} else {
    themeChangeIcon.classList.add('fa-moon');
}

themeChangeIcon.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    const isDarkModeActive = document.body.classList.contains("dark-theme");

    if (isDarkModeActive) {
        localStorage.setItem('dark-theme', 'true');
        themeChangeIcon.classList.remove("fa-moon");
        themeChangeIcon.classList.add("fa-sun");
    } else {
        localStorage.setItem('dark-theme', 'false');
        themeChangeIcon.classList.remove("fa-sun");
        themeChangeIcon.classList.add("fa-moon");
    }
});


