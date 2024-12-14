// Smooth scroll on clicking the down arrow
document.getElementById('down-arrow').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default anchor behavior
    // Smooth scroll to the first-panel section after the hero
    window.scrollTo({
        top: document.getElementById('first-panel').offsetTop,
        behavior: 'smooth'
    });
});
