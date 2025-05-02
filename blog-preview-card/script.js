const articles = [
    {
        tags: "Learning",
        date: "21 Dec 2023",
        title: "HTML & CSS foundations",
        text: "These languages are the backbone of every website..."
    },
    {
        tags: "JavaScript",
        date: "16 Jun 2024",
        title: "JavaScript Basics",
        text: "Learn how to make your website interactive..."
    },
    {
        tags: "Accessibility",
        date: "2 May 2025",
        title: "Accessibility in Web Design",
        text: "Creating inclusive experiences starts here."
    }
];

// Load articles
let currentIndex = 0;

function loadArticle(index) {
    const article = articles[index];

    document.getElementById('article-tags').textContent = article.tags;
    document.getElementById('article-date').textContent = article.date;
    document.getElementById('article-title').textContent = article.title;
    document.getElementById('article-text').textContent = article.text;
}

// For the button
document.getElementById('prev-article').addEventListener('click', () => {
    currentIndex = (currentIndex -1 + articles.length) % articles.length;
    loadArticle(currentIndex);
});

document.getElementById('next-article').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % articles.length;
    loadArticle(currentIndex);
});