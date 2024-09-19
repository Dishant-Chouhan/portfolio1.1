document.addEventListener("DOMContentLoaded", function () {
    // Loader functionality
    const loader = document.querySelector('.loader');

    // Hide loader when page is fully loaded
    window.addEventListener('load', function () {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
    });
})