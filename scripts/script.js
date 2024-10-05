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

function toggleDetails(detailsId) {
    var details = document.getElementById(detailsId);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        start: "top 0%",
        end: "bottom -100%",
        scrub: 2,
        pin: true
    }
});

tl2.to(".crt-top",{
    top: "-100%",
},"a")
.to(".crt-btm",{
    bottom: "-100%",
},"a")
.to(".crt-top h1",{
    top:"150%",
},"a")
.to(".crt-btm h1",{
    top:"-90%",
},"a")
.from(".acad-content",{
    y:"100%",
}, "a")





var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page5",
        scroller: "body",
        start: "0% 0%",
        end: "bottom -100%",
        scrub: 2,
        pin: true,
    }
});
 tl3.from(".contact-section",{
    y:"100%",
 })
})

var tl4;

if(window.innerWidth < 400) {
    
    tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-section-mobile",
        scroller: "body",
        start: "150% center", // Adjust the start point for small screens
        end: "250% center",   // Adjust the end point for small screens
        scrub: 2,
        // markers: true
      }
    });
}
else{

    tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".skills-section",
            scroller: "body",
            start: "150% center",
            end: "250% center",
            scrub: 2,
        }
    });
}

    tl4.from("#li", {
        stagger: 0.5,
        opacity: 0,
        y: 100,
    })