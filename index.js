const themeChangeIcon = document.getElementById("themeChangeIcon");

themeChangeIcon.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme")

    if(document.body.classList.contains("dark-theme")){
        themeChangeIcon.classList.remove("fa-moon")
        themeChangeIcon.classList.add("fa-sun")
    } else{
        themeChangeIcon.classList.remove("fa-sun")
        themeChangeIcon.classList.add("fa-moon")
    }
})