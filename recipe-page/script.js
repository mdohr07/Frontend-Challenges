let darkMode = false;

function toggleMode() {
    const element = document.body;
    const button = document.getElementById("switch");

    if (!darkMode) {
        element.classList.add("dark-mode");
        button.innerHTML = "light mode";
        darkMode = true;
    } else {
        element.classList.remove("dark-mode");
        button.innerHTML = "dark mode";
        darkMode = false;
    }
}

document.getElementById("switch").addEventListener("click", toggleMode);