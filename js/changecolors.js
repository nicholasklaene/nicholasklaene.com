const lightButton = document.getElementById('light');
const darkButton = document.getElementById('dark');
const modes = document.querySelectorAll('.mode');
const buttons = document.querySelectorAll('.btn');
let defaultMode = "dark";

lightButton.addEventListener('click', e => {
    changeColors("light");
    savePreferences();
});

darkButton.addEventListener('click', e=> {
    changeColors("dark");
    savePreferences();
});

let changeColors = function (currentMode = defaultMode) {
    let wrapper = document.getElementById('wrapper');
    switch (currentMode) {
        case "light":
            wrapper.style.backgroundColor = "#eee"
            lightButton.style.border = "2px solid var(--primary-color)";
            darkButton.style.border = "2px solid #111";
            darkButton.style.backgroundColor = "#111";
            for (let button of buttons) {
                button.style.backgroundColor = "var(--primary-color)";
                button.style.color = "#eee";
            }
            defaultMode = "light";
            break;
        case "dark":
            wrapper.style.backgroundColor = "#111"
            lightButton.style.border = "2px solid #eee";
            darkButton.style.border = "2px solid var(--primary-color)";
            darkButton.style.backgroundColor = "#111";
            for (let button of buttons) {
                button.style.backgroundColor = "#111";
                button.style.border = "1px solid var(--primary-color)"
                button.style.color = "var(--primary-color)";
            }
            defaultMode = "dark";
            break;
    }
}

let savePreferences = function () {
    localStorage.setItem("defaultMode", defaultMode);
    document.getElementById('color-preferences').style.display = "block";
    setTimeout(function () {
        document.getElementById('color-preferences').style.display = "none";
    }, 5000);
}

window.onload = e => {
    changeColors(localStorage.getItem("defaultMode"));
};