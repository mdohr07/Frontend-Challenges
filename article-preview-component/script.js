const menu = document.getElementById("shareMenuContainer")

function toggleShareMenu () {
    menu.classList.toggle("hidden");
    console.log("toggled");
}

document.getElementById("share-button").addEventListener("click", toggleShareMenu);


