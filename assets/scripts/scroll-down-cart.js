// Smooth scroll on clicking the down arrow
document.getElementById('down-arrow').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default anchor behavior
    // Smooth scroll to the first-panel section after the hero
    window.scrollTo({
        top: document.getElementById('cart-container').offsetTop,
        behavior: 'smooth'
    });
});

// Smooth scroll on clicking the show now button
document.getElementById('shop-now').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default anchor behavior
    // Smooth scroll to the first-panel section after the hero
    window.scrollTo({
        top: document.getElementById('cart-container').offsetTop,
        behavior: 'smooth'
    });
});
