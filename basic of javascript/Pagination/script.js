function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
}

// Show the home page by default
showPage('home');
