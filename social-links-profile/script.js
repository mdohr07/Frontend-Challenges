const quotes = [
    "Code like it's 1999.",
    "Trust the process. Refactor later.",
    "Keep calm and push to main.",
    "Ship it like it's the Normandy.",
    "May the source be with you.",
    "Push it real good.",
    "Code is poetry – except when it’s spaghetti.",
    "In a world of bugs, be a feature."
];

const quoteEl = document.getElementById("quote");

if (quoteEl) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = `"${randomQuote}"`;
}
