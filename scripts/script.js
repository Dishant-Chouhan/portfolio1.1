document.addEventListener("DOMContentLoaded", function () {
    // Loader functionality
    const loader = document.querySelector('.loader');

    // Hide loader when page is fully loaded
    window.addEventListener('load', function () {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
    });

    const menuIcon = document.querySelector('.menuIcon i');
    const menuIconContainer = document.querySelector('.menuIcon');
    const menuTray = document.querySelector('.menuTray');

    menuIcon.addEventListener('click', () => {
        menuTray.classList.toggle('active');

        if (menuTray.classList.contains('active')) {
            menuIcon.classList.replace('ri-menu-3-line', 'ri-close-line');
            menuIconContainer.style.backgroundColor = "#000000";
        } else {
            menuIcon.classList.replace('ri-close-line', 'ri-menu-3-line');
            menuIconContainer.style.backgroundColor = "#171717";
        }
    });

    const menuLinks = document.querySelectorAll('.menuTray a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuTray.classList.remove('active');
            menuIcon.classList.replace('ri-close-line', 'ri-menu-3-line');
            menuIconContainer.style.backgroundColor = "#171717";
        });
})
})