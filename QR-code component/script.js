const linkURL ="https://www.frontendmentor.io";

function copyToClipboard() {
    navigator.clipboard.writeText(linkURL)
}

// Event Listener
document.getElementById("copy-button").addEventListener("click", copyToClipboard);