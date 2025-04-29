const linkURL ="https://www.frontendmentor.io";

function copyToClipboard() {
    navigator.clipboard.writeText(linkURL)
      .then(() => {
        // Zeige Feedback-Text
        document.getElementById("copy-feedback").style.display = "block";
      })
      setTimeout(() => {
        document.getElementById("copy-feedback").style.display = "none";
      }, 3000)
  }


// Event Listener
document.getElementById("copy-button").addEventListener("click", copyToClipboard);
