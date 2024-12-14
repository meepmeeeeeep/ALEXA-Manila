// JavaScript to handle showing the sticky navbar after scrolling past the hero section
window.addEventListener('scroll', function() {
    var stickyNavbar = document.getElementById('sticky-header');
    var heroHeight = document.getElementById('hero').offsetHeight;

    if (window.pageYOffset > heroHeight) {
        stickyNavbar.style.display = 'flex'; // Show the sticky navbar when the user scrolls past the hero section
    } else {
        stickyNavbar.style.display = 'none'; // Hide the sticky navbar when the user is still in the hero section
    }
});