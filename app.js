const themeBtn = document.querySelector('.theme');
let darkMode = false;

themeBtn.addEventListener('click', e => {
    const main = document.querySelector('main');
    const links = document.querySelectorAll('.link');
    const currentMode = document.getElementById('current-mode');
    if(!darkMode) {
        document.body.style.backgroundColor = "var(--text-color)";
        main.style.color = "var(--background-color)";
        themeBtn.style.color = "var(--background-color)";
        themeBtn.style.backgroundColor = "var(--button-dark)";

        links.forEach(link => {
            link.classList.add("link-dark");
            link.classList.remove("link-light");
        });

        currentMode.innerText = " On";

    } else {
        document.body.style.backgroundColor = "var(--background-color)";
        main.style.color = "var(--text-color)";
        themeBtn.style.color = "var(--text-color)";
        themeBtn.style.backgroundColor = "var(--button-light)";
        
        links.forEach(link => {
            link.classList.add("link-light");
            link.classList.remove("link-dark");
        });

        currentMode.innerText = " Off";
    }
    
    darkMode = !darkMode;
});