function showContent(contentId) {
    // Hide all content sections
    var sections = document.getElementsByClassName('content');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Show the selected content
    document.getElementById(contentId).style.display = 'flex';
}
