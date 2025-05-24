const menuContainer = document.getElementById("shareMenuContainer");
const shareButton = document.getElementById("share-button");

function toggleShareMenu (event) {
    event.stopPropagation(); // Method prevents the forwarding of the same event to document.addEventListener("click", …)
    menuContainer.classList.toggle("hidden");
}

document.addEventListener("click", function(event) {
    if (!menuContainer.contains(event.target) && !shareButton.contains(event.target)) { // event.target is the element that has actually ben clicked
        menuContainer.classList.add('hidden');
    }
});

shareButton.addEventListener("click", toggleShareMenu);


