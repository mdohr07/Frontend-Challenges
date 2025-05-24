const menu = document.getElementById("shareMenuContainer")

function toggleShareMenu () {
    menu.classList.toggle("hidden");
    console.log("toggled");
}
/*
document.addEventListener('click', (toggleShareMenu) => {
    if (!shareMenuContainer.contains(menu.target)) {
        shareMenuContainer.classList.add('hidden');
    }
});
*/

document.getElementById("share-button").addEventListener("click", toggleShareMenu);


